---
title: Steam Boiler
description: Burn solid or liquid fuel to produce steam.
block:
  mod: railcraft
  category: power
  tags: [steam, water, fuel, multiblock]
---

A Steam Boiler heats water with fuel and supplies steam to compatible machines. It is useful for a sustained steam network, but needs a reliable water supply and time to heat up.

## Build a boiler

The smallest boiler is one firebox with one matching-pressure boiler tank directly above it. Larger boilers use a square layer of fireboxes, with a solid square of tank blocks above. Valid sizes are 2 × 2 fireboxes with two or three tank layers, or 3 × 3 fireboxes with two, three, or four tank layers. All tank blocks must use the same pressure type. Use solid fireboxes for solid fuel or liquid fireboxes for liquid fuel. Check EMI for their recipes.

Fill the boiler with water before adding fuel. Supply water continuously through a compatible liquid connection or filled containers, and provide the matching fuel to the firebox. Connect steam consumers to the tank section. A [Steam Oven](/docs/blocks/railcraft/steam-oven/) can use the steam directly; a steam engine can convert steam to MJ for machines.

## Water safety

**Do not refill a hot, empty boiler.** Adding water to an empty boiler at 300 °C or hotter causes an explosion. If the water supply fails, stop fueling it and let it cool before adding water. Keep the water supply reliable and check it before leaving the boiler running.

The boiler consumes fuel while heating. Steam starts at 100 °C, so allow for warm-up and fuel use before relying on its output.

## Sources

- Checked against Railcraft 6.17.0.0 and the [Re:Ultimate Railcraft configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/railcraft/railcraft.cfg).
- [Pack upstream notes](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/docs/UPSTREAM.md) describe the Railcraft update from FTB Ultimate.
