---
title: Router
description: Moves items through a connected group of inventories.
block:
  mod: factorization
  category: transport
  tags: [items, automation]
---

The Factorization Router moves items between its buffer and a connected group of inventories. It can simplify a wall of machines or Barrels when each needs the same item operation.

## Setup

Place the Router next to an inventory connected to the target inventories. It searches through adjacent inventories, so a gap in the chain prevents it reaching the inventories beyond that gap. The Router has a single item buffer accessible to external inventory automation.

Set it to insert into or extract from the connected inventories. Choose the target side or a specific slot in its interface. Start with one item and confirm that it reaches the intended slot before connecting a large supply. Sided inventories restrict which slots are exposed, so the target side matters.

A redstone signal stops routing. Upgrades add options such as item filtering, machine filtering, speed, throughput and ejection. Use a machine filter when a connected network contains inventories that must not receive the same items. The basic Router operates without an external power connection.

## Sources

Checked against Factorization 0.7.21 in the [pack dependency list](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json).
