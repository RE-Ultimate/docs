---
title: Tesseract
description: Transfer items, liquids, or MJ between matching tesseracts.
block:
  mod: thermal-expansion
  category: transport
  tags: [frequency, items, liquids, mj]
---

Thermal Expansion has separate Item, Liquid, and Energy Tesseracts. A pair on the same frequency transfers the resource for its type. Use them to connect distant parts of a base without running a long physical line.

## Connect a pair

Make two tesseracts of the type you need. Open each window and select the same frequency. Set the sending and receiving modes to suit the connection, then connect the appropriate inventories, liquid transport, or MJ equipment. The controls also provide redstone and access settings.

The Item Tesseract handles items, the Liquid Tesseract handles liquids, and the Energy Tesseract handles MJ. They are distinct blocks in this version. An item frequency does not turn an energy tesseract into an item connection.

## Energy and troubleshooting

The installed configuration sets energy transfer to a maximum of 100 MJ per tick and an energy loss of 25 percent. Plan generation and receiving capacity with that loss in mind. This version uses MJ, not the RF system found in later guides.

If a connection does not work, check that both ends use the same type and frequency, that the sender and receiver modes are set correctly, and that redstone control permits operation. Check that the destination has space and that its adjacent equipment can accept the resource. Access settings can restrict who can change a private tesseract.

## Sources

Checked against Thermal Expansion 2.2.2.2 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/ThermalExpansion.zip) and [pack configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/cofh/thermalexpansion.cfg). The [dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
