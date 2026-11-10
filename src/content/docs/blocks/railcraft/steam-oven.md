---
title: Steam Oven
description: Smelt furnace recipes in batches using steam.
block:
  mod: railcraft
  category: machine
  tags: [steam, smelting, multiblock]
---

The Steam Oven runs ordinary furnace recipes in batches. It is useful when a boiler already supplies steam and you need to smelt many items.

## Build and connect

Arrange eight Steam Oven blocks as a solid 2 × 2 × 2 cube. Open the completed structure and connect a steam supply, such as a [Steam Boiler](/docs/blocks/railcraft/steam-boiler/). The oven consumes steam, not MJ or EU. Use EMI to find the block recipe.

Place furnace inputs in the input slots and leave space in the output slots. A cycle needs 8,000 mB of steam and can process up to nine items. It can process multiple items from a stack or different valid furnace inputs in the same batch.

## Keep it working

The oven waits until it has a full 8,000 mB of steam to start a cycle. If it does not start, check the steam connection, supply, and input recipe. If outputs cannot fit, clear them before continuing. Batch work uses the same steam for a small or full batch, so fill the input when practical.

A compatible wrench can change the completed oven's facing. Its steam supply is separate from the items in its inventory.

## Sources

- Checked against Railcraft 6.17.0.0 and the [Re:Ultimate Railcraft configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/railcraft/railcraft.cfg).
- [Pack upstream notes](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/docs/UPSTREAM.md) describe the Railcraft update from FTB Ultimate.
