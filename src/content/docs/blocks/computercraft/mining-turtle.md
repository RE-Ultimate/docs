---
title: Mining Turtle
description: Program a turtle to mine and collect blocks.
block:
  mod: computercraft
  category: utility
  tags: [mining, automation, lua]
---

A Mining Turtle is a programmable computer with a mining tool and an inventory. It can dig and move through an area without a fixed quarry frame.

Craft a Turtle first, then place a diamond pickaxe next to it in the crafting grid. The pickaxe becomes its mining tool.

## Start mining

Place the turtle, open its terminal, and put fuel in its inventory. Run `refuel all` to consume suitable fuel. The command reports the fuel level. Movement uses fuel, so allow enough for the turtle to return as well as mine.

The included program `excavate <diameter>` mines a square area downward. For example, `excavate 5` starts a five-block-wide excavation. Give the turtle a clear starting position and a safe route back to its starting point. The program returns to the surface to unload when its inventory fills, and waits there if it needs fuel. Put a suitable inventory behind the turtle at its starting position to collect its output.

The turtle can stop at blocks it cannot dig, and its work depends on the chunks it occupies being loaded. Check the area and fuel supply before leaving it unattended. Protect valuable blocks in its path: the program is intended to remove blocks in its excavation area.

ComputerCraft 1.5 uses its own Lua environment. Check the in-game help and bundled programs for the commands available in this version; examples for newer ComputerCraft releases may use different APIs.

## Sources

- [Pack artifact: ComputerCraft 1.5](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/mods/computercraft.pw.toml)
- [Pack ComputerCraft configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/ComputerCraft.cfg)
