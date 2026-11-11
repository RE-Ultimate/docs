---
title: Geothermal Generator
description: Turn lava into EU for an IC2 network.
block:
  mod: ic2
  category: power
  tags: [eu, power]
---

The Geothermal Generator converts lava into EU. It is useful when a base has a reliable lava supply and needs more steady output than a single [Solar Panel](/docs/blocks/ic2/solar-panel/).

## Supply lava

Open the window and put a lava bucket or lava cell in the lower slot. A bucket becomes an empty bucket; a lava cell is consumed. Remove the empty bucket before adding another. A compatible liquid pipe can also fill the internal lava tank. The tank holds 24 buckets of lava.

The installed configuration produces 20 EU per tick while the generator has fuel and room to produce energy. Connect it to an IC2 cable or an adjacent EU receiver. Its output is within the 32 EU packet limit of basic IC2 machines. A compatible rechargeable item can charge in the upper slot instead.

## Plan the supply

Lava is consumed, so provide a replacement source for continuous operation. The tank accepts lava and does not drain through its tank interface. When automating containers, test that empty buckets are removed from the fuel slot; a blocked slot prevents another filled container from entering. The window displays stored lava and energy, which helps distinguish an empty tank from a full output network.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar), the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg), and the [GregTech recipe settings](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/GregTech/Recipes.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
