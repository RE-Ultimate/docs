---
title: Deployer
description: Use an item toward a block when a redstone pulse arrives.
block:
  mod: redpower2
  category: machine
  tags: [redstone, automation, placing]
---

A Deployer uses items from its inventory toward the block in front of its working face. It can automate suitable item uses, including placement, without a blutricity supply.

## Setup

Point the working face toward the target and open the Deployer to load its inventory. Give it a redstone pulse to attempt an item use. Turn the signal off before the next pulse; holding the signal on does not repeatedly activate it. The Deployer tries its inventory slots until an item use succeeds.

You can supply its inventory from accessible sides. Keep the working face clear for the target and check whether the particular item can be used in that position. It acts through a simulated player, so mod-specific items may behave differently from a manual click. Pair it with a [Block Breaker](/docs/blocks/redpower2/block-breaker/) for a simple place-and-break cycle when the chosen blocks support it.

## Sources

Checked against RedPower 2.0 prerelease 6. The [Re:Ultimate dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) identifies the pinned RedPower archives and their hashes.
