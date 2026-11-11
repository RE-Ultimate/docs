// Content for the home page: the route line (stages from the playthrough guide) and the recipes shown
// on the crafting bench. Block IDs are page IDs under src/content/docs/blocks/ without the "blocks/" prefix.
// resolveHome() fails the build when an ID has no page, so a renamed page cannot leave a dead stop.
import type { Block } from './blocks';

export interface RouteStage {
	title: string;
	summary: string;
	/** The first block is the stop's picture; the rest show as small icons. */
	blocks: string[];
}

/** The five sections of src/content/docs/pack/playthrough.md, in the same order. */
export const routeStages: RouteStage[] = [
	{
		title: 'First processing and power',
		summary: 'Pick an EU or MJ line and store power between jobs.',
		blocks: ['ic2/macerator', 'ic2/generator', 'ic2/electric-furnace', 'ic2/batbox', 'thermal-expansion/pulverizer', 'thermal-expansion/magmatic-engine'],
	},
	{
		title: 'Storage and item movement',
		summary: 'Bulk storage first, then an AE1 network and item lines.',
		blocks: ['applied-energistics/me-drive', 'factorization/barrel', 'applied-energistics/me-controller', 'applied-energistics/me-import-bus', 'buildcraft/wooden-transport-pipe', 'redpower2/sorting-machine'],
	},
	{
		title: 'Farms and supplies',
		summary: 'Crops, trees, biofuel, and bees as a longer project.',
		blocks: ['minefactory-reloaded/harvester', 'minefactory-reloaded/planter', 'minefactory-reloaded/fertilizer', 'forestry/fermenter', 'forestry/still', 'forestry/apiary'],
	},
	{
		title: 'Steel, steam, and advanced materials',
		summary: 'Railcraft steel and steam, then GregTech processing.',
		blocks: ['gregtech/industrial-blast-furnace', 'railcraft/coke-oven', 'railcraft/blast-furnace', 'railcraft/steam-boiler', 'gregtech/industrial-centrifuge'],
	},
	{
		title: 'Remote work and magic',
		summary: 'Mining away from base, shared storage, and Thaumcraft.',
		blocks: ['buildcraft/quarry', 'computercraft/mining-turtle', 'ender-storage/ender-chest', 'thaumcraft/research-table', 'thaumcraft/crucible', 'thaumcraft/infusion-altar'],
	},
];

/** Blocks whose first crafting recipe appears on the home page's crafting bench, in tab order. */
export const benchBlocks = ['ic2/macerator', 'ic2/batbox', 'thermal-expansion/pulverizer', 'buildcraft/quarry', 'applied-energistics/me-drive'];

/** Looks up every block the home page names. Throws with the full list of unknown IDs. */
export function resolveHome(blocks: Block[]) {
	const byId = new Map(blocks.map((block) => [block.id.slice('blocks/'.length), block]));
	const missing: string[] = [];
	const find = (id: string) => {
		const block = byId.get(id);
		if (!block) missing.push(id);
		return block;
	};
	const stages = routeStages.map((stage) => ({ ...stage, blocks: stage.blocks.map(find).filter((block): block is Block => block !== undefined) }));
	const bench = benchBlocks.map(find).filter((block): block is Block => block !== undefined);
	if (missing.length > 0) throw new Error(`src/lib/home.ts names blocks without a page: ${missing.join(', ')}`);
	return { stages, bench };
}
