---
title: Recycler
description: Turn surplus items into a chance of scrap.
block:
  mod: ic2
  category: machine
  tags: [scrap, recycling, eu]
---

The Recycler consumes items and sometimes produces scrap. It is useful when an automated system produces more low-value material than you can store. Scrap can support later crafting and processing; check its uses in EMI.

## Use

Supply EU and put disposable items in the input. The Recycler consumes each item even when it produces nothing. In the installed IC2 code, eligible items have a one-in-eight chance to produce scrap. This is a chance, not a guaranteed return for each group of eight.

The pack has a recycler blacklist. Blacklisted items can still be consumed but do not produce scrap. Test a small batch before connecting a large stock, and do not feed it anything you need to keep.

## Power and automation

Connect a low-voltage EU source, such as a [BatBox](/docs/blocks/ic2/batbox/), or put a charged compatible battery in the power slot. The machine accepts packets up to 32 EU without an upgrade. Use an LV transformer to supply it from a higher-voltage network.

A transformer upgrade in the machine raises its safe input to 128 EU per packet; a second raises it to 512 EU. Install the upgrade before connecting the higher-voltage line. Overclocker upgrades make processing faster but increase energy use. Keep the output slot clear or processing stops.

For item automation, insert the recipe input from above and extract products from a horizontal side. The bottom accesses the power slot. Check the installed recipe in EMI because other pack mods can change recipes.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
