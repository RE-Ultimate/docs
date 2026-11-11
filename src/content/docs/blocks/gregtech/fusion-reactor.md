---
title: Fusion Control Computer
description: Control a GregTech fusion reactor and its linked injectors.
block:
  mod: gregtech
  category: machine
  tags: [gregtech, eu, power]
---

The Fusion Control Computer controls the GregTech fusion multiblock. This is the later computer-controlled reactor in the installed mod, not the older single Fusion Reactor block. The structure needs Fusion Coils, Advanced Machine Casings and separate ports for power, materials and output.

## Build the ring

Place the computer facing the centre of the reactor. The centre is five blocks in front of it, at the same height. At that height, the 32 Fusion Coils form a ring. For each x offset from the centre, place coils at these z offsets:

| x offset | z offsets |
| --- | --- |
| 0 | -6, 6 |
| ±1 | -6, 6 |
| ±2, ±3 | -5, 5 |
| ±4 | -4, 4 |
| ±5 | -3, -2, 2, 3 |
| ±6 | -1, 0, 1 |

The coil ring alone is not a complete reactor. The following positions use Advanced Machine Casing. Coordinates are `(x, z)` relative to the centre. Each ± sign can be positive or negative independently.

- On both the upper and lower layers: `(±6, 0)`, `(0, ±6)`, `(±5, ±2)`, `(±5, ±3)`, `(±4, ±4)`, `(±2, ±5)`, `(±3, ±5)`.
- On the middle layer: `(±6, ±2)`, `(±6, ±3)`, `(±2, ±6)`, `(±3, ±6)`, `(±7, 0)`, `(0, ±7)`, `(±4, ±2)`, `(±2, ±4)`. Add casing at `(±5, 0)` and `(0, ±5)`, except at the computer position.

Other checked positions must hold casing or the listed port:

- Middle layer, energy injector: `(±4, ±3)`, `(±4, ±5)`, `(±3, ±4)`, `(±5, ±4)`.
- Middle layer, material extractor: `(±1, ±5)`, `(±1, ±7)`, `(±5, ±1)`, `(±7, ±1)`.
- Both upper and lower layers, material injector: `(±1, ±6)`, `(±6, ±1)`.

The code allows casing in port positions, but a working reactor needs the appropriate ports for its inputs and output.

## Run a reaction

Connect energy injectors to an EU supply. Place material injectors on both the upper and lower layers to provide the two inputs, and provide an extractor for the result. The reactor checks its startup energy before it starts a recipe. A redstone signal on the computer prevents new reactions from starting. Its window shows stored energy and structure status slots. Use EMI to check available fusion recipes and their startup requirements.

## Sources

- [Pack GregTech artifact](https://re-ultimate.github.io/Re-Ultimate/mods/GregTech.zip): checked GregTech metadata 2.90h, maintenance release 290i.
- [Pinned mod dependencies](https://raw.githubusercontent.com/RE-Ultimate/retroEMI/main/tools/dependencies.json)
- [Pack GregTech settings](https://raw.githubusercontent.com/RE-Ultimate/Re-Ultimate/main/config/GregTech/GregTech.cfg)
