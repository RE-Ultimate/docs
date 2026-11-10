# Re:Ultimate documentation

## Platform

Static web documentation, deployed from RE-Ultimate/docs to GitHub Pages at /docs/.

## Readers and purpose

Players need to find information about Re:Ultimate and, later, its individual blocks and items.
Maintainers need to add and edit content without rebuilding the site's structure by hand.

## Product truth

Re:Ultimate is a maintained Minecraft 1.4.7 modpack based on Rewind Upsilon and FTB Ultimate.
The owner now maintains the projects in the RE-Ultimate GitHub organization.
The block reference content will follow later. The current task is the site and authoring system.

## Required capabilities

Fast local documentation search, clear navigation, readable articles, mobile layouts, stable page links, and an extensible block-reference system.
Content lives in version-controlled Markdown or MDX with validated metadata. New block pages should appear in the catalog and search automatically.
The site must build as static files with a reproducible pnpm install and deploy through GitHub Actions.

## Brand commitments

Display the name Re:Ultimate. Use a true-black background and white primary text.
Use strong typography and a useful documentation layout, with minimal copy, thin rules, and no decorative card or pill containers.
Do not use continuously animated decorations. Respect reduced-motion and keyboard navigation.

## Scope

Build the system now. Include only a small set of accurate foundation pages needed to make it usable.
Do not publish invented block details or a large set of empty articles.
English is the starting language, matching the user's request. Keep content separate from UI so it can grow later.
