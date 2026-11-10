---
title: Liquiduct
description: Moves liquids between compatible machines and tanks.
block:
  mod: thermal-expansion
  category: transport
  tags: [mj, automation]
---

Liquiducts connect compatible liquid tanks and machines. They are useful for carrying lava to a [Magmatic Engine](/docs/blocks/thermal-expansion/magmatic-engine/) or moving a machine's liquid output into storage.

## Set up

Place liquiducts between a liquid source and a compatible destination. Make sure the destination can accept that liquid and has free capacity. A machine that pushes liquid out can feed a connected liquiduct directly when its output face is configured correctly.

To pull from a tank, configure the connection with a wrench and supply a redstone signal to the extracting liquiduct. Check the connection at the source if the line stays empty. Extraction is different from a machine pushing into the line.

A connected network carries one liquid at a time. Empty a line before changing to an incompatible liquid, and use separate lines where liquids must remain separate. Check EMI for the installed recipe.

## Sources

- [Re:Ultimate upstream pack notes](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/docs/UPSTREAM.md)
- [Re:Ultimate pinned dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)

Checked against Thermal Expansion 2.2.2.2 in the pack.
