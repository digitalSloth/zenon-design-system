// Screens for the Syrius wallet kit: Dashboard, Send, Receive.
const NS = window.ZenonNoMDesignSystem_afdf82;
const { Button, Card, Address, Amount, TxStatus, TxDirection, TokenIcon, Input, Badge, Tabs } = NS;

/* ----------------------------------------------------------- Dashboard --- */
function StatRow({ tx }) {
  return (
    <tr style={{ borderTop: "1px solid var(--border)" }}>
      <td style={{ padding: "13px 8px" }}><TxDirection direction={tx.dir} /></td>
      <td style={{ padding: "13px 8px" }}>
        <Address address={tx.hash} start={8} end={5} copy={false}
          href={"https://explorer.zenon.network/tx/" + tx.hash} />
      </td>
      <td style={{ padding: "13px 8px", color: "var(--muted-foreground)", fontFamily: "var(--font-mono)", fontSize: 13 }}>{tx.peer}</td>
      <td style={{ padding: "13px 8px", textAlign: "right" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: 13.5 }}>
          {tx.dir === "in" ? "+" : "−"}{tx.amount.toLocaleString("en-US", { maximumFractionDigits: 5 })} <span style={{ color: "var(--muted-foreground)" }}>{tx.symbol}</span>
        </span>
      </td>
      <td style={{ padding: "13px 8px", textAlign: "right" }}><TxStatus status={tx.status} /></td>
      <td style={{ padding: "13px 8px", textAlign: "right", color: "var(--muted-foreground)", fontFamily: "var(--font-mono)", fontSize: 12 }}>{tx.when}</td>
    </tr>
  );
}

