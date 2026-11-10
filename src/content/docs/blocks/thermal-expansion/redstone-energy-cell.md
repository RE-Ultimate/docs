---
title: Redstone Energy Cell
description: Stores and distributes MJ power.
block:
  mod: thermal-expansion
  category: power
  tags: [mj, automation]
---

The Redstone Energy Cell stores Minecraft Joules (MJ) for later use. Put one between engines and machines to buffer changes in demand and to control the rate at which power enters and leaves the cell.

## Set up

Connect the MJ source and machines to the cell with compatible power connections. Use the cell's interface to set input and output rates. This TE2 version does not have input and output face settings. Check those settings when a connected engine cannot charge the cell or a machine does not receive power.

A cell is useful with a [Magmatic Engine](/docs/blocks/thermal-expansion/magmatic-engine/) and a group of processing machines. It stores energy; it does not create fuel or increase the total energy produced by an engine. Redstone control is also available in its interface.

Use EMI for the installed crafting steps. This cell belongs to the MJ-era Thermal Expansion 2 power system, not the later RF system.

## Sources

- [Re:Ultimate upstream pack notes](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/docs/UPSTREAM.md)
- [Re:Ultimate pinned dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)

Checked against Thermal Expansion 2.2.2.2 in the pack.
