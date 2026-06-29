**Address** — render any address or hash with this, never a hand-sliced string. Truncates `start…end`, mono, full value on hover, inline copy, optional explorer `href` (hovers blue — "go look it up").

```jsx
<Address address="z1qqjnwjjpnue8xmmpanz6csze6tcmtzzdtfsww7" />
<Address address={txHash} href={`https://explorer.zenon.network/tx/${txHash}`} copy={false} />
<Address address={addr} start={10} end={8} />
```
