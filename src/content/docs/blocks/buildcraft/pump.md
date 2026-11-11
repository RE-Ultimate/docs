---
title: Pump
description: Draws liquid from the world using MJ power.
block:
  mod: buildcraft
  category: machine
  tags: [mj, automation]
---

The BuildCraft Pump draws liquid from a source below it and sends it into compatible adjacent liquid storage or transport. It is useful for moving lava to an engine or water to equipment that needs it.

## Set up

Place the Pump above the liquid with a clear path down to it. Connect an MJ engine and provide a tank or liquid pipe for output. The Pump lowers its tube to the liquid, then consumes power to collect it. It pushes liquid to compatible adjacent tanks, so make sure the receiving connection has room.

For lava, plan a safe route and monitor the source: removed lava does not automatically return. Water source behavior depends on the pack's BuildCraft configuration, so do not assume the same source rules for every liquid.

If flow stops, check power, the path below the Pump, and the destination tank. A full or incompatible destination prevents the Pump from clearing its internal tank. See EMI for the recipe.

With mining enabled in this pack, craft the pump from a tank above a mining well.

## Sources

- [Re:Ultimate upstream pack notes](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/docs/UPSTREAM.md)
- [Re:Ultimate pinned dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)

Checked against BuildCraft 3.4.5 in the pack.
