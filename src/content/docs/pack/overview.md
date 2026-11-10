---
title: Pack overview
description: What Re:Ultimate is, where it comes from, what this fork changes, and where its source lives.
---

Re:Ultimate is a maintained Minecraft 1.4.7 modpack. It is based on Rewind Upsilon and FTB Ultimate.
The RE-Ultimate organization on GitHub maintains the pack and its tools.

## Origin

[Rewind](https://rewindmc.com) makes "retro" modpacks for important past Minecraft versions. Upsilon is its first pack, built for Minecraft 1.4.7.
Rewind packs are compatible with the FTB pack of the same version, and they fix many known bugs of those old mods.

Re:Ultimate continues from Rewind Upsilon. The original README, change list, and mod credits are kept in the [upstream notes](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/docs/UPSTREAM.md).

## Changes in this fork

The pack README lists these changes compared with Rewind Upsilon:

- The MineFactory Reloaded duplicate-enchantment fix.
- Expanded retroEMI integrations.
- Applied Energistics recipe filling from ME storage.
- Taller Applied Energistics terminals.
- The dedicated-server crafting crash fix.

Existing world and mod identifiers are kept. The updater uses this organization's feed and pinned dependencies, so no account on the original Git server is necessary.

## Repositories

| Repository | Purpose |
| --- | --- |
| [Re-Ultimate](https://github.com/RE-Ultimate/Re-Ultimate) | Pack manifests, configs, branding, installer templates, and update feed |
| [UltimateFixes](https://github.com/RE-Ultimate/UltimateFixes) | Fixes, backports, and game branding |
| [retroEMI](https://github.com/RE-Ultimate/retroEMI) | Recipes, crafting transfer, and the Applied Energistics terminal UI |
| [translations](https://github.com/RE-Ultimate/translations) | Mod translations |
| [NilLoader](https://github.com/RE-Ultimate/NilLoader) and [NilGradle](https://github.com/RE-Ultimate/NilGradle) | Loader and build tooling |
| [UnknownThingy](https://github.com/RE-Ultimate/UnknownThingy) | Minecraft mappings |
| [unsup](https://github.com/RE-Ultimate/unsup) | Updater source |
| [maven](https://github.com/RE-Ultimate/maven) | Pinned build and launcher artifacts |
| [docs](https://github.com/RE-Ultimate/docs) | This documentation site |

## Licenses

The MIT license covers the new Re:Ultimate maintenance scripts, documentation, and branding only. It does not replace any original license.

- UltimateFixes and retroEMI are MIT licensed forks.
- NilLoader and unsup are LGPL licensed.
- Translations, bundled mods, sounds, and music keep the licenses of their original authors.

See [component licenses](https://github.com/RE-Ultimate/Re-Ultimate/blob/main/THIRD_PARTY.md) for the full list.
