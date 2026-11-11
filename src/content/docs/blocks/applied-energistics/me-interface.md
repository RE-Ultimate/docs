---
title: ME Interface
description: Connects an ME network to external item transport and processing.
block:
  mod: applied-energistics
  category: transport
  tags: [network, automation, crafting]
---

The ME Interface connects an ME network to pipes, tubes, and machines. It can supply configured items to external systems and accept items for the network. It also supports processing patterns for automated crafting.

## Connect equipment

Connect the interface to a powered [ME Controller](/docs/blocks/applied-energistics/me-controller/). Configure the items it should make available, then connect the external transport or machine. Items inserted into the interface can enter network storage when there is room. Check the target machine's input side and the network's available capacity if items stop moving.

## Process a recipe

An encoded processing pattern tells the network what a machine consumes and produces. Put the pattern in the interface and connect it to the machine. For example, a furnace can process sand into glass. Return the finished glass to the network, such as with an [ME Import Bus](/docs/blocks/applied-energistics/me-import-bus/), so the crafting job can receive its result.

The interface is one part of an automatic crafting setup; it does not create processing recipes by itself.

## Sources

- [Applied Energistics 1: ME Interface](https://appliedenergistics.github.io/ae1-site-archive/ME-Interface/index.html)
- [Re:Ultimate's AE1 artifact](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/mods/applied-energistics-1.pw.toml): rv.9.i for Minecraft 1.4.7.
