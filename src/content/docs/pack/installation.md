---
title: Installation
description: Install the Re:Ultimate client in Prism Launcher or run a Re:Ultimate server with Java 8.
---

Re:Ultimate runs on Minecraft 1.4.7 and needs a Java 8 runtime. Each release on GitHub has a client archive for Prism Launcher and a server archive.

:::caution[Back up first]
Make a backup before you change an existing installation or world. The pack keeps existing world and mod identifiers, but a backup is the only safe way back.
:::

## Download

Open [Releases](https://github.com/RE-Ultimate/Re-Ultimate/releases) and download the archive you need:

| File | Use |
| --- | --- |
| `Re-Ultimate-<version>-prism.zip` | Client, imported into Prism Launcher |
| `Re-Ultimate-<version>-server.zip` | Dedicated server |
| `SHA256SUMS` | Checksums for both archives |

To verify a download with GNU coreutils, put it in the same folder as `SHA256SUMS` and run:

```sh
sha256sum --check --ignore-missing SHA256SUMS
```

## Client

1. Install [Prism Launcher](https://prismlauncher.org/).
2. Import the Prism archive into Prism Launcher.
3. Select a Java 8 runtime for the instance.
4. Start the instance.

## Server

1. Extract the server archive into an empty folder.
2. Select a Java 8 runtime.
3. Run `start.sh` on Linux or macOS, or `start.bat` on Windows.

## Updates

The pack's updater reads its manifest from:

```text
https://re-ultimate.github.io/Re-Ultimate/pack.toml
```

The feed uses the RE-Ultimate organization's files and pinned dependencies. No account on the original Rewind Git server is necessary.
