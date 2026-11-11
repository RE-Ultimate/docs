---
title: Reinforced Machine Casing
description: Build GregTech multiblocks with reinforced machine casings.
block:
  mod: gregtech
  category: building
  tags: [gregtech, multiblock, structure]
---

The Reinforced Machine Casing is a GregTech multiblock component. It is used in structures such as the [Industrial Blast Furnace](/docs/blocks/gregtech/industrial-blast-furnace/). It does not process items or store EU by itself.

## Use in a furnace

Build the casing shell around the Industrial Blast Furnace controller as described on its page. The furnace checks the block and metadata at each shell position. Reinforced Machine Casings are accepted alongside Standard and Advanced Machine Casings in that shell.

The installed furnace code adds 50 heat capacity for each reinforced casing it checks. Standard casings contribute 30 and advanced casings contribute 70. Heating coil tier and the furnace interior also affect the final capacity. The furnace must reach a recipe's required heat before it can process that recipe, so choose the shell and coil for the material you want to make.

## Prepare materials

The registered crafting recipe makes four reinforced casings. It uses steel plates, advanced circuits and a compatible machine hull. GregTech registers ingredient alternatives through the ore dictionary, so EMI is useful for checking the items accepted by the installed pack. Make enough casings for the intended structure before you dismantle an existing furnace.

A casing is a structural block and has no machine window. Do not confuse it with Advanced Machine Casing: the fusion computer checks specifically for the advanced variant in its own structure.

## Sources

- [Pack GregTech artifact](https://re-ultimate.github.io/Re-Ultimate/mods/GregTech.zip): checked GregTech metadata 2.90h, maintenance release 290i.
- [Pinned mod dependencies](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)
- [Pack GregTech settings](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
