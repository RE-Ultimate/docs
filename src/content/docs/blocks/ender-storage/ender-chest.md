---
title: Ender Chest
description: Share an item inventory between Ender Chests with the same colors and owner.
block:
  mod: ender-storage
  category: storage
  tags: [items, wireless, inventory]
---

An Ender Chest gives distant locations access to the same item inventory. Use one at a quarry and another at your base to move the quarry output into your storage system.

The wool color in the recipe sets all three markers on the new chest.

## Connect chests

Each chest has three color markers. Use dye on each marker to set its color. Chests with the same three colors in the same order share an inventory. Changing a color selects a different inventory; it does not move the items into it. The pack config sets each inventory to 27 slots.

The default frequency is public. Another player can access it with a chest set to the same colors. To use a personal frequency, use a diamond on the chest's latch. Set each chest to personal under the same player and match the colors. Personal and public inventories are separate. The diamond is consumed when you make the chest personal.

Connect item pipes to insert or extract items at either end. The chest stores items, including filled containers; it does not provide a liquid connection. Use an [Ender Tank](/docs/blocks/ender-storage/ender-tank/) for liquids.

A chest does not keep a remote machine running by itself. The machine's chunks must remain loaded for it to produce or consume items. The pack also disables placement of the vanilla Ender Chest, which has different behavior.

## Sources

- [Pack artifact: Ender Storage 1.4.1.5](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/mods/ender-storage.pw.toml)
- [Pack Ender Storage configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/EnderStorage.cfg)
