**TxStatus** — the standard transaction-state chip. Don't invent your own status chips; use this so state language stays consistent app-wide (a tx "Confirmed" in the list is "Confirmed" in detail).

```jsx
<TxStatus status="pending" />
<TxStatus status="confirming" />
<TxStatus status="success" />   {/* "Confirmed" */}
<TxStatus status="failed" />
```

States: `pending` · `confirming` (both spin) · `success` · `failed`. Uses icon + label, never color alone.
