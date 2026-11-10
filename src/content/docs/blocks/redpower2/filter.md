---
title: Filter
description: Extract selected items into a pneumatic tube network.
block:
  mod: redpower2
  category: transport
  tags: [tubes, redstone, sorting]
---

A Filter moves items between an inventory and a pneumatic tube network. Compared with a [Transposer](/docs/blocks/redpower2/transposer/), it can select item types and extract a stack on a pulse.

## Setup

Place its input against the source inventory and connect the opposite side to a tube and an inventory that can accept the items. Open the Filter and put sample items in its slots to select what it should move. Send a redstone pulse to trigger extraction. It needs no blutricity.

An empty filter accepts any item type. With samples present, it extracts a matching stack and can also restrict items entering from the tube side. Its color setting can mark outgoing items for colored tube routing. Make sure the destination and route can accept the chosen items; inventory side restrictions also apply.

## Sources

Checked against RedPower 2.0 prerelease 6. The [Re:Ultimate dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) identifies the pinned RedPower archives and their hashes.
