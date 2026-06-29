# Zenon Explorer — UI kit

A recreation of a **Network of Momentum block explorer** (the kind hosted at
explorer.zenon.network / Zenon Hub), built on this design system's primitives.
Light-themed to contrast the dark Syrius wallet.

## Layout
- **Header** — wordmark + Alphanet badge, a global search (`Input` with a Lucide
  search glyph), and an underline tab strip (Momentums / Transactions / Tokens /
  Pillars).
- **Stat strip** — four network KPIs (momentum height, addresses, ZNN price,
  active pillars) with mono tabular values and ledger labels.
- **Momentums panel** — latest blocks: height, hash (`Address`), producer pillar
  (`Badge`), tx count, age.
- **Transactions panel** — hash, `TxDirection`, from → to, `Amount`, `TxStatus`.
- **Tokens panel** — `TokenIcon` + name, standard `Badge`, supply, holders.

## Files
- `index.html` — shell + tab routing.
- `Icons.jsx` — Lucide icon set.
- `ExplorerData.jsx` — mock momentums / txns / tokens / KPIs.
- `ExplorerChrome.jsx` — `ExplorerHeader` + `StatStrip`.
- `ExplorerScreens.jsx` — `MomentumsPanel`, `TransactionsPanel`, `TokensPanel`.

> Visual recreation for prototyping. Explorer data is mocked; hashes and
> addresses are illustrative, not real on-chain values.
