---
title: Sawmill
description: Cut logs into planks and recover materials from wooden items.
block:
  mod: thermal-expansion
  category: machine
  tags: [wood, planks, mj, processing]
---

The Sawmill cuts logs into planks with MJ power. It makes six planks from a standard log and also produces sawdust. This makes a Sawmill useful when a base needs a large supply of wood for building or crafting.

## Use

Connect an MJ source and put a supported item in the input slot. The main output goes into the two upper slots. The lower output slot holds secondary products. Remove the products to make room for more work.

The Sawmill can also take apart some wooden items. For example, it returns eight planks from a chest. Check EMI for the available inputs and outputs, because other mods can add recipes. The machine consumes its input; it does not repair or preserve the original item.

## Power and automation

A [Magmatic Engine](/docs/blocks/thermal-expansion/magmatic-engine/) can supply MJ to the machine. The energy gauge shows the stored power. If the Sawmill does not run, check its power supply, input, output space, and redstone control setting.

Use the side configuration tab to assign item input and output faces. This allows pipes or adjacent inventories to move materials through an automated line. Keep space for secondary products as well as the main output. The redstone control tab changes when the machine is allowed to run.

The similarly named Industrial Sawmill belongs to GregTech and has different power and setup requirements.

## Sources

Checked against Thermal Expansion 2.2.2.2 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/ThermalExpansion.zip) and the [pack configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/cofh/thermalexpansion.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
