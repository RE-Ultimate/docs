// Reads and checks the block detail files and the media table from disk. Pure Node, no Astro imports,
// so unit tests can run it on temporary folders. src/lib/block-details.ts adds the checks that need
// the content collection (which pages and routes exist).
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import type { z } from 'astro/zod';
import { machineGuiSchema, type MachineGui } from './machine-gui-schema.ts';
import {
	blockDetailsSchema,
	describeIssues,
	normalizeName,
	wikiMediaSchema,
	type BlockDetails,
	type Media,
	type WikiMedia,
} from './block-details-schema.ts';

/** Collects problems instead of throwing on the first one, so one build run lists every mistake. */
export interface Loaded<T> {
	value: T;
	problems: string[];
}

const readJson = (file: string): { ok: true; data: unknown } | { ok: false; problem: string } => {
	try {
		return { ok: true, data: JSON.parse(readFileSync(file, 'utf8')) as unknown };
	} catch (error) {
		return { ok: false, problem: `${file}: ${error instanceof Error ? error.message : String(error)}` };
	}
};

/**
 * Reads every `<dir>/<mod>/<slug>.json` with one schema. The `block` field must equal `<mod>/<slug>`.
 * Returns a map from block ID to the parsed file. A missing folder is an empty map.
 */
function readPerBlockFiles<T extends { block: string }>(dir: string, schema: z.ZodType<T>): Loaded<Map<string, T>> {
	const files = new Map<string, T>();
	const problems: string[] = [];
	if (!existsSync(dir)) return { value: files, problems };

	for (const mod of readdirSync(dir, { withFileTypes: true })) {
		if (!mod.isDirectory()) {
			problems.push(`${join(dir, mod.name)}: detail files must be in <mod>/<slug>.json, not at the top level.`);
			continue;
		}
		for (const entry of readdirSync(join(dir, mod.name), { withFileTypes: true })) {
			const file = join(dir, mod.name, entry.name);
			if (!entry.isFile() || !entry.name.endsWith('.json')) {
				problems.push(`${file}: only <slug>.json files belong in <mod>/.`);
				continue;
			}
			const raw = readJson(file);
			if (!raw.ok) {
				problems.push(raw.problem);
				continue;
			}
			const parsed = schema.safeParse(raw.data);
			if (!parsed.success) {
				problems.push(...describeIssues(parsed.error).map((line) => `${file}: ${line}`));
				continue;
			}
			const expected = `${mod.name}/${entry.name.replace(/\.json$/, '')}`;
			if (parsed.data.block !== expected) {
				problems.push(`${file}: "block" is "${parsed.data.block}" but the file path says "${expected}".`);
				continue;
			}
			files.set(parsed.data.block, parsed.data);
		}
	}
	return { value: files, problems };
}

/** Block detail files: src/data/block-details/<mod>/<slug>.json. */
export const readBlockDetails = (dir: string): Loaded<Map<string, BlockDetails>> => readPerBlockFiles(dir, blockDetailsSchema);

/** Machine GUI layout files: src/data/machine-guis/<mod>/<slug>.json. */
export const readMachineGuis = (dir: string): Loaded<Map<string, MachineGui>> => readPerBlockFiles(dir, machineGuiSchema);

/** Reads wiki-media.json. A missing file is an empty table, so the site works before images exist. */
export function readWikiMedia(file: string): Loaded<WikiMedia> {
	const empty: WikiMedia = { blocks: {}, items: {} };
	if (!existsSync(file)) return { value: empty, problems: [] };
	const raw = readJson(file);
	if (!raw.ok) return { value: empty, problems: [raw.problem] };
	const parsed = wikiMediaSchema.safeParse(raw.data);
	if (!parsed.success) {
		return { value: empty, problems: describeIssues(parsed.error).map((line) => `${file}: ${line}`) };
	}
	return { value: parsed.data, problems: [] };
}

/** Item media keyed by normalized name. Two names that normalize alike must point at the same image. */
export function indexItemMedia(media: WikiMedia): Loaded<Map<string, Media>> {
	const index = new Map<string, Media>();
	const problems: string[] = [];
	const owners = new Map<string, string>();
	for (const [name, entry] of Object.entries(media.items)) {
		const key = normalizeName(name);
		if (key === '') {
			problems.push(`wiki-media.json items: "${name}" has no letters or digits.`);
			continue;
		}
		const existing = index.get(key);
		if (existing && existing.src !== entry.src) {
			problems.push(
				`wiki-media.json items: "${name}" and "${owners.get(key)}" are the same name but use different images.`,
			);
			continue;
		}
		index.set(key, entry);
		owners.set(key, name);
	}
	return { value: index, problems };
}

/** Everything in a details file that carries an icon or link: ingredients, alternatives, outputs. */
export function* stacksOf(details: BlockDetails) {
	for (const recipe of details.recipes) {
		for (const slot of recipe.ingredients) {
			if (slot === null) continue;
			yield { recipe: recipe.id, stack: slot };
			for (const alternative of slot.alternatives ?? []) yield { recipe: recipe.id, stack: alternative };
		}
		for (const output of recipe.outputs) yield { recipe: recipe.id, stack: output };
	}
}

export interface ReferenceContext {
	details: ReadonlyMap<string, BlockDetails>;
	media: WikiMedia;
	/** IDs of existing block pages, `<mod>/<slug>`. */
	blockIds: ReadonlySet<string>;
	/** Existing docs routes below the base, with a trailing slash: `blocks/ic2/macerator/`, `` for home. */
	routes: ReadonlySet<string>;
	/** The deploy base, `/docs/`. */
	base: string;
	/** Whether a `/media/...` path exists under public/. */
	fileExists: (publicPath: string) => boolean;
}

/** Cross-checks: pages exist, internal links resolve, local image files exist. */
export function checkReferences(context: ReferenceContext): string[] {
	const problems: string[] = [];
	const { base, routes, blockIds, fileExists } = context;

	const checkHref = (where: string, href: string): void => {
		if (!href.startsWith('/')) return;
		if (!href.startsWith(base)) {
			problems.push(`${where}: link "${href}" must start with ${base}.`);
			return;
		}
		const route = href.slice(base.length).replace(/[?#].*$/, '');
		const normalized = route === '' || route.endsWith('/') ? route : `${route}/`;
		if (!routes.has(normalized)) problems.push(`${where}: link "${href}" does not match any page.`);
	};
	const checkIcon = (where: string, src: string): void => {
		if (src.startsWith('/media/') && !fileExists(src)) problems.push(`${where}: image file public${src} does not exist.`);
	};

	for (const [id, details] of context.details) {
		if (!blockIds.has(id)) {
			problems.push(`block-details/${id}.json: no block page at src/content/docs/blocks/${id}.md.`);
		}
		for (const { recipe, stack } of stacksOf(details)) {
			const where = `block-details/${id}.json recipe "${recipe}" ${stack.name}`;
			if (stack.href) checkHref(where, stack.href);
			if (stack.icon) checkIcon(where, stack.icon);
		}
	}
	for (const [id, entry] of Object.entries(context.media.blocks)) {
		if (!blockIds.has(id)) problems.push(`wiki-media.json blocks: "${id}" has no block page.`);
		checkIcon(`wiki-media.json blocks "${id}"`, entry.src);
	}
	for (const [name, entry] of Object.entries(context.media.items)) {
		checkIcon(`wiki-media.json items "${name}"`, entry.src);
	}
	return problems;
}
