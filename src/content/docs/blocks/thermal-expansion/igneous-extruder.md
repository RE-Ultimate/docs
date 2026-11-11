---
title: Igneous Extruder
description: Make cobblestone, stone, or obsidian from water and lava.
block:
  mod: thermal-expansion
  category: machine
  tags: [stone, lava, water, automation]
---

The Igneous Extruder makes cobblestone, stone, or obsidian. It uses water and lava held in separate tanks and does not need MJ. It is useful for supplying building blocks or materials to an automated base.

## Set up

Connect water and lava to a configured liquid input face. An [Aqueous Accumulator](/docs/blocks/thermal-expansion/aqueous-accumulator/) can supply water. The extruder requires at least one bucket of each liquid in its tanks before it starts, even in cobblestone mode.

Open the window and select the product. The finished block appears in the lower output slot. Remove the product or configure an output face to send it to an adjacent inventory. Change the output selection only after clearing the slot if it contains a different block.

## Liquid use

The installed configuration makes cobblestone without consuming the stored water or lava. Stone consumes water and a small amount of lava. Obsidian consumes both liquids. Keep the tanks supplied for the selected product and use EMI to check the installed amounts.

The machine has redstone and side configuration controls. If it stops, check the liquid gauges, output space, selected product, and redstone setting. A tank can contain liquid without having enough to start the next operation.

## Sources

Checked against Thermal Expansion 2.2.2.2 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/ThermalExpansion.zip) and the [pack configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/cofh/thermalexpansion.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
