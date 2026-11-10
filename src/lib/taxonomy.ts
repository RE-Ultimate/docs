/**
 * Block categories for the catalog filter. The order here is the order in the filter.
 * To add a category, add one entry. The content schema and the catalog read this list.
 */
export const blockCategories = [
	{ id: 'machine', label: 'Machines' },
	{ id: 'power', label: 'Power' },
	{ id: 'storage', label: 'Storage' },
	{ id: 'transport', label: 'Transport' },
	{ id: 'world', label: 'World' },
	{ id: 'building', label: 'Building' },
	{ id: 'utility', label: 'Utility' },
] as const;

export type BlockCategoryId = (typeof blockCategories)[number]['id'];

export const blockCategoryIds = blockCategories.map((category) => category.id);

export const categoryLabel = (id: BlockCategoryId): string =>
	blockCategories.find((category) => category.id === id)?.label ?? id;
