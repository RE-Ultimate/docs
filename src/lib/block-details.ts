// Block detail data for the site: recipes, machine facts and images, resolved for rendering.
//
// Sources (both optional, both validated at build time):
//   src/data/block-details/<mod>/<slug>.json   recipes and machine facts for one block page
//   src/data/wiki-media.json                   images by block ID and by item name, with credits
// A malformed file, a path that does not match its `block` field, a block without a page, a link to a
// page that does not exist, or a missing local image fails the build with a list of every problem.
// Missing data is fine: a page without details renders as plain Markdown.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { getCollection } from 'astro:content';
import sharp from 'sharp';
import { getBlocks, type Block } from './blocks';
import {
	checkReferences,
	indexItemMedia,
	readBlockDetails,
	readMachineGuis,
	readWikiMedia,
} from './block-details-source.ts';
import { normalizeName, type BlockDetails, type Ingredient, type Media, type Product, type Recipe } from './block-details-schema.ts';
import { groupIngredients, optionsKey, type Group } from './recipe-math.ts';
import { withBase } from './paths';
import type { MachineGui } from './machine-gui-schema.ts';

/** A resolved image. `meta` carries the credit; it is missing when an icon path has no media entry. */
export interface ViewImage {
	/** With the deploy base applied. */
	src: string;
	alt: string;
	width: number | undefined;
	height: number | undefined;
	meta: Media | undefined;
}

export interface ViewLink {
	url: string;
	external: boolean;
}

/** One stack as the page shows it. `consumed` is true unless the data says it is a reusable tool. */
export interface ViewOption {
	name: string;
	count: number;
	unit: string | undefined;
	consumed: boolean;
	chance: number | undefined;
	link: ViewLink | undefined;
	icon: ViewImage | undefined;
}

/** One position in a recipe: a grid cell, or one entry of a list. `options[0]` is the primary ingredient. */
export interface ViewCell {
	/** Index into `ViewRecipe.groups`. */
	group: number;
	options: ViewOption[];
}

export interface ViewRecipe {
	id: string;
	type: Recipe['type'];
	title: string;
	station: string | undefined;
	verification: Recipe['verification'];
	sources: Recipe['sources'];
	notes: string[];
	power: string | undefined;
	time: string | undefined;
	/** Shaped: always 9 entries, `null` for empty. Others: one entry per ingredient. */
	cells: (ViewCell | null)[];
	/** Distinct ingredient choices for the material list. */
	groups: Group<ViewOption>[];
	outputs: ViewOption[];
	/** The machine's own window layout, for a processing recipe that runs in this block. */
	gui: MachineGui | undefined;
}

export type SectionId = 'crafting' | 'construction' | 'processing' | 'recipe' | 'machine' | 'image-credits';

export interface RecipeSectionView {
	id: Extract<SectionId, 'crafting' | 'construction' | 'processing'>;
	title: string;
	recipes: ViewRecipe[];
	/** What the "batches" control counts. */
	unit: { singular: string; plural: string };
}

export interface CreditRow {
	src: string;
	/** What the image shows, for example "Flint, Cobblestone". */
	subjects: string[];
	meta: Media | undefined;
}

export interface BlockDetailsView {
	/** Illustration of the block itself, from wiki-media.json. */
	image: ViewImage | undefined;
	sections: RecipeSectionView[];
	/** Shown as its own "Recipe" section when there is no crafting or construction recipe. */
	recipeNote: string | undefined;
	machine: BlockDetails['machine'];
	/** The block's in-game window layout, from src/data/machine-guis. */
	gui: MachineGui | undefined;
	credits: CreditRow[];
}

export const SECTION_TITLES: Record<SectionId, string> = {
	crafting: 'Crafting',
	construction: 'Construction',
	processing: 'Processing examples',
	recipe: 'Recipe',
	machine: 'Machine summary',
	'image-credits': 'Image credits',
};

/** Sections in page order, split where the Markdown article sits. `lead` comes right after the intro. */
export interface SectionPlan {
	lead: { id: SectionId; title: string }[];
	machine: { id: SectionId; title: string } | undefined;
	credits: { id: SectionId; title: string } | undefined;
}

export function planSections(view: BlockDetailsView | undefined): SectionPlan {
	const section = (id: SectionId) => ({ id, title: SECTION_TITLES[id] });
	if (!view) return { lead: [], machine: undefined, credits: undefined };
	const lead = view.sections.map((entry) => section(entry.id));
	if (view.recipeNote && !view.sections.some((entry) => entry.id !== 'processing')) lead.unshift(section('recipe'));
	return {
		lead,
		machine: view.gui || (view.machine && hasMachineContent(view.machine)) ? section('machine') : undefined,
		credits: view.credits.length > 0 ? section('image-credits') : undefined,
	};
}

