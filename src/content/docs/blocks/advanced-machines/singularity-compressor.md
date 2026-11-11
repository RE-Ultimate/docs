---
title: Singularity Compressor
description: Process materials with a machine that gains speed as it runs.
block:
  mod: advanced-machines
  category: machine
  tags: [eu, processing]
---

The Singularity Compressor is an upgraded [Compressor](/docs/blocks/ic2/compressor/). It uses EU and gains speed while it runs. Its speed changes the rate of each operation, so the first items take longer than later items in a continuous run.

## Use

Put a supported item in the input slot and supply EU. Collect the result from the output. The machine starts to accelerate when it has a valid recipe and enough output space. Its displayed speed rises until it reaches its limit.

The Singularity Compressor uses the IC2 compressor recipe list. For example, it can compress a Mixed Metal Ingot into Advanced Alloy. Other installed mods can change the list, so use EMI to check the current input and output before you automate a recipe.

The machine has one input slot and one output slot. Insert the input from the top and extract the product from a side. The bottom exposes the battery slot. Processing needs enough room for the result. A full output prevents a new operation, even if the machine still has energy.

## Power and speed

The machine accepts packets up to 32 EU without a transformer upgrade. Its energy buffer starts at 5,000 EU and changes with upgrades and the input limit. Supply EU through a cable or place a charged compatible battery in the battery slot. Install a transformer upgrade before connecting a higher-voltage supply. Each transformer increases the input limit by a factor of four.

With the pack settings, the machine uses 3 EU per tick while accelerating without overclockers. It also uses 3 EU per tick at maximum speed. Overclocker upgrades raise the speed limit and acceleration, but increase power use during acceleration. Storage upgrades increase the energy buffer.

A redstone signal lets the machine accelerate or stay at speed without a valid input, provided it has energy. This uses power while idle. Without a valid input or redstone signal, or when energy runs out, speed falls over time. A machine that is still spinning can continue a valid operation as it slows.

## Sources

Checked against Advanced Machines 4.7b in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/AdvancedMachines.zip), the [machine settings](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/AdvancedMachines.cfg), and the [GregTech recipe settings](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/GregTech/Recipes.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records pinned dependencies. The artifact identifies Minecraft 1.4.6 as its target version; the pack runs Minecraft 1.4.7.
