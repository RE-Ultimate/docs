---
# Copy this file to src/content/docs/blocks/<mod>/<block-name>.md and replace every value.
# <mod> must be an ID from src/data/mods.json, and must match `block.mod` below.
# <block-name> becomes the URL: /docs/blocks/<mod>/<block-name>/. Use lowercase words joined by hyphens.
# Do not publish values you have not checked in game or in the pack files.
title: Block name
description: One sentence that says what the block does. Shown in the catalog, on the page, and in search.
block:
  mod: minecraft
  # One of: machine, power, storage, transport, world, building, utility (see src/lib/taxonomy.ts).
  category: machine
  # Optional. Numeric ID, with an optional metadata value, as text: "<id>" or "<id>:<meta>".
  # registryId: "<id>:<meta>"
  # Optional. Short lowercase terms that help search and filtering.
  tags: []
  # Optional. Put the picture next to this file. Use a 16x16 or 32x32 PNG texture or a game screenshot.
  # image:
  #   src: ./block-name.png
  #   alt: What the picture shows
---

Start with what the block is for, in one or two sentences.

## Recipe

Describe the recipe or link to where it is shown in game.

## Use

Explain how to place, power, and configure the block. Use short steps.

## Notes

Known limits, mod interactions, and version notes.
