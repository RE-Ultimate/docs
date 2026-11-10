---
title: Industrial Centrifuge
description: Separate materials into useful components with EU.
block:
  mod: gregtech
  category: machine
  tags: [processing, eu, materials]
---

The Industrial Centrifuge separates supported materials into several products. It is useful when a material has components you need for later GregTech recipes. Check EMI for the input quantity, required cells, and products before you process a batch.

## Setup and operation

Place the machine and connect an IC2 EU supply. It accepts packets up to 32 EU. Put the material and any required second ingredient in the input slots. Some recipes need empty cells to hold their products. Give the machine enough time and energy to finish, and leave room in all output slots.

For automation, the top exposes the first input, the bottom exposes the second input, and the sides expose four output slots. The centrifuge also accepts lava as a liquid input for recipes that use it. A pipe connection is separate from the item inputs.

## Troubleshooting

If a recipe does not start, compare both input stacks and their amounts with EMI. Clear blocked outputs. The pack enables the constant-energy setting, so an interrupted power supply can delay progress. The centrifuge is a single machine; it does not need a casing structure.

## Sources

- [Re:Ultimate GregTech configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
- [Pinned GregTech 2 dependency](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json): the pack uses the 290i maintenance release, with 2.90h mod metadata.
