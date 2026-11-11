---
title: Nuclear Reactor
description: Generate EU from reactor fuel and manage the heat it produces.
block:
  mod: ic2
  category: power
  tags: [nuclear, uranium, eu, heat]
---

The Nuclear Reactor produces EU from reactor fuel. Its internal grid holds fuel and components that move or remove heat. A working design needs more than fuel: excess heat can damage the surroundings and destroy the reactor.

## Build and operate

Place the reactor where an accident will not destroy important equipment. Connect its output to a suitable EU network. Open the reactor and arrange fuel and cooling components in its grid. Their positions matter because components interact with their neighbors. Use a design checked for this version and watch it through a full fuel cycle before leaving it unattended.

The reactor runs only while the reactor block receives a redstone signal, for example from a lever next to it. Without the signal it makes no EU and its fuel is not used. Remove the signal to stop it.

Reactor Chambers attach directly to the reactor's faces. Each attached chamber adds one column to the six-row component grid, up to six chambers. More space permits different layouts, but does not make an unsafe layout safe. Removing a chamber reduces the available grid space, and items that no longer fit are ejected.

## Heat and control

Fuel generates heat as well as power. Vents, heat exchangers and other reactor components have different roles, so check their placement and condition. A reactor can accumulate heat even when a design appears to work at first. High heat has world effects and can lead to an explosion. Keep valuable structures away from a new or untested setup.

Use EMI to check available fuel and component recipes in this pack. This is the classic IC2 reactor in Minecraft 1.4.7, so layouts for later IC2 versions may use different components or rules.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and [IC2 configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
