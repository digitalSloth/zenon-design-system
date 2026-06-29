**Tabs** — controlled tab strip. `default` is a pill group on a muted track; `underline` is a flat indicator for page-level section switching.

```jsx
const [tab, setTab] = React.useState("balances");
<Tabs
  variant="underline"
  value={tab}
  onValueChange={setTab}
  items={[{value:"balances",label:"Balances"},{value:"activity",label:"Activity"}]}
/>
```
