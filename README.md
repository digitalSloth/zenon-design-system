# Zenon — Network of Momentum · Design System

On-brand UI, marketing and design tooling for **Zenon, the Network of Momentum
(NoM)** — a feeless, dual-ledger blockchain. This repo equips agents and
designers to produce wallets, explorers, bridges, dApps, marketing and decks
that look and feel like one product.

> **The one principle: _the data is the hero._** Balances, amounts, fees,
> addresses and hashes are what users came for. Treat them as first-class — mono
> type, tabular figures, the dedicated primitives — never as ordinary text.
> Everything in this system follows from that.

---

## What's in here

```
.
├── design-system/         The full system — source of truth for in-depth work
│   ├── styles.css          Single entry point (an @import list)
│   ├── tokens/             Color, type, radius, elevation, fonts, utilities
│   ├── components/         React primitives (core + blockchain) + bundle
│   ├── ui_kits/            Syrius wallet + Zenon explorer reference screens
│   ├── assets/             Brand marks (ZNN, QSR) + network glyphs
│   ├── guidelines/         Foundation specimen cards
│   ├── SKILL.md            In-tree, repo-aware skill entry point
│   └── readme.md           The full design guide (read this for depth)
│
├── zenon-brand.skill.md   Standalone, single-file brand kit for content
├── readme.md              You are here
├── LICENSE
└── CONTRIBUTING.md
```

Two ways to use the system, depending on the job:

### 1. `zenon-brand.skill.md` — the portable brand kit (for content)

A **self-contained** Markdown skill for generating on-brand marketing —
landing pages, social posts, banners, ads, decks, announcements. It inlines
the real token values, both signature visual moves, the voice rules and a
copy-paste CSS starter, so it works **with zero access to the rest of the
repo**. Hand this one file to an agent (or a teammate) and they can produce
on-brand HTML immediately.

Use it for: throwaway marketing visuals, quick mocks, anything where you don't
need the component library.

### 2. `design-system/` — the full system (for product work)

The complete source: semantic token CSS, the React component library
(`Button`, `Card`, `Badge`, `Input`, `Switch`, `Tabs`, plus blockchain
primitives `Address`, `Amount`, `TxStatus`, `TxDirection`, `TokenIcon`…),
the compiled `_ds_bundle.js`, and the Syrius/Explorer UI kits as reference
screens. Start from `design-system/readme.md` and `design-system/SKILL.md`.

Use it for: wallets, explorers, bridges, dApps, and any production interface
that needs the real components and the full token set.

---

## The brand in one breath

- **The data is the hero** — amounts/addresses/hashes are mono + `tabular-nums`,
  via the `Amount` / `Address` primitives, never raw text.
- **Two fonts only** — Space Grotesk (UI), JetBrains Mono (data).
- **Semantic tokens, never raw hex** — green `#00D557` = brand + success;
  blue `#0061EB` = info / links; pink `#F91690` = one reserved accent (never
  errors); crimson = errors.
- **Two signature moves** — the **plasma** gradient on the main action only;
  **ledger labels** (mono / uppercase / tracked) for on-chain texture.
  Everything else stays calm.
- **Tight 6px radius, theme-aware shadows, Lucide icons, no emoji.** Dark mode
  is the native habitat — test light *and* dark.

---

## Sources

Distilled from Zenon's open-source UI library and product repos:

- **`nom-ui`** — the canonical shadcn-vue component library this system mirrors:
  <https://github.com/digitalSloth/nom-ui>
- Product context — Syrius wallet, the block explorer, the bridge, the marketing
  site, and Zenon Hub: <https://github.com/zenon-network>

---

## Contributing

Issues, fixes and proposals welcome — see [CONTRIBUTING.md](CONTRIBUTING.md).
Released under the [LICENSE](LICENSE).
