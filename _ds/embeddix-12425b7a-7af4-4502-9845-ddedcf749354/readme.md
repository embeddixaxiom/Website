# Embeddix Axiom Design System

Design system for **Embeddix Axiom Technologies Private Limited** — a startup with a highly energetic
team of engineers with engineering excellence in the design and development of automotive and
industrial products.

## Sources given

The only source material for this system was that one-line company description, supplied in chat. No
website, Figma file, GitHub repository, codebase, brand guidelines, font binaries, logo files, imagery
or slide deck was provided.

Everything below is therefore an **authored** system, not a recreation. It is internally consistent and
ready to design against, but the specific choices — signal red, graphite/paper surfaces, Sora +
JetBrains Mono, the product names in the UI kits — are proposals. Where a real asset would go
(logo, photography, address, certifications) the system uses an explicitly labelled placeholder rather
than an invention that could be mistaken for fact.

## Products represented

Two surfaces are modelled, both reference builds rather than recreations:

| Surface | Directory | What it covers |
| --- | --- | --- |
| Marketing website | `ui_kits/website/` | Home, capability detail, contact enquiry flow |
| Axiom Console (internal tool) | `ui_kits/console/` | Login, fleet telemetry, device detail, OTA flash |

The console is the more useful of the two for this brand: an engineering company's own tooling is
where the dense, mono-heavy, status-driven side of the language lives.

---

## Content fundamentals

**Vibe.** Engineer to engineer. The reader is technical, busy, and has been sold to before. Copy earns
trust by being specific and by admitting limits, not by promising transformation.

