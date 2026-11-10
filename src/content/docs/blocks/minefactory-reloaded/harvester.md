---
title: Harvester
description: Harvests mature plants and produces sludge.
block:
  mod: minefactory-reloaded
  category: machine
  tags: [farming, crops, sludge]
---

The Harvester collects supported crops and trees. Use it with a [Planter](/docs/blocks/minefactory-reloaded/planter/) for a farm that replaces what it harvests. Check EMI for the installed recipe.

## Setup

Face the machine toward the crops at plant level. Its default work area starts in front of the machine and covers a 3 by 3 area. A range upgrade expands that area. Give trees enough room to grow and use the machine settings to control supported harvest behavior.

Supply BuildCraft MJ or IC2 EU. A redstone signal stops work. The Harvester sends items to an adjacent compatible item pipe or inventory; otherwise, it drops them into the world. Collect seeds and return them to the Planter.

The Harvester also creates sludge in its internal tank. It can push liquid into adjacent compatible tanks or liquid pipes. Send sludge to a [Sludge Boiler](/docs/blocks/minefactory-reloaded/sludge-boiler/) if you want its materials. Keep item and liquid output routes clear.

## Sources

Checked against MineFactory Reloaded 1.4.6R2.3.2 in the [pack dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json). The installed version uses MJ and EU interfaces.
