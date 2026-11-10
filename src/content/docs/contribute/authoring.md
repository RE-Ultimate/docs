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

Put the picture next to the Markdown file and point to it with a relative path:

```yaml
block:
  image:
    src: ./block-name.png
    alt: Front face of the block
```

Use a PNG. A texture of 64 pixels or less is shown enlarged without smoothing. A larger image, such as a game screenshot, is shown at its own size up to the page width. Use only images that you made or that you can share under the original license.

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
pnpm check   # types and content metadata
pnpm build   # full site, search index, and link check
```

Open a pull request to `main`. GitHub Actions runs the same check and build. The site is published when the change is merged.

## Draft pages

Set `draft: true` in frontmatter while you write a page. Drafts appear in the local development site,
but stay out of the published pages, block catalog, counts, and search. Remove the flag when the page is ready.