**Person.** "We" for the company, "you" for the reader. Never "I". Never third person ("Embeddix Axiom
delivers…") except in legal or footer contexts.

- Write: "We design and validate motor control units for two-wheeler and light-industrial drives."
- Avoid: "Embeddix Axiom is a leading provider of next-generation mobility solutions."

**Casing.** Sentence case everywhere — headings, buttons, tabs, cards, nav. The only uppercase in the
system is the mono eyebrow/field label (`.ea-label`, 11px, 14% tracking) and status badges. Never
Title Case A Heading Like This.

**Sentence shape.** Short declaratives. One idea per sentence. Body paragraphs run two to four
sentences and stop. No rhetorical questions in body copy; questions are allowed as dialog titles
("Flash 42 units to Rev C?").

**Numbers.** Always with units, always spaced: `13.82 V`, `4 240 rpm`, `-40 °C to +105 °C`,
`< 45 s / unit`. Thin/space separators in large numbers, not commas, in data contexts. Part numbers and
revisions are mono: `EA-MCU-48 · Rev C`. Ranges use an en dash with spaces: `6 – 10 weeks`.

**Punctuation.** No exclamation marks. Middle dot (`·`) separates metadata fragments instead of pipes.
Em dashes sparingly, in prose only — never in UI labels.

**Buttons and labels.** Verb-first, no trailing punctuation, two to four words: "Talk to engineering",
"Send enquiry", "Export trace", "Flash firmware". Not "Submit", not "Learn more", not "Click here".

**Empty and unfinished states.** Say what is missing and why. The console's undesigned views read
"No source material was supplied for this view, so it is intentionally left blank rather than
invented." Placeholder values are labelled `placeholder` in the copy itself.

**Emoji.** Never. Not in UI, not in marketing copy, not in headings. Status is carried by the badge
system and by mono text.

**Claims.** No superlatives ("world-class", "cutting-edge", "revolutionary"), no unsourced statistics.
If a number appears, it is either measured or marked indicative ("Indicative — confirmed per project").

---

## Visual foundations

**Feel.** Machined instrumentation on warm paper. Structure comes from hairlines and alignment, not
from shadow or colour. The page is calm; red appears rarely and means something.

**Colour.** Three families: graphite neutrals (structure and dark chrome), warm paper (grounds), signal
red (action, brand accent, fault). Support hues — amber, green, blue — exist only as status pairs.
At most two background colours per composition: paper for content, graphite for hero/footer/console.
Red is never a background for large areas except the single CTA band; never a decorative gradient.
`.ea-dark` is a token scope, not a separate palette — the same semantic names re-point to graphite.

**Type.** Sora for everything human-readable, JetBrains Mono for everything machine-produced. Display
sizes are 64/48px at -2.5 to -3% tracking and weight 600; body is 15px/1.6 capped at 66 characters.
The mono eyebrow above a heading is the system's signature move: 11px uppercase, 14% tracking, muted
grey, occasionally red once per page. Weight 700 is reserved for mono emphasis; 300 only above 40px.

**Spacing and layout.** 4px base with 2/6/10 half-steps for control interiors. 1240px container,
24px gutters, 12 columns. Sections are 96px tall vertically (56px tight). Nothing is centred except
hero-less utility screens; content is left-aligned to a shared rail. Fixed elements: the site header
(sticky, 56px, translucent paper with 8px blur) and the console sidebar (236px) and top bar (56px).
The console layout never scrolls as a whole — only the content pane does.

**Borders.** 1px `--border-hairline` (graphite-200) is the default edge and does most of the work.
1px `--border-strong` (graphite-700) marks secondary buttons and focused fields. A 2px signal-red rule
across the top edge marks one card per group and every modal. Tables are hairline-divided rows with a
sunken header strip, never zebra striping — except the CAN trace, where alternating rows aid scanning.

**Corner radii.** 0 / 2 / 4 / 6 / 10px. Controls 4px, cards 6px, panels and modals 10px. Pills
(`--radius-pill`) are used only by `Tag`, and the radio dot is the only circle in the system. Nothing
is softer than 10px — no 16px+ "friendly" cards.

**Shadows.** Four steps, all low-opacity graphite: `shadow-1` rows/inputs, `shadow-2` cards,
`shadow-3` popovers and toasts, `shadow-4` modals. Inputs additionally carry a 1px inset
(`--shadow-inset-field`). Flat-with-a-border is the default; elevation is opt-in via `elevated`.

**Backgrounds.** No photographic backgrounds behind text, no gradient meshes. The brand texture is a
32px 1px grid (`--pattern-grid`) over graphite for hero, login and placeholder panels; a light variant
exists over paper. Where imagery would appear it is either real photography (bench, boards, line) or a
labelled grid placeholder. Imagery direction, when supplied, should be cool-neutral and unfiltered:
real light, no grain overlay, no warm Instagram cast, no stock-photo handshakes.

**Protection.** Text over imagery uses `--scrim-bottom`, a bottom-up graphite gradient to 86%. Never a
translucent capsule behind a headline, and never text directly on an unscrimmed photo.

**Transparency and blur.** Two places only: the sticky site header (paper at 88% + 8px blur) and the
modal backdrop (graphite at 55% + 2px blur). Panels and cards are always opaque.

**Motion.** 90ms hover, 140ms controls, 220ms panels, 400ms page-level. Easing is
`cubic-bezier(.2,0,.2,1)` — quick out, settled, no overshoot. No bounce, no spring, no easing that
wobbles. Fades and 2–6px translations only; nothing slides across the screen. Reduced-motion zeroes
all durations.

**Hover states.** Fills darken one step (red-500 → red-600); transparent controls pick up
`--surface-sunken`; cards and rows darken their border to `--border-strong`. Never opacity fades,
never scale-up on hover, never a colour change on text alone in a control.

**Press states.** Fills go one step darker again (red-700) plus a 0.985 scale. No ripple.

**Focus.** 1px graphite border plus a 3px red ring at 22% (`--ring-focus`). Focus is always visible;
`:focus-visible` outline offset is 2px.

**Cards.** Paper white on the sunken page, 1px hairline, 6px radius, no shadow by default, 24px
padding. Optional mono eyebrow above the title and a mono meta footnote below the body — part number,
revision, timestamp. No coloured left borders, no icon-in-a-tinted-circle headers.

**Data display.** Values are mono and right-aligned; labels are the uppercase mono eyebrow. Status is
always a `Badge` (mono, uppercase, 2px radius, optional 6px dot), never coloured body text. Charts are
single-stroke 1.4px lines with no fill, no gridlines and no axis chrome unless a scale is essential.

---

## Iconography

- **Set:** [Lucide](https://lucide.dev) at stroke width **1.75**, loaded from CDN
  (`https://unpkg.com/lucide@0.470.0/dist/umd/lucide.min.js`). **This is a substitution** — the brand
  supplied no icon set. Every icon in this system therefore comes from one library at one weight, and
  swapping it later means changing one script tag plus `components/core/Icon.jsx`.
- **Wrapper:** always use `<Icon name="cpu" />` rather than raw SVG, so weight and sizing stay uniform.
- **Sizes in use:** 14px inside mono rows and small buttons, 16px in controls, 20px in navigation,
  24px as a feature mark on cards. Never above 32px — use type instead of a giant glyph.
- **Colour:** `currentColor` by default. Red (`--red-500`) only for the one feature mark or check-list
  bullet that should read as brand; status colours only inside status contexts.
- **No icon font, no sprite sheet, no PNG icons, no emoji, no Unicode symbols as icons.** Two
  typographic exceptions are deliberate: the mono `▾` in `Select` and the mono `×` in `Tag`/`Toast`/
  `Dialog` close affordances.
- **Vocabulary used so far:** `cpu`, `code`, `gauge`, `factory`, `zap`, `refresh-cw`,
  `sliders-horizontal`, `download`, `upload-cloud`, `search`, `bell`, `list`, `settings`,
  `layout-grid`, `arrow-right`, `arrow-left`, `chevron-right`, `check`, `mail`, `phone`, `map-pin`,
  `snowflake`, `eraser`, `alert-triangle`.
- **Logo:** none supplied. Wherever a mark belongs, the system sets **Embeddix Axiom** in Sora 600 at
  -2.5% tracking with a 6px red square as a terminal dot (see `guidelines/brand-wordmark.html`). This
  is a typographic placeholder, not a logo. No mark was drawn or reconstructed. Supply the real SVG and
  it replaces the wordmark in `SiteChrome.jsx`, `LoginScreen.jsx`, `ConsoleChrome.jsx` and
  `thumbnail.html`.

### Substitutions to confirm

| Slot | Used | Needs |
| --- | --- | --- |
| Display / UI typeface | Sora (Google Fonts, CDN) | Real brand face + `.woff2` binaries |
| Mono / data typeface | JetBrains Mono (Google Fonts, CDN) | Confirmation or replacement |
| Icons | Lucide 0.470.0 (CDN) | Confirmation or the brand's own set |
| Logo | Type-set wordmark placeholder | `assets/logo.svg` |
| Photography | Grid-pattern placeholders | Bench / board / line photography |

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `thumbnail.html` — homepage tile for this system.
- `SKILL.md` — Agent Skills wrapper so this folder works as a Claude Code skill.
- `readme.md` — this file.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`,
`elevation.css`, `motion.css`, `base.css` (element defaults + `.ea-label`).

**`components/`**
- `core/` — `Button`, `IconButton`, `Icon`, `Card`, `Badge`, `Tag`
- `forms/` — `Input`, `Select`, `Checkbox`, `Radio`, `Switch`
- `navigation/` — `Tabs`
- `feedback/` — `Dialog`, `Toast`, `Tooltip`

Each component ships `.jsx`, `.d.ts` (props contract) and `.prompt.md` (what/when + example). Each
directory has one `@dsCard` HTML showing its states.

*Intentional additions:* `Icon` — a wrapper with no counterpart in any supplied source, added so the
substituted Lucide set stays at one stroke weight and one size ladder. Everything else is the standard
from-scratch primitive set, since no source defined an inventory.

**`ui_kits/`** — `website/` (marketing site) and `console/` (Axiom Console). Each has a `README.md`,
an `index.html` click-through and its screen JSX.

**`guidelines/`** — 21 specimen cards: colour (signal red, graphite, paper, status, dark scope), type
(display, headings, body, mono, eyebrow, weights), spacing (scale, control heights, layout, radii,
elevation, borders) and brand (motion, grid/scrim, wordmark, voice).

**Not present:** `assets/` is empty by design — no logo, icon or image files were supplied.
