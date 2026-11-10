---
title: Macerator
description: Grind ores and other materials into useful dusts.
block:
  mod: ic2
  category: machine
  tags: [ore, dust, eu]
---

The Macerator is an early ore-processing machine. Its installed base recipes turn iron and gold ore into two dusts each. Smelt the dust to obtain ingots. It also grinds materials such as coal and cobblestone for other recipes.

## Use

Put a supported item in the input slot and supply EU. Collect the product from the output slot. A useful first line pairs it with an [Electric Furnace](/docs/blocks/ic2/electric-furnace/) so that ore dust can be smelted without furnace fuel at each machine. Use EMI to check the recipes available in this pack.

## Power and automation

Connect a low-voltage EU source, such as a [BatBox](/docs/blocks/ic2/batbox/), or put a charged compatible battery in the power slot. The machine accepts packets up to 32 EU without an upgrade. Use an LV transformer to supply it from a higher-voltage network.

A transformer upgrade in the machine raises its safe input to 128 EU per packet; a second raises it to 512 EU. Install the upgrade before connecting the higher-voltage line. Overclocker upgrades make processing faster but increase energy use. Keep the output slot clear or processing stops.

For item automation, insert the recipe input from above and extract products from a horizontal side. The bottom accesses the power slot. Check the installed recipe in EMI because other pack mods can change recipes.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
