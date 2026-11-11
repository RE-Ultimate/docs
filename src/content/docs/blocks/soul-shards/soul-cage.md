---
title: Soul Cage
description: Use a charged Soul Shard to spawn its stored mob.
block:
  mod: soul-shards
  category: utility
  tags: [mob, spawner, soul shard]
---

A Soul Cage turns a charged Soul Shard into a mob spawner. It is useful for a controlled source of the mob recorded in the shard. The cage has no window: use the shard directly on the placed block.

## Install a shard

Charge a Soul Shard with the mob you want to spawn. The shard must have a mob type and reach at least tier 1 before the cage accepts it. Place the cage in a suitable enclosure, then use the shard on it. The shard is consumed and the cage stores its mob type and tier.

Build room for the mobs to appear and a safe way to collect their drops. The cage checks the number of matching mobs nearby and pauses when too many remain. Move or remove spawned mobs to keep the area clear. Lower-tier cages still need a nearby player and suitable spawn conditions.

## Tiers and control

Higher-tier shards increase the number of mobs the cage can attempt to spawn and reduce its delay. At tier 3 and above, a player does not need to stay near the cage for it to attempt spawning. A tier 5 cage can be stopped with a redstone signal and has less restrictive spawn checks. Other limits, including nearby mobs and available space, can still prevent spawning.

Breaking a loaded cage releases a shard. Check its stored tier before setting up a new cage. Keep the spawning room contained before inserting a shard.

## Sources

Checked against Soul Shards 1.26 in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/SoulShards.zip). The [pack dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the pinned artifacts.
