---
title: Magmatic Engine
description: Burns lava to supply MJ power.
block:
  mod: thermal-expansion
  category: power
  tags: [mj, automation]
---

The Magmatic Engine converts lava into Minecraft Joules (MJ). It is a useful power source for Thermal Expansion machines when you have a reliable lava supply.

## Set up

Place the engine with its output facing a machine or compatible MJ connection. Supply lava through a compatible liquid connection or use a filled container in its interface. Set its redstone control in the interface. The engine can be configured to run with or without a signal. Check that setting and the connection if the connected machine receives no power.

A [Pump](/docs/blocks/buildcraft/pump/) and liquid transport can supply lava from a pool. The pool is finite, so keep the supply accessible and watch the engine's fuel level. A [Redstone Energy Cell](/docs/blocks/thermal-expansion/redstone-energy-cell/) can buffer power between generation and machines.

This is a Thermal Expansion 2 engine: its output is MJ. Do not plan around the RF values or controls of a later version.

The crafting recipe uses invar ingots, invar gears, a piston, and a Redstone Transmission Coil.

## Sources

- [Re:Ultimate upstream pack notes](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/docs/UPSTREAM.md)
- [Re:Ultimate pinned dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)

Checked against Thermal Expansion 2.2.2.2 in the pack.
