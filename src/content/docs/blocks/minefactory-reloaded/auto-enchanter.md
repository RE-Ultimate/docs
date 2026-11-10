---
title: Auto-Enchanter
description: Uses mob essence and power to enchant items.
block:
  mod: minefactory-reloaded
  category: machine
  tags: [enchanting, essence]
---

The Auto-Enchanter uses mob essence to apply random enchantments to items. A [Grinder](/docs/blocks/minefactory-reloaded/grinder/) can supply the essence. Check EMI for the installed machine recipe.

## Setup

Provide BuildCraft MJ or IC2 EU and connect a compatible liquid source containing mob essence. Put an enchantable item into the input slot and select a target level from 1 to 30. The machine consumes essence as it works and moves the finished item to its output slot.

For automation, the top and bottom expose the input slot; horizontal sides expose the output slot. Use separate item routes to feed and collect the items. A redstone signal stops the machine.

The selected level affects the work needed, and an already enchanted item takes more work. The result is random, so inspect the item before using it.

## Sources

Checked against MineFactory Reloaded 1.4.6R2.3.2 in the [pack dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json). The installed version uses MJ and EU interfaces.
