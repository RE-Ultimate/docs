---
title: Redstone Energy Conduit
description: Carry MJ between engines and machines.
block:
  mod: thermal-expansion
  category: transport
  tags: [mj, power, conduit]
---

The Redstone Energy Conduit carries MJ from engines to machines. Use it to join several MJ sources and receivers without placing each engine directly beside a machine. It belongs to the MJ-era Thermal Expansion release in this pack.

## Make and connect it

First make empty Energy Conduits from electrum ingots and Hardened Glass. Fill each empty conduit with Molten Redstone in a [Liquid Transposer](/docs/blocks/thermal-expansion/liquid-transposer/). The transposer needs MJ and a supply of the liquid. The fill operation uses 50 mB for each conduit.

Place the finished conduits between an MJ source and a compatible receiver. Check the connection at each end. A wrench changes the mode of a conduit node next to compatible equipment. Check that the node mode suits the connected source or receiver.

## Loss and checks

The installed pack sets conduit energy loss to five percent. A long route is useful for distributing power, but allow for the loss when you size the supply. The conduit carries MJ in this version. Guides for later fluxducts and RF describe a different system.

If a machine stops, check its redstone setting and input face, the engine's fuel and output, and each conduit connection. A working line still needs a source that produces enough energy for the connected machines.

## Sources

Checked against Thermal Expansion 2.2.2.2 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/ThermalExpansion.zip) and [pack configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/cofh/thermalexpansion.cfg). The [dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
