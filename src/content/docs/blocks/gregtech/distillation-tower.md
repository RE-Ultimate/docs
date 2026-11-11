---
title: Distillation Tower
description: Separate materials into several products in a GregTech multiblock.
block:
  mod: gregtech
  category: machine
  tags: [processing, eu, multiblock]
---

The Distillation Tower separates its inputs into multiple products. It is useful when a listed recipe has several outputs. The tower handles items and cells in its controller inventory. Use EMI to check the pack's available recipes and required cell counts.

## Build the tower

Build a 3 × 3 × 5 tower. The bottom, middle and top layers use Standard Machine Casings. The two layers between them use Advanced Machine Casings. The bottom and top layers are solid. Leave the center of each of the three middle layers empty. This needs 26 Standard Machine Casings and 16 Advanced Machine Casings.

Place the controller outside the center of a bottom-layer side, at the same height as the base. Its front must face away from the tower. The controller is not part of the casing wall. Open it and check the incomplete-casing message if the machine does not recognize the structure. Both casing type and the empty central column matter.

## Use

Connect EU to the controller. Its base input limit is 128 EU per packet. Place the recipe inputs in the controller and leave space for all products. Keep energy available during processing. The machine cannot start a batch when an output slot cannot hold its product.

For automation, the top exposes the first input, the bottom exposes the second, and the sides expose the four outputs. Check cell recipes in EMI before connecting pipes, since some require empty containers as an input and can return multiple kinds of cell.

## Sources

- [GregTech pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/GregTech.zip): checked the 290i maintenance release, with 2.90h metadata.
- [Pinned mod dependencies](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)
- [Pack GregTech configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
