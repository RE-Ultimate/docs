---
title: ME Drive
description: Holds storage cells for a connected ME network.
block:
  mod: applied-energistics
  category: storage
  tags: [network, cells]
---

An ME Drive holds up to ten storage cells and makes their contents available to its ME network. It is useful when a single [ME Chest](/docs/blocks/applied-energistics/me-chest/) no longer has enough room.

## Set up

Connect the drive to a powered [ME Controller](/docs/blocks/applied-energistics/me-controller/) directly or with ME Cable. Open the drive and insert storage cells. Use an [ME Access Terminal](/docs/blocks/applied-energistics/me-access-terminal/) to search, deposit, and retrieve items across the network. The drive itself is a cell holder, not a terminal.

Each cell has limits on both total storage and item types. A cell can have space for more items of existing types while it cannot accept a new type. Add another cell or reorganize its contents when this happens. The drive and cells need a working network to provide storage. Check the controller and its power if the terminal cannot see them.

Search EMI for the installed drive and cell recipes.

## Sources

- [Applied Energistics 1: ME Drive](https://appliedenergistics.github.io/ae1-site-archive/ME-Drive/index.html)
- [Re:Ultimate's AE1 artifact](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/mods/applied-energistics-1.pw.toml): rv.9.i for Minecraft 1.4.7.
