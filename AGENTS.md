# Re:Ultimate documentation

This is the documentation site for the Re:Ultimate Minecraft 1.4.7 modpack.
The repository is https://github.com/RE-Ultimate/docs. GitHub Pages serves it at https://re-ultimate.github.io/docs/.

## Scope and working preferences

- The site now includes a curated block reference and a playthrough guide. Add important, source-backed blocks rather than trying to cover every decorative variant.
- Use short, clear English. Do not invent recipes, gameplay claims, mod counts, versions, quotes, or statistics.
- Use pnpm, including pnpm dlx for one-off tools. Keep TypeScript strict and avoid any.
- Keep the site static and compatible with the /docs/ Pages base path. No backend or credentials are needed for readers.
- The user authorized building, checking, and publishing this site to GitHub Pages.
- This site has its own PRODUCT.md and DESIGN.md. The workspace-root product and design files describe an unrelated quarry dashboard.
- Preserve original authors and notices when reusing assets. The Crest brand (pixel wordmark, gold colon icon, social card) is described in DESIGN.md; the icon source is public/favicon.svg.
- Visual constraints (see DESIGN.md): warm oak-dark background (never pure black), parchment primary text, torch gold accent, clear type, dense useful information, minimal copy. Game UI style (windows, slots, game buttons, item tooltips) is for controls and in-game data only. No continuous decorative animations, no em dashes.
- Make UI changes directly. Mocks are only needed if the user explicitly asks for them.
- Do not include AI, model, or tool credits in commits, PRs, or public comments.
- Keep operational secrets and live server addresses out of public docs.

## Sources of truth

- ../Re-Ultimate/README.md: pack description, release links, and installation basics.
- ../Re-Ultimate/THIRD_PARTY.md and docs/UPSTREAM.md: upstream and license facts.
- ../retroEMI/docs/upsilon-integration.md: feature coverage and known verification limits. Local source changes may not yet be in the published pack.
- Read legacy mod artifacts and code as reference when needed. Do not publish decompiled third-party code or edit the client, server, world, or other source repositories for a documentation task.

## Research and content quality

- Target Minecraft 1.4.7 and the mod versions listed in `src/content/docs/pack/reference-scope.md`. Older FTB Ultimate and newer mod guides can differ from this pack.
- Each block page needs a Sources section with inspected public references and a checked legacy version. Inspect the installed code and pack configuration before stating rates, voltage limits, machine layouts, or accepted inputs.
- Source references may use the pack's pinned artifacts, manifests, and config. Write original summaries. Do not publish copied wiki prose or decompiled code. The user authorized wiki images: check the legacy version, record each file's source and stated license in `wiki-media.json`, and keep its attribution visible.
- Use EMI for exact installed recipes when configuration or integrations affect them. Use the installed Thaumonomicon for research and construction diagrams that have not been separately verified.
- Local research evidence is under workspace `.work/docs-research/`. It records source locations, artifact checksums, and focused review results.
- Re-check multiblock layouts against active structure patterns. Generic validators can support blocks that a particular pattern never uses.
- The page count comes from content. Browser tests exercise the populated catalog and search without fixing a permanent count.

## Architecture

- Astro 7 with Starlight 0.42, fully static. Config: `astro.config.mjs` (`site` https://re-ultimate.github.io, `base` /docs/, trailing slashes).
- Starlight overrides in `src/components/`: `SiteTitle` (pixel wordmark), `PageTitle` (breadcrumbs, H1, block spec and picture), `MarkdownContent` (adds the data-driven block sections around the Markdown), `Footer`, and `ThemeProvider`/`ThemeSelect` (dark only).
- Block details: `src/data/block-details/<mod>/<slug>.json` (recipes, machine facts) and `src/data/wiki-media.json` (images with credits). `src/lib/block-details-schema.ts` holds the schemas and types, `block-details-source.ts` reads and cross-checks the files, `block-details.ts` resolves them for rendering, and `recipe-math.ts` has the quantity rules shared with the browser script. Components are in `src/components/block/`, styles in `src/styles/block-details.css`, and `src/routeData.ts` adds the sections to the table of contents. A malformed file, a path that does not match its `block` field, a block without a page, a dead internal link, or a missing local image fails the build with the full list of problems.
- Theme: `src/styles/theme.css` (tokens and game UI primitives) and `src/styles/fonts.css`. DESIGN.md records the design decisions.
- Home page: `src/components/home/Home.astro` with its route stops and bench recipes in `src/lib/home.ts` (unknown block IDs fail the build).
- Machine windows: `src/data/machine-guis/<mod>/<slug>.json` (schema `src/lib/machine-gui-schema.ts`) holds each machine's GUI layout from the pinned mod artifact. `MachineWindow.astro` draws it; never ship a mod's GUI texture. A file whose block has no page fails the build.
- Search: Starlight's built-in Pagefind, built locally by `pnpm build`. No external service.
- `starlight-links-validator` fails the build on broken internal links and anchors.
- `pnpm-workspace.yaml` pins `@emnapi/runtime` to 1.x because a 2.0 beta crashes `astro check`. Remove it only after `pnpm check` works without it.

## Content conventions

- Pages are Markdown or MDX in `src/content/docs/`. Link with the base: `/docs/pack/installation/`.
- Block pages: `src/content/docs/blocks/<mod>/<name>.md` with a `block` frontmatter object (schema in `src/content.config.ts`).
  `src/lib/blocks.ts` fails the build if the folder and `block.mod` differ, the mod is unknown, or a file in `blocks/` has no metadata.
- Mod IDs: `src/data/mods.json` (content mods from the upstream list, plus `minecraft`). Categories: `src/lib/taxonomy.ts`.
- Draft block pages stay out of the production catalog and count. Set `draft: true` in frontmatter while writing.
- New block pages appear in the catalog, filters, home count, and search automatically. Articles need a sidebar entry in `astro.config.mjs`.
- Recipes, machine facts and image credits come from the JSON files above, never from MDX. Do not add a Markdown heading with the anchor `crafting`, `construction`, `processing`, `recipe`, `machine` or `image-credits` on a block page: those are generated, and the build fails on a clash.
- Do not publish recipes that were not checked. An empty `recipes` list is correct for blocks formed in the world, with the explanation in `recipeNote` and the article. Mark each recipe `pack-code` only when the pinned implementation or config was inspected, otherwise `legacy-reference`.
- Images keep the license their source states (see `wiki-media.json`). Never describe them as MIT.
- Templates live in `templates/` and are not published. Never commit demo or fixture block pages to `src/content/docs/blocks/`.

## Commands

```sh
pnpm install
pnpm check        # astro check: types and content schema
pnpm test:unit    # schema, loader and quantity-rule tests (node:test, no browser)
pnpm build        # dist/, Pagefind index, sitemap, link validation
pnpm test:e2e     # Playwright against dist/ served at /docs/ by scripts/serve-dist.mjs
pnpm screenshots  # writes artifacts/screenshots/ (gitignored)
```

Run `pnpm build` before the browser tests. Use `PW_CHANNEL=chrome` when Playwright's Chromium is not installed.
Do not start a dev server unless asked.

## Deploy

`.github/workflows/pages.yml` checks types, runs unit tests, and builds on pull requests and pushes. Only pushes to `main` (and manual runs on `main`) deploy.
The Pages artifact name is `github-pages-${{ github.run_id }}-${{ github.run_attempt }}` in both upload and deploy steps. Keep them identical.
The repository's Pages source must be set to GitHub Actions.
