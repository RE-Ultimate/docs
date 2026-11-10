---
title: Matter Fabricator
description: Turn EU and amplifier materials into UU-Matter.
block:
  mod: gregtech
  category: machine
  tags: [eu, uu-matter, processing]
---

The Matter Fabricator produces UU-Matter for late-game crafting. It needs a substantial EU supply and amplifier material. Use EMI to find the recipes available for the UU-Matter in this pack.

## Setup

Place the machine and connect an EU supply. It accepts packets up to 8192 EU. Add an accepted matter amplifier such as scrap to its input inventory. The machine consumes amplifier as it uses EU to make progress. Remove UU-Matter from the output when it is ready.

A redstone signal stops the machine. Use this to control a large power draw when the rest of your base needs energy. If it does not run, check the signal, EU supply, amplifier, and output space.

## Plan the cost

The pack enables the GregTech Matter Fabricator and disables the Mass Fabricator recipe. The configured processing threshold is 16,666,666 EU per UU-Matter. Each EU used also consumes amplifier credit. The machine needs amplifier as well as power, so plan a supply of both before relying on it. Do not assume that instructions for a later GregTech mass fabricator apply here.

## Sources

- [Re:Ultimate GregTech configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
- [Pinned GregTech 2 dependency](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json): the pack uses the 290i maintenance release, with 2.90h mod metadata.
- [Re:Ultimate recipe settings](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/Recipes.cfg)
