---
title: Teleporter
description: Link two locations and travel between them with stored EU.
block:
  mod: ic2
  category: transport
  tags: [teleport, travel, eu]
---

The Teleporter moves an entity to a linked Teleporter when it receives a redstone signal and has enough stored energy nearby. It is useful for repeated travel between distant locations. It uses energy from compatible adjacent storage blocks rather than accepting a normal cable connection as its own energy buffer.

## Link the endpoints

Place a Teleporter at each location. Use a Frequency Transmitter on the first and then on the second to establish the link. If the first endpoint has no target, the link also sets its return destination. An endpoint that already has a target does not automatically replace that target, so check existing links when you change a route.

Put compatible charged EU storage directly next to the sending Teleporter. Apply a redstone signal and stand on or close to the pad. The machine checks the destination and the available energy before it moves an entity. A second powered setup is needed to send the player back.

## Energy and travel

Longer trips and heavier loads cost more EU. This pack enables inventory weight in the calculation, so a trip that works with an empty inventory can need more stored energy when you carry items. If a trip does not start, check the link, signal and charge at the sending end.

Leave space at the destination for arrival. Avoid leaving both pads powered when you do not want automatic travel. The signal allows the Teleporter to act on nearby entities, not only players. Removing the destination invalidates the stored target when the sender next checks it.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and the [pack configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
