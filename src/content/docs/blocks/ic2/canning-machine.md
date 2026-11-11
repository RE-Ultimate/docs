---
title: Canning Machine
description: Fill tin cans, fuel containers and construction foam packs with EU.
block:
  mod: ic2
  category: machine
  tags: [food, fuel, eu]
---

The Canning Machine uses EU to fill several kinds of container. It can preserve food in tin cans, fill fuel cans and fuel jetpacks, or refill a construction foam pack. The lower slot selects the operation by the container placed in it.

## Fill cans

Supply low-voltage EU and place food in the upper input slot. Put empty tin cans in the lower slot. The machine consumes the food and enough cans for its food value, then puts the filled cans in the output. Leave enough cans and output space for the operation to start. Different foods can require different numbers of cans.

Some foods retain a special effect in the resulting cans. Do not assume that every filled can has the same effect. Check the item tooltip before using food that has an unwanted effect.

## Other uses

A fuel can or fuel jetpack in the lower slot selects the fuel operation. Supply compatible biofuel or coalfuel cells in the upper slot. A construction foam pack selects the foam operation and accepts construction foam pellets as input. Keep the output slot clear for the filled item.

The machine accepts packets up to 32 EU. Use a low-voltage source such as a [BatBox](/docs/blocks/ic2/batbox/) or a compatible charged battery. A higher-voltage supply needs a transformer. The Canning Machine has a different interface and recipe set from later IC2 fluid canning machines; use EMI to check the items available here.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and the [pack configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
