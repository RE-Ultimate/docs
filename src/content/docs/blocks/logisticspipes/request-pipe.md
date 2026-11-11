---
title: Request Logistics Pipe
description: Request items from a connected Logistics Pipes network.
block:
  mod: logisticspipes
  category: transport
  tags: [pipes, items, logistics]
---

The Request Logistics Pipe lets you select items from a Logistics Pipes network and ask for them at one location. It is useful when stored supplies are spread across several inventories. It can also list craftable items when the network has correctly configured crafting pipes.

## Set up a network

Place the Request Logistics Pipe next to a chest that can receive the requested items. Connect it to a Provider Logistics Pipe next to a chest containing supplies. Basic Logistics Pipes can join the routed pipes. The provider reads adjacent inventories and extracts items for orders; a plain chest connected only to transport pipe does not provide its contents to requests.

Add a Logistics Power Junction next to the pipe network and supply it with BuildCraft power or IC2 EU. The network uses this power for requests and provider extraction. Check the power supply and pipe connections if an order does not move. A destination chest must have space for the items.

## Request items

Use a compatible wrench on the Request Logistics Pipe to open its order window. Refresh the list, select an item, set the amount, and press Request. The display can show stored items, craftable items, or both. A successful request sends items through the network to the request pipe and its adjacent inventory. The window can also report missing items when a request cannot be fulfilled.

Start with one provider chest and a separate receiving chest. Once that works, add providers to other inventories. Crafting requires a configured crafting setup; the Request Pipe alone does not define a recipe or make items.

## Sources

Checked against Logistics Pipes 0.7.0.98d in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/LogisticsPipes.jar). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
