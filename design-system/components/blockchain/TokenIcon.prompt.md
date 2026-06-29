**TokenIcon** — token logo with ticker fallback. Built-in `ZNN` and `QSR` marks render automatically from the symbol; pass `src` to override, unknown tickers fall back to a tinted disc.

```jsx
<TokenIcon symbol="ZNN" />
<TokenIcon symbol="QSR" size={48} />
<TokenIcon symbol="ETH" src={ethLogo} />
```

The marks are also exported directly as `ZnnLogo` / `QsrLogo` for hero lockups.
