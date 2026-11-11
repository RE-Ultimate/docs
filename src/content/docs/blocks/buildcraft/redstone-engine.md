---
title: Redstone Engine
description: Use a redstone signal to drive a small BuildCraft engine.
block:
  mod: buildcraft
  category: power
  tags: [engine, redstone, mj, pipes]
---

The Redstone Engine is a small BuildCraft engine that runs from a redstone signal. It does not need fuel. It is useful for simple tasks such as powering a [Wooden Transport Pipe](/docs/blocks/buildcraft/wooden-transport-pipe/) to extract items from an inventory.

## Use

Place the engine next to the block that needs power. Apply a redstone signal, for example with a lever. The piston must point at the receiving block. Use a compatible wrench on the engine to change its direction.

A Redstone Engine builds energy slowly. Its piston speed changes with the stored energy, so it can take time to reach its working speed. Use a larger engine when a machine needs more power. The [Stirling Engine](/docs/blocks/buildcraft/stirling-engine/) burns solid fuel and is a useful next step.

## Working with pipes

For an item extraction line, attach the wooden pipe to an inventory, point the engine at the pipe, and provide a route for the extracted items. The engine does not choose a destination for those items. Check the downstream pipes and storage before leaving the system running.

The engine has no fuel slot or fixed inventory window. Turn off its redstone signal to stop it. The engine and the connected block must be loaded for the setup to work.

## Sources

Checked against BuildCraft 3.4.5 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/buildcraft-A-1.4.7-3.4.5%2Bupsilon1.jar). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
