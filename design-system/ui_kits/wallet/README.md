# Syrius Wallet — UI kit

A high-fidelity recreation of **Syrius**, the dual-ledger desktop wallet for the
Zenon Network of Momentum, built entirely on the `nom-ui` primitives in this
design system. Dark-first (the wallet's native theme), with a light toggle.

## Screens
- **Lock** — unlock entry with the ZNN mark and a plasma halo.
- **Dashboard** — plasma portfolio hero, per-token balance cards (`TokenIcon` +
  `Amount` with fiat), and a recent-activity table (`TxDirection`, `TxStatus`,
  `Address`, ledger headers).
- **Transfer** — token tabs, numeric amount + Max, recipient `Address`, a
  feeless-PoW fee row, and a simulated broadcast that walks `TxStatus` through
  pending → confirming → confirmed.
- **Receive** — QR placeholder + full copyable `Address`.
- **Staking / Bridge / Settings** — placeholders (out of scope for the kit).

## Files
- `index.html` — app shell, lock screen, screen routing, theme toggle.
- `Icons.jsx` — Lucide icon set (the system `nom-ui` ships).
- `WalletData.jsx` — mock balances + transactions.
- `WalletChrome.jsx` — `Sidebar` + `TopBar`.
- `WalletScreens.jsx` — `DashboardScreen`, `SendScreen`, `ReceiveScreen`.

## Components used
`Button`, `Card`, `Address`, `Amount`, `TxStatus`, `TxDirection`, `TokenIcon`,
`Input`, `Tabs`, `Badge`, `ZnnLogo` — all from `window.ZenonNoMDesignSystem_afdf82`.

> This is a visual recreation for prototyping, not production wallet code. It
> fakes all chain state. The real Syrius is a Flutter app; this kit mirrors its
> information architecture using the web design system.
