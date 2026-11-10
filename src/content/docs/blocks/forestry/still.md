---
title: Still
description: Distill biomass into biofuel.
block:
  mod: forestry
  category: machine
  tags: [biofuel, biomass]
---

The Still converts biomass into biofuel. It is the second machine in Forestry's renewable fuel chain, after the [Fermenter](/docs/blocks/forestry/fermenter/).

## Setup and use

Supply BuildCraft-compatible MJ power and feed biomass into the input tank. Use a compatible filled container or a liquid connection. Extract biofuel from the separate product tank into compatible containers or a liquid line.

A renewable plant supply can feed the Fermenter, and its biomass can feed the Still. The resulting biofuel is a liquid fuel for compatible engines. Check the engine's accepted fuel before connecting it; biofuel is not a substitute for every liquid fuel in the pack.

The Still consumes biomass and power to make biofuel. It does not create a self-sustaining system by itself: the farm, fermentation inputs and machines need resources and power too. If it stops, check the biomass supply, power and space in the product tank. Use EMI to inspect the installed processing recipe.

## Sources

Checked against Forestry 2.0.0.11. The [pack manifest](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/mods/forestry.pw.toml) identifies the installed artifact.
