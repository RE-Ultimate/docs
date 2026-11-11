# Re:Ultimate docs design

Mode: Read. Readers come to find a fact, follow steps, or look up a block. Structure and wayfinding come first.

## Direction: the register

The site reads like a printed register of the pack: ruled ledger rows, a clear entry heading, and exact values set in mono.
The block reference is the core of this idea. It is a ledger table, not a grid of cards.
The pack's own world supplies the one accent: Minecraft formatting colors. `§e` yellow marks focus, the current page, and search hits.
`§6` gold, `§c` red, and `§a` green mark caution, danger, and tip notices.

Pinned constraints: true black `#000` background, white primary text, thin rules, dense information, minimal copy.
No card or pill containers, no eyebrow labels above headings, no continuous animation, no em dashes.

## Tokens

Defined in `src/styles/theme.css` as `--ru-*` and mapped onto Starlight's `--sl-*` variables.

| Token | Value | Use |
| --- | --- | --- |
| `--ru-bg` | `#000` | Page, header, sidebar, dialogs |
| `--ru-text` | `#fff` | Body text, headings, links |
| `--ru-text-2` | `#b0b0b0` | Secondary text, table labels (about 10:1 on black) |
| `--ru-text-3` | `#8a8a8a` | Separators, markers, placeholders (about 6:1) |
| `--ru-rule` | `#262626` | Row rules and dividers |
| `--ru-rule-strong` | `#404040` | Section rules, control borders |
| `--ru-hover` | `#0e0e0e` | Row hover fill |
| `--ru-code-bg` | `#0b0b0b` | Code blocks |
| `--ru-accent` | `#ffff55` | Focus ring, current page, search highlight, link hover underline |
| `--ru-gold` / `--ru-red` / `--ru-green` | `#ffaa00` / `#ff5555` / `#55ff55` | Notice titles and rules |

Only one theme exists. `ThemeProvider` forces dark and `ThemeSelect` is empty.

## Type

- Archivo Variable, self-hosted, with its width axis. Body text uses normal width. Headings use expanded width (108% to 125%) and heavy weight with -0.015em to -0.03em tracking.
- The wordmark is typographic: "Re:Ultimate" in Archivo at 125% width and weight 800, with the colon in accent yellow. "Docs" follows after a thin rule. The pack's PNG wordmark uses a generic sans, so it is not used here.
- JetBrains Mono Variable for code, IDs, and file names only. Ligatures are off so `->` and `<=` read literally.
- Body is 17px with 1.7 line height and a 68ch measure.

## Structure

- Rules carry the hierarchy. A full-width strong rule opens each H2. Tables have a white top rule, a strong rule under the header, and quiet row rules.
- A Markdown table with empty headers renders as a fact list (no header row).
- Sidebar group labels are white and bold over a rule. The current page has white bold text and a small yellow square.
- Breadcrumbs show above the H1 on every page except home. Block pages show Docs / Block reference / mod, and the mod links to the filtered catalog.
- Block pages show the description as a lead line, then a ruled spec row (mod, category, ID, tags), then an optional image. Images of 64px or less scale up with pixelated rendering.
- The home page is a contents list with live status (the block count comes from the content collection) and a pack facts list.
- Footer: previous and next links as plain ruled text, the edit link, and the license line.

## Block detail sections

Block pages gain data-driven sections from `src/data/block-details`. Order: intro, Crafting, Construction, Processing examples, the article, Machine summary (before Sources), Sources, Image credits.

- The picture sits right of the lead (whole-number pixel scaling, 1px rule, no frame fill). Its caption links to the file page and credit table. An image description appears when it differs from the block name, so component images are identified. No image means no figure and no placeholder.
- A recipe is a diagram plus two ruled tables (materials and result) that use the same white top rule as other tables. Slots are 3.5rem squares on `--ru-code-bg`, joined by 1px rules. The output slot has a lighter border. An item without an image shows its name as small text in the slot.
- Count overlay bottom right, chance top left, reusable tools get a dashed inner outline with a legend line. Tooltips are plain text on black with a thin rule. They open on hover, focus and tap, and Escape closes them.
- Recipe tabs reuse the sidebar marker: white bold text and a small yellow square. The batches control is a square outlined stepper. Nothing animates.
- Verification text is colored with the game codes: green for `pack-code`, gold for `legacy-reference`, with one sentence of explanation for legacy data.
- Processing examples carry a line saying they are not the recipe for building the block, and show the machine as the station.
- Without JavaScript the toolbar is hidden and every recipe shows in full. With JavaScript the script only switches tabs, recalculates amounts, and swaps alternatives.

## Interaction

- Focus: 2px yellow outline on every focusable element. The skip link is yellow with black text.
- Hover: underlines switch to yellow; ledger rows get a near-black fill.
- Search is Pagefind inside Starlight's modal, restyled with square corners and yellow match highlights.
- The catalog filter (text, mod, category) works without a page reload and keeps its state in the URL. Without JavaScript, all rows show.
- No decorative motion. Reduced-motion users get no transitions.

## Responsive

- Under 50em the sidebar becomes Starlight's popover menu behind a square outlined button.
- Under 40rem the catalog rows become two-line entries and the filter grid stacks.
- Code blocks and wide tables scroll inside their own box. The page itself must never scroll sideways (a browser test checks this).
