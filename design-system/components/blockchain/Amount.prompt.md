**Amount** — the way to render any on-chain number (balance, amount, fee). Mono + `tabular-nums`, dims insignificant trailing zeros, optional `symbol` + `fiat` line. Never hand-format amounts as plain text.

```jsx
<Amount value={12408.50319} symbol="ZNN" fiat="≈ $9,420.18" />
<Amount value="0.00021000" symbol="ZNN" />
<Amount value={1240000000} symbol="QSR" compact />
```

`value` accepts a string for big numbers. `formatNumber(value, opts)` is exported for one-off formatting. Money isn't colored by default — reserve green/red for direction/status chips.
