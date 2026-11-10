---
title: Electric Furnace
description: Smelt furnace recipes with EU.
block:
  mod: ic2
  category: machine
  tags: [smelting, eu, ore]
---

The Electric Furnace smelts items using electricity instead of burning fuel in the furnace. It is useful beside a [Macerator](/docs/blocks/ic2/macerator/) when you already have a steady EU supply.

## Use

Place an item with a furnace recipe in the input and supply EU. Take the finished item from the output. It uses the installed furnace recipe list, so check EMI for the result before processing valuable materials.

A separate generator still needs fuel or another energy source. The Electric Furnace moves that power production to your EU network; it does not create free energy.

## Power and automation

Connect a low-voltage EU source, such as a [BatBox](/docs/blocks/ic2/batbox/), or put a charged compatible battery in the power slot. The machine accepts packets up to 32 EU without an upgrade. Use an LV transformer to supply it from a higher-voltage network.

A transformer upgrade in the machine raises its safe input to 128 EU per packet; a second raises it to 512 EU. Install the upgrade before connecting the higher-voltage line. Overclocker upgrades make processing faster but increase energy use. Keep the output slot clear or processing stops.

For item automation, insert the recipe input from above and extract products from a horizontal side. The bottom accesses the power slot. Check the installed recipe in EMI because other pack mods can change recipes.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
