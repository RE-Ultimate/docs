---
title: Generator
description: Burn solid fuel to produce low-voltage EU.
block:
  mod: ic2
  category: power
  tags: [eu, fuel, electricity]
---

The Generator is a practical first power source for IC2 machines. It burns furnace fuels and supplies EU to adjacent energy networks. Use it to start ore processing before building a larger power system.

## Setup

Place a compatible solid fuel, such as coal or charcoal, in the lower slot. Connect an IC2 cable or a machine to the Generator. The pack config sets its output to 10 EU per tick, and its internal buffer holds 4,000 EU. You can also charge a compatible battery in the upper slot and carry it to a machine.

The basic Generator does not accept lava buckets. A fuel item is consumed when burning starts, so avoid leaving it running without a useful load. A [BatBox](/docs/blocks/ic2/batbox/) can store output between jobs. Use EMI to check the installed crafting recipe.

## Source note

The [IC2 Generator guide](https://wiki.industrial-craft.net/index.php?title=Generator) includes legacy and newer information. This page uses the installed legacy implementation for its limits.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
