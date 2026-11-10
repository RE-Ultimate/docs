---
title: Wooden Transport Pipe
description: Extracts items from inventories into a BuildCraft pipe network.
block:
  mod: buildcraft
  category: transport
  tags: [mj, automation]
---

A Wooden Transport Pipe extracts items from an adjacent inventory into a BuildCraft item pipe network. It is useful for moving stored items to another inventory or processing machine.

## Set up

Place the wooden pipe against the inventory and connect the rest of the transport line to it. Power the wooden pipe with an engine, such as a redstone engine, and activate that engine with redstone. The pipe needs power to extract items; placing it against a chest alone does not start extraction.

Connect the far end to a compatible inventory and make sure it has room. Test the route with a small number of items before leaving the system unattended. BuildCraft pipes carry items through the world, so a missing destination or a full inventory can leave items outside storage.

Machines with sided inventories may expose different slots on different faces. If the pipe cannot extract the expected item, check the machine's output face and its side configuration. See EMI for the installed pipe recipe.

## Sources

- [Re:Ultimate upstream pack notes](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/docs/UPSTREAM.md)
- [Re:Ultimate pinned dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)

Checked against BuildCraft 3.4.5 in the pack.
