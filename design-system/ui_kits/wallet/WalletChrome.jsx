// Sidebar + TopBar chrome for the Syrius wallet kit.
const { ZnnLogo } = window.ZenonNoMDesignSystem_afdf82;

const NAV = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard" },
  { id: "send", label: "Transfer", icon: "send" },
  { id: "receive", label: "Receive", icon: "receive" },
  { id: "stake", label: "Staking", icon: "layers" },
  { id: "bridge", label: "Bridge", icon: "bridge" },
];

function Sidebar({ active, onNavigate }) {
  return (
    <aside style={{
      width: 232, flexShrink: 0, background: "var(--sidebar)", borderRight: "1px solid var(--sidebar-border)",
      display: "flex", flexDirection: "column", padding: "20px 14px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 11, padding: "4px 8px 22px" }}>
        <ZnnLogo style={{ width: 22, height: 30 }} />
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-.01em" }}>syrius</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted-foreground)" }}>Network of Momentum</span>
        </div>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {NAV.map((item) => {
          const on = active === item.id;
          return (
            <button key={item.id} onClick={() => onNavigate(item.id)} style={{
              display: "flex", alignItems: "center", gap: 11, padding: "9px 11px", borderRadius: "var(--radius-md)",
              border: "none", cursor: "pointer", textAlign: "left", font: "inherit",
              fontSize: 14, fontWeight: on ? 600 : 500,
              color: on ? "var(--sidebar-accent-foreground)" : "var(--muted-foreground)",
              background: on ? "var(--sidebar-accent)" : "transparent",
            }}>
              <Icon name={item.icon} size={18} style={{ color: on ? "var(--primary)" : "inherit" }} />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
        <button onClick={() => onNavigate("settings")} style={{
          display: "flex", alignItems: "center", gap: 11, padding: "9px 11px", borderRadius: "var(--radius-md)",
          border: "none", cursor: "pointer", textAlign: "left", font: "inherit", fontSize: 14, fontWeight: 500,
          color: "var(--muted-foreground)", background: "transparent",
        }}>
          <Icon name="settings" size={18} /> Settings
        </button>
        <div style={{
          display: "flex", alignItems: "center", gap: 9, padding: "10px 11px", marginTop: 6,
          borderRadius: "var(--radius-md)", background: "var(--sidebar-accent)",
        }}>
          <Icon name="shield" size={16} style={{ color: "var(--success)" }} />
          <span style={{ fontSize: 12, color: "var(--muted-foreground)" }}>Node synced</span>
          <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--success)" }}>#3.42M</span>
        </div>
      </div>
    </aside>
  );
}

function TopBar({ title, onLock, dark, onToggleTheme }) {
  return (
    <header style={{
      height: 60, flexShrink: 0, borderBottom: "1px solid var(--border)",
      display: "flex", alignItems: "center", gap: 16, padding: "0 28px",
    }}>
      <h1 style={{ margin: 0, fontSize: 19, fontWeight: 600, letterSpacing: "-.01em" }}>{title}</h1>
      <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8, height: 34, padding: "0 12px",
          borderRadius: "var(--radius-md)", border: "1px solid var(--border)", background: "var(--card)",
        }}>
          <Icon name="wallet" size={15} style={{ color: "var(--muted-foreground)" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12.5 }}>z1qqjn…sww7</span>
        </div>
        <button className="nom-iconbtn" style={{ height: 34, width: 34 }} onClick={onToggleTheme} aria-label="Theme">
          <Icon name={dark ? "zap" : "shield"} size={16} />
        </button>
        <button className="nom-iconbtn" style={{ height: 34, width: 34 }} aria-label="Notifications">
          <Icon name="bell" size={16} />
        </button>
        <button className="nom-iconbtn" style={{ height: 34, width: 34 }} onClick={onLock} aria-label="Lock">
          <Icon name="lock" size={16} />
        </button>
      </div>
    </header>
  );
}

Object.assign(window, { Sidebar, TopBar });
