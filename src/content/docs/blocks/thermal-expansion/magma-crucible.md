---
title: Magma Crucible
description: Melts solid items into liquids using MJ.
block:
  mod: thermal-expansion
  category: machine
  tags: [mj, automation]
---

The Magma Crucible converts solid inputs into liquids with Minecraft Joules (MJ). It can provide liquids to other machines without placing those liquids in the world.

## Set up

Connect an MJ source, insert an item with a valid melting recipe, and connect a compatible liquid tank or pipe to an output face. Check EMI for the available input and liquid combinations. The internal tank must have room for the output and cannot accept an incompatible liquid from the next recipe.

Set item and liquid faces in the side configuration tab before automating the machine. A [Liquid Transposer](/docs/blocks/thermal-expansion/liquid-transposer/) can use suitable liquids to fill items. A [Liquiduct](/docs/blocks/thermal-expansion/liquiduct/) can move liquids between compatible tanks.

If the machine stops, check the MJ supply, the selected input recipe, and the liquid in the output tank. Melting material requires energy, so account for that cost when planning fuel production.

Four snowballs make 500 mB of water. One redstone makes 25 mB of Molten Redstone.

## Sources

- [Re:Ultimate upstream pack notes](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/docs/UPSTREAM.md)
- [Re:Ultimate pinned dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)

Checked against Thermal Expansion 2.2.2.2 in the pack.
