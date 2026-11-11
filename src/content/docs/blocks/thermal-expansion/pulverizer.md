---
title: Pulverizer
description: Grinds materials into dust and other products.
block:
  mod: thermal-expansion
  category: machine
  tags: [mj, automation]
---

The Pulverizer turns items into dust and other materials using Minecraft Joules (MJ). It is useful early in an ore-processing line and can also make sand from cobblestone. Some recipes have a chance of a second product.

## Set up

Connect an MJ source, such as a [Magmatic Engine](/docs/blocks/thermal-expansion/magmatic-engine/), and put a valid item in the input slot. Take both products from the output slots. Check EMI for the installed recipes and yields before choosing a processing route.

Use the side configuration tab to assign item input and output faces. Connect storage or pipes to those faces for automation. The machine can eject products to a suitable adjacent inventory. Leave space for both outputs: a full output can stop processing.

A [Powered Furnace](/docs/blocks/thermal-expansion/powered-furnace/) can smelt suitable dusts after grinding. The machine uses MJ, not the RF used by later Thermal Expansion versions.

For example, one iron ore produces two iron dust, with a 10% chance of nickel dust. One cobblestone produces one sand, with a 10% chance of gravel.

## Sources

- [Re:Ultimate upstream pack notes](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/docs/UPSTREAM.md)
- [Re:Ultimate pinned dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)

Checked against Thermal Expansion 2.2.2.2 in the pack.
