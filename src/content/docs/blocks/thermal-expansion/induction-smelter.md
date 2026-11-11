---
title: Induction Smelter
description: Combines two inputs into smelted products using MJ.
block:
  mod: thermal-expansion
  category: machine
  tags: [mj, automation]
---

The Induction Smelter uses Minecraft Joules (MJ) to process two inputs together. It is useful for ore processing and recipes that combine a material with a second ingredient.

## Set up

Supply MJ and put both ingredients in the input slots. The installed recipe list in EMI shows valid pairs and their results. For example, the legacy machine has iron ore and sand recipes; check EMI for the pack's current result before committing a large batch.

Collect the main product and any secondary product. Some secondary results have a chance to appear. If an output slot fills, the machine may be unable to start the next operation.

Use the side configuration tab to route the two inputs and outputs to the intended faces. Test a small batch before connecting a large automated supply. The machine does not accept RF as a substitute for this version's MJ supply.

One iron ore and one sand produce two iron ingots, with a 5% chance of rich slag. Rich slag can also serve as a separate recipe ingredient.

## Sources

- [Re:Ultimate upstream pack notes](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/docs/UPSTREAM.md)
- [Re:Ultimate pinned dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)

Checked against Thermal Expansion 2.2.2.2 in the pack.
