---
title: Liquid Transposer
description: Fills or empties items with liquids using MJ.
block:
  mod: thermal-expansion
  category: machine
  tags: [mj, automation]
---

The Liquid Transposer moves liquid into or out of supported items. It uses Minecraft Joules (MJ) and is useful when a recipe needs a filled item or a liquid must be recovered from one.

## Set up

Connect MJ, select the fill or extract mode in the interface, and insert the item. In fill mode, supply the required liquid to the internal tank. In extract mode, leave room for the recovered liquid. Consult EMI for supported item and liquid combinations.

Take finished items from the output slot. For automation, configure the machine faces for item and liquid connections, then attach suitable pipes, tanks, or inventories. A [Magma Crucible](/docs/blocks/thermal-expansion/magma-crucible/) can supply liquids for compatible recipes.

If an operation does not start, verify the selected mode, the liquid type and amount, free output space, and the MJ supply. An incompatible liquid in the tank can prevent a new recipe.

## Sources

- [Re:Ultimate upstream pack notes](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/docs/UPSTREAM.md)
- [Re:Ultimate pinned dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)

Checked against Thermal Expansion 2.2.2.2 in the pack.
