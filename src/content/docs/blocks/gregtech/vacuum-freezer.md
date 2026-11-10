---
title: Vacuum Freezer
description: Cool supported hot materials and components with EU.
block:
  mod: gregtech
  category: machine
  tags: [processing, eu, multiblock, cooling]
---

The Vacuum Freezer cools supported items. It is useful for advanced materials such as hot tungstensteel and for restoring supported reactor coolant items. Check EMI to see whether an item has a freezer recipe and what it produces.

## Build the structure

Build a 3 × 3 × 3 cube below the controller. Leave the center empty. Use Advanced Machine Casings for the six blocks directly adjacent to the empty center: the middle of each face. Use Reinforced Machine Casings for the other 20 blocks. Place the controller immediately above the center of the top face, with its face pointing down.

The controller is outside the casing cube. An obstructed center or a casing of the wrong tier makes the structure invalid. If the interface reports an incomplete casing, inspect the face centers and the hollow center first.

## Use

Connect EU to the controller. It accepts packets up to 128 EU. Put a supported item in the input and leave the output clear. Supply power until the cycle finishes. Use EMI for the installed recipes, then connect the output to the next processing step. The freezer does not need a water block inside its casing.

## Sources

- [Re:Ultimate GregTech configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
- [Pinned GregTech 2 dependency](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json): the pack uses the 290i maintenance release, with 2.90h mod metadata.
