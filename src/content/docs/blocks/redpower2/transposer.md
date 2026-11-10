---
title: Transposer
description: Move individual items with redstone pulses and pneumatic tubes.
block:
  mod: redpower2
  category: transport
  tags: [tubes, redstone, items]
---

A Transposer extracts one item at a time from an adjacent inventory or collects loose items. It is a simple way to start a pneumatic tube system without a blutricity supply.

## Setup

Place the input face against the source inventory and connect the opposite face to a pneumatic tube and a destination inventory. Give the Transposer a redstone pulse to move an item. A sustained signal does not repeatedly trigger extraction: turn the signal off and on again, or use a timer.

The machine can also collect dropped items in front of its intake. Inventory side rules still apply, so a machine may expose different slots on different faces. If items do not move, check the orientation, the pulse, the source side and whether the destination can accept them. Use a [Filter](/docs/blocks/redpower2/filter/) when you need to select item types or move a stack.

## Sources

Checked against RedPower 2.0 prerelease 6. The [Re:Ultimate dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) identifies the pinned RedPower archives and their hashes.
