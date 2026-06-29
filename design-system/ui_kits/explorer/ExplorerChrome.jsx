// Header + stat row for the Zenon explorer kit.
const { ZnnLogo, Input, Badge } = window.ZenonNoMDesignSystem_afdf82;

function ExplorerHeader({ tab, onTab }) {
  const tabs = ["Momentums", "Transactions", "Tokens", "Pillars"];
  return (
    <header style={{ borderBottom: "1px solid var(--border)", background: "var(--card)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", height: 62, display: "flex", alignItems: "center", gap: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <ZnnLogo style={{ width: 18, height: 26 }} />
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-.01em" }}>Zenon Explorer</span>
          <Badge variant="outline" style={{ marginLeft: 2 }}>Alphanet</Badge>
        </div>
        <div style={{ flex: 1, maxWidth: 420, marginLeft: "auto", position: "relative" }}>
          <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--muted-foreground)", display: "flex" }}>
            <Icon name="search" size={16} />
          </span>
          <Input placeholder="Search momentum, tx hash or address…" style={{ paddingLeft: 34, height: 38 }} />
        </div>
      </div>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        <div className="nom-tabs__list nom-tabs__list--underline" style={{ display: "flex", gap: 22 }}>
          {tabs.map((t) => (
            <button key={t} className="nom-tab" data-active={tab === t} onClick={() => onTab(t)}>{t}</button>
          ))}
        </div>
      </div>
    </header>
  );
}

function StatStrip() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 22 }}>
      {NET_STATS.map((s) => (
        <div key={s.label} style={{
          background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)",
          padding: "16px 18px", boxShadow: "var(--shadow-xs)", display: "flex", alignItems: "center", gap: 14,
        }}>
          <span style={{ width: 38, height: 38, borderRadius: "var(--radius-md)", background: "var(--accent)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name={s.icon} size={18} />
          </span>
          <div>
            <div className="text-ledger" style={{ color: "var(--muted-foreground)" }}>{s.label}</div>
            <div style={{ fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: 19, fontWeight: 600, marginTop: 2 }}>{s.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { ExplorerHeader, StatStrip });
