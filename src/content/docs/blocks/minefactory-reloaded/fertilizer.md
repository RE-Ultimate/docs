---
title: Fertilizer
description: Uses fertilizer to speed up supported plant growth.
block:
  mod: minefactory-reloaded
  category: machine
  tags: [farming, growth]
---

The Fertilizer helps a farm grow faster. It consumes a registered fertilizer when it successfully treats a supported plant.

## Setup

Face it toward the plants at plant level. Its default work area is 3 by 3 in front of the machine. A range upgrade increases the area. Provide BuildCraft MJ or IC2 EU, and put fertilizer in the machine inventory. The nine input slots are accessible from any side.

MineFactory Reloaded fertilizer is registered as an input. The pack configuration disables direct bone meal use. The installed mod also has integrations for other fertilizers, but accepted items depend on loaded mods. Test an input before building a large supply line.

A redstone signal stops operation. The machine only treats plants supported by its registered handlers, so a supplied machine may wait if the current plant cannot be fertilized. Use it alongside a [Planter](/docs/blocks/minefactory-reloaded/planter/) and [Harvester](/docs/blocks/minefactory-reloaded/harvester/), with their work areas aligned.

## Sources

Checked against MineFactory Reloaded 1.4.6R2.3.2 in the [pack dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json). The installed version uses MJ and EU interfaces. The [pack configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/MFReloaded.cfg) sets fertilizer options.
