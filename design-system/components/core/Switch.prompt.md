**Switch** — binary toggle; the "on" state shows the plasma gradient (a reserved signature surface).

```jsx
const [on, setOn] = React.useState(true);
<Switch checked={on} onCheckedChange={setOn} aria-label="Auto-lock wallet" />
```
