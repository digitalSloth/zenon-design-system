**Button** — the primary action primitive; the `default` variant carries the signature plasma gradient, so reserve it for the single main action on a surface.

```jsx
<Button>Send</Button>
<Button variant="outline">Cancel</Button>
<Button variant="secondary" size="sm">Max</Button>
<Button variant="ghost" size="icon" aria-label="Settings"><GearIcon /></Button>
```

Variants: `default` (plasma) · `destructive` · `outline` · `secondary` · `ghost` · `link`.
Sizes: `default` · `xs` · `sm` · `lg` · `icon` · `icon-sm` · `icon-lg`.
Pass `href` to render as an `<a>`. Don't flatten the default to a solid fill — the plasma is the signature.
