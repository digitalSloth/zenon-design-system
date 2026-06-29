**NetworkGlyph** — Zenon's network-concept brand marks: `az` (Accelerator-Z), `bridge`, `pillar`, `sentinel`. These are filled identity glyphs normalized onto the system's 24×24 grid with uniform optical weight — use them for the network concepts they name, not as generic UI icons (reach for Lucide for those).

```jsx
<NetworkGlyph name="pillar" size={20} />
<NetworkGlyph name="bridge" title="Cross-chain bridge" />
<span style={{ color: "var(--primary)" }}><NetworkGlyph name="sentinel" /></span>
```

Inherits `currentColor`, so color it via the parent. Names: `az` · `bridge` · `pillar` · `sentinel`.
