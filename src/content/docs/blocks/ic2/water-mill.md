---
title: Water Mill
description: Generate EU from nearby water or filled containers.
block:
  mod: ic2
  category: power
  tags: [eu, power]
---

The Water Mill produces EU from water. It can use water blocks around it without consuming them, or take filled water containers in its window. The crafting recipe yields two mills.

## Place the mill

Put water in the blocks around the mill and connect an EU cable or receiver. The mill counts both flowing and still water in the three-by-three-by-three volume centered on itself. The mill occupies one of those positions, and cables or other blocks take space that could otherwise hold water. The count is refreshed at intervals after the surroundings change.

The automatic mode has a small output, so use several mills or store the energy in a [BatBox](/docs/blocks/ic2/batbox/). A shared water arrangement can serve multiple mills, but each mill counts its own surroundings. Its window has a charging slot for compatible items.

## Use containers

A water bucket or water cell can go in the lower slot. The bucket returns empty, while the cell is consumed. Remove an empty bucket before feeding the next one. Container fuel takes priority while it lasts; nearby water provides passive generation when the stored container fuel is exhausted. Plan item handling accordingly if you automate the input.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar), the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg), and the [GregTech recipe settings](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/GregTech/Recipes.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
