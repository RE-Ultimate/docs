---
title: Implosion Compressor
description: Compress advanced materials with explosives inside a reinforced multiblock.
block:
  mod: gregtech
  category: machine
  tags: [processing, eu, multiblock]
---

The Implosion Compressor uses explosives to make advanced materials. It is useful for recipes such as the iridium plate. Check EMI for the current inputs and explosive quantity before starting a batch.

## Build the compressor

Make a hollow 3 × 3 × 3 cube. Use eight Standard Machine Casings for the corners and 18 Reinforced Machine Casings for the remaining outer positions. Leave the center empty. Place the controller on the center of the top layer, directly above the hollow space. The controller is outside the cube.

The structure check requires those exact casing types and an air block in the center. It does not accept a solid center. Open the controller to check whether the casing is complete. Check the corner and edge positions if the window reports an incomplete machine.

## Use

Supply EU to the controller. Its base input limit is 32 EU per packet. Transformer upgrades change the accepted voltage. Put the material and the explosive in the two input slots. Leave room in both output slots, including space for any byproduct. The machine needs a complete structure and power throughout the run.

For automation, the top exposes the first input. The bottom, north, and south expose the second input. The east and west expose the two outputs. These directions are world directions, so check the pipe connections after placing the machine.

## Sources

- [GregTech pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/GregTech.zip): checked the 290i maintenance release, with 2.90h metadata.
- [Pinned mod dependencies](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)
- [Pack GregTech configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