function DashboardScreen({ onNavigate }) {
  const totalFiat = BALANCES.reduce((s, b) => s + b.fiat, 0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      {/* Portfolio hero */}
      <div style={{
        borderRadius: "var(--radius-xl)", padding: "26px 28px", color: "#0c1f12",
        backgroundImage: "var(--plasma)", boxShadow: "var(--shadow-md)", position: "relative", overflow: "hidden",
      }}>
        <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", opacity: .72 }}>Total portfolio value</p>
        <div style={{ margin: "8px 0 18px", fontFamily: "var(--font-mono)", fontVariantNumeric: "tabular-nums", fontSize: 40, fontWeight: 700, letterSpacing: "-.02em" }}>
          {fmtFiat(totalFiat)}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => onNavigate("send")} style={heroBtn}><Icon name="send" size={15} /> Send</button>
          <button onClick={() => onNavigate("receive")} style={heroBtn}><Icon name="receive" size={15} /> Receive</button>
          <button onClick={() => onNavigate("bridge")} style={heroBtnGhost}><Icon name="bridge" size={15} /> Bridge</button>
        </div>
      </div>

      {/* Token balances */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {BALANCES.map((b) => (
          <Card key={b.symbol}>
            <div style={{ padding: 20, display: "flex", alignItems: "center", gap: 14 }}>
              <TokenIcon symbol={b.symbol} size={44} />
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{b.name}</div>
                <div style={{ fontSize: 12.5, color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>{b.symbol} · {fmtFiat(b.price)}</div>
              </div>
              <div style={{ marginLeft: "auto", textAlign: "right" }}>
                <Amount value={b.amount} symbol={b.symbol} fiat={"≈ " + fmtFiat(b.fiat)} className="dash-amt" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Activity */}
      <Card>
        <div style={{ display: "flex", alignItems: "center", padding: "16px 20px 6px" }}>
          <span style={{ fontWeight: 600, fontSize: 15 }}>Recent activity</span>
          <Button variant="ghost" size="sm" style={{ marginLeft: "auto" }} onClick={() => onNavigate("send")}>View all</Button>
        </div>
        <div style={{ padding: "0 12px 8px", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {["Type", "Hash", "Counterparty", "Amount", "Status", "Time"].map((h, i) => (
                  <th key={h} className="text-ledger" style={{ textAlign: i >= 3 ? "right" : "left", padding: "8px", color: "var(--muted-foreground)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>{TXNS.map((t) => <StatRow key={t.hash} tx={t} />)}</tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

const heroBtn = {
  display: "inline-flex", alignItems: "center", gap: 7, height: 38, padding: "0 18px",
  borderRadius: "var(--radius-md)", border: "none", cursor: "pointer", font: "inherit",
  fontWeight: 600, fontSize: 14, background: "rgba(8,24,14,.9)", color: "#eafff1",
};
const heroBtnGhost = { ...heroBtn, background: "rgba(255,255,255,.22)", color: "#0c1f12" };

/* ---------------------------------------------------------------- Send --- */
function SendScreen() {
  const [token, setToken] = React.useState("ZNN");
  const [amount, setAmount] = React.useState("");
  const [to, setTo] = React.useState("");
  const [phase, setPhase] = React.useState(null); // null | pending | confirming | success
  const bal = BALANCES.find((b) => b.symbol === token);

  const submit = () => {
    setPhase("pending");
    setTimeout(() => setPhase("confirming"), 1100);
    setTimeout(() => setPhase("success"), 2600);
  };
  const reset = () => { setPhase(null); setAmount(""); setTo(""); };

  return (
    <div style={{ maxWidth: 520 }}>
      <Card>
        <div style={{ padding: "22px 24px" }}>
          <Tabs value={token} onValueChange={setToken} items={BALANCES.map((b) => ({ value: b.symbol, label: b.symbol }))} />

          <div style={{ marginTop: 20 }}>
            <label className="text-ledger" style={{ color: "var(--muted-foreground)", display: "block", marginBottom: 7 }}>Amount</label>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ flex: 1 }}>
                <Input numeric placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} disabled={!!phase} />
              </div>
              <Button variant="outline" size="default" disabled={!!phase} onClick={() => setAmount(String(bal.amount))}>Max</Button>
            </div>
            <div style={{ marginTop: 7, fontSize: 12.5, color: "var(--muted-foreground)", display: "flex", justifyContent: "space-between" }}>
              <span>Available</span>
              <Amount value={bal.amount} symbol={token} />
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <label className="text-ledger" style={{ color: "var(--muted-foreground)", display: "block", marginBottom: 7 }}>Recipient address</label>
            <Input placeholder="z1…" value={to} onChange={(e) => setTo(e.target.value)} disabled={!!phase}
              style={{ fontFamily: "var(--font-mono)", fontSize: 13 }} />
          </div>

          <div style={{ marginTop: 18, padding: "12px 14px", borderRadius: "var(--radius-md)", background: "var(--muted)", display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span style={{ color: "var(--muted-foreground)" }}>Network fee</span>
            <span style={{ fontFamily: "var(--font-mono)", color: "var(--success)" }}>Feeless · PoW</span>
          </div>

          {!phase && (
            <Button style={{ width: "100%", marginTop: 20 }} size="lg" onClick={submit}>Send {token}</Button>
          )}

          {phase && (
            <div style={{ marginTop: 20, padding: "16px", borderRadius: "var(--radius-md)", border: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 12 }}>
              <TxStatus status={phase} />
              <span style={{ fontSize: 13.5, color: "var(--muted-foreground)" }}>
                {phase === "pending" && "Generating Plasma…"}
                {phase === "confirming" && "Broadcasting to the network…"}
                {phase === "success" && `Sent ${amount || "0"} ${token}`}
              </span>
              {phase === "success" && <Button variant="ghost" size="sm" style={{ marginLeft: "auto" }} onClick={reset}>New transfer</Button>}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}

/* ------------------------------------------------------------- Receive --- */
function ReceiveScreen() {
  return (
    <div style={{ maxWidth: 480 }}>
      <Card>
        <div style={{ padding: "26px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
          <p className="text-ledger" style={{ color: "var(--muted-foreground)", margin: 0 }}>Your receiving address</p>
          <div style={{ width: 168, height: 168, borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", background: "var(--muted)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted-foreground)" }}>
            <Icon name="qr" size={96} strokeWidth={1.4} />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: "var(--radius-md)", background: "var(--muted)", maxWidth: "100%" }}>
            <Address address={WALLET_ADDRESS} start={10} end={8} />
          </div>
          <p style={{ margin: 0, fontSize: 12.5, color: "var(--muted-foreground)", textAlign: "center", maxWidth: 320 }}>
            Send only Network of Momentum assets (ZNN / QSR) to this address.
          </p>
        </div>
      </Card>
    </div>
  );
}

/* ---------------------------------------------------- Generic placeholder --- */
function ComingSoon({ title, icon }) {
  return (
    <Card>
      <div style={{ padding: "56px 24px", display: "flex", flexDirection: "column", alignItems: "center", gap: 12, color: "var(--muted-foreground)" }}>
        <Icon name={icon} size={40} strokeWidth={1.4} />
        <span style={{ fontWeight: 600, fontSize: 16, color: "var(--foreground)" }}>{title}</span>
        <span style={{ fontSize: 13.5 }}>This surface is part of the full Syrius experience.</span>
      </div>
    </Card>
  );
}

Object.assign(window, { DashboardScreen, SendScreen, ReceiveScreen, ComingSoon });
