---
title: LV-Transformer
description: Change EU packet voltage between IC2 power tiers.
block:
  mod: ic2
  category: power
  tags: [eu, power]
---

The LV-Transformer changes EU packet size between low voltage and medium voltage. IC2 also has MV and HV transformers, which use the same directional and redstone rules at higher tiers.

## Connect the sides

The three-dot face is the high-voltage side. With no redstone signal, that face accepts the higher voltage and the other faces output lower-voltage packets. Apply redstone to reverse the direction: the other faces accept lower-voltage packets and the three-dot face outputs higher-voltage packets. Use a wrench to turn the transformer before connecting the cables.

The LV model converts between 128 and 32 EU packets. The MV model converts between 512 and 128 EU; the HV model converts between 2,048 and 512 EU. In step-down mode each can send up to four lower-voltage packets per tick. In step-up mode it combines energy into a higher-voltage packet. This changes packet size rather than creating energy.

## Protect machines

Match the source, cable, and receiver to the voltage on each side. A basic [Macerator](/docs/blocks/ic2/macerator/) accepts at most 32 EU per packet without a transformer upgrade. Feeding a transformer an excessive packet can destroy it. The HV transformer's unpowered high side is a special case in the installed code and accepts packets beyond 2,048 EU. Transformers have no inventory window; their facing and redstone signal control their operation.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar), the [pack IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg), and the [GregTech recipe settings](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/GregTech/Recipes.cfg). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
