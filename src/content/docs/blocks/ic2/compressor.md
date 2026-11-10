---
title: Compressor
description: Compress materials for IC2 progression.
block:
  mod: ic2
  category: machine
  tags: [alloy, compression, eu]
---

The Compressor makes materials needed for later IC2 equipment. Its base recipes include advanced alloy from mixed metal ingots and carbon plates from carbon mesh. It can also compress plant balls and other materials.

## Use

Put a valid ingredient in the input and supply EU. Collect the result from the output. Some recipes require a particular number of ingredients, so check EMI before loading the machine. Build one when the next machine or tool needs a compressed component.

A ready IC2 Pump next to or below the Compressor can also provide water for snowballs. This is a separate use from normal item recipes.

## Power and automation

Connect a low-voltage EU source, such as a [BatBox](/docs/blocks/ic2/batbox/), or put a charged compatible battery in the power slot. The machine accepts packets up to 32 EU without an upgrade. Use an LV transformer to supply it from a higher-voltage network.

A transformer upgrade in the machine raises its safe input to 128 EU per packet; a second raises it to 512 EU. Install the upgrade before connecting the higher-voltage line. Overclocker upgrades make processing faster but increase energy use. Keep the output slot clear or processing stops.

For item automation, insert the recipe input from above and extract products from a horizontal side. The bottom accesses the power slot. Check the installed recipe in EMI because other pack mods can change recipes.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
