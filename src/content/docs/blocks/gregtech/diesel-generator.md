---
title: Diesel Generator
description: Generate EU from diesel fuel with a GregTech generator.
block:
  mod: gregtech
  category: power
  tags: [generator, eu, fuel]
---

The Diesel Generator converts registered diesel fuels such as diesel and biodiesel into IndustrialCraft EU. Use the generator to convert registered diesel fuels into EU. Diesel and Bio Diesel are examples in the pinned fuel list. It can use fuel from a separate production line.

## Set up

Place the generator next to an EU cable or a compatible energy receiver. It can output energy on every side, so choose a connection that leaves room for your fuel input. Its maximum output packet is 12 EU. Check the voltage limit of each cable and machine before connecting a larger power network.

Open the window to see the stored fuel amount. The internal tank holds up to 10,000 mB and accepts one liquid type at a time. Connect a compatible fluid transport system or put a filled container in the upper slot. The lower slot holds a returned container. Clear that slot if it cannot accept the next container. The small display slot shows the stored liquid and is not a normal inventory slot.

## Plan the supply

The generator only accepts fuels registered for its own type. A fuel used by another generator is not necessarily valid here. Use EMI to check the fuel list for this pack and make sure the tank contains the expected material. If it does not accept a new liquid, use the remaining stored fuel first.

The generator buffers energy as it consumes fuel. Connect a suitable storage block if the supply and demand do not run at the same time. Keep fluid pipes and returned containers accessible when you automate the setup.

## Sources

- [Pack GregTech artifact](https://re-ultimate.github.io/Re-Ultimate/mods/GregTech.zip): checked GregTech metadata 2.90h, maintenance release 290i.
- [Pinned mod dependencies](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)
- [Pack GregTech settings](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
