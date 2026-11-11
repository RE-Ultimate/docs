---
title: Lapotronic Energy Storage Unit
description: Expand an EU store with connected LESU blocks.
block:
  mod: gregtech
  category: storage
  tags: [gregtech, eu, power]
---

The Lapotronic Energy Storage Unit, or LESU, is an expandable EU store. Its controller counts connected LESU-Blocks and uses them to set the storage capacity and output voltage. Build it when a fixed-size store no longer fits your power system.

## Add storage blocks

Place LESU-Blocks against the controller or against another LESU-Block. Blocks connect through shared faces. The controller counts connected storage blocks, including blocks reached through other storage blocks. Do not join two LESU controllers to the same group: the code detects multiple controllers and falls back to a small capacity.

The controller starts with a capacity of 1,000,000 EU. Each counted storage block adds 1,000,000 EU, up to 2,000,000,000 EU. The output packet increases with capacity and is capped at 512 EU. The input voltage tier also changes with the output tier. Check the window after changing the structure and use cables and transformers rated for its voltage.

## Connect and operate

Use a wrench to set the controller facing. Connect the output to a suitable cable or receiver and provide EU to an input face. The upper slot charges compatible electric items and the lower slot discharges them. Four slots at the right correspond to worn armour.

The controller window shows stored EU, capacity and the input and output limits. If capacity is lower than expected, check for a broken face connection or a second controller in the same group. The pack enables both the controller and LESU-Block recipes.

## Sources

- [Pack GregTech artifact](https://re-ultimate.github.io/Re-Ultimate/mods/GregTech.zip): checked GregTech metadata 2.90h, maintenance release 290i.
- [Pinned mod dependencies](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)
- [Pack GregTech settings](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
