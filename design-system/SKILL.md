---
name: zenon-design
description: Use this skill to generate well-branded interfaces and assets for Zenon, the Network of Momentum (NoM) — a feeless dual-ledger blockchain — for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components (wallet, explorer) for prototyping wallets, explorers, bridges and dApps.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Where things live
- `readme.md` — the full design guide: content fundamentals, visual foundations, iconography, and a manifest of everything in the system. **Read this first.**
- `styles.css` — the single global stylesheet to link; it `@import`s all tokens + fonts (`tokens/*.css`) and component styles.
- `components/core/` + `components/blockchain/` — React primitives (`Button`, `Card`, `Badge`, `Input`, `Switch`, `Tabs`, `Address`, `Amount`, `TxStatus`, `TxDirection`, `TokenIcon`, `ZnnLogo`, `QsrLogo`). Each has a `.prompt.md` (when/how) and `.d.ts` (props). They are bundled into `_ds_bundle.js` and exposed on `window.ZenonNoMDesignSystem_afdf82`.
- `ui_kits/wallet/` — Syrius desktop-wallet recreation; `ui_kits/explorer/` — Zenon block-explorer recreation. Use these as reference screens.
- `assets/` — `znn-logo.svg`, `qsr-logo.svg`.

## Non-negotiables (the brand in one breath)
- **The data is the hero** — amounts/addresses/hashes are mono + `tabular-nums`, via `Amount` / `Address`, never raw text.
- **Two fonts only** — Space Grotesk (UI), JetBrains Mono (data).
- **Semantic tokens, never raw hex.** Green = brand + success; blue = info/links; pink = one reserved accent; crimson = errors.
- **Two signature moves** — the plasma gradient on the main action only; ledger labels (mono/uppercase/tracked) for on-chain texture. Everything else stays calm.
- **Tight radius, theme-aware shadows, Lucide icons, no emoji.** Test light *and* dark.

## Using the components in a static HTML mock
Link `styles.css`, load React 18 + Babel, load `_ds_bundle.js`, then:
```html
<script type="text/babel">
  const { Button, Amount, Address, TxStatus } = window.ZenonNoMDesignSystem_afdf82;
  // …render
</script>
```
(See any `*.card.html` or `ui_kits/*/index.html` for a complete working example.)
