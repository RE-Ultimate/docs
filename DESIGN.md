# Re:Ultimate docs design

Mode: Read. Readers come to find a fact, follow steps, or look up a block. Structure and wayfinding come first.

## Direction: Crest

The site looks like the pack's own world, done cleanly: a warm oak-dark ground, parchment text, and torch gold as the one brand color.
Game UI pieces (windows, slots, buttons, item tooltips) use Minecraft's bevelled style. Reading text stays calm and modern.
Rule of thumb: the game style is for controls and data you would see in game (recipes, machine windows, inventories). Articles are not decorated.

Pinned constraints: warm dark, never pure black. Parchment primary text. Dense useful information, minimal copy, no em dashes, no continuous animation.

## Brand

- Primary logo: the pixel wordmark "RE:ULTIMATE" in Pixelify Sans 700, caps, with a three-step oak extrusion (`.ru-wordmark` in `src/styles/theme.css`). The colon is torch gold.
- Icon: the "gold colon", the wordmark's colon as two extruded gold blocks on a 16 x 16 grid (`public/favicon.svg`, PNG fallback `public/favicon.png`). Scale it by whole pixels only. Do not draw letters into small icons.
- Splash text: one short, true, static line in splash yellow per page at most ("Maintained again!" on the home page).
- Social card: `public/og.png`, 1200 x 630.
- The header shows the wordmark alone, with "Docs" after a thin rule.

## Tokens

Defined in `src/styles/theme.css` as `--ru-*` and mapped onto Starlight's `--sl-*` variables.

| Token | Value | Use |
| --- | --- | --- |
| `--ru-bg` | `#1b1713` | Page, header, sidebar |
| `--ru-surface` / `--ru-surface-2` | `#251f19` / `#30281f` | Panels, search results |
| `--ru-text` | `#f3e9d8` | Body text, headings, logo face |
| `--ru-text-2` | `#c0b19a` | Secondary text, table labels |
| `--ru-text-3` | `#8e7f6a` | Markers, placeholders |
| `--ru-rule` / `--ru-rule-strong` | `#3a3128` / `#4e4236` | Rules and dividers |
| `--ru-accent` | `#f2b25c` | Torch gold: brand colon, primary action, focus, current page |
| `--ru-gold` / `--ru-red` / `--ru-green` | `#ffaa00` / `#ff6b5b` / `#a5c46f` | Caution, danger, tip and "checked against pack code" |
| `--ru-gui`, `--ru-gui-hi`, `--ru-gui-lo` | `#3a2f25`, `#5e4c3a`, `#110d09` | Game windows and their bevel |
| `--ru-slot`, `--ru-slot-hi`, `--ru-slot-lo` | `#16120e`, `#4a3d30`, `#0b0806` | Sunken slots and inputs |
| `--ru-btn*` | `#4a3c2e` and bevels | Game buttons |
| `--ru-tip-*`, `--ru-mod` | purple tooltip, `#7d7dff` | Item tooltips and the mod name line |

Only one theme exists. `ThemeProvider` forces dark and `ThemeSelect` is empty.

## Type

- Bricolage Grotesque Variable for headings and reading text. Headings 680 to 760 with tight tracking. Body 17px at 1.7.
- Pixelify Sans Variable for the wordmark and game UI only: buttons, tabs, window titles, tooltips, stack counts, sidebar group labels.
- JetBrains Mono Variable for IDs, file names, and code. Ligatures off.

## Game UI primitives

- `.ru-win`: oak window with a 2px black edge and a light top-left, dark bottom-right bevel. `.ru-win-title` is the pixel title.
- Slots: sunken bevel on `--ru-slot`. Slots in a grid touch, as in the game.
- `.ru-btn`: bevelled game button with a pixel label; `.is-primary` is torch gold; pressed or selected state is torch gold.
- Item tooltips: near-black purple with a purple gradient edge, pixel type, white name, grey details, blue mod name.

## Item art

- Pixel sprites are 32px files (a clean 2x of the 16px texture). They show at whole multiples only (32 or 64px) with `image-rendering: pixelated`.
- Block renders (128px or larger) show smoothly at the same slot sizes.
- Every image keeps the license its source states (`src/data/wiki-media.json`). Never describe game art as MIT.

## Home page

`src/components/home/Home.astro`, data in `src/lib/home.ts`. Wider than the article column.

- Hero: wordmark with splash, one-line description, Download (primary) and Install guide buttons, the update feed with a copy button, and a crafting bench window with real pack recipes behind game-button tabs.
- Route line: the five playthrough stages as stops joined by a rail track. Each stop's slot links to its lead block.
- Block reference inventory: every block page as a slot with a game tooltip, filterable by mod.

## Block pages

Order: intro, Crafting, Construction, Processing examples, the article, Machine summary (before Sources), Sources, Image credits.

- The picture sits right of the lead in a large slot. Its caption links to the file page and the credit table.
- A recipe is a game window ("Crafting Table" or the station name) with touching slots, a pixel arrow and the output slot, beside the materials and result tables.
- Machine windows: when `src/data/machine-guis/<mod>/<slug>.json` exists, processing examples that run in the block are drawn in its own window (`MachineWindow.astro`) with the example items in its input and output slots. The Machine summary shows the empty window with numbered slots and a legend. The site draws these windows from layout facts; it never ships a mod's GUI texture. Coordinates render at exactly 2x.
- Recipe tabs and the batches stepper are game buttons. Verification text is green for `pack-code`, gold for `legacy-reference`.
- Without JavaScript the toolbar is hidden and every recipe shows in full.

## Interaction

- Focus: 2px torch outline on every focusable element.
- Hover: links underline in torch gold; slots lighten.
- Search is Pagefind in Starlight's modal, shown as a game window with a slot-style field.
- The catalog filter (text, mod, category) keeps its state in the URL. Without JavaScript all rows show.
- No decorative motion. Buttons move 1px when pressed. Reduced-motion users get no transitions.

## Responsive

- Under 50em the sidebar becomes Starlight's popover menu behind a game button.
- Under 60rem the home hero stacks and the route line runs vertically.
- Under 40rem slots shrink to 52px with 32px icons, catalog rows become two-line entries, and filters stack.
- Code blocks and wide tables scroll inside their own box. The page itself must never scroll sideways (a browser test checks this).