const hasMachineContent = (machine: NonNullable<BlockDetails['machine']>): boolean =>
	Boolean(machine.power) || machine.inputs.length + machine.outputs.length + machine.automation.length + machine.tips.length > 0;

// ---------- loading ----------

interface Index {
	details: Map<string, BlockDetails>;
	guis: Map<string, MachineGui>;
	items: Map<string, Media>;
	blockMedia: Record<string, Media>;
	/** Normalized block title to page link, only for titles that belong to one page. */
	pages: Map<string, string>;
	/** Normalized block title to that page's picture, so a recipe item named like a block page shows its render. */
	pageMedia: Map<string, Media>;
}

const root = process.cwd();
const BASE = import.meta.env.BASE_URL;

const loadIndex = async (): Promise<Index> => {
	const [docs, blocks] = await Promise.all([getCollection('docs'), getBlocks()]);
	const loadedDetails = readBlockDetails(join(root, 'src/data/block-details'));
	const loadedMedia = readWikiMedia(join(root, 'src/data/wiki-media.json'));
	const loadedGuis = readMachineGuis(join(root, 'src/data/machine-guis'));
	const items = indexItemMedia(loadedMedia.value);

	const blockIds = new Set(docs.map((entry) => entry.id).filter((id) => /^blocks\/[^/]+\/[^/]+$/.test(id)).map((id) => id.slice('blocks/'.length)));
	const routes = new Set<string>(['']);
	for (const entry of docs) {
		const path = entry.id.replace(/(^|\/)index$/, '');
		routes.add(path === '' ? '' : `${path}/`);
	}

	const problems = [
		...loadedDetails.problems,
		...loadedMedia.problems,
		...loadedGuis.problems,
		...[...loadedGuis.value.keys()].filter((id) => !blockIds.has(id)).map((id) => `machine-guis/${id}.json: no block page at src/content/docs/blocks/${id}.md.`),
		...items.problems,
		...checkReferences({
			details: loadedDetails.value,
			media: loadedMedia.value,
			blockIds,
			routes,
			base: BASE,
			fileExists: (publicPath) => existsSync(join(root, 'public', publicPath)),
		}),
	];
	if (problems.length > 0) {
		throw new Error(`Block details have ${problems.length} problem(s):\n- ${problems.join('\n- ')}`);
	}

	const titles = new Map<string, string | null>();
	for (const block of blocks) {
		const key = normalizeName(block.title);
		titles.set(key, titles.has(key) ? null : block.href);
	}
	const pages = new Map<string, string>();
	for (const [key, href] of titles) if (href) pages.set(key, href);
	const pageMedia = new Map<string, Media>();
	for (const block of blocks) {
		const key = normalizeName(block.title);
		const media = loadedMedia.value.blocks[block.id.slice('blocks/'.length)];
		if (media && pages.has(key)) pageMedia.set(key, media);
	}

	return { details: loadedDetails.value, guis: loadedGuis.value, items: items.value, pageMedia, blockMedia: loadedMedia.value.blocks, pages };
};

let cached: Promise<Index> | undefined;
/** The dev server re-reads the files on each request, so edits show after a reload. Builds read them once. */
const getIndex = (): Promise<Index> => (import.meta.env.DEV ? loadIndex() : (cached ??= loadIndex()));

const dimensions = new Map<string, Promise<{ width: number | undefined; height: number | undefined }>>();
/** Pixel size of a local image, so the page can reserve space and pick crisp scaling. Remote images stay unknown. */
const sizeOf = (src: string) => {
	const none = { width: undefined, height: undefined };
	if (!src.startsWith('/media/')) return Promise.resolve(none);
	let size = dimensions.get(src);
	if (!size) {
		size = sharp(join(root, 'public', src))
			.metadata()
			.then(({ width, height }) => ({ width, height }))
			.catch(() => none);
		dimensions.set(src, size);
	}
	return size;
};

const resolveImage = async (src: string, alt: string, meta: Media | undefined): Promise<ViewImage> => ({
	src: src.startsWith('/') ? withBase(src) : src,
	alt,
	meta,
	...(await sizeOf(src)),
});

const isExternal = (url: string) => /^https?:\/\//.test(url);

// ---------- view building ----------

type Stackish = Ingredient | Product | NonNullable<Ingredient['alternatives']>[number];

const kindOf = (recipe: Recipe): RecipeSectionView['id'] =>
	recipe.type === 'machine' ? 'processing' : recipe.type === 'construction' ? 'construction' : 'crafting';

const UNITS: Record<RecipeSectionView['id'], RecipeSectionView['unit']> = {
	crafting: { singular: 'craft', plural: 'crafts' },
	construction: { singular: 'build', plural: 'builds' },
	processing: { singular: 'run', plural: 'runs' },
};

