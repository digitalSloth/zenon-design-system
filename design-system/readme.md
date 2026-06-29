# Zenon — Network of Momentum · Design System

A design system for **Zenon, the Network of Momentum (NoM)** — a feeless,
dual-ledger blockchain. The system equips agents and designers to produce
on-brand wallets, explorers, bridges, dApps, marketing and decks that look and
feel like one product.

> **The one principle: _the data is the hero._** Balances, amounts, fees,
> addresses and hashes are what users came for. Treat them as first-class — mono
> type, tabular figures, the dedicated primitives — never as ordinary text.
> Everything in this system follows from that.

## Sources

This system is distilled from Zenon's open-source UI library and product repos.
You may not have access; links are recorded so you can explore further:

- **`nom-ui`** — the canonical shadcn-vue component library (Vue 3 + Tailwind 4)
  this system mirrors: <https://github.com/digitalSloth/nom-ui>
  (read `docs/brand-guidelines.md` and `src/style.css` there for the source of truth).
- Product context — wallet **Syrius** (<https://github.com/zenon-network/syrius>),
  explorer (<https://github.com/zenon-network/explorer.zenon.network>),
  bridge (<https://github.com/zenon-network/bridge.zenon.network>),
  marketing site (<https://github.com/zenon-network/zenon.network>),
  Zenon Hub explorer (<https://github.com/zenonhub-io/zenonhub>).

Exploring these repos will help you build more accurate Zenon designs.

---

## Content fundamentals — how Zenon writes

- **Voice:** technical, confident, precise — written by and for builders. Zenon
  describes itself as "a self-evolving network, globally deployed to shape
  digital economies of scale, powered by a worldwide community of innovators."
  Lean into systems language: _momentum, plasma, pillars, sentinels, dual-ledger,
  feeless, Network of Momentum (NoM)._
- **Casing:** Sentence case for UI labels, headings and buttons ("Total balance",
  "Send", "Recent activity"). Reserve UPPERCASE for the **ledger label** texture
  (mono eyebrows / table headers / stat captions) — never for whole sentences.
- **Person:** Address the user directly and sparingly ("Your receiving address",
  "Unlock your Syrius wallet"). Product/network described in third person.
  Avoid marketing "we" inside app chrome.
- **Numbers & identifiers:** always exact and mono. Show full precision where it
  matters (8 decimals for amounts); dim insignificant trailing zeros rather than
  rounding them away. Truncate addresses/hashes as `start…end`, full value on
  hover. Group thousands. Use consistent tx-state words app-wide: a transaction
  that is **Confirmed** in a list is **Confirmed** in its detail view.
- **Tone of status:** factual, not alarmist. "Sending" is neutral movement, not
  an error. Errors are reserved and specific.
- **Emoji:** none. Zenon's surfaces use the Lucide icon set, not emoji. Unicode
  is used only as functional glyphs (e.g. `…` for truncation, `≈` for fiat
  approximations, `→` between from/to, `−`/`+` for direction).
- **Vibe:** calm, dense, engineered. The boldness is spent on two signature
  moves (plasma + ledger labels); everything else stays disciplined.

---

## Visual foundations

**Color.** A green-led tri-color on near-black. `zenon-green #00D557` is the
primary brand + success; `zenon-blue #0061EB` is info / pending / "go look it up"
(explorer links hover blue); `zenon-pink #F91690` is a single reserved accent for
"new"/featured — **never errors**. Errors are crimson `destructive`. Money isn't
colored by default — reserve green/red for direction/status chips, not the number
itself. Build with **semantic tokens** (`--primary`, `--success`, `--info`,
`--muted-foreground`…), never raw hex. Every token is defined for light (`:root`)
and dark (`.dark`); dark mode is the wallet's native habitat.

**Type.** Two roles only. **Space Grotesk** (`--font-sans`) for everything UI —
headings, labels, body, buttons. **JetBrains Mono** (`--font-mono`) for all data —
addresses, hashes, amounts, heights, code. Every identifier and number is mono +
`tabular-nums` so columns align and values don't jitter as they update. Heading
scale runs h1 36/extrabold → h6 16/semibold; body is 16/leading-relaxed.

**Backgrounds.** Flat and calm — solid `--background` (white on light, near-black
`hsl(0 0% 8%)` on dark). **No** decorative gradients on chrome. The only gradient
is **plasma**, and only on the main action. The lock screen uses a single soft
radial plasma halo. No textures, no patterns, no photography in product chrome.

**The plasma gradient** (`--plasma`, `linear-gradient(180deg, hsl(120 86% 63%) →
hsl(145 100% 38%)`), pulled from the ZNN logo) is the signature. It fills **only**
primary/active/positive surfaces: the default button, progress fill, switch "on"
state, the portfolio hero. Don't flatten primary buttons to a solid fill; don't
spray plasma onto secondary chrome — its power is being reserved.

**Ledger labels** (`.text-ledger`: mono, uppercase, 11px, `+0.06em` tracking) are
the second signature — the quiet "on-chain" texture on table headers, eyebrows
and stat captions. For labels only; never values or prose.

**Corners & elevation.** Radius is **tight** — one token (`--radius` ≈ 6px) echoes
the angular Z. Use `--radius-md/lg/xl`; badges/avatars/pills go `--radius-full`.
Don't mix arbitrary radii. Elevation is a **theme-aware** scale (`--shadow-xs…xl`):
soft greys on light; on dark, deeper drops **plus a lit top edge** (inset
highlight) so surfaces separate against near-black. Overlays sit one step above
cards. Never hand-roll shadows.

**Cards** = `--card` surface, `1px solid --border`, `--radius-xl`, `--shadow-sm`.
No colored left-border accents, no heavy rounding.

**Borders & fields.** Hairline `--border` everywhere. Inputs are 36px tall,
`--radius-md`, with a focus ring (`--ring`, green) — never remove outlines.

**Motion.** Subtle and purposeful only: 150ms `cubic-bezier(.4,0,.2,1)` on color/
background/shadow state changes; the tab indicator, toast, spinner, and a plasma
hover-glow (default button brightens `1.1` on hover, `0.95` on press). No
decorative animation on financial data. Respect `prefers-reduced-motion`.

**Hover / press.** Buttons: plasma brightens on hover; ghost/outline shift to
`--accent`; press dims slightly. Links and explorer addresses hover **blue**.
No scale-bounces on data.

**Imagery.** Minimal. The brand marks (ZNN, QSR) are angular, gradient-filled
SVGs. No stock photography in chrome; if marketing needs imagery, keep it cool,
dark, and geometric.

---

## Iconography

- **System:** **Lucide** (`@lucide/vue` in `nom-ui`). Consistent 24×24, ~2px
  stroke, rounded caps/joins, `currentColor`. Use Lucide for all UI glyphs.
- **In this system:** the UI kits ship an `Icons.jsx` rendering authentic Lucide
  path data as a small React `<Icon name="…" />` (dashboard, send, receive,
  bridge, layers, settings, search, bell, wallet, shield, lock, qr, zap, …). When
  building production code, prefer real `@lucide/vue` / `lucide-react`; for
  throwaway HTML, link Lucide from CDN or reuse `Icons.jsx`.
- **Brand marks:** `assets/znn-logo.svg` (the official angular Z, plasma-green
  gradient) and `assets/qsr-logo.svg` (a complementary blue "Q" — no official QSR
  mark exists). Also exported as React `ZnnLogo` / `QsrLogo`, and used by
  `TokenIcon` automatically for `ZNN` / `QSR`.
- **Network glyphs:** Zenon's network-concept identity marks — Accelerator-Z
  (`az`), `bridge`, `pillar`, `sentinel` — live in `assets/glyphs/` and as the
  React `NetworkGlyph` component. These are **filled identity marks, not generic
  UI icons**: each is the authentic network mark, normalized onto the same 24×24
  grid with uniform optical weight (`currentColor` fill) so it sits beside Lucide.
  Use them for the concepts they name; use Lucide for everything else.
- **No emoji.** Status never relies on color alone — it pairs an icon + label
  (`TxStatus`, `TxDirection`).

---

## Index / manifest

**Foundations**
- `styles.css` — the single entry point consumers link (an `@import` list only).
- `tokens/colors.css` · `typography.css` · `radius.css` · `elevation.css` ·
  `fonts.css` · `utilities.css` — tokens, fonts, and the `.bg-plasma` /
  `.text-ledger` signature utilities.
- `components/components.css` — token-driven styling for the React primitives.

**Components** (`window.ZenonNoMDesignSystem_afdf82.*`, see `_ds_bundle.js`)
- Core (`components/core/`): `Button`, `Badge`, `Card` (+ `CardHeader`/`Title`/
  `Description`/`Content`/`Footer`), `Input`, `Switch`, `Tabs`.
- Blockchain (`components/blockchain/`): `Address`, `Amount` (+ `formatNumber`),
  `TxStatus`, `TxDirection`, `TokenIcon` (+ `ZnnLogo` / `QsrLogo`),
  `NetworkGlyph` (+ `NETWORK_GLYPHS`).
- Each directory has `.d.ts` (props), `.prompt.md` (when/how), and a `@dsCard`.

**UI kits** (`ui_kits/`)
- `wallet/` — **Syrius** dual-ledger desktop wallet (dashboard, transfer, receive).
- `explorer/` — **Zenon Explorer** block explorer (momentums, txns, tokens).

**Assets** (`assets/`)
- `znn-logo.svg`, `qsr-logo.svg`.
- `glyphs/` — `az.svg`, `bridge.svg`, `pillar.svg`, `sentinel.svg` (network glyphs).

**Other**
- `SKILL.md` — Agent-Skills-compatible entry point.
- `guidelines/*.card.html` — foundation specimen cards (Design System tab).

---

## Quick checklist (per the brand)

- [ ] Addresses/hashes via `Address`, amounts via `Amount` — never raw strings
- [ ] All numbers `tabular-nums`; identifiers `font-mono`
- [ ] Semantic tokens only — no hardcoded hex
- [ ] Plasma reserved for the main action; ledger labels for on-chain texture
- [ ] Errors use `destructive` (crimson); pink stays a brand accent
- [ ] Transaction state via `TxStatus` / `TxDirection` with consistent labels
- [ ] Tight radius; theme-aware shadows; looks right in both light and dark
