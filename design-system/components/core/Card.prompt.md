**Card** — the base surface. Compose with `CardHeader` / `CardTitle` / `CardDescription` / `CardContent` / `CardFooter`.

```jsx
<Card>
  <CardHeader>
    <CardTitle>Total balance</CardTitle>
    <CardDescription>Across all addresses</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter><Button>Send</Button></CardFooter>
</Card>
```

Tight radius (echoes the Z mark), theme-aware shadow. Don't round corners back up or hand-roll shadows.