/**
 * Resolves one block's details for rendering. Always returns a view for a known block: an empty view
 * (no sections, no image) means "render the Markdown only".
 */
export async function getBlockDetails(block: Block): Promise<BlockDetailsView> {
	const index = await getIndex();
	const details = index.details.get(block.id.slice('blocks/'.length));
	const blockMedia = index.blockMedia[block.id.slice('blocks/'.length)];
	const ownKey = normalizeName(block.title);

	const image = blockMedia ? await resolveImage(blockMedia.src, blockMedia.alt, blockMedia) : undefined;
	const gui = index.guis.get(block.id.slice('blocks/'.length));
	// A processing recipe runs in this block's window when it names no other station.
	const runsHere = (recipe: Recipe) => recipe.type === 'machine' && (!recipe.station || normalizeName(recipe.station) === ownKey);

	const toOption = async (stack: Stackish): Promise<ViewOption> => {
		const key = normalizeName(stack.name);
		const known = stack.icon ? undefined : (index.items.get(key) ?? (key === ownKey ? undefined : index.pageMedia.get(key)));
		const iconSrc = stack.icon ?? known?.src;
		const meta = known ?? (stack.icon ? findBySrc(index, stack.icon) : undefined);
		const icon = iconSrc
			? await resolveImage(iconSrc, meta?.alt ?? stack.name, meta)
			: key === ownKey
				? image
				: undefined;
		const url = stack.href ?? (key === ownKey ? undefined : index.pages.get(key));
		const hrefUrl = stack.href ? (isExternal(stack.href) ? stack.href : withBase(stack.href.slice(BASE.length))) : url;
		return {
			name: stack.name,
			count: stack.count,
			unit: stack.unit,
			consumed: 'consumed' in stack ? stack.consumed !== false : true,
			chance: 'chance' in stack ? stack.chance : undefined,
			link: hrefUrl && hrefUrl !== block.href ? { url: hrefUrl, external: isExternal(hrefUrl) } : undefined,
			icon,
		};
	};

	const toRecipe = async (recipe: Recipe): Promise<ViewRecipe> => {
		const cells = await Promise.all(
			recipe.ingredients.map(async (slot) => {
				if (slot === null) return null;
				return Promise.all([slot, ...(slot.alternatives ?? [])].map(toOption));
			}),
		);
		const groups = groupIngredients(cells.filter((options): options is ViewOption[] => options !== null));
		const groupIndex = new Map(groups.map((group, position) => [group.key, position]));
		return {
			id: recipe.id,
			type: recipe.type,
			title: recipe.title,
			station: recipe.station,
			verification: recipe.verification,
			sources: recipe.sources,
			notes: recipe.notes,
			power: recipe.power,
			time: recipe.time,
			cells: cells.map((options) => (options ? { group: groupIndex.get(optionsKey(options)) ?? 0, options } : null)),
			groups,
			outputs: await Promise.all(recipe.outputs.map(toOption)),
			gui: gui && runsHere(recipe) ? gui : undefined,
		};
	};

	const sections: RecipeSectionView[] = [];
	for (const id of ['crafting', 'construction', 'processing'] as const) {
		const recipes = (details?.recipes ?? []).filter((recipe) => kindOf(recipe) === id);
		if (recipes.length === 0) continue;
		sections.push({ id, title: SECTION_TITLES[id], recipes: await Promise.all(recipes.map(toRecipe)), unit: UNITS[id] });
	}

	return {
		image,
		sections,
		recipeNote: details?.recipeNote,
		machine: details?.machine,
		gui,
		credits: collectCredits(block.title, image, sections),
	};
}

/** Credit lookup for an explicit icon path that is also listed in wiki-media.json. */
const findBySrc = (index: Index, src: string): Media | undefined => {
	for (const entry of index.items.values()) if (entry.src === src) return entry;
	return undefined;
};

/** One row per distinct image on the page. */
function collectCredits(title: string, image: ViewImage | undefined, sections: RecipeSectionView[]): CreditRow[] {
	const rows = new Map<string, CreditRow>();
	const add = (icon: ViewImage | undefined, subject: string) => {
		if (!icon) return;
		const row = rows.get(icon.src);
		if (!row) rows.set(icon.src, { src: icon.src, subjects: [subject], meta: icon.meta });
		else if (!row.subjects.includes(subject)) row.subjects.push(subject);
	};
	add(image, `${title} (page image)`);
	for (const section of sections) {
		for (const recipe of section.recipes) {
			for (const cell of recipe.cells) for (const option of cell?.options ?? []) add(option.icon, option.name);
			for (const output of recipe.outputs) add(output.icon, output.name);
		}
	}
	return [...rows.values()];
}
