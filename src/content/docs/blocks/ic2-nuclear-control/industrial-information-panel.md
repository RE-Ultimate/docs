---
title: Industrial Information Panel
description: Display data from a Nuclear Control sensor card on a wall.
block:
  mod: ic2-nuclear-control
  category: utility
  tags: [reactor, monitoring, sensor, redstone]
---

The Industrial Information Panel displays information from a Nuclear Control card. Use it to put reactor or energy storage readings where you can see them without opening the target machine. It is a display, so use separate controls to stop a reactor when conditions become unsafe.

## Set up a display

Place the panel and supply a redstone signal to turn its screen on. Open it and put a compatible information card in the top slot. A card determines what the panel can show. The window provides settings for the available fields and a title for the card. Choose the readings that fit your display and close the window to see them on the panel.

For a reactor, use a reactor sensor location card linked to the target. Its available fields include heat, maximum heat, output and remaining cycle time. Other cards can report energy storage or liquid contents. An empty or invalid card cannot provide a reading.

## Range and upgrades

The middle slot accepts range upgrades. A remote card starts with a range of eight blocks in each coordinate; each range upgrade doubles that range, up to seven upgrades. The lower slot accepts a color upgrade. When the target is outside the allowed range, the screen reports that condition. If the target is missing, check its location and that its chunk is loaded.

The panel recipe uses glass panes, dyes, redstone and an IC2 electronic circuit. Check EMI for accepted dye alternatives and the circuit's installed recipe.

## Sources

Checked against Nuclear Control 1.4.5 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2NuclearControl.zip), the [pack settings](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2NuclearControl.cfg), and [GregTech recipe settings](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/GregTech/Recipes.cfg). The [dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records pack dependencies.
