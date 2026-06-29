**Badge** — compact chip for status and categories. Status variants are soft tints; `highlight` is the reserved brand pink for "new"/featured (use sparingly).

```jsx
<Badge>Active</Badge>
<Badge variant="success">Confirmed</Badge>
<Badge variant="warning">Low balance</Badge>
<Badge variant="highlight">New</Badge>
<Badge variant="outline">Pillar</Badge>
```

Variants: `default` · `secondary` · `destructive` · `outline` · `success` · `warning` · `pending` · `highlight`. Errors use `destructive` (crimson) — never pink.
