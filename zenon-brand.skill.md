---
name: zenon-brand
description: Self-contained Zenon (Network of Momentum / NoM) brand kit for generating on-brand marketing — landing pages, social posts, banners, ads, decks, announcements. Feeless dual-ledger blockchain. Contains the full voice, color, type and signature visual rules plus a copy-paste CSS starter, so it works standalone with no repo access. Use for any Zenon-branded content or visual.
user-invocable: true
license: see repository
---

# Zenon — Network of Momentum · Brand Kit (single-file edition)

This is the **portable, self-contained** version of the Zenon design system,
purpose-built for **marketing content generation**. Everything you need to
produce an on-brand HTML artifact is inlined below — no other files required.

> For in-depth product work (wallets, explorers, dApps), use the full repo
> instead: it ships the React component library (`Button`, `Amount`, `Address`,
> `TxStatus`…), token CSS, and the Syrius/Explorer UI kits. This file is the
> distilled brand for **content**, not the component toolkit.
> Repo: <https://github.com/zenon-network> · nom-ui: <https://github.com/digitalSloth/nom-ui>

---

## The one principle

**The data is the hero.** Zenon is a blockchain — balances, amounts, fees,
addresses, heights and hashes are what people came for. Treat every number and
identifier as first-class: mono type, tabular figures, full precision. Even in
marketing, when you show a stat (TPS, supply, height, fee = 0), render it in
mono with tabular figures so it reads as *real on-chain data*, not decoration.
Everything else in this kit follows from that.

---

## Voice & copy

- **Tone:** technical, confident, precise — written by and for builders. Calm,
  dense, engineered. Zenon describes itself as *"a self-evolving network,
  globally deployed to shape digital economies of scale, powered by a worldwide
  community of innovators."*
- **Systems vocabulary:** *momentum, plasma, pillars, sentinels, dual-ledger,
  feeless, Network of Momentum (NoM), ZNN, QSR.* Lean into it.
