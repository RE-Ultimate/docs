---
title: Chunk Loader
description: Keep a selected area loaded when players are away.
block:
  mod: chickenchunks
  category: utility
  tags: [chunks, automation, world]
---

A ChickenChunks Chunk Loader keeps a selected area of chunks loaded so machines can continue to work when players leave. It is useful for a remote quarry, pump, or processing area.

## Configure the area

Place the loader inside the area you need. Open its interface to select a shape and radius, and use the chunk viewer to check the coverage. Include every chunk that contains a machine or connection that must run. Chunk boundaries, not the apparent distance between blocks, determine coverage.

A redstone signal disables the loader. Remove the signal to activate it again. A loader does not supply machine power, items, or liquids. It also cannot guarantee that a machine works if its own conditions are not met.

The supplied pack configuration allows loaders to run while their owner is offline and has no away timeout. It sets a maximum of 400 chunks per loader and 5,000 per player. A server can change these settings or impose other limits, so check its rules if a selection is rejected or the area unloads.

Keep the loaded area as small as practical. Loading extra chunks uses server resources, particularly when they contain active machines or entities.

## Sources

- [Pack artifact: ChickenChunks 1.3.1.2](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/mods/chickenchunks.pw.toml)
- [Pack ChickenChunks configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/ChickenChunks.cfg)
