---
title: Aqueous Accumulator
description: Produce water for nearby tanks and machines.
block:
  mod: thermal-expansion
  category: machine
  tags: [water, liquid, automation]
---

The Aqueous Accumulator produces water and sends it to connected liquid storage or machines. It needs no MJ supply. It is useful for a base that needs a steady water supply without moving buckets by hand.

## Set up

Place the accumulator where it can connect to a liquid pipe or a machine that accepts water. Put water source blocks next to at least two of its horizontal sides for faster production. The machine checks the four sides at its own height, so water above or below it does not count for this check.

Open the window to see the water stored in the tank. Use the side configuration tab to select an output face. A [Liquiduct](/docs/blocks/thermal-expansion/liquiduct/) can carry the water to another part of the base. A machine directly next to an enabled output can also receive water if it accepts the transfer.

## Operation

The accumulator has redstone control. If no water reaches the destination, check the control setting, the output face, and the available space in the receiving tank. A full tank stops accepting more water. The accumulator also stores a small amount in its own tank while the destination is not accepting water.

This version does not generate water in the Nether biome. Place the accumulator in a suitable biome and keep its surrounding area loaded while it runs.

## Sources

Checked against Thermal Expansion 2.2.2.2 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/ThermalExpansion.zip) and the [pack configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/cofh/thermalexpansion.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
