---
title: MFSU
description: Store and output EU with a MFSU.
block:
  mod: ic2
  category: storage
  tags: [eu, electricity, battery]
---

The MFSU stores EU for a high-voltage network. Its buffer holds 10,000,000 EU and its output is 512 EU per packet. It can also charge compatible electric items in its interface.

## Connect it

Connect EU input to any face except the marked output face. Connect the output face to a cable or receiving machine. Use an IC2 wrench to change the output direction. The interface also accepts suitable charged items as an energy source.

The maximum safe input is 512 EU per packet. A larger packet can destroy the block. Match the cable and the output to the receiving equipment before connecting power.

Basic IC2 machines and lower-tier storage cannot safely accept this output directly. Use transformers to step down the voltage, or install suitable transformer upgrades in compatible machines before connecting them. An MFE also needs its input reduced to 128 EU per packet.

## Redstone and recipe

The interface lets you cycle redstone behavior. Modes can emit a signal based on charge level or control energy output with a redstone signal. Check the displayed mode when diagnosing an inactive output. Use EMI for the installed crafting recipe.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
