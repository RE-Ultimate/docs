import { defineCollection, reference } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { blockCategoryIds } from './lib/taxonomy';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: ({ image }) =>
				z.object({
					/**
					 * Metadata for one block reference page. Only pages in `src/content/docs/blocks/<mod>/` use it.
					 * `src/lib/blocks.ts` checks the folder against `mod` when the catalog builds.
					 */
					block: z
						.strictObject({
							/** Mod ID from `src/data/mods.json`. Must match the folder name. */
							mod: reference('mods'),
							/** One category ID from `src/lib/taxonomy.ts`. */
							category: z.enum(blockCategoryIds),
							/** Numeric 1.4.7 ID with an optional metadata value, as shown in game: `250` or `250:3`. */
							registryId: z
								.string()
								.regex(/^\d+(:\d+)?$/, 'Use the numeric ID, with an optional metadata value. Examples: "250", "250:3".')
								.optional(),
							/** Short search and filter terms in lowercase. */
							tags: z.array(z.string().min(1)).default([]),
							/** Optional picture. Put the file next to the Markdown file and use a relative path. */
							image: z.strictObject({ src: image(), alt: z.string().min(1) }).optional(),
						})
						.optional(),
				}),
		}),
	}),
	/** Mod names that block pages can use. Source: the content-mod list in Re-Ultimate/docs/UPSTREAM.md. */
	mods: defineCollection({
		loader: file('src/data/mods.json'),
		schema: z.strictObject({ id: z.string().regex(/^[a-z0-9-]+$/), name: z.string().min(1) }),
	}),
};
