---
title: Stirling Engine
description: Burn solid fuel to supply MJ to a BuildCraft machine.
block:
  mod: buildcraft
  category: power
  tags: [engine, fuel, mj, power]
---

The Stirling Engine burns solid furnace fuel to produce MJ. It can power a machine directly or supply a suitable power network. It is a useful early source of power when a redstone engine is too slow for the job.

## Use

Place the engine next to its power receiver and point the piston at it. Right-click the engine to open its window and put a suitable fuel, such as coal, in the fuel slot. Apply a redstone signal to start the engine. Use a compatible wrench to change its direction.

The flame in the window shows the current fuel burn. A redstone signal is needed to start another fuel item. Fuel that has already started burning continues to burn, so turn the engine off before adding more fuel if you want to stop the next cycle.

## Plan a power line

The engine sends energy in the direction of its piston. If a machine does not receive power, check the direction, the redstone signal, and the connection to the receiver. A [Mining Well](/docs/blocks/buildcraft/mining-well/) is one possible use for an MJ source.

Keep fuel available for long jobs. The engine does not generate power without fuel, and a machine stops when its stored energy runs out. This is the BuildCraft Stirling Engine; it is separate from Thermal Expansion's Steam Engine.

## Sources

Checked against BuildCraft 3.4.5 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/buildcraft-A-1.4.7-3.4.5%2Bupsilon1.jar). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
