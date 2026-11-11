---
title: ME Export Bus
description: Sends selected ME network items into an adjacent inventory.
block:
  mod: applied-energistics
  category: transport
  tags: [network, automation, items]
---

An ME Export Bus moves selected items from network storage into an attached inventory. Use it to supply a machine or keep a chest stocked with an ingredient.

## Set up

Attach the bus to the destination inventory face and connect it to a powered [ME Controller](/docs/blocks/applied-energistics/me-controller/) with ME Cable. Open its settings and select the item to export. An unconfigured export bus does not select an item on its own.

The basic bus exports one configured item type. Precision and fuzzy versions offer more configuration, including redstone and transfer modes. Stack transfer uses more power. The bus checks configured entries in order, so an available earlier item can take precedence over a later one.

If nothing moves, check the selected item, network stock and power, and whether that face of the destination accepts the item. A full machine or chest cannot accept more. Use an [ME Import Bus](/docs/blocks/applied-energistics/me-import-bus/) to collect items in the other direction.

## Sources

- [Applied Energistics 1: ME Export Bus](https://appliedenergistics.github.io/ae1-site-archive/ME-Export-Bus/index.html)
- [Re:Ultimate's AE1 artifact](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/mods/applied-energistics-1.pw.toml): rv.9.i for Minecraft 1.4.7.
