---
title: Solar Panel
description: Generate EU from sunlight without fuel.
block:
  mod: ic2
  category: power
  tags: [eu, power]
---

The Solar Panel makes EU from daylight. It is a quiet power source for an IC2 network, but it stops at night and needs a clear view of the sky.

## Placement

Place the panel where the block above it can see the sky. Connect an EU cable or an adjacent machine to carry its output. A [BatBox](/docs/blocks/ic2/batbox/) can store energy for use after sunset. The installed configuration gives a working panel 1 EU per tick, so several panels are useful when demand is higher.

Rain and thunderstorms stop production outside desert biomes. A dimension without a sky cannot power the panel. The panel checks visibility at intervals, so a change above it does not always take effect immediately. Its window shows whether it can see the sun and has a slot for charging a compatible item.

## Before you build

This pack enables GregTech's more expensive solar recipe. It uses silicon plates and a carbon plate along with a [Generator](/docs/blocks/ic2/generator/), glass panes, and circuits. The displayed recipe shows one valid circuit and plate choice; check EMI for alternatives. The ordinary IC2 coal dust recipe is replaced when GregTech finds it. Solar power needs no fuel after placement, but the output is small and depends on weather and time.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar), the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg), the [GregTech 2.90h artifact](https://re-ultimate.github.io/Re-Ultimate/mods/GregTech.zip), and the [GregTech recipe settings](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/GregTech/Recipes.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
