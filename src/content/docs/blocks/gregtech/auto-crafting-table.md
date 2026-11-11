---
title: Electric Craftingtable
description: Automate crafting recipes with GregTech's electric workbench.
block:
  mod: gregtech
  category: machine
  tags: [crafting, automation, eu]
---

The Electric Craftingtable is GregTech's powered automatic crafting machine. It uses a recipe pattern and a supply of ingredients to make repeated crafts. The pack enables the machine under its ElectricAutocrafter setting. Its in-game name is Electric Craftingtable.

## Set a recipe

Open the window and place representative items into the nine pattern positions. These are ghost slots: they select a pattern rather than hold the supply. Put actual ingredients in the separate input inventory. The displayed result helps you check the pattern. Keep room for the finished items and any containers returned by the recipe.

The workbench also has mode and throughput controls in its window. Changing the mode changes how the workbench selects recipes. Start with the pattern mode for a specific craft, then check the displayed result before supplying a large quantity. Test a small batch when container items are involved.

## Power and automation

Supply EU to the machine. Its base input limit is 32 EU per packet. The workbench has a power buffer and needs energy for crafting. Connect item insertion to its front input inventory. The opposite face exposes the result slot; the other faces expose the separate output inventory. Its throughput setting also affects energy and item transfer, so check the selected setting when connecting it to other machines.

Keep ingredient supplies matched to the pattern. If crafting stops, check the power supply, input stacks, selected mode, and available output space. Use EMI to inspect the exact installed recipe before setting the pattern.

## Sources

- [GregTech pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/GregTech.zip): checked the 290i maintenance release, with 2.90h metadata.
- [Pinned mod dependencies](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)
- [Pack GregTech configuration](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
