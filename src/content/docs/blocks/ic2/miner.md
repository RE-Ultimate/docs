---
title: Miner
description: Drill a vertical shaft and collect valuable blocks with a scanner.
block:
  mod: ic2
  category: machine
  tags: [mining, ore, eu, automation]
---

The Miner drills down from its position and can search each layer for valuable blocks. It uses EU, a mining drill and Mining Pipes. A scanner lets it find targets to the sides of the shaft. Without a scanner, it follows the vertical shaft.

## Set up

Place the Miner above the area to work and supply low-voltage EU. Put a Mining Drill or Diamond Drill in the drill slot and Mining Pipes in the pipe slot. Add a compatible scanner to the scanner slot to search for nearby valuable blocks. The scanner and drill are charged by the machine while it operates.

The Miner places pipes as it descends. It stops when it cannot continue, for example when it runs out of pipes or reaches a block its drill cannot mine. A connected IC2 Pump can handle liquids encountered by the Miner if the pump can harvest them. Check the area and the power supply if progress stops.

## Collect and recover

Provide an adjacent inventory to receive mined drops, and check that it has room. Collect any items that cannot be stored. The Miner does not keep a large output inventory in its own window.

Remove the drill while the machine still has power to retract its pipe column. It can also place suitable blocks into the shaft as it retracts if those blocks are in the pipe slot. Wait for recovery before moving the machine. The Miner accepts packets up to 32 EU, so use a transformer for a higher-voltage line.

## Sources

Checked against IC2 1.115.231-lf in the [pack artifact](https://re-ultimate.github.io/Re-Ultimate/mods/IC2.jar) and the [pack configuration](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/config/IC2.cfg). The [dependency list](https://github.com/RE-Ultimate/retroEMI/blob/main/tools/dependencies.json) records the artifact checksum.
