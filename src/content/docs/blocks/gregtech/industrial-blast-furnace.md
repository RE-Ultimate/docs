---
title: Industrial Blast Furnace
description: Smelt advanced materials in a heated GregTech multiblock.
block:
  mod: gregtech
  category: machine
  tags: [processing, eu, multiblock, heat]
---

The Industrial Blast Furnace makes materials that need more heat than a normal furnace can provide. Its casing and installed heating coils determine which recipes it can run. Use EMI to check a material's required heat and ingredients.

## Build the furnace

Build a 3 × 3 × 4 casing tower. The center of the bottom and top layers is casing; the two center blocks between them must be air or lava. Place the controller outside the middle of one bottom-layer side, at the same height as the base. Its front faces away from the tower. The controller sits outside the casing, not in its wall.

Each Standard Machine Casing adds 30 heat, Reinforced adds 50, and Advanced adds 70. Each of the two internal lava blocks adds 250. Install four heating coils by right-clicking the controller with the stack. The first coil tier adds 500 heat. Upgrades require four coils of the next tier, in order, and add 500 heat per tier. Check the controller's displayed heat before choosing a recipe.

## Use

Supply EU with packets no greater than 128 EU. The top is the first item input, the bottom is the second, and the sides expose the outputs. A recipe starts only if the casing is complete, heat is sufficient, ingredients match, and outputs have space. Keep energy available during the run. Use the [Vacuum Freezer](/docs/blocks/gregtech/vacuum-freezer/) for materials that require cooling after heating.

## Sources

- [Re:Ultimate GregTech configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
- [Pinned GregTech 2 dependency](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json): the pack uses the 290i maintenance release, with 2.90h mod metadata.
