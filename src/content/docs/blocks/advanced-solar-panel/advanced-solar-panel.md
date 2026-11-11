---
title: Advanced Solar Panel
description: Generate EU from daylight and keep a smaller supply during darkness or rain.
block:
  mod: advanced-solar-panel
  category: power
  tags: [solar, eu, generator]
---

The Advanced Solar Panel generates IC2 energy without fuel. It stores EU and can charge four compatible items in its window. Place it where it can see the sky and connect it to an EU network. It produces less power when the sun is down or rain blocks sunlight, and none when its sky view is blocked.

## Use

Connect a suitable cable or machine to the panel. Open the panel to see its stored energy, maximum output and current generation. Put rechargeable items in the four slots to charge them from the internal buffer. The panel emits energy on all sides. Leave the space above it open to the sky; a roof above it stops generation.

The pack config sets the Advanced Solar Panel to generate 8 EU/t in sun and 1 EU/t at night or in rain. Its buffer holds 32,000 EU and its maximum output is 32 EU/t. A battery or storage block can help supply machines when generation falls.

## Higher tiers

The Hybrid Solar Panel generates 64 EU/t in sun and 8 EU/t otherwise, with a 100,000 EU buffer and 128 EU/t maximum output. The Ultimate Hybrid Solar Panel generates 512 EU/t in sun and 64 EU/t otherwise, stores 1,000,000 EU and outputs up to 512 EU/t. Their higher output needs a compatible voltage network. Use transformers where needed before connecting lower-voltage machines.

The pack enables the hard panel recipes. The Advanced tier uses irradiant parts, and the IC2 Solar Panel ingredient also has GregTech's expensive recipe enabled. Check EMI for the current ingredients and higher-tier alternatives before gathering materials.

## Sources

Checked against Advanced Solar Panels 3.3.4 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/AdvancedSolarPanel.zip), the [panel settings](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/AdvancedSolarPanel.cfg), and [GregTech recipe settings](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/GregTech/Recipes.cfg). The [dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records pack dependencies.
