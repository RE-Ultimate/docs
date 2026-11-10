---
title: Block Breaker
description: Break the block in front of it on a redstone pulse.
block:
  mod: redpower2
  category: machine
  tags: [redstone, automation, tubes]
---

The Block Breaker removes the block in front of its working face and sends its drops out of the opposite side. Use it for repeatable block collection where a block is placed again between pulses.

## Setup

Point the working face at the block to break. Connect the back to pneumatic tubes and a destination inventory, then provide a redstone pulse. Each new pulse can trigger a break; a constant signal does not repeat the action. It does not need blutricity.

The breaker collects the block's normal drops through its own breaking logic. Do not assume it acts like a player with a particular tool or enchantment. It cannot break unbreakable blocks. If output cannot leave, its internal buffer can hold up further operation. Check the output route and clear the destination before continuing.

## Sources

Checked against RedPower 2.0 prerelease 6. The [Re:Ultimate dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) identifies the pinned RedPower archives and their hashes.
