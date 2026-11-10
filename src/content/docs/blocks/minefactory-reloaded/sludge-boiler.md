---
title: Sludge Boiler
description: Processes Harvester sludge into useful materials.
block:
  mod: minefactory-reloaded
  category: machine
  tags: [sludge, processing]
---

The Sludge Boiler turns sludge from a [Harvester](/docs/blocks/minefactory-reloaded/harvester/) into random materials. Its registered outputs include sand, dirt, clay and soul sand. Check EMI for the machine recipe.

## Setup

Supply BuildCraft MJ or IC2 EU and pipe sludge into the machine. The boiler accepts sludge into an internal liquid tank. It consumes sludge during work and sends completed item outputs to an adjacent compatible item pipe or inventory. If no suitable destination accepts an output, the item can drop into the world.

Keep the machine away from places where players or animals spend time. While it runs, it applies poison to nearby living entities and hunger to nearby players. Put the boiler in an enclosed processing area and route items and liquid through its walls.

A redstone signal stops operation. If it does not work, check that the input is sludge, that power is connected and that the output has room. This machine is a useful way to recover materials from a farm byproduct, but its result is random.

## Sources

Checked against MineFactory Reloaded 1.4.6R2.3.2 in the [pack dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json). The installed version uses MJ and EU interfaces.
