---
title: ME Storage Bus
description: Makes an adjacent inventory available as ME network storage.
block:
  mod: applied-energistics
  category: storage
  tags: [network, automation, inventory]
---

An ME Storage Bus exposes an attached inventory to the ME network. This can make the contents of an existing chest or bulk store available at a terminal without first moving them into storage cells.

## Set up

Attach the bus to the inventory and connect it with ME Cable to a powered [ME Controller](/docs/blocks/applied-energistics/me-controller/). Open a terminal to access the available contents. The bus can insert and extract items, subject to the attached inventory and its accessible side.

The bus has configuration for allowed items and access. Use it to control what the network puts in the external inventory. A fuzzy variant supports broader item matching. Check those settings before relying on a particular item going into the chest.

Unlike an [ME Import Bus](/docs/blocks/applied-energistics/me-import-bus/), the storage bus does not simply empty the inventory into cells. Removing or disconnecting the external inventory also removes that storage from the network view. If an item is missing, check the attachment, inventory side, access settings, and network power.

## Sources

- [Applied Energistics 1: ME Storage Bus](https://appliedenergistics.github.io/ae1-site-archive/ME-Storage-Bus/index.html)
- [Re:Ultimate's AE1 artifact](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/mods/applied-energistics-1.pw.toml): rv.9.i for Minecraft 1.4.7.
