---
title: Industrial Sawmill
description: Process logs into planks and useful wood byproducts.
block:
  mod: gregtech
  category: machine
  tags: [wood, eu, multiblock]
---

The Industrial Sawmill makes more planks from logs than hand crafting and can produce wood pulp. It is useful for a base that processes a steady supply of wood. Check EMI for the exact results for each log.

## Build the structure

Make a flat 3 × 3 layer of casings. Put one Reinforced Machine Casing in the center and surround it with eight Standard Machine Casings. Place the sawmill controller immediately above the center, facing down. The casing layer is below the controller; no tall casing tower is needed.

## Run the sawmill

Connect EU to the controller, with packets no greater than 128 EU. Put logs in the input and supply water for recipes that require it. The machine can use water supplied through its liquid connection or an appropriate item input. Leave room for the planks and byproducts.

For automation, the top is the item input. The east and west sides expose outputs; north, south, and bottom expose the second input. If the machine will not start, check the casing pattern, the water supply, and available output space. Wood pulp can be compressed into special planks that burn like charcoal.

## Sources

- [Re:Ultimate GregTech configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
- [Pinned GregTech 2 dependency](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json): the pack uses the 290i maintenance release, with 2.90h mod metadata.
