---
title: Induction Furnace
description: Smelt two stacks at once with an electrically heated furnace.
block:
  mod: ic2
  category: machine
  tags: [smelting, eu, heat]
---

The Induction Furnace smelts furnace recipes with EU. It has two input slots and two corresponding output slots, so it can process two stacks in one operation. It is useful when a single [Electric Furnace](/docs/blocks/ic2/electric-furnace/) cannot keep up with an ore-processing line.

## Use

Supply EU and put smeltable items in either input slot. Each input has its own output slot. Leave room in the corresponding output for the result. The furnace uses the installed furnace recipe list, so check EMI for the material you want to smelt.

The furnace heats while it operates. As its heat rises, later operations take less time. When it is idle without a redstone signal, it cools down. A redstone signal keeps it heated while it has power, which makes the next operation faster but consumes energy while it waits.

## Power and planning

The Induction Furnace accepts medium-voltage packets up to 128 EU. Connect it to a suitable EU source or use a compatible charged item in its power slot. Do not connect it directly to a higher-voltage line without a transformer.

For a steady supply of ore, pair it with a [Macerator](/docs/blocks/ic2/macerator/). The Macerator makes dust from supported ores, and the furnace smelts that dust. Two separate outputs help keep the results apart. The machine can also process one input by itself; a second input is not required.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and the [pack configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
