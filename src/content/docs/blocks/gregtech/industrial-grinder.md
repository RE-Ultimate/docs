---
title: Industrial Grinder
description: Process ores with water and recover useful byproducts.
block:
  mod: gregtech
  category: machine
  tags: [processing, ore, eu, multiblock]
---

The Industrial Grinder processes ores and can recover extra materials alongside the main product. It is useful when an ore's byproducts matter more than the speed of a basic macerator. Check EMI for each ore and its available outputs.

## Build the structure

Build a 3 × 3 × 3 cube. Use Standard Machine Casings for the complete top and bottom layers. In the middle layer, surround a water source with eight Reinforced Machine Casings. Place the grinder controller outside the center of a side, facing away from the cube. The water inside the casing is part of the structure; it is separate from the water used by recipes.

## Run and automate

Connect EU to the controller, with packets no greater than 128 EU. Insert ore in the first input. Most recipes also need water, supplied as water cells or through the machine's liquid input. Keep all four product slots clear. The top exposes the first input, the bottom the second, and the sides expose outputs.

If the interface reports an incomplete casing, check all three layers, the center water block, and the controller position. If the structure is valid but processing will not start, check recipe water, item amounts, output space, and power. The grinder does not accept every ordinary macerator recipe.

## Sources

- [Re:Ultimate GregTech configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
- [Pinned GregTech 2 dependency](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json): the pack uses the 290i maintenance release, with 2.90h mod metadata.
