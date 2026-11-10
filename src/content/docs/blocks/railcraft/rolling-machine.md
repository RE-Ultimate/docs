---
title: Rolling Machine
description: Craft Railcraft rolling recipes with MJ power.
block:
  mod: railcraft
  category: machine
  tags: [crafting, mj, rails]
---

The Rolling Machine crafts items that use its own 3 × 3 recipe grid. It is useful for rail materials and other recipes that cannot be made in an ordinary crafting grid. Check EMI for each installed recipe.

## Set up

Place the machine and connect a BuildCraft-compatible MJ power source. Open it and arrange the ingredients in the shown pattern. The machine uses power while it works and puts finished items in its result slot. Take the result or connect compatible item transport.

The grid holds real ingredients. By default, the machine keeps the last item in each occupied recipe slot as a pattern, so add extra ingredients for repeated work. Use the interface control for the last set when you want to consume that pattern. An adjacent chest can refill matching grid slots, and compatible automation can supply ingredients.

## Troubleshooting

If the recipe is valid but progress does not advance, check the MJ supply and whether the machine is paused. If it finishes work but cannot deliver the result, clear the output slot. A pattern with only one of each ingredient can also wait because it is preserving the last set.

This version uses MJ. Do not assume a modern RF or FE connection works.

## Sources

- Checked against Railcraft 6.17.0.0 and the [Re:Ultimate Railcraft configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/railcraft/railcraft.cfg).
- [Pack upstream notes](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/docs/UPSTREAM.md) describe the Railcraft update from FTB Ultimate.
