// Shape of the per-block detail files (src/data/block-details/<mod>/<slug>.json) and of
// src/data/wiki-media.json. Types come from the schemas, so a field change happens in one place.
// This module has no Astro or Node imports, so unit tests can run it directly.
import { z } from 'astro/zod';

/** Block page ID: `<mod>/<slug>`, the same as the Markdown path under src/content/docs/blocks/. */
export const blockIdPattern = /^[a-z0-9-]+\/[a-z0-9-]+$/;

const text = z.string().trim().min(1);
const httpUrl = z.url({ protocol: /^https?$/, error: 'Use an http or https URL.' });

/** A local path under public/ (without the /docs/ base), a public image URL, or an item page link. */
const iconPath = z
	.string()
	.regex(/^(\/media\/[^\s]+|https?:\/\/[^\s]+)$/, 'Use a /media/... path (no /docs/ prefix) or an https image URL.');
const hrefPath = z.string().regex(/^(\/docs\/[^\s]*|https?:\/\/[^\s]+)$/, 'Use a /docs/... route or an https link.');

const quantity = z.number().positive();

const stackFields = {
	name: text,
	count: quantity,
	/** Unit for fluids and other non-item amounts, for example `mB`. */
	unit: text.optional(),
	icon: iconPath.optional(),
	href: hrefPath.optional(),
};

const alternative = z.strictObject({ ...stackFields, consumed: z.boolean().optional() });

/** One required ingredient. `consumed: false` marks a reusable tool. */
const ingredient = z.strictObject({
	...stackFields,
	consumed: z.boolean().optional(),
	alternatives: z.array(alternative).min(1).optional(),
});

/** One product. `chance` (0 to 1) marks a byproduct that does not always drop. */
const product = z.strictObject({
	...stackFields,
	chance: z.number().min(0).max(1).optional(),
});

const source = z.strictObject({ title: text, url: httpUrl });

const recipeCommon = {
	/** Unique within the block. Used for the page anchor and the tab. */
	id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'Use lowercase words joined by hyphens.'),
	title: text,
	/** Crafting Table, a machine name, or another place where the recipe is used. */
	station: text.optional(),
	outputs: z.array(product).min(1),
	/** `pack-code`: checked in the pinned implementation or config. `legacy-reference`: version-matching historical source. */
	verification: z.enum(['pack-code', 'legacy-reference']),
	sources: z.array(source).min(1),
	notes: z.array(text).default([]),
	/** Only when verified, for example "32 EU/t". */
	power: text.optional(),
	time: text.optional(),
};

const shapedRecipe = z.strictObject({
	...recipeCommon,
	type: z.literal('shaped'),
	/** Row-major 3x3 grid. `null` is an empty slot. */
	ingredients: z
		.array(ingredient.nullable())
		.length(9, 'A shaped recipe needs exactly 9 entries (3x3, row-major, null for empty slots).')
		.refine((slots) => slots.some((slot) => slot !== null), 'A shaped recipe needs at least one ingredient.'),
});

const listRecipe = <Type extends 'shapeless' | 'machine' | 'construction'>(type: Type) =>
	z.strictObject({
		...recipeCommon,
		type: z.literal(type),
		ingredients: z.array(ingredient).min(1),
	});

export const recipeSchema = z.discriminatedUnion('type', [
	shapedRecipe,
	listRecipe('shapeless'),
	listRecipe('machine'),
	listRecipe('construction'),
]);

const machine = z.strictObject({
	power: text.optional(),
	inputs: z.array(text).default([]),
	outputs: z.array(text).default([]),
	automation: z.array(z.strictObject({ face: text, role: text })).default([]),
	tips: z.array(text).default([]),
});

export const blockDetailsSchema = z
	.strictObject({
		block: z.string().regex(blockIdPattern, 'Use "<mod>/<slug>", the same as the Markdown page path.'),
		recipes: z.array(recipeSchema).default([]),
		machine: machine.optional(),
		/** Construction or condition notes. Shown when there is no crafting or construction recipe to attach to. */
		recipeNote: text.optional(),
	})
	.superRefine((details, ctx) => {
		const seen = new Set<string>();
		details.recipes.forEach((recipe, index) => {
			if (seen.has(recipe.id)) {
				ctx.addIssue({ code: 'custom', path: ['recipes', index, 'id'], message: `Duplicate recipe id "${recipe.id}".` });
			}
			seen.add(recipe.id);
		});
	});

export const mediaSchema = z.strictObject({
	/** Local `/media/wiki/<file>` (the deploy base is added when rendering) or an https URL. */
	src: iconPath,
	alt: text,
	/** The individual file or page the image came from. */
	sourceUrl: httpUrl,
	credit: text,
	/** The license that applies to this file, as stated by its source. */
	license: text,
	licenseUrl: httpUrl.optional(),
});

export const wikiMediaSchema = z.strictObject({
	blocks: z.record(z.string().regex(blockIdPattern), mediaSchema).default({}),
	items: z.record(text, mediaSchema).default({}),
});

export type BlockDetails = z.infer<typeof blockDetailsSchema>;
export type Recipe = z.infer<typeof recipeSchema>;
export type Ingredient = z.infer<typeof ingredient>;
export type Product = z.infer<typeof product>;
export type Alternative = z.infer<typeof alternative>;
export type RecipeType = Recipe['type'];
export type Verification = Recipe['verification'];
export type Media = z.infer<typeof mediaSchema>;
export type WikiMedia = z.infer<typeof wikiMediaSchema>;

/** Key for matching item names to media entries: case, spacing and punctuation do not matter. */
export const normalizeName = (name: string): string =>
	name
		.normalize('NFKD')
		.replace(/\p{M}+/gu, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, ' ')
		.trim();

/** Lines for a failed parse: `path: message`, one per issue. */
export const describeIssues = (error: z.ZodError): string[] =>
	error.issues.map((issue) => `${issue.path.length > 0 ? issue.path.join('.') : '(root)'}: ${issue.message}`);
