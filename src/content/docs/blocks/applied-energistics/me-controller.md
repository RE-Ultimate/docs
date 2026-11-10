---
title: ME Controller
description: Powers and coordinates an ME network.
block:
  mod: applied-energistics
  category: power
  tags: [network, energy]
---

The ME Controller is the center of an ME network. Build one when you want shared access to storage and automated item movement. It accepts power and supplies the connected ME devices.

## Set up

Connect a compatible power source, such as IC2 EU or BuildCraft MJ, to the controller. Attach an [ME Drive](/docs/blocks/applied-energistics/me-drive/) and an [ME Access Terminal](/docs/blocks/applied-energistics/me-access-terminal/) directly or with ME Cable. Put storage cells in the drive. Open the terminal to deposit and retrieve items.

Open the controller to inspect network devices and power use. The network draws power continuously, and adding devices increases its demand. If the controller reports low power, increase the supply or reduce the connected equipment.

Use one controller per connected network. Multiple controllers on the same network cause a controller conflict. Search EMI for the installed recipe. This pack uses AE1, so AE2 channel limits and inscriber instructions do not apply.

## Sources

- [Applied Energistics 1: ME Controller](https://appliedenergistics.github.io/ae1-site-archive/ME-Controller/index.html)
- [Re:Ultimate's AE1 artifact](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/mods/applied-energistics-1.pw.toml): rv.9.i for Minecraft 1.4.7.
