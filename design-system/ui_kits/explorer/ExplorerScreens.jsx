// Explorer content panels: momentums, transactions, tokens.
const NSx = window.ZenonNoMDesignSystem_afdf82;
const { Address, Amount, TxStatus, TxDirection, TokenIcon, Badge: XBadge, Button: XButton } = NSx;

function Panel({ title, action, children }) {
  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-xs)", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", padding: "14px 18px 12px", borderBottom: "1px solid var(--border)" }}>
        <span style={{ fontWeight: 600, fontSize: 14.5 }}>{title}</span>
        {action && <span style={{ marginLeft: "auto" }}>{action}</span>}
      </div>
      <div style={{ overflowX: "auto" }}>{children}</div>
    </div>
  );
}

function Th({ children, right }) {
  return <th className="text-ledger" style={{ textAlign: right ? "right" : "left", padding: "10px 16px", color: "var(--muted-foreground)", whiteSpace: "nowrap" }}>{children}</th>;
}
const tdBase = { padding: "11px 16px", fontSize: 13.5, whiteSpace: "nowrap" };

function MomentumsPanel() {
  return (
    <Panel title="Latest momentums" action={<XButton variant="ghost" size="sm">View all</XButton>}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr>
          <Th>Height</Th><Th>Hash</Th><Th>Producer</Th><Th right>Txns</Th><Th right>Age</Th>
        </tr></thead>
        <tbody>
          {MOMENTUMS.map((m) => (
            <tr key={m.height} style={{ borderTop: "1px solid var(--border)" }}>
              <td style={tdBase}><a href="#" style={{ fontFamily: "var(--font-mono)", color: "var(--info)", textDecoration: "none" }}>#{m.height.toLocaleString()}</a></td>
              <td style={tdBase}><Address address={m.hash} start={8} end={4} copy={false} href="#" /></td>
              <td style={{ ...tdBase }}><XBadge variant="outline">{m.producer}</XBadge></td>
              <td style={{ ...tdBase, textAlign: "right", fontFamily: "var(--font-mono)" }}>{m.txns}</td>
              <td style={{ ...tdBase, textAlign: "right", color: "var(--muted-foreground)", fontFamily: "var(--font-mono)", fontSize: 12 }}>{m.when}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

function TransactionsPanel() {
  return (
    <Panel title="Latest transactions" action={<XButton variant="ghost" size="sm">View all</XButton>}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr>
          <Th>Hash</Th><Th></Th><Th>From → To</Th><Th right>Amount</Th><Th right>Status</Th><Th right>Age</Th>
        </tr></thead>
        <tbody>
          {TXNS.map((t) => (
            <tr key={t.hash} style={{ borderTop: "1px solid var(--border)" }}>
              <td style={tdBase}><Address address={t.hash} start={8} end={4} copy={false} href="#" /></td>
              <td style={tdBase}><TxDirection direction={t.dir} /></td>
              <td style={{ ...tdBase, fontFamily: "var(--font-mono)", color: "var(--muted-foreground)", fontSize: 12.5 }}>{t.from} → {t.to}</td>
              <td style={{ ...tdBase, textAlign: "right" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums" }}>{t.amount.toLocaleString("en-US", { maximumFractionDigits: 5 })} <span style={{ color: "var(--muted-foreground)" }}>{t.symbol}</span></span>
              </td>
              <td style={{ ...tdBase, textAlign: "right" }}><TxStatus status={t.status} /></td>
              <td style={{ ...tdBase, textAlign: "right", color: "var(--muted-foreground)", fontFamily: "var(--font-mono)", fontSize: 12 }}>{t.when}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

function TokensPanel() {
  return (
    <Panel title="Network tokens">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead><tr>
          <Th>Token</Th><Th>Standard</Th><Th right>Total supply</Th><Th right>Holders</Th>
        </tr></thead>
        <tbody>
          {TOKENS.map((tk) => (
            <tr key={tk.symbol} style={{ borderTop: "1px solid var(--border)" }}>
              <td style={tdBase}>
                <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
                  <TokenIcon symbol={tk.symbol} size={30} />
                  <div><div style={{ fontWeight: 600 }}>{tk.name}</div><div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--muted-foreground)" }}>{tk.symbol}</div></div>
                </div>
              </td>
              <td style={tdBase}><XBadge variant="highlight">{tk.badge}</XBadge></td>
              <td style={{ ...tdBase, textAlign: "right", fontFamily: "var(--font-mono)" }}>{tk.supply}</td>
              <td style={{ ...tdBase, textAlign: "right", fontFamily: "var(--font-mono)" }}>{tk.holders}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}

Object.assign(window, { MomentumsPanel, TransactionsPanel, TokensPanel });
