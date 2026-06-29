# Contributing to the Zenon NoM Design System

Thanks for helping shape how Zenon looks and feels. This system exists to make
many surfaces read as **one product**, so contributions are judged less on
"is this nice" and more on "is this on-brand and consistent with the rest."

## Before you start

Read these two files — they're the rulebook:

- `design-system/readme.md` — the full design guide (voice, color, type, the two
  signature moves, iconography, the manifest of what exists).
- `zenon-brand.skill.md` — the distilled, single-file brand kit.

The north star: **the data is the hero.** Amounts, addresses and hashes are
mono + `tabular-nums` via the dedicated primitives; boldness is reserved for the
two signature moves (plasma + ledger labels); everything else stays calm.

## Ways to contribute

- **Report an issue** — an off-brand pattern, a missing token, a bug in a kit.
- **Propose a change** — open an issue first for anything beyond a small fix, so
  we can agree on direction before you build.
- **Submit a PR** — fixes, new components, new reference kits, docs.

## Ground rules

1. **Semantic tokens, never raw hex.** New colors must be added as tokens in
   `design-system/tokens/colors.css` (both `:root` and `.dark`) and consumed via
   the semantic name. A PR with a hardcoded `#00d557` in a component will be
   asked to tokenize it.
2. **Two fonts only** — Space Grotesk (UI) and JetBrains Mono (data). Don't
   introduce a third typeface.
3. **Respect the signature moves.** Plasma is for the main action / focal
   surface only; ledger labels are for labels, never values or prose. Don't
   spread either onto general chrome.
4. **Light _and_ dark.** Every change must look right in both themes. Dark is the
   native habitat — check that cards keep their lit top edge against near-black.
5. **No emoji.** Use Lucide for UI glyphs; functional unicode (`…`, `≈`, `→`,
   `−`/`+`) only.
6. **Tight radius, theme-aware shadows.** Use the `--radius-*` and `--shadow-*`
   tokens; don't hand-roll either.

## Generated files — do not hand-edit

These are build artifacts produced by the design-system compiler. Edit the
*sources*, not the output:

- `design-system/_ds_bundle.js`
- `design-system/_ds_manifest.json`
- `design-system/_adherence.oxlintrc.json`

## Keep the standalone skill in sync ⚠️

`zenon-brand.skill.md` **inlines** token values (the copy-paste CSS starter)
that also live in `design-system/tokens/*.css`. This duplication is the price of
a portable single file.

**If you change tokens, regenerate the starter block in `zenon-brand.skill.md`
in the same PR.** A token change that lands without updating the skill will be
treated as incomplete. (If you add a build step that inlines `styles.css` into
the skill on release, even better — note it here.)

## PR checklist

- [ ] Semantic tokens only — no new hardcoded hex
- [ ] Looks correct in both light and dark
- [ ] Numbers/identifiers are mono + `tabular-nums`
- [ ] Plasma and ledger labels used per the rules
- [ ] No emoji; Lucide for icons
- [ ] Did not hand-edit generated files
- [ ] If tokens changed: `zenon-brand.skill.md` starter block updated to match
- [ ] Docs updated if behavior or the manifest changed

## Commit style

Short, imperative subject lines (`Add Tooltip primitive`, `Fix dark-mode card
shadow`). Reference the issue number where there is one.
