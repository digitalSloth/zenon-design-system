// Mock chain data for the Syrius wallet kit.
const WALLET_ADDRESS = "z1qqjnwjjpnue8xmmpanz6csze6tcmtzzdtfsww7";

const BALANCES = [
  { symbol: "ZNN", name: "Zenon", amount: 12408.50319, fiat: 9420.18, price: 0.759 },
  { symbol: "QSR", name: "Quasar", amount: 124085.0, fiat: 4218.89, price: 0.034 },
];

const TXNS = [
  { hash: "z1qr8x7n2k9plasma4momentum0sentinel9pillarq", dir: "in",  status: "success",    symbol: "ZNN", amount: 250.0,       when: "2m ago",   peer: "z1qq9k2…7fsw" },
  { hash: "z1qy3momentum8znn5feeless0transfer2quasar1", dir: "out", status: "confirming", symbol: "QSR", amount: 1500.0,      when: "8m ago",   peer: "z1qrp4…m21x" },
  { hash: "z1qz0pillar2sentinel9nom4dual0ledger7zenon", dir: "in",  status: "success",    symbol: "ZNN", amount: 6223.85548,  when: "1h ago",   peer: "z1qq3v…9aze" },
  { hash: "z1qw5plasma0fuse7stake3delegate1reward8nom", dir: "out", status: "success",    symbol: "ZNN", amount: 12.40031,    when: "3h ago",   peer: "z1qrt7…0kp2" },
  { hash: "z1qa2feeless6scale9network0of8momentum3znn", dir: "in",  status: "pending",    symbol: "QSR", amount: 800.0,       when: "5h ago",   peer: "z1qq8h…m44d" },
  { hash: "z1qc4bridge9wrap2eth0unwrap5zenon7liquidq", dir: "out", status: "failed",     symbol: "ZNN", amount: 50.0,        when: "1d ago",   peer: "z1qrn2…81vk" },
];

const fmtFiat = (n) =>
  "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

Object.assign(window, { WALLET_ADDRESS, BALANCES, TXNS, fmtFiat });
