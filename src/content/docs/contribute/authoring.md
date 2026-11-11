---
title: Authoring guide
description: Add block pages and articles to the Re:Ultimate documentation with Markdown, and check them before you publish.
---

All pages are Markdown files in the [docs repository](https://github.com/RE-Ultimate/docs). The build checks every file's metadata. A wrong value stops the build and names the file.

## Rules for content

- Write only what you checked in game or in the pack files. Do not guess recipes, IDs, or numbers.
- Use short sentences. One instruction per sentence.
- Put the answer first. Background comes after.
- Use numbered steps for procedures and tables for facts.
- Name things as the game names them.

## Add a block page

Each block has one file at `src/content/docs/blocks/<mod>/<block-name>.md`. The file name becomes the URL, for example `/docs/blocks/<mod>/<block-name>/`. Do not rename a published file, because that breaks links.

1. Find the mod ID in `src/data/mods.json`. If the mod is missing, add an entry with an `id` and `name`.
2. Copy `templates/block.md` into `src/content/docs/blocks/<mod>/`.
3. Fill in the metadata and write the page.
4. Run `pnpm check` and `pnpm build`.

The new page then appears in the [block reference](/docs/blocks/), in its filters, and in search. You do not edit an index or the sidebar.

### Block metadata

| Field | Required | Value |
| --- | --- | --- |
| `title` | Yes | Block name as shown in game |
| `description` | Recommended | One sentence. Shown in the catalog and in search results |
| `block.mod` | Yes | Mod ID from `src/data/mods.json`. Must match the folder name |
| `block.category` | Yes | `machine`, `power`, `storage`, `transport`, `world`, `building`, or `utility` |
| `block.registryId` | No | Numeric ID as text, with an optional metadata value: `"<id>"` or `"<id>:<meta>"` |
| `block.tags` | No | List of short lowercase search terms |
| `block.image` | No | `src` (relative path) and `alt` (what the picture shows) |

The category list is in `src/lib/taxonomy.ts`. To add a category, add one entry there.

### Block images

The block picture and the item icons in recipes come from `src/data/wiki-media.json`. Each entry records where the file came from and under which license, and the page lists them under Image credits.

```json
{
  "blocks": { "<mod>/<slug>": { "src": "/media/wiki/<file>.png", "alt": "What it shows", "sourceUrl": "https://...", "credit": "Author or site", "license": "License as the source states it", "licenseUrl": "https://..." } },
  "items": { "Item Name": { "src": "/media/wiki/items/<file>.png", "alt": "Item Name", "sourceUrl": "https://...", "credit": "...", "license": "..." } }
}
```

- Put the file in `public/media/wiki/`. Write `src` without the `/docs/` prefix. The site adds it.
- Item icons are matched to ingredient names without regard to case or punctuation.
- Record the license of each file as its source states it. Images are not covered by this site's MIT license.
- A texture of 64 pixels or less is shown enlarged without smoothing. A larger image shows at its own size, up to a limit.
- A block with no entry shows no picture. A `block.image` in the Markdown front matter is used only when `wiki-media.json` has no entry for the block.

### Recipes and machine facts

Optional file `src/data/block-details/<mod>/<name>.json`, next to the Markdown page of the same name. It adds a recipe diagram with a material list, processing examples, a machine summary, and the table of contents entries. No Markdown change is needed. Start from `templates/block-details.json`.

| Field | Value |
| --- | --- |
| `block` | `<mod>/<name>`, equal to the file path |
| `recipes[].id` | Unique in the file. Used for the tab and the anchor `#recipe-<id>` |
| `recipes[].type` | `shaped` (exactly 9 entries, `null` for empty slots), `shapeless`, `construction` (a material list, no grid), or `machine` (a processing example) |
| `recipes[].ingredients`, `outputs` | Stacks: `name`, `count`, and optional `unit` (for example `mB`), `icon`, `href`. Ingredients may add `consumed: false` for a reusable tool and `alternatives` for interchangeable items. Outputs may add `chance` (0 to 1) |
| `recipes[].verification` | `pack-code` only when the pinned implementation or config was inspected. Otherwise `legacy-reference` |
| `recipes[].sources` | At least one `{ title, url }` |
| `recipes[].station`, `power`, `time`, `notes` | Optional. Add `power` and `time` only when verified |
| `machine` | Optional `power`, `inputs`, `outputs`, `automation` (`face` and `role`), `tips` |
| `recipeNote` | Optional. Explains construction or conditions. Shown as its own "Recipe" section when the file has no crafting or construction recipe |

Use an empty `recipes` list when a block is formed in the world or the recipe is not verified. Do not publish a guessed grid. A processing example (`machine`) is never the recipe for the block itself, and the page says so.

Readers can change the number of crafts, builds or runs. Consumed amounts scale, reusable tools and chance values do not. Item names link to the block page with the same title unless you set `href` (a `/docs/...` route or a public link).

The build checks every file and lists all problems: wrong grid size, bad counts, duplicate IDs, links to pages that do not exist, missing image files, and detail files for pages that do not exist. Do not use `crafting`, `construction`, `processing`, `recipe`, `machine` or `image-credits` as Markdown heading anchors on a block page. The sections use them.

## Add an article

1. Copy `templates/article.md` to `src/content/docs/<section>/<page-name>.md`.
2. Write the page.
3. Add it to the `sidebar` list in `astro.config.mjs`, for example `{ slug: 'pack/page-name' }`.

Images in articles go next to the Markdown file. Use `![What the image shows](./image.png)`.

## Links

Start links to other pages with `/docs/` and end them with `/`, for example `[Installation](/docs/pack/installation/)`. The build fails when a link points to a page or heading that does not exist.

## Formatting

| You write | You get |
| --- | --- |
| `` `250:3` `` | Inline code, for IDs, file names, and commands |
| A fenced block with a language, such as `sh` | A code block with a copy button |
| `:::note`, `:::tip`, `:::caution`, `:::danger` | A notice with a title line |
| A table with empty headers | A list of facts, as on the [home page](/docs/) |

## Check your change

Install [pnpm](https://pnpm.io/), then run these commands in the repository:

```sh
pnpm install
pnpm dev     # local preview at http://localhost:4321/docs/
pnpm check      # types and content metadata
pnpm test:unit  # schema and quantity tests
pnpm build   # full site, search index, and link check
```

Open a pull request to `main`. GitHub Actions runs the same check and build. The site is published when the change is merged.

## Draft pages

Set `draft: true` in frontmatter while you write a page. Drafts appear in the local development site,
but stay out of the published pages, block catalog, counts, and search. Remove the flag when the page is ready.
