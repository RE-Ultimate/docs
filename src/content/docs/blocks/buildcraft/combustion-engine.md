---
title: Combustion Engine
description: Burns liquid fuel to produce MJ and requires cooling.
block:
  mod: buildcraft
  category: power
  tags: [mj, automation]
---

The Combustion Engine burns compatible liquid fuel to generate Minecraft Joules (MJ). It is useful for demanding BuildCraft machinery such as a [Quarry](/docs/blocks/buildcraft/quarry/), provided you can supply fuel and cooling.

## Set up

Point the engine at a compatible power connection, supply liquid fuel and water coolant, and apply a redstone signal. Check its interface for fuel, coolant, and heat. Set up the water supply before leaving the engine running.

The engine heats up while it burns fuel. If cooling is inadequate, it can reach the explosion stage and damage the area. Keep a reliable water supply and stop the engine if its heat continues to rise. Removing the redstone signal stops fuel burning, but the engine must cool before it can resume after a shutdown delay.

A [Pump](/docs/blocks/buildcraft/pump/) can help supply water. Use EMI for the installed engine recipe and check fuel availability before building a large installation.

## Sources

- [Re:Ultimate upstream pack notes](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/docs/UPSTREAM.md)
- [Re:Ultimate pinned dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)

Checked against BuildCraft 3.4.5 in the pack.
