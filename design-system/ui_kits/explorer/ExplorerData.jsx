// Mock data for the Zenon explorer kit.
const NET_STATS = [
  { label: "Momentum height", value: "3,421,889", icon: "layers" },
  { label: "Total addresses", value: "142,067", icon: "wallet" },
  { label: "ZNN price", value: "$0.759", icon: "zap" },
  { label: "Active pillars", value: "78 / 100", icon: "shield" },
];

const MOMENTUMS = [
  { height: 3421889, hash: "z1m9k2plasma7momentum0sentinel4pillar8nomzq", producer: "Pillar.Antares", txns: 14, when: "3s ago" },
  { height: 3421888, hash: "z1m8x7feeless2scale9network0of3momentum1znn", producer: "Pillar.Vega",    txns: 9,  when: "13s ago" },
  { height: 3421887, hash: "z1m7p4dual6ledger0zenon3of8momentum2quasar9", producer: "Pillar.Polaris", txns: 22, when: "23s ago" },
  { height: 3421886, hash: "z1m6a2stake8delegate0reward5plasma7fuse3nom", producer: "Pillar.Antares", txns: 6,  when: "33s ago" },
  { height: 3421885, hash: "z1m5c4bridge9wrap2unwrap7liquid0zenon8znnq1", producer: "Pillar.Sirius",  txns: 17, when: "43s ago" },
];

const TXNS = [
  { hash: "z1t8x2k9momentum4plasma0sentinel7pillar3nzq", dir: "in",  status: "success",    symbol: "ZNN", amount: 250.0,      from: "z1qq9k2…7fsw", to: "z1qrp4w…m21x", when: "3s ago" },
  { hash: "z1t7p4feeless6scale0network9of2momentum8zn1", dir: "out", status: "success",    symbol: "QSR", amount: 1500.0,     from: "z1qrp4w…m21x", to: "z1qq3vd…9aze", when: "9s ago" },
  { hash: "z1t6a2dual0ledger4zenon7of3momentum1quasar8", dir: "in",  status: "confirming", symbol: "ZNN", amount: 6223.85548, from: "z1qq3vd…9aze", to: "z1qrt7h…0kp2", when: "21s ago" },
  { hash: "z1t5c4stake7delegate2reward9plasma3fuse0nom1", dir: "out", status: "success",    symbol: "ZNN", amount: 12.40031,   from: "z1qrt7h…0kp2", to: "z1qq8hn…m44d", when: "44s ago" },
  { hash: "z1t4b9bridge2wrap7unwrap0liquid4zenon8znnq3", dir: "in",  status: "pending",    symbol: "QSR", amount: 800.0,      from: "z1qq8hn…m44d", to: "z1qrn2x…81vk", when: "1m ago" },
  { hash: "z1t3d7plasma9fuse0generate5pow2momentum6zn4", dir: "out", status: "success",    symbol: "ZNN", amount: 50.0,       from: "z1qrn2x…81vk", to: "z1qq9k2…7fsw", when: "2m ago" },
];

const TOKENS = [
  { symbol: "ZNN", name: "Zenon",  supply: "5,712,304",   holders: "84,210", badge: "Native" },
  { symbol: "QSR", name: "Quasar", supply: "180,550,000", holders: "61,884", badge: "Native" },
];

Object.assign(window, { NET_STATS, MOMENTUMS, TXNS, TOKENS });
