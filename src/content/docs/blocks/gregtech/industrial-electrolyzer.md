---
title: Industrial Electrolyzer
description: Use EU to split supported materials into components.
block:
  mod: gregtech
  category: machine
  tags: [processing, eu, materials]
---

The Industrial Electrolyzer separates supported materials into components. It is a useful step in advanced material processing. For example, GregTech describes electrolyzing bauxite dust to obtain materials for aluminium production. Check EMI for the exact batch and all outputs.

## Setup and operation

Place the machine and connect EU. Its maximum input packet is 128 EU. Put the material and any required cells or other second ingredient in the input slots. Leave space for every product. Some recipes use water, which the machine can accept as a liquid.

For item automation, insert the first ingredient from the top and the second from the bottom. Extract products from the sides. The four output slots must have room for the results before a recipe can begin.

## Troubleshooting

If nothing happens, check the input amounts and cell requirements in EMI, then check the output slots and EU supply. The pack enables constant-energy operation, so keep power available through the process. This machine does not require a multiblock casing.

## Sources

- [Re:Ultimate GregTech configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
- [Pinned GregTech 2 dependency](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json): the pack uses the 290i maintenance release, with 2.90h mod metadata.
