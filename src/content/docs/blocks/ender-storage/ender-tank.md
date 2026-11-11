---
title: Ender Tank
description: Share a liquid between Ender Tanks with the same colors and owner.
block:
  mod: ender-storage
  category: storage
  tags: [liquids, wireless, tank]
---

Ender Tanks share liquid storage across locations. For example, feed a tank from a pump and draw the liquid from a matching tank at your base.

The wool color in the recipe sets all three markers on the new tank.

## Set up a connection

Use dye on the three markers to choose a color frequency. Tanks share storage when their three colors and owner match. Changing a marker selects another storage rather than transferring its contents. A tank accepts one liquid type at a time; empty it before filling that frequency with another liquid.

Frequencies are public by default. Use a diamond on the front control to set a tank to your personal storage. Match the colors and owner on the other tank. The diamond is consumed. Public and personal frequencies are separate.

Connect compatible liquid pipes or tanks to fill and drain it. You can also use liquid containers directly on the tank. Its front control switches the redstone behavior for automatic output to adjacent compatible tanks. Check the connection and redstone state if liquid does not flow.

An Ender Tank shares liquids, not the item inventory of an [Ender Chest](/docs/blocks/ender-storage/ender-chest/), even if the colors match. The remote pump or consumer still needs its chunk loaded to operate.

## Sources

- [Pack artifact: Ender Storage 1.4.1.5](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/mods/ender-storage.pw.toml)
- [Pack Ender Storage configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/EnderStorage.cfg)
