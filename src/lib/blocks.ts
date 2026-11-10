import { getCollection, type CollectionEntry } from 'astro:content';
import { blockCategories, categoryLabel, type BlockCategoryId } from './taxonomy';
import { withBase } from './paths';

type DocsEntry = CollectionEntry<'docs'>;
type BlockData = NonNullable<DocsEntry['data']['block']>;

/** One block page, resolved for display in the catalog and on the page itself. */
export interface Block {
	id: string;
	href: string;
	title: string;
	description: string | undefined;
	mod: { id: string; name: string };
	category: { id: BlockCategoryId; label: string };
	registryId: string | undefined;
	tags: string[];
	image: BlockData['image'];
}

const BLOCKS_DIR = 'blocks';

/**
 * All block pages, sorted by mod name, then title. Reads the docs collection on each call, so the dev
 * server picks up new files. Throws (and fails the build) when a page is in the
 * wrong folder, misses its metadata, or names a mod that does not match its folder.
 * The catalog, the home index, and each block page call this, so one new file updates all of them.
 */
export async function getBlocks(): Promise<Block[]> {
	const [docs, mods] = await Promise.all([
		getCollection('docs', ({ data }) => import.meta.env.DEV || !data.draft),
		getCollection('mods'),
	]);
	const modNames = new Map(mods.map((mod) => [mod.id, mod.data.name]));
	const problems: string[] = [];
	const blocks: Block[] = [];

	for (const entry of docs) {
		const segments = entry.id.split('/');
		const inBlocksDir = segments[0] === BLOCKS_DIR && segments.length > 1;
		const data = entry.data.block;
		const where = entry.filePath ?? entry.id;

		if (!data) {
			if (inBlocksDir) problems.push(`${where}: pages in ${BLOCKS_DIR}/ need "block" metadata.`);
			continue;
		}
		if (!inBlocksDir || segments.length !== 3) {
			problems.push(`${where}: block pages must be at src/content/docs/${BLOCKS_DIR}/<mod>/<name>.md.`);
			continue;
		}
		const modName = modNames.get(data.mod.id);
		if (!modName) {
			problems.push(`${where}: unknown mod "${data.mod.id}". Add it to src/data/mods.json.`);
			continue;
		}
		if (segments[1] !== data.mod.id) {
			problems.push(`${where}: folder "${segments[1]}" does not match mod "${data.mod.id}".`);
			continue;
		}

		blocks.push({
			id: entry.id,
			href: withBase(`${entry.id}/`),
			title: entry.data.title,
			description: entry.data.description,
			mod: { id: data.mod.id, name: modName },
			category: { id: data.category, label: categoryLabel(data.category) },
			registryId: data.registryId,
			tags: data.tags,
			image: data.image,
		});
	}

	if (problems.length > 0) {
		throw new Error(`Block reference has ${problems.length} problem(s):\n- ${problems.join('\n- ')}`);
	}

	return blocks.sort(
		(a, b) => a.mod.name.localeCompare(b.mod.name, 'en') || a.title.localeCompare(b.title, 'en'),
	);
}

/** The block for a docs entry ID, if that page is a block page. */
export const findBlock = async (entryId: string): Promise<Block | undefined> =>
	(await getBlocks()).find((block) => block.id === entryId);

/** Filter options that have at least one block, in display order. */
export const getBlockFacets = (blocks: Block[]) => {
	const mods = new Map<string, string>();
	for (const block of blocks) mods.set(block.mod.id, block.mod.name);
	const usedCategories = new Set(blocks.map((block) => block.category.id));
	return {
		mods: [...mods].map(([id, name]) => ({ id, label: name })),
		categories: blockCategories.filter((category) => usedCategories.has(category.id)),
	};
};
