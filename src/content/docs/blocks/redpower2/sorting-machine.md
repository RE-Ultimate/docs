---
title: Sorting Machine
description: Sort items into colored pneumatic tube routes using blutricity.
block:
  mod: redpower2
  category: transport
  tags: [sorting, tubes, blutricity]
---

The Sorting Machine assigns items to colored tube routes using configured item groups. It is useful when a shared input must feed several storage or processing destinations.

## Setup

Connect a blutricity supply with blue wiring, put the source inventory against the input, and connect the opposite face to pneumatic tubes. Configure sample items in the machine's columns and select colors for the routes. Match the tube destinations to those colors and give each route an inventory that can accept its items.

The machine has several sorting and automatic modes. Start with a small set of samples and test each destination before adding more. It consumes blutricity while sorting, unlike a basic [Filter](/docs/blocks/redpower2/filter/). If it stops, check its power supply, mode, item matches and available destinations. A redstone pulse can trigger operation in the pulse-controlled mode; other modes can run automatically.

## Sources

Checked against RedPower 2.0 prerelease 6. The [Re:Ultimate dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) identifies the pinned RedPower archives and their hashes.
