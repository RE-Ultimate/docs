---
title: Wind Mill
description: Generate EU from wind at an exposed height.
block:
  mod: ic2
  category: power
  tags: [eu, power]
---

The Wind Mill turns wind into EU without a fuel supply. Its output changes with height, nearby blocks, weather, and wind strength. Connect it to an EU network or use its window to charge a compatible item.

## Placement

Place the mill above Y 64 with clear space around it. The code counts non-air blocks in a nine-by-seven-by-nine volume around the mill, from two blocks below it to four blocks above it. Obstructions reduce the effective height used to calculate production. Cables, support blocks, and other mills in that volume count as obstructions too.

The mill checks its surroundings at intervals, so the effect of a new block is not always immediate. Rain and thunderstorms increase production. A [BatBox](/docs/blocks/ic2/batbox/) helps bridge periods of low wind, subject to the voltage limits of the connected equipment.

## Strong wind

More height is not always safer. At high output the mill can break in strong wind, leaving a basic [Generator](/docs/blocks/ic2/generator/) and possibly iron ingots. Its window includes a wind indicator and an overheat indication. Check the indicator in bad weather before choosing a permanent high installation. Do not rely on one mill as the only power source for a critical machine.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar), the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg), and the [GregTech recipe settings](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/GregTech/Recipes.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
