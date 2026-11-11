---
title: Quantum Chest
description: Store a large quantity of one item type without EU.
block:
  mod: gregtech
  category: storage
  tags: [items, storage, automation]
---

The Quantum Chest stores a large quantity of one item type. It does not use EU and has no inventory window. It is useful for bulk materials that would fill many normal chests. The pack sets its maximum to two billion items, including its exposed inventory slots.

## Store and retrieve items

Right-click the chest with a stack to select its item type and deposit matching items. It accepts the same item and metadata without item tags. It does not accept a different item type into the same store. To see the stored count, right-click with an empty hand. This also deposits matching items from your inventory, so put those elsewhere first if you want to keep them.

Left-click to withdraw a stack. Sneak while left-clicking to withdraw one item. The chest drops the withdrawn items in front of its facing side. Leave that space accessible so you can collect them.

## Automation

The chest exposes storage slots to inventory automation. Its internal count and exposed stacks work together, so a pipe can move matching items without a normal chest window. Set the item type by hand first; the inventory exposes no slots until a type is selected. Check your pipe's insertion and extraction filters before leaving it unattended.

Use the configured capacity as a limit, not a target for mixed storage. Items with extra tag data are not accepted by the stored-item logic. Keep separate storage for items with custom data or different variants.

## Sources

- [GregTech pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/GregTech.zip): checked the 290i maintenance release, with 2.90h metadata.
- [Pinned mod dependencies](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)
- [Pack GregTech configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
