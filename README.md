# Re:Ultimate documentation

Source for <https://re-ultimate.github.io/docs/>, the documentation of the Re:Ultimate Minecraft 1.4.7 modpack.
The site is static. It uses [Astro](https://astro.build) and [Starlight](https://starlight.astro.build) with a custom theme.

## Commands

Install Node.js 22 or newer and pnpm (the version is pinned in `package.json`).

```sh
pnpm install
pnpm dev          # local preview at http://localhost:4321/docs/
pnpm check        # TypeScript and content metadata
pnpm build        # static site in dist/, search index, sitemap, internal link check
pnpm test:e2e     # browser tests against dist/ at /docs/ (run pnpm build first)
pnpm screenshots  # review screenshots in artifacts/screenshots/
```

The browser tests use Playwright's Chromium. Install it once with `pnpm exec playwright install chromium`,
or set `PW_CHANNEL=chrome` to use an installed Google Chrome.

## Add a block page

1. Find the mod ID in `src/data/mods.json`. Add an entry if the mod is missing.
2. Copy `templates/block.md` to `src/content/docs/blocks/<mod>/<block-name>.md`.
3. Fill in the metadata and the text. Put an optional PNG next to the file.
4. Run `pnpm check` and `pnpm build`.

The block reference table, its filters, and search update automatically. There is no index to edit.
The build stops with a message when a block file is in the wrong folder, names an unknown mod, or has invalid metadata.

```yaml
---
title: Block name
description: One sentence about the block.
block:
  mod: buildcraft          # ID from src/data/mods.json, same as the folder name
  category: machine        # from src/lib/taxonomy.ts
  registryId: "<id>:<meta>" # optional, as shown in game
  tags: [pipes]            # optional
  image:                   # optional
    src: ./block-name.png
    alt: What the picture shows
---
```

## Add an article

1. Copy `templates/article.md` to `src/content/docs/<section>/<page-name>.md`.
2. Add `{ slug: '<section>/<page-name>' }` to the `sidebar` in `astro.config.mjs`.

Link to other pages with the base path: `[Installation](/docs/pack/installation/)`.
Put images next to the Markdown file and use a relative path: `![Alt text](./image.png)`.

The full guide for writers is on the site: [Authoring guide](https://re-ultimate.github.io/docs/contribute/authoring/).

## Structure

| Path | Purpose |
| --- | --- |
| `src/content/docs/` | Pages. The folder path is the URL |
| `src/content.config.ts` | Metadata schema for pages and block pages |
| `src/data/mods.json` | Mod IDs and names for block pages |
| `src/lib/taxonomy.ts` | Block categories |
| `src/lib/blocks.ts` | Reads and checks block pages for the catalog |
| `src/components/` | Starlight overrides and the catalog |
| `src/styles/theme.css` | Theme tokens and Starlight styles |
| `templates/` | Copy-ready page templates (not published) |
| `tests/` | Browser tests for the built site |
| `scripts/serve-dist.mjs` | Serves `dist/` at `/docs/` with a GitHub Pages style 404 |

## Deploy

`.github/workflows/pages.yml` runs `pnpm check` and `pnpm build` for every pull request and push.
Pushes to `main` also upload `dist/` and deploy it to GitHub Pages. Pull requests do not deploy.
In the repository settings, Pages must use **GitHub Actions** as its source.

## License

The site code and documentation are MIT licensed. See [LICENSE](LICENSE).
Bundled fonts and site dependencies retain their [original notices](public/third-party-notices.txt).
Mods, textures, and other game content keep their original licenses. See the pack's
[THIRD_PARTY.md](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/THIRD_PARTY.md).
