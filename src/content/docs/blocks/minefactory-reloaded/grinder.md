---
title: Grinder
description: Processes supported mobs for drops and mob essence.
block:
  mod: minefactory-reloaded
  category: machine
  tags: [mobs, essence]
---

The Grinder automates mob processing and produces mob essence. It is useful at the end of a controlled mob farm.

## Setup

Face the machine into the mob chamber and supply BuildCraft MJ or IC2 EU. Its default horizontal work area is 5 by 5 in front of the machine. A range upgrade expands it. Keep the chamber contained and move supported mobs into the work area.

Connect an adjacent item pipe or inventory for drops. The Grinder also stores mob essence in an internal tank and pushes it into adjacent compatible liquid tanks or pipes. Route this liquid to an [Auto-Enchanter](/docs/blocks/minefactory-reloaded/auto-enchanter/) or a storage tank.

The Grinder does not target players or baby animals. Mob support and drops depend on registered handlers, so do not assume every creature gives the same drops as a player kill. Redstone stops the machine. Check the chamber, power and both output paths if production stops.

## Sources

Checked against MineFactory Reloaded 1.4.6R2.3.2 in the [pack dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json). The installed version uses MJ and EU interfaces.
