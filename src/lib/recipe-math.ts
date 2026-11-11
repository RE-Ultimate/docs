// Quantity rules for recipes. Shared by the server render (initial amounts) and the browser script
// (batches control), so both always agree. No Astro or DOM imports.

export const MIN_BATCHES = 1;
export const MAX_BATCHES = 999;

/** An ingredient or product amount with the flags that decide how it scales. */
export interface Amount {
	count: number;
	unit?: string | undefined;
	/** Ingredients only. `false` is a reusable tool: it never multiplies. */
	consumed?: boolean | undefined;
}

/** Whole batches between MIN_BATCHES and MAX_BATCHES. Anything that is not a finite number becomes the minimum. */
export const clampBatches = (value: number): number =>
	Number.isFinite(value) ? Math.min(MAX_BATCHES, Math.max(MIN_BATCHES, Math.trunc(value))) : MIN_BATCHES;

/** Drops floating point noise such as 0.30000000000000004. */
const tidy = (value: number): number => Math.round(value * 1e6) / 1e6;

/** An ingredient for `batches` runs. Reusable tools stay at their base count. */
export const ingredientAmount = (amount: Amount, batches: number): number =>
	amount.consumed === false ? amount.count : tidy(amount.count * clampBatches(batches));

/** A product for `batches` runs. With a chance below 1 this is the most that can drop, not a promise. */
export const productAmount = (amount: Amount, batches: number): number => tidy(amount.count * clampBatches(batches));

const numberFormat = new Intl.NumberFormat('en', { maximumFractionDigits: 2 });

/** `1,500` or `1,500 mB`. */
export const formatAmount = (value: number, unit?: string): string =>
	unit ? `${numberFormat.format(value)} ${unit}` : numberFormat.format(value);

/** Short form for a slot overlay: `64`, `1.5k`, `250` (unit is shown separately). */
export const compactAmount = (value: number): string =>
	value >= 10_000
		? `${numberFormat.format(Math.round(value / 100) / 10)}k`
		: value >= 1_000 && value % 100 === 0
			? `${numberFormat.format(value / 1000)}k`
			: numberFormat.format(value);

/** `20` for 0.2, `12.5` for 0.125. Returns undefined for a guaranteed or missing chance. */
export const chancePercent = (chance: number | undefined): number | undefined =>
	chance === undefined || chance >= 1 ? undefined : Math.round(chance * 1000) / 10;

/** One option for a slot: the primary ingredient or one allowed alternative. */
export interface Option extends Amount {
	name: string;
}

/**
 * Slots that accept the same options share one group, so the material list shows one row per option.
 * The browser picks one option per group and applies it to every slot in the group.
 */
export interface Group<T extends Option = Option> {
	key: string;
	/** How many grid slots (or list entries) use this group. */
	slots: number;
	options: T[];
}

const optionKey = (option: Option): string =>
	[option.name, option.count, option.unit ?? '', option.consumed === false ? 'tool' : ''].join('~');

/** Identity of an option list. Slots with the same key belong to one group. */
export const optionsKey = (options: readonly Option[]): string => options.map(optionKey).join('|');

/** Groups ingredients that have identical options. Order follows the first appearance. */
export const groupIngredients = <T extends Option>(stacks: readonly (readonly T[])[]): Group<T>[] => {
	const groups = new Map<string, Group<T>>();
	for (const options of stacks) {
		const key = optionsKey(options);
		const existing = groups.get(key);
		if (existing) existing.slots += 1;
		else groups.set(key, { key, slots: 1, options: [...options] });
	}
	return [...groups.values()];
};

/** Total for one option across all slots in its group. */
export const groupAmount = (group: Group, option: Option, batches: number): number =>
	tidy(ingredientAmount(option, batches) * group.slots);
