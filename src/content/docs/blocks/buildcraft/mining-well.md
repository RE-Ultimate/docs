---
title: Mining Well
description: Drill a single vertical shaft and collect its block drops.
block:
  mod: buildcraft
  category: machine
  tags: [mining, drill, mj, automation]
---

The Mining Well drills a vertical shaft below its position. It uses MJ and mines one column rather than the wider area of a [Quarry](/docs/blocks/buildcraft/quarry/). Use it to reach materials below a particular point or as a component for a [Pump](/docs/blocks/buildcraft/pump/).

## Set up

Place the well above the column to mine and connect an MJ source. A [Stirling Engine](/docs/blocks/buildcraft/stirling-engine/) can supply power when it faces the well and has fuel and a redstone signal.

The well extends a pipe down its shaft as it works. It stops when it cannot change the next block or reaches the bottom of the world. It does not search sideways for nearby ore. To mine another column, move the well and its power connection.

## Collect the drops

Connect an inventory or an item pipe to the well before it starts. It tries an adjacent inventory and then an eligible pipe. If it cannot send a drop to either, it releases the item into the world near the well. Check that the receiving inventory has space, or items can be lost after they remain on the ground.

Removing the well also removes its connected drilling pipe below. The well has no fixed machine window. Its power supply and the blocks under it determine its operation.

## Sources

Checked against BuildCraft 3.4.5 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/buildcraft-A-1.4.7-3.4.5%2Bupsilon1.jar). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
