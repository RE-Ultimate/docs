---
title: Steam Engine
description: Burn solid fuel with water to produce MJ.
block:
  mod: thermal-expansion
  category: power
  tags: [fuel, water, mj, engine]
---

The Thermal Expansion Steam Engine burns solid fuel and uses water to produce MJ. It can power early machines before you have a larger energy system. This is the Thermal Expansion engine, not the separate BuildCraft engine.

## Set up

Place the engine beside an MJ receiver or connect it with a [Redstone Energy Conduit](/docs/blocks/thermal-expansion/redstone-energy-conduit/). Supply water to the engine and put fuel in its slot. Coal, charcoal, wood and other registered furnace fuels can work. The engine has a water gauge and a fuel indicator in its window.

An [Aqueous Accumulator](/docs/blocks/thermal-expansion/aqueous-accumulator/) can supply water. Keep the supply connected during operation. The engine shuts down when its water is too low or its internal energy storage is full.

## Control and checks

Use the redstone controls to choose when it runs. If a connected machine does not receive power, check the engine's output direction, the receiver, water, fuel and the redstone setting. A full internal energy store can stop the engine until the connected system uses energy.

Different fuels provide different amounts of energy. The engine accepts coal and charcoal separately, and the installed code assigns them different values. Use a dependable water supply before you leave it running.

## Sources

Checked against Thermal Expansion 2.2.2.2 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/ThermalExpansion.zip) and [pack configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/cofh/thermalexpansion.cfg). The [dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