- **Casing:** Sentence case for headlines, labels and buttons ("Build on
  momentum", "Read the docs"). Reserve **UPPERCASE** for the *ledger-label*
  texture only (mono eyebrows, stat captions) — never whole sentences.
- **Numbers:** exact and mono. Full precision where it matters; group thousands;
  truncate addresses/hashes as `start…end`. The signature flex is **feeless** —
  show it as a literal `0` fee, not prose.
- **No emoji, ever.** Functional glyphs only (`…` truncation, `≈` fiat, `→`
  flow, `−`/`+` direction). UI icons come from **Lucide** (24×24, ~2px stroke).
- **Status is factual, not alarmist.** Boldness is spent on two moves (below);
  everything else stays disciplined.

---

## The two signature moves

Spend your boldness here and nowhere else.

1. **Plasma gradient** — `linear-gradient(180deg, hsl(120 86% 63%) 0%, hsl(145 100% 38%) 100%)`,
   pulled from the ZNN logo. It fills **only the main thing**: the primary CTA,
   the hero focal surface, a key positive stat, a progress fill. In marketing you
   may also use it as a single soft **radial halo** behind a hero mark on the
   near-black background. Never spray it on secondary chrome, never flatten the
   primary button to a solid green — its power is being reserved.

2. **Ledger labels** (`.text-ledger`) — mono, UPPERCASE, 11px, `+0.06em`
   tracking. The quiet "on-chain" texture on eyebrows, section kickers and stat
   captions. For **labels only** — never headlines, body, or the values
   themselves.

---

## Color

Green-led tri-color on near-black. **Dark is the native habitat** — default
marketing surfaces to near-black `#151515`. Build with the semantic tokens in
the starter block below; the raw brand colors are:

- `--zenon-green #00D557` — primary brand + success + "go". Derives the plasma.
- `--zenon-blue  #0061EB` — info / links / "go look it up" (explorer-blue).
- `--zenon-pink  #F91690` — **one reserved accent** for "new"/featured. **Never
  errors.** Errors are crimson (`--destructive`, `hsl(352 84% 53%)`).
- `--zenon-black #151515` — the dark background base.

Money/stats are **not colored by default** — reserve green/red for
direction/status, not the number itself.

---

## Type

Two roles, no more. Load both from Google Fonts (link in the starter).

- **Space Grotesk** (`--font-sans`) — everything UI: headlines, labels, body,
  buttons. Heading scale h1 36/extrabold → h6 16/semibold; body 16 / leading 1.75.
- **JetBrains Mono** (`--font-mono`) — all data: amounts, addresses, hashes,
  heights, code, **and ledger labels**. Always `tabular-nums` so figures align.

---

## Form

- **Corners:** tight. Base radius **6px** (`--radius`); md 4 / xl 10; pills &
  avatars only go full. Don't mix arbitrary radii or round things back up — the
  angularity echoes the Z mark.
- **Backgrounds:** flat and calm. Solid `--background`. The *only* gradient is
  plasma. No textures, no patterns, no stock photography in chrome. Marketing
  imagery, if any, stays cool, dark and geometric.
- **Elevation:** theme-aware. On dark, cards need a deeper drop **plus a lit top
  edge** (`inset 0 1px 0 hsl(0 0% 100% / 0.05)`) or they vanish against the
  near-black. Use the `--shadow-*` tokens; don't hand-roll.
- **Cards:** `--card` surface, `1px solid --border`, radius 10px, soft shadow.
  No colored left-border accents.
- **Motion:** subtle and purposeful. 150ms `cubic-bezier(.4,0,.2,1)` on
  color/background/shadow. Plasma CTA brightens `1.1` on hover, dims `.95` on
  press. No decorative animation on numbers. Respect `prefers-reduced-motion`.

---

## Copy-paste CSS starter

Paste this `<style>` into any HTML file (and add `class="dark"` to `<html>` for
the native dark surface). It inlines every token, both signature utilities, the
font load, and the base reset — the full foundation in one block.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

:root {
  /* Brand */
  --zenon-green:#00d557; --zenon-blue:#0061eb; --zenon-pink:#f91690; --zenon-black:#151515;
  --plasma: linear-gradient(180deg, hsl(120 86% 63%) 0%, hsl(145 100% 38%) 100%);

  /* Surfaces + semantic roles (light) */
  --background:hsl(0 0% 100%); --foreground:hsl(0 0% 14.5%);
  --card:hsl(0 0% 100%); --card-foreground:hsl(0 0% 14.5%);
  --popover:hsl(0 0% 100%); --popover-foreground:hsl(0 0% 9%);
  --primary:hsl(145 100% 42%); --primary-foreground:hsl(0 0% 8%);
  --secondary:hsl(145 80% 35%); --secondary-foreground:hsl(0 0% 8%);
  --muted:hsl(0 0% 96%); --muted-foreground:hsl(0 0% 45%);
  --accent:hsl(145 100% 95%); --accent-foreground:hsl(0 0% 8%);
  --destructive:hsl(352 84% 53%); --destructive-foreground:hsl(0 0% 100%);
  --success:hsl(145 63% 38%); --warning:hsl(38 92% 50%); --info:hsl(214 100% 46%);
  --border:hsl(0 0% 90%); --input:hsl(0 0% 90%); --ring:hsl(145 100% 42%);

  /* Type */
  --font-sans:"Space Grotesk",ui-sans-serif,system-ui,sans-serif;
  --font-mono:"JetBrains Mono",ui-monospace,"SF Mono","Menlo",monospace;
  --ledger-tracking:0.06em;

  /* Form */
  --radius:0.375rem; --radius-md:0.25rem; --radius-xl:0.625rem; --radius-full:9999px;
  --shadow-sm:0 1px 3px 0 hsl(0 0% 0% / .08),0 1px 2px -1px hsl(0 0% 0% / .06);
  --shadow-lg:0 12px 24px -6px hsl(0 0% 0% / .13);
}

.dark {
  --background:hsl(0 0% 8%); --foreground:hsl(0 0% 98%);
  --card:hsl(0 0% 10%); --card-foreground:hsl(0 0% 98%);
  --popover:hsl(0 0% 14%); --popover-foreground:hsl(0 0% 98%);
  --primary:hsl(145 100% 42%); --primary-foreground:hsl(0 0% 8%);
  --secondary:hsl(145 80% 35%); --secondary-foreground:hsl(0 0% 98%);
  --muted:hsl(0 0% 15%); --muted-foreground:hsl(0 0% 65%);
  --accent:hsl(145 100% 15%); --accent-foreground:hsl(0 0% 98%);
  --destructive:hsl(352 86% 58%); --info:hsl(214 100% 62%);
  --border:hsl(0 0% 20%); --input:hsl(0 0% 20%); --ring:hsl(145 100% 42%);
  --shadow-sm:0 2px 6px -1px hsl(0 0% 0% / .55),inset 0 1px 0 0 hsl(0 0% 100% / .04);
  --shadow-lg:0 14px 32px -8px hsl(0 0% 0% / .65),inset 0 1px 0 0 hsl(0 0% 100% / .05);
}

*,*::before,*::after { box-sizing:border-box; }
body {
  margin:0; background:var(--background); color:var(--foreground);
  font-family:var(--font-sans); -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
}
a,button,label,input,[role="button"] {
  transition: color,background-color,border-color,box-shadow,filter,opacity 150ms cubic-bezier(.4,0,.2,1);
}

/* Signature move #1 — plasma. Reserve for the main thing only. */
.bg-plasma { background-image: var(--plasma); }
/* Signature move #2 — ledger label. For LABELS, never values or prose. */
.text-ledger {
  font-family:var(--font-mono); font-size:0.6875rem; line-height:1rem; font-weight:500;
  text-transform:uppercase; letter-spacing:var(--ledger-tracking);
}
.tabular-nums { font-variant-numeric: tabular-nums; }
.font-mono { font-family: var(--font-mono); }

@media (prefers-reduced-motion: reduce){ *{transition:none!important;animation:none!important;} }
</style>
```

### Minimal on-brand snippets

```html
<!-- Eyebrow + headline + plasma CTA, on the native dark surface -->
<p class="text-ledger" style="color:var(--muted-foreground)">Network of Momentum</p>
<h1 style="font-size:var(--text-h1,2.25rem);font-weight:800;line-height:1.1;margin:.25rem 0 1rem">
  Feeless, by design.
</h1>
<a class="bg-plasma" href="#" style="display:inline-block;padding:10px 18px;border-radius:6px;
   color:var(--primary-foreground);font-weight:600;text-decoration:none">Start building</a>

<!-- A real stat reads as on-chain data: mono + tabular, ledger caption -->
<div>
  <div class="font-mono tabular-nums" style="font-size:2.5rem;font-weight:700">0</div>
  <div class="text-ledger" style="color:var(--muted-foreground)">Transaction fee</div>
</div>

<!-- Card on dark needs the lit top edge (comes via --shadow-sm) -->
<div style="background:var(--card);border:1px solid var(--border);border-radius:10px;
   padding:24px;box-shadow:var(--shadow-sm)">…</div>
```

---

## Marketing-specific guidance

- **Default to dark.** Near-black `#151515` is the native canvas. Light is valid
  but secondary for marketing.
- **Hero = one plasma moment.** A plasma CTA *or* a plasma halo behind the mark
  *or* one plasma stat — not all three. Pick the single focal point.
- **Stats as proof.** Lead with the feeless `0` and other hard numbers in mono +
  tabular. This is the most on-brand thing you can put on a marketing surface.
- **Sizes:** social square 1080×1080, story 1080×1920, OG/banner 1200×630,
  slide 1920×1080. Keep generous negative space — the brand is calm and dense,
  not busy. Headline ≥ 48px on a 1080 canvas.
- **Brand marks:** the ZNN logo is an angular, plasma-green-gradient "Z"; QSR is
  a complementary blue "Q". If you don't have the SVGs, leave a labelled
  placeholder (`[ ZNN mark ]`) rather than drawing a fake — request the real
  assets from the repo's `assets/`.
- **Imagery:** geometric, cool, dark, minimal. No stock photos of people/offices.

---

## Pre-flight checklist

- [ ] Dark near-black surface unless light is intentional
- [ ] Headlines/body in Space Grotesk; every number & identifier in JetBrains Mono + `tabular-nums`
- [ ] Plasma used **once**, on the single focal element — never on chrome
- [ ] Ledger labels (mono/UPPERCASE/tracked) on eyebrows & captions only
- [ ] Semantic tokens, not raw hex; pink = accent (never error), crimson = error
- [ ] Tight 6px radius; cards on dark carry the lit top edge
- [ ] No emoji; functional glyphs only; Lucide for any icon
- [ ] The hardest, truest number (feeless `0`, height, TPS) is the hero
