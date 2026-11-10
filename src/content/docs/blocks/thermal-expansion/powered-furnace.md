---
title: Powered Furnace
description: Smelts items using MJ power.
block:
  mod: thermal-expansion
  category: machine
  tags: [mj, automation]
---

The Powered Furnace smelts items with Minecraft Joules (MJ) instead of consuming fuel in its own inventory. It is useful alongside a [Pulverizer](/docs/blocks/thermal-expansion/pulverizer/) when a shared engine supplies several machines.

## Set up

Connect an MJ supply and place a valid smelting input in the machine. Remove the finished output or provide an adjacent inventory for automatic output. EMI shows the recipes available in this pack.

For automation, assign the input and output faces in the machine's side configuration tab. Connect the preceding machine or an item pipe to an input face, and storage to an output face. If processing stops, check the energy supply and the output slot as well as the input.

This is the Thermal Expansion 2 MJ machine. Instructions for later RF versions do not describe its power system.

## Sources

- [Re:Ultimate upstream pack notes](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/docs/UPSTREAM.md)
- [Re:Ultimate pinned dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)

Checked against Thermal Expansion 2.2.2.2 in the pack.
