---
title: ME Import Bus
description: Pulls items from an adjacent inventory into an ME network.
block:
  mod: applied-energistics
  category: transport
  tags: [network, automation, items]
---

An ME Import Bus moves items from an attached inventory into network storage. Use it to collect machine output or empty a chest into your ME system.

## Set up

Attach the bus to the inventory face you want to extract from, and connect it by ME Cable to a powered [ME Controller](/docs/blocks/applied-energistics/me-controller/). The network also needs storage that accepts the items. The inventory's sided extraction rules can affect which slots the bus can reach.

The basic bus imports available items. Precision and fuzzy versions let you select items and change transfer and redstone settings. A precision filter matches the specified item; a fuzzy filter offers broader matching. Select stack mode when you need faster transfer, and account for its higher power use.

If items stay in the source, check its accessible face, the bus settings, network power, and free storage capacity. An [ME Storage Bus](/docs/blocks/applied-energistics/me-storage-bus/) instead exposes the attached inventory as storage. Search EMI for the installed bus recipes.

## Sources

- [Applied Energistics 1: ME Import Bus](https://appliedenergistics.github.io/ae1-site-archive/ME-Import-Bus/index.html)
- [Re:Ultimate's AE1 artifact](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/mods/applied-energistics-1.pw.toml): rv.9.i for Minecraft 1.4.7.
