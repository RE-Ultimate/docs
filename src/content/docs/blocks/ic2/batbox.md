---
title: BatBox
description: Store and output EU with a BatBox.
block:
  mod: ic2
  category: storage
  tags: [eu, electricity, battery]
---

The BatBox stores EU for an early low-voltage network. Its buffer holds 40,000 EU and its output is 32 EU per packet. It can also charge compatible electric items in its interface.

## Connect it

Connect EU input to any face except the marked output face. Connect the output face to a cable or receiving machine. Use an IC2 wrench to change the output direction. The interface also accepts suitable charged items as an energy source.

The maximum safe input is 32 EU per packet. A larger packet can destroy the block. Match the cable and the output to the receiving equipment before connecting power.

A BatBox can feed basic IC2 processing machines directly. It is a useful buffer between a [Generator](/docs/blocks/ic2/generator/) and machines that run only part of the time.

## Redstone and recipe

The interface lets you cycle redstone behavior. Modes can emit a signal based on charge level or control energy output with a redstone signal. Check the displayed mode when diagnosing an inactive output. Use EMI for the installed crafting recipe.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
