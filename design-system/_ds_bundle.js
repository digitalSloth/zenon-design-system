/* @ds-bundle: {"format":3,"namespace":"ZenonNoMDesignSystem_afdf82","components":[{"name":"Address","sourcePath":"components/blockchain/Address.jsx"},{"name":"Amount","sourcePath":"components/blockchain/Amount.jsx"},{"name":"NetworkGlyph","sourcePath":"components/blockchain/NetworkGlyph.jsx"},{"name":"NETWORK_GLYPHS","sourcePath":"components/blockchain/NetworkGlyph.jsx"},{"name":"ZnnLogo","sourcePath":"components/blockchain/TokenIcon.jsx"},{"name":"QsrLogo","sourcePath":"components/blockchain/TokenIcon.jsx"},{"name":"TokenIcon","sourcePath":"components/blockchain/TokenIcon.jsx"},{"name":"TxDirection","sourcePath":"components/blockchain/TxDirection.jsx"},{"name":"TxStatus","sourcePath":"components/blockchain/TxStatus.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"CardContent","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Tabs","sourcePath":"components/core/Tabs.jsx"}],"sourceHashes":{"components/blockchain/Address.jsx":"1752186d9cd9","components/blockchain/Amount.jsx":"4dc15c9faf9e","components/blockchain/NetworkGlyph.jsx":"97273cde451d","components/blockchain/TokenIcon.jsx":"bcdab68eea93","components/blockchain/TxDirection.jsx":"a4a60ef9a130","components/blockchain/TxStatus.jsx":"c266c6ac1c76","components/core/Badge.jsx":"8ff4007e286f","components/core/Button.jsx":"420fa2f5bd5a","components/core/Card.jsx":"1f8e48d4d7ac","components/core/Input.jsx":"f9a82517df9d","components/core/Switch.jsx":"95caef2bed77","components/core/Tabs.jsx":"044a79ecd996","ui_kits/explorer/ExplorerChrome.jsx":"f14a1ce7e319","ui_kits/explorer/ExplorerData.jsx":"a17248784732","ui_kits/explorer/ExplorerIcons.jsx":"3bbbe73015d6","ui_kits/explorer/ExplorerScreens.jsx":"e6671e4a0fa9","ui_kits/wallet/Icons.jsx":"3bbbe73015d6","ui_kits/wallet/WalletChrome.jsx":"ecf654ce9b4e","ui_kits/wallet/WalletData.jsx":"e381b428694e","ui_kits/wallet/WalletScreens.jsx":"011d58ed6d65"},"inlinedExternals":[],"unexposedExports":[{"name":"formatNumber","sourcePath":"components/blockchain/Amount.jsx"}]} */

(() => {

const __ds_ns = (window.ZenonNoMDesignSystem_afdf82 = window.ZenonNoMDesignSystem_afdf82 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/blockchain/Address.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CopyIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
}));
const CheckIcon = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));

/**
 * Address — addresses & hashes. Truncates to start…end, mono, full value on
 * hover (title), inline copy, optional explorer link (hovers blue).
 */
function Address({
  address,
  start = 6,
  end = 4,
  truncate = true,
  copy = true,
  href,
  className = "",
  ...props
}) {
  const [copied, setCopied] = React.useState(false);
  const display = truncate && address.length > start + end + 1 ? `${address.slice(0, start)}…${address.slice(-end)}` : address;
  const onCopy = () => {
    try {
      navigator.clipboard.writeText(address);
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  const Value = href ? "a" : "span";
  const valueProps = href ? {
    href,
    target: "_blank",
    rel: "noreferrer"
  } : {};
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `nom-address ${className}`.trim()
  }, props), /*#__PURE__*/React.createElement(Value, _extends({
    title: address
  }, valueProps), display), copy && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nom-iconbtn",
    "aria-label": "Copy",
    onClick: onCopy
  }, copied ? /*#__PURE__*/React.createElement(CheckIcon, null) : /*#__PURE__*/React.createElement(CopyIcon, null)));
}
Object.assign(__ds_scope, { Address });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blockchain/Address.jsx", error: String((e && e.message) || e) }); }

// components/blockchain/Amount.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Standalone formatter, also used by <Amount>. */
function formatNumber(value, {
  decimals = 8,
  compact = false,
  locale = "en-US"
} = {}) {
  const n = typeof value === "string" ? Number(value) : value;
  if (!Number.isFinite(n)) return String(value);
  if (compact && Math.abs(n) >= 10000) {
    return new Intl.NumberFormat(locale, {
      notation: "compact",
      maximumFractionDigits: 2
    }).format(n);
  }
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(n);
}

/**
 * Amount — token amounts / balances / fees.
 * Mono + tabular-nums; dims insignificant trailing zeros so decimals align.
 * The data is the hero — always use this for on-chain numbers, never raw text.
 */
function Amount({
  value,
  decimals = 8,
  symbol,
  fiat,
  compact = false,
  locale = "en-US",
  dimTrailingZeros = true,
  className = "",
  ...props
}) {
  const n = typeof value === "string" ? Number(value) : value;
  let significant = String(value);
  let zeros = "";
  if (Number.isFinite(n)) {
    if (compact && Math.abs(n) >= 10000) {
      significant = formatNumber(n, {
        compact: true,
        locale
      });
    } else {
      const formatted = new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
      }).format(n);
      if (!dimTrailingZeros || !formatted.includes(".")) {
        significant = formatted;
      } else {
        const match = formatted.match(/^(.*?)(0+)$/);
        if (!match) {
          significant = formatted;
        } else if (match[1].endsWith(".")) {
          const dot = formatted.indexOf(".");
          significant = formatted.slice(0, dot);
          zeros = formatted.slice(dot);
        } else {
          significant = match[1];
          zeros = match[2];
        }
      }
    }
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      flexDirection: "column"
    }
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "font-mono tabular-nums"
  }, /*#__PURE__*/React.createElement("span", null, significant), zeros && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "color-mix(in oklab, var(--muted-foreground) 60%, transparent)"
    }
  }, zeros), symbol && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4,
      color: "var(--muted-foreground)"
    }
  }, symbol)), fiat && /*#__PURE__*/React.createElement("span", {
    className: "font-mono tabular-nums",
    style: {
      fontSize: "0.75rem",
      color: "var(--muted-foreground)"
    }
  }, fiat));
}
Object.assign(__ds_scope, { formatNumber, Amount });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blockchain/Amount.jsx", error: String((e && e.message) || e) }); }

// components/blockchain/NetworkGlyph.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * NetworkGlyph — Zenon's network-concept brand marks (Accelerator-Z, Bridge,
 * Pillar, Sentinel). These are filled identity glyphs, NOT generic UI icons:
 * each is the authentic mark normalized onto the system's 24x24 grid with
 * uniform optical sizing. Inherits color via currentColor; size in px.
 */
const GLYPHS = {
  az: `<g transform="translate(3.000 3.000) scale(0.6207)"><path d="M10.6875 5.74251C7.65516 9.14568 5.57415 14.035 5.38091 14.4956L0 12.1922L6.02008 6.17348C6.7187 5.47501 7.72948 5.16293 8.71053 5.35613L10.6875 5.74251ZM13.6306 21.5695C13.6306 21.5695 19.1899 19.266 22.3858 16.0709C30.4125 8.04597 29.0747 1.77462 28.6437 0.362825C27.2316 -0.0830057 20.9588 -1.40564 12.932 6.61931C9.73617 9.81443 7.43219 15.3724 7.43219 15.3724L13.6306 21.5695ZM23.2628 18.3149C19.8588 21.3466 14.9684 23.4271 14.5076 23.6203L16.8116 29L22.8317 22.9813C23.5303 22.2828 23.8425 21.2723 23.6492 20.2914L23.2628 18.3149ZM10.4051 23.0556C10.4051 24.2891 9.89968 25.4036 9.09701 26.2061C7.34301 27.9597 0 29 0 29C0 29 1.04051 21.6587 2.79451 19.9051C3.41702 19.2794 4.21145 18.8529 5.07693 18.6795C5.94241 18.5062 6.83989 18.5939 7.65541 18.9315C8.47094 19.2691 9.16773 19.8414 9.6573 20.5756C10.1469 21.3099 10.4071 22.1731 10.4051 23.0556ZM16.3508 9.68068C16.3508 8.04597 17.6886 6.70848 19.3237 6.70848C20.9588 6.70848 22.2966 8.04597 22.2966 9.68068C22.2966 11.3154 20.9588 12.6529 19.3237 12.6529C17.6886 12.6529 16.3508 11.3154 16.3508 9.68068Z"></path></g>`,
  bridge: `<g transform="translate(1.400 5.450) scale(0.2273)"><path d="m 12.270752,50.635926 v 5.99823 c 0,0.552307 -0.447754,1 -1,1 H 0.99999995 c -0.5522461,0 -0.99999999765625,-0.447693 -0.99999999765625,-1 v -5.99823 c 0,-0.552246 0.44775389765625,-1 0.99999999765625,-1 H 11.270752 c 0.552246,0 1,0.447754 1,1 z m -1.441773,-4 H 1.4417725 V 1.9999996 c 0,-1.10455296 0.8954468,-1.99999996328125 2,-1.99999996328125 h 5.3872067 c 1.104554,0 1.9999998,0.89544700328125 1.9999998,1.99999996328125 v 2.328125 C 34.598266,23.025452 58.674133,23.025269 82.442444,4.3278196 v -2.32782 c 0,-1.10455296 0.895446,-1.99999996328125 2,-1.99999996328125 h 5.387207 c 1.104553,0 2,0.89544700328125 2,1.99999996328125 V 46.635926 H 82.442444 V 33.781922 H 10.828979 Z M 80.339844,28.781434 h 2.1026 V 10.591309 c -0.699829,0.50354 -1.40094,0.985352 -2.1026,1.458923 z m -7.800782,0 h 2.800782 V 15.163331 c -0.932434,0.532226 -1.865906,1.042175 -2.800782,1.522033 z m -7.800781,0 h 2.800781 v -9.784729 c -0.932739,0.384338 -1.866333,0.747497 -2.800781,1.080139 z m -7.801758,0 h 2.801758 V 21.60608 c -0.933411,0.239624 -1.86731,0.458923 -2.801758,0.647216 z m -7.800781,0 h 2.800781 v -5.768311 c -0.93341,0.09662 -1.867004,0.170532 -2.800781,0.216126 z m -7.80127,0 h 2.80127 v -5.552186 c -0.93396,-0.04559 -1.867676,-0.119506 -2.80127,-0.216186 z m -7.801269,0 h 2.801269 V 22.253113 C 35.400207,22.06482 34.46643,21.845643 33.533203,21.606019 Z m -7.800781,0 h 2.800781 v -8.704651 c -0.934509,-0.332581 -1.867981,-0.695862 -2.800781,-1.08014 z m -7.80127,0 h 2.80127 v -12.09607 c -0.935059,-0.479919 -1.868653,-0.98999 -2.80127,-1.522278 z m -7.102173,0 h 2.102173 V 12.05011 c -0.701477,-0.47345 -1.402405,-0.9552 -2.102173,-1.458618 z M 92.271362,49.635926 H 82.000671 c -0.552246,0 -1,0.447754 -1,1 v 5.99823 c 0,0.552307 0.447754,1 1,1 h 10.270691 c 0.552307,0 1,-0.447693 1,-1 v -5.99823 c 0,-0.552246 -0.447693,-1 -1,-1 z"></path></g>`,
  pillar: `<g transform="translate(7.531 1.000) scale(0.6875)"><path d="M13 16.4444L9.78571 18.2637L6.5 20.1531L3.21429 18.2637L0 16.4444V13.7853L3.21429 15.6746L6.5 17.494L9.78571 15.6746L13 13.7853V16.4444Z"></path>
<path d="M13 21.6226L9.78571 23.5119L6.5 25.3313L3.21429 23.5119L0 21.6226V19.0334L3.21429 20.8528L6.5 22.7422L9.78571 20.8528L13 19.0334V21.6226Z"></path>
<path d="M13 28.2003L9.78571 30.0897L6.5 31.9091L3.21429 30.0897L0 28.2003V24.1417L3.21429 25.9611L6.5 27.8505L9.78571 25.9611L13 24.1417V28.2003Z"></path>
<path d="M9.78571 1.81938L6.5 0L3.21429 1.81938L0 3.70873V11.2661L3.21429 13.1555L6.5 14.9749L9.78571 13.1555L13 11.2661V3.70873L9.78571 1.81938Z"></path></g>`,
  sentinel: `<g transform="translate(2.000 2.000) scale(0.3226)"><path d="M 31.204958,1.2927313e-5 C 27.077277,0.00377269 22.990501,0.82892074 19.140505,2.4101691 13.540511,4.7101669 8.7397207,8.7109551 5.3397242,13.710951 c -0.3999996,0.599999 -0.1996088,1.498437 0.4003906,1.898437 0.2999997,0.1 0.5007815,0.201172 0.8007812,0.201172 0.3999996,0 0.7996097,-0.19961 1.0996094,-0.599609 C 13.940498,5.8109595 25.239735,1.1109525 36.339724,3.2109504 c 0.799999,0.1 1.501562,-0.4015632 1.601562,-1.1015625 0.1,-0.7999992 -0.401563,-1.49960944 -1.101562,-1.59960935 C 34.964726,0.1660289 33.081177,-0.00169605 31.204958,1.2927313e-5 Z M 49.607302,6.2949348 c -0.424804,-0.040039 -0.853516,0.1406253 -1.166016,0.515625 -0.499999,0.5999994 -0.40078,1.4003911 0.199219,1.9003906 10.39999,8.0999926 13.899995,22.1992306 8.5,34.1992186 -0.3,0.7 -7.81e-4,1.500782 0.699219,1.800782 0.2,0.1 0.401562,0.09961 0.601562,0.09961 0.6,0 1.098829,-0.300782 1.298828,-0.800781 1.399999,-3.299997 2.29961,-6.698832 2.59961,-10.298828 0.299999,-3.399997 0.0016,-6.901176 -0.898438,-10.201172 C 59.741288,16.809785 55.739718,10.809384 50.339724,6.6093879 50.114724,6.4218881 49.862184,6.3189582 49.607302,6.2949348 Z M 31.240114,13.210951 c -10.199989,-10e-7 -18.5,8.298447 -18.5,18.398437 0,10.19999 8.300011,18.5 18.5,18.5 10.19999,0 18.5,-8.298448 18.5,-18.398437 0,-10.19999 -8.30001,-18.5 -18.5,-18.5 z m 0,2.798828 c 8.599992,0 15.701172,7.00118 15.701172,15.701172 0,8.699991 -7.00118,15.699218 -15.701172,15.699218 -8.699991,0 -15.699218,-6.999227 -15.699218,-15.699218 0,-8.699992 7.099227,-15.701172 15.699218,-15.701172 z M 1.8455835,24.400404 c -0.6712884,0.03828 -1.21718759,0.496875 -1.30468751,1.109375 -1.0999989,5.699994 -0.5003885,11.599615 1.59960941,17.099609 2.0999979,5.399995 5.7003957,10.101566 10.4003906,13.601563 0.199999,0.199999 0.498828,0.298828 0.798828,0.298828 0.399999,0 0.901172,-0.200001 1.201172,-0.5 0.399999,-0.6 0.299218,-1.500391 -0.300782,-1.900391 C 5.5401239,47.609395 1.2401168,36.609768 3.2401148,26.009779 c 0.1,-0.8 -0.3996101,-1.49961 -1.0996094,-1.59961 -0.1,-0.0125 -0.1990235,-0.01523 -0.2949219,-0.0098 z m 52.5624995,24.49414 c -0.424804,-0.04004 -0.855469,0.140626 -1.167969,0.515625 -6.799993,8.199992 -18.000401,11.999607 -28.40039,9.59961 -0.7,-0.2 -1.39961,0.3 -1.59961,1 -0.199999,0.699999 0.300001,1.399609 1,1.599609 2.299998,0.5 4.700003,0.800781 7,0.800781 3.399997,0 6.799613,-0.49961 10.09961,-1.599609 5.499994,-1.899998 10.300003,-5.301176 14,-9.701172 0.499999,-0.599999 0.40078,-1.398438 -0.199219,-1.898437 -0.225,-0.1875 -0.477539,-0.292383 -0.732422,-0.316407 z"></path></g>`
};
function NetworkGlyph({
  name,
  size = 24,
  className = "",
  title,
  ...props
}) {
  const body = GLYPHS[name];
  if (!body) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "currentColor",
    className: className,
    role: title ? "img" : undefined,
    "aria-hidden": title ? undefined : true,
    "aria-label": title
  }, props, {
    dangerouslySetInnerHTML: {
      __html: (title ? "<title>" + title + "</title>" : "") + body
    }
  }));
}

/** The four valid glyph names. */
const NETWORK_GLYPHS = Object.keys(GLYPHS);
Object.assign(__ds_scope, { NetworkGlyph, NETWORK_GLYPHS });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blockchain/NetworkGlyph.jsx", error: String((e && e.message) || e) }); }

// components/blockchain/TokenIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The official angular ZNN mark (plasma-green gradient). */
function ZnnLogo({
  className = "",
  ...props
}) {
  const id = React.useId();
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 48 77",
    fill: "none",
    className: className
  }, props), /*#__PURE__*/React.createElement("path", {
    d: "M47.9838 6.10352e-05H0V9.43394H30.8722L0 28.627V29.9282V39.2971V77.0001H8.36965V52.8623L39.4685 77.0001H48V71.356V29.9282H15.7518L47.9838 9.30382V6.10352e-05ZM39.4685 39.2971L39.4847 64.4595L8.36965 39.3296V39.2971H39.4685Z",
    fill: `url(#znn-${id})`
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `znn-${id}`,
    x1: "24",
    y1: "0",
    x2: "24",
    y2: "77",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#6FF34D"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#4BD926",
    stopOpacity: "0.5"
  }))));
}

/** Complementary angular "Q" mark in Zenon blue (no official QSR mark exists). */
function QsrLogo({
  className = "",
  ...props
}) {
  const id = React.useId();
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 64 64",
    fill: "none",
    className: className
  }, props), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "12",
    width: "40",
    height: "40",
    stroke: `url(#qsr-${id})`,
    strokeWidth: "9",
    strokeLinejoin: "miter"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42 42L58 58",
    stroke: `url(#qsr-${id})`,
    strokeWidth: "9",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: `qsr-${id}`,
    x1: "32",
    y1: "8",
    x2: "32",
    y2: "58",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#4D9BFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#0061EB"
  }))));
}
const BUILTIN = {
  ZNN: ZnnLogo,
  QSR: QsrLogo
};

/**
 * TokenIcon — token logo with ticker fallback. Ships built-in ZNN / QSR marks
 * (used automatically by symbol). An explicit `src` overrides; unknown symbols
 * fall back to a tinted ticker disc. Size via `size` (px).
 */
function TokenIcon({
  symbol,
  src,
  size = 40,
  className = "",
  ...props
}) {
  const Logo = !src && BUILTIN[symbol?.toUpperCase()];
  const box = {
    width: size,
    height: size,
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-full)",
    overflow: "hidden"
  };
  if (Logo) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: box
    }, props), /*#__PURE__*/React.createElement(Logo, {
      style: {
        width: "62%",
        height: "62%"
      }
    }));
  }
  if (src) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: box
    }, props), /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: symbol,
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
      }
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      ...box,
      background: "var(--muted)",
      color: "var(--muted-foreground)",
      fontFamily: "var(--font-mono)",
      fontWeight: 600,
      fontSize: size * 0.3
    }
  }, props), (symbol || "?").slice(0, 3).toUpperCase());
}
Object.assign(__ds_scope, { ZnnLogo, QsrLogo, TokenIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blockchain/TokenIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — generic chip. Status variants (success/warning/pending) are soft
 * tints so they read as state, not action. `highlight` is the reserved brand
 * pink for "new"/featured — use sparingly.
 */
function Badge({
  variant = "default",
  className = "",
  children,
  ...props
}) {
  const cls = `nom-badge nom-badge--${variant} ${className}`.trim();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, props), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/blockchain/TxDirection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ArrowIn = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M17 7 7 17M17 17H7V7"
}));
const ArrowOut = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M7 7h10v10M7 17 17 7"
}));

/**
 * TxDirection — in/out chip. `in` reads green (received); `out` is neutral
 * (sending isn't an error). Arrow + label, never color alone.
 */
function TxDirection({
  direction,
  label,
  className = "",
  ...props
}) {
  const isIn = direction === "in";
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, _extends({
    variant: isIn ? "success" : "outline",
    className: className,
    style: !isIn ? {
      background: "var(--muted)",
      color: "var(--muted-foreground)",
      borderColor: "transparent"
    } : undefined
  }, props), isIn ? /*#__PURE__*/React.createElement(ArrowIn, null) : /*#__PURE__*/React.createElement(ArrowOut, null), label ?? (isIn ? "In" : "Out"));
}
Object.assign(__ds_scope, { TxDirection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blockchain/TxDirection.jsx", error: String((e && e.message) || e) }); }

// components/blockchain/TxStatus.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Spinner = () => /*#__PURE__*/React.createElement("svg", {
  className: "nom-spin",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  "aria-hidden": "true",
  style: {
    width: ".75rem",
    height: ".75rem"
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "M21 12a9 9 0 1 1-6.219-8.56"
}));
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const XMark = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
}));
const CONFIG = {
  pending: {
    variant: "pending",
    label: "Pending",
    spin: true
  },
  confirming: {
    variant: "warning",
    label: "Confirming",
    spin: true
  },
  success: {
    variant: "success",
    label: "Confirmed",
    spin: false
  },
  failed: {
    variant: "destructive-soft",
    label: "Failed",
    spin: false
  }
};

/**
 * TxStatus — one soft-chip family for transaction state. Spinner on in-flight
 * states; icon + label so it never relies on color alone.
 */
function TxStatus({
  status,
  label,
  className = "",
  ...props
}) {
  const c = CONFIG[status] || CONFIG.pending;
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, _extends({
    variant: c.variant,
    className: className
  }, props), c.spin ? /*#__PURE__*/React.createElement(Spinner, null) : status === "success" ? /*#__PURE__*/React.createElement(Check, null) : status === "failed" ? /*#__PURE__*/React.createElement(XMark, null) : null, label ?? c.label);
}
Object.assign(__ds_scope, { TxStatus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/blockchain/TxStatus.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action primitive.
 * Default variant carries the signature plasma gradient; reserve it for the
 * main action. Renders as <a> when `href` is passed.
 */
function Button({
  variant = "default",
  size = "default",
  href,
  className = "",
  children,
  ...props
}) {
  const variantClass = {
    default: "nom-btn--primary",
    primary: "nom-btn--primary",
    destructive: "nom-btn--destructive",
    outline: "nom-btn--outline",
    secondary: "nom-btn--secondary",
    ghost: "nom-btn--ghost",
    link: "nom-btn--link"
  }[variant] || "nom-btn--primary";
  const cls = `nom-btn nom-btn--${size} ${variantClass} ${className}`.trim();
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — the base surface. Tight radius, theme-aware elevation. */
function Card({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `nom-card ${className}`.trim()
  }, props), children);
}
function CardHeader({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `nom-card__header ${className}`.trim()
  }, props), children);
}
function CardTitle({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("h3", _extends({
    className: `nom-card__title ${className}`.trim()
  }, props), children);
}
function CardDescription({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    className: `nom-card__desc ${className}`.trim()
  }, props), children);
}
function CardContent({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `nom-card__content ${className}`.trim()
  }, props), children);
}
function CardFooter({
  className = "",
  children,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `nom-card__footer ${className}`.trim()
  }, props), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Input — text/numeric field. Pass `numeric` for mono tabular figures + decimal keypad. */
function Input({
  numeric = false,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: `nom-input ${className}`.trim(),
    "data-numeric": numeric ? "" : undefined,
    inputMode: numeric ? "decimal" : undefined
  }, props));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — on/off toggle. The "on" state carries the plasma gradient. */
function Switch({
  checked = false,
  onCheckedChange,
  className = "",
  ...props
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    "data-on": checked ? "true" : "false",
    className: `nom-switch ${className}`.trim(),
    onClick: () => onCheckedChange && onCheckedChange(!checked)
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "nom-switch__thumb"
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tabs.jsx
try { (() => {
/**
 * Tabs — simple controlled tab strip.
 * `variant="default"` is a pill group on a muted track; `underline` is a flat
 * underline indicator. Pass `items` ([{value,label}]) + `value` + `onValueChange`.
 */
function Tabs({
  items = [],
  value,
  onValueChange,
  variant = "default",
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    className: `nom-tabs__list nom-tabs__list--${variant} ${className}`.trim()
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    type: "button",
    className: "nom-tab",
    "data-active": value === it.value ? "true" : "false",
    "aria-selected": value === it.value,
    onClick: () => onValueChange && onValueChange(it.value)
  }, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explorer/ExplorerChrome.jsx
try { (() => {
// Header + stat row for the Zenon explorer kit.
const {
  ZnnLogo,
  Input,
  Badge
} = window.ZenonNoMDesignSystem_afdf82;
function ExplorerHeader({
  tab,
  onTab
}) {
  const tabs = ["Momentums", "Transactions", "Tokens", "Pillars"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      borderBottom: "1px solid var(--border)",
      background: "var(--card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 28px",
      height: 62,
      display: "flex",
      alignItems: "center",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ZnnLogo, {
    style: {
      width: 18,
      height: 26
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      letterSpacing: "-.01em"
    }
  }, "Zenon Explorer"), /*#__PURE__*/React.createElement(Badge, {
    variant: "outline",
    style: {
      marginLeft: 2
    }
  }, "Alphanet")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 420,
      marginLeft: "auto",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 11,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--muted-foreground)",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16
  })), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search momentum, tx hash or address\u2026",
    style: {
      paddingLeft: 34,
      height: 38
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nom-tabs__list nom-tabs__list--underline",
    style: {
      display: "flex",
      gap: 22
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: "nom-tab",
    "data-active": tab === t,
    onClick: () => onTab(t)
  }, t)))));
}
function StatStrip() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16,
      marginBottom: 22
    }
  }, NET_STATS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      padding: "16px 18px",
      boxShadow: "var(--shadow-xs)",
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: "var(--radius-md)",
      background: "var(--accent)",
      color: "var(--primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 18
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "text-ledger",
    style: {
      color: "var(--muted-foreground)"
    }
  }, s.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontSize: 19,
      fontWeight: 600,
      marginTop: 2
    }
  }, s.value)))));
}
Object.assign(window, {
  ExplorerHeader,
  StatStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explorer/ExplorerChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explorer/ExplorerData.jsx
try { (() => {
// Mock data for the Zenon explorer kit.
const NET_STATS = [{
  label: "Momentum height",
  value: "3,421,889",
  icon: "layers"
}, {
  label: "Total addresses",
  value: "142,067",
  icon: "wallet"
}, {
  label: "ZNN price",
  value: "$0.759",
  icon: "zap"
}, {
  label: "Active pillars",
  value: "78 / 100",
  icon: "shield"
}];
const MOMENTUMS = [{
  height: 3421889,
  hash: "z1m9k2plasma7momentum0sentinel4pillar8nomzq",
  producer: "Pillar.Antares",
  txns: 14,
  when: "3s ago"
}, {
  height: 3421888,
  hash: "z1m8x7feeless2scale9network0of3momentum1znn",
  producer: "Pillar.Vega",
  txns: 9,
  when: "13s ago"
}, {
  height: 3421887,
  hash: "z1m7p4dual6ledger0zenon3of8momentum2quasar9",
  producer: "Pillar.Polaris",
  txns: 22,
  when: "23s ago"
}, {
  height: 3421886,
  hash: "z1m6a2stake8delegate0reward5plasma7fuse3nom",
  producer: "Pillar.Antares",
  txns: 6,
  when: "33s ago"
}, {
  height: 3421885,
  hash: "z1m5c4bridge9wrap2unwrap7liquid0zenon8znnq1",
  producer: "Pillar.Sirius",
  txns: 17,
  when: "43s ago"
}];
const TXNS = [{
  hash: "z1t8x2k9momentum4plasma0sentinel7pillar3nzq",
  dir: "in",
  status: "success",
  symbol: "ZNN",
  amount: 250.0,
  from: "z1qq9k2…7fsw",
  to: "z1qrp4w…m21x",
  when: "3s ago"
}, {
  hash: "z1t7p4feeless6scale0network9of2momentum8zn1",
  dir: "out",
  status: "success",
  symbol: "QSR",
  amount: 1500.0,
  from: "z1qrp4w…m21x",
  to: "z1qq3vd…9aze",
  when: "9s ago"
}, {
  hash: "z1t6a2dual0ledger4zenon7of3momentum1quasar8",
  dir: "in",
  status: "confirming",
  symbol: "ZNN",
  amount: 6223.85548,
  from: "z1qq3vd…9aze",
  to: "z1qrt7h…0kp2",
  when: "21s ago"
}, {
  hash: "z1t5c4stake7delegate2reward9plasma3fuse0nom1",
  dir: "out",
  status: "success",
  symbol: "ZNN",
  amount: 12.40031,
  from: "z1qrt7h…0kp2",
  to: "z1qq8hn…m44d",
  when: "44s ago"
}, {
  hash: "z1t4b9bridge2wrap7unwrap0liquid4zenon8znnq3",
  dir: "in",
  status: "pending",
  symbol: "QSR",
  amount: 800.0,
  from: "z1qq8hn…m44d",
  to: "z1qrn2x…81vk",
  when: "1m ago"
}, {
  hash: "z1t3d7plasma9fuse0generate5pow2momentum6zn4",
  dir: "out",
  status: "success",
  symbol: "ZNN",
  amount: 50.0,
  from: "z1qrn2x…81vk",
  to: "z1qq9k2…7fsw",
  when: "2m ago"
}];
const TOKENS = [{
  symbol: "ZNN",
  name: "Zenon",
  supply: "5,712,304",
  holders: "84,210",
  badge: "Native"
}, {
  symbol: "QSR",
  name: "Quasar",
  supply: "180,550,000",
  holders: "61,884",
  badge: "Native"
}];
Object.assign(window, {
  NET_STATS,
  MOMENTUMS,
  TXNS,
  TOKENS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explorer/ExplorerData.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explorer/ExplorerIcons.jsx
try { (() => {
// Lucide icons (the icon system nom-ui ships, @lucide/vue) — authentic 24×24
// path data, rendered as a small React <Icon> for the wallet kit.
const {
  useId
} = React;
const LUCIDE = {
  dashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  receive: '<path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/>',
  bridge: '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',
  layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  settings: '<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  arrowDownLeft: '<path d="M17 7 7 17"/><path d="M17 17H7V7"/>',
  qr: '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'
};
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  className = "",
  style = {}
}) {
  const d = LUCIDE[name] || "";
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: style,
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: d
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explorer/ExplorerIcons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/explorer/ExplorerScreens.jsx
try { (() => {
// Explorer content panels: momentums, transactions, tokens.
const NSx = window.ZenonNoMDesignSystem_afdf82;
const {
  Address,
  Amount,
  TxStatus,
  TxDirection,
  TokenIcon,
  Badge: XBadge,
  Button: XButton
} = NSx;
function Panel({
  title,
  action,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-xs)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "14px 18px 12px",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14.5
    }
  }, title), action && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto"
    }
  }, action)), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, children));
}
function Th({
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("th", {
    className: "text-ledger",
    style: {
      textAlign: right ? "right" : "left",
      padding: "10px 16px",
      color: "var(--muted-foreground)",
      whiteSpace: "nowrap"
    }
  }, children);
}
const tdBase = {
  padding: "11px 16px",
  fontSize: 13.5,
  whiteSpace: "nowrap"
};
function MomentumsPanel() {
  return /*#__PURE__*/React.createElement(Panel, {
    title: "Latest momentums",
    action: /*#__PURE__*/React.createElement(XButton, {
      variant: "ghost",
      size: "sm"
    }, "View all")
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, null, "Height"), /*#__PURE__*/React.createElement(Th, null, "Hash"), /*#__PURE__*/React.createElement(Th, null, "Producer"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Txns"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Age"))), /*#__PURE__*/React.createElement("tbody", null, MOMENTUMS.map(m => /*#__PURE__*/React.createElement("tr", {
    key: m.height,
    style: {
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: tdBase
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--info)",
      textDecoration: "none"
    }
  }, "#", m.height.toLocaleString())), /*#__PURE__*/React.createElement("td", {
    style: tdBase
  }, /*#__PURE__*/React.createElement(Address, {
    address: m.hash,
    start: 8,
    end: 4,
    copy: false,
    href: "#"
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdBase
    }
  }, /*#__PURE__*/React.createElement(XBadge, {
    variant: "outline"
  }, m.producer)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdBase,
      textAlign: "right",
      fontFamily: "var(--font-mono)"
    }
  }, m.txns), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdBase,
      textAlign: "right",
      color: "var(--muted-foreground)",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, m.when))))));
}
function TransactionsPanel() {
  return /*#__PURE__*/React.createElement(Panel, {
    title: "Latest transactions",
    action: /*#__PURE__*/React.createElement(XButton, {
      variant: "ghost",
      size: "sm"
    }, "View all")
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, null, "Hash"), /*#__PURE__*/React.createElement(Th, null), /*#__PURE__*/React.createElement(Th, null, "From \u2192 To"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Amount"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Status"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Age"))), /*#__PURE__*/React.createElement("tbody", null, TXNS.map(t => /*#__PURE__*/React.createElement("tr", {
    key: t.hash,
    style: {
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: tdBase
  }, /*#__PURE__*/React.createElement(Address, {
    address: t.hash,
    start: 8,
    end: 4,
    copy: false,
    href: "#"
  })), /*#__PURE__*/React.createElement("td", {
    style: tdBase
  }, /*#__PURE__*/React.createElement(TxDirection, {
    direction: t.dir
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdBase,
      fontFamily: "var(--font-mono)",
      color: "var(--muted-foreground)",
      fontSize: 12.5
    }
  }, t.from, " \u2192 ", t.to), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdBase,
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums"
    }
  }, t.amount.toLocaleString("en-US", {
    maximumFractionDigits: 5
  }), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted-foreground)"
    }
  }, t.symbol))), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdBase,
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(TxStatus, {
    status: t.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdBase,
      textAlign: "right",
      color: "var(--muted-foreground)",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, t.when))))));
}
function TokensPanel() {
  return /*#__PURE__*/React.createElement(Panel, {
    title: "Network tokens"
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, null, "Token"), /*#__PURE__*/React.createElement(Th, null, "Standard"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Total supply"), /*#__PURE__*/React.createElement(Th, {
    right: true
  }, "Holders"))), /*#__PURE__*/React.createElement("tbody", null, TOKENS.map(tk => /*#__PURE__*/React.createElement("tr", {
    key: tk.symbol,
    style: {
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: tdBase
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement(TokenIcon, {
    symbol: tk.symbol,
    size: 30
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, tk.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--muted-foreground)"
    }
  }, tk.symbol)))), /*#__PURE__*/React.createElement("td", {
    style: tdBase
  }, /*#__PURE__*/React.createElement(XBadge, {
    variant: "highlight"
  }, tk.badge)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdBase,
      textAlign: "right",
      fontFamily: "var(--font-mono)"
    }
  }, tk.supply), /*#__PURE__*/React.createElement("td", {
    style: {
      ...tdBase,
      textAlign: "right",
      fontFamily: "var(--font-mono)"
    }
  }, tk.holders))))));
}
Object.assign(window, {
  MomentumsPanel,
  TransactionsPanel,
  TokensPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/explorer/ExplorerScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wallet/Icons.jsx
try { (() => {
// Lucide icons (the icon system nom-ui ships, @lucide/vue) — authentic 24×24
// path data, rendered as a small React <Icon> for the wallet kit.
const {
  useId
} = React;
const LUCIDE = {
  dashboard: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  receive: '<path d="M12 17V3"/><path d="m6 11 6 6 6-6"/><path d="M19 21H5"/>',
  bridge: '<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>',
  layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.84Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  settings: '<path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  arrowUpRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
  arrowDownLeft: '<path d="M17 7 7 17"/><path d="M17 17H7V7"/>',
  qr: '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'
};
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  className = "",
  style = {}
}) {
  const d = LUCIDE[name] || "";
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: style,
    "aria-hidden": "true",
    dangerouslySetInnerHTML: {
      __html: d
    }
  });
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wallet/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wallet/WalletChrome.jsx
try { (() => {
// Sidebar + TopBar chrome for the Syrius wallet kit.
const {
  ZnnLogo
} = window.ZenonNoMDesignSystem_afdf82;
const NAV = [{
  id: "dashboard",
  label: "Dashboard",
  icon: "dashboard"
}, {
  id: "send",
  label: "Transfer",
  icon: "send"
}, {
  id: "receive",
  label: "Receive",
  icon: "receive"
}, {
  id: "stake",
  label: "Staking",
  icon: "layers"
}, {
  id: "bridge",
  label: "Bridge",
  icon: "bridge"
}];
function Sidebar({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 232,
      flexShrink: 0,
      background: "var(--sidebar)",
      borderRight: "1px solid var(--sidebar-border)",
      display: "flex",
      flexDirection: "column",
      padding: "20px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "4px 8px 22px"
    }
  }, /*#__PURE__*/React.createElement(ZnnLogo, {
    style: {
      width: 22,
      height: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: "-.01em"
    }
  }, "syrius"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--muted-foreground)"
    }
  }, "Network of Momentum"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, NAV.map(item => {
    const on = active === item.id;
    return /*#__PURE__*/React.createElement("button", {
      key: item.id,
      onClick: () => onNavigate(item.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "9px 11px",
        borderRadius: "var(--radius-md)",
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        font: "inherit",
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        color: on ? "var(--sidebar-accent-foreground)" : "var(--muted-foreground)",
        background: on ? "var(--sidebar-accent)" : "transparent"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 18,
      style: {
        color: on ? "var(--primary)" : "inherit"
      }
    }), item.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("settings"),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "9px 11px",
      borderRadius: "var(--radius-md)",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      font: "inherit",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--muted-foreground)",
      background: "transparent"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "settings",
    size: 18
  }), " Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "10px 11px",
      marginTop: 6,
      borderRadius: "var(--radius-md)",
      background: "var(--sidebar-accent)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 16,
    style: {
      color: "var(--success)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--muted-foreground)"
    }
  }, "Node synced"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--success)"
    }
  }, "#3.42M"))));
}
function TopBar({
  title,
  onLock,
  dark,
  onToggleTheme
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 60,
      flexShrink: 0,
      borderBottom: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 28px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: "-.01em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 34,
      padding: "0 12px",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border)",
      background: "var(--card)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wallet",
    size: 15,
    style: {
      color: "var(--muted-foreground)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12.5
    }
  }, "z1qqjn\u2026sww7")), /*#__PURE__*/React.createElement("button", {
    className: "nom-iconbtn",
    style: {
      height: 34,
      width: 34
    },
    onClick: onToggleTheme,
    "aria-label": "Theme"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: dark ? "zap" : "shield",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "nom-iconbtn",
    style: {
      height: 34,
      width: 34
    },
    "aria-label": "Notifications"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 16
  })), /*#__PURE__*/React.createElement("button", {
    className: "nom-iconbtn",
    style: {
      height: 34,
      width: 34
    },
    onClick: onLock,
    "aria-label": "Lock"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 16
  }))));
}
Object.assign(window, {
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wallet/WalletChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wallet/WalletData.jsx
try { (() => {
// Mock chain data for the Syrius wallet kit.
const WALLET_ADDRESS = "z1qqjnwjjpnue8xmmpanz6csze6tcmtzzdtfsww7";
const BALANCES = [{
  symbol: "ZNN",
  name: "Zenon",
  amount: 12408.50319,
  fiat: 9420.18,
  price: 0.759
}, {
  symbol: "QSR",
  name: "Quasar",
  amount: 124085.0,
  fiat: 4218.89,
  price: 0.034
}];
const TXNS = [{
  hash: "z1qr8x7n2k9plasma4momentum0sentinel9pillarq",
  dir: "in",
  status: "success",
  symbol: "ZNN",
  amount: 250.0,
  when: "2m ago",
  peer: "z1qq9k2…7fsw"
}, {
  hash: "z1qy3momentum8znn5feeless0transfer2quasar1",
  dir: "out",
  status: "confirming",
  symbol: "QSR",
  amount: 1500.0,
  when: "8m ago",
  peer: "z1qrp4…m21x"
}, {
  hash: "z1qz0pillar2sentinel9nom4dual0ledger7zenon",
  dir: "in",
  status: "success",
  symbol: "ZNN",
  amount: 6223.85548,
  when: "1h ago",
  peer: "z1qq3v…9aze"
}, {
  hash: "z1qw5plasma0fuse7stake3delegate1reward8nom",
  dir: "out",
  status: "success",
  symbol: "ZNN",
  amount: 12.40031,
  when: "3h ago",
  peer: "z1qrt7…0kp2"
}, {
  hash: "z1qa2feeless6scale9network0of8momentum3znn",
  dir: "in",
  status: "pending",
  symbol: "QSR",
  amount: 800.0,
  when: "5h ago",
  peer: "z1qq8h…m44d"
}, {
  hash: "z1qc4bridge9wrap2eth0unwrap5zenon7liquidq",
  dir: "out",
  status: "failed",
  symbol: "ZNN",
  amount: 50.0,
  when: "1d ago",
  peer: "z1qrn2…81vk"
}];
const fmtFiat = n => "$" + n.toLocaleString("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
Object.assign(window, {
  WALLET_ADDRESS,
  BALANCES,
  TXNS,
  fmtFiat
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wallet/WalletData.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wallet/WalletScreens.jsx
try { (() => {
// Screens for the Syrius wallet kit: Dashboard, Send, Receive.
const NS = window.ZenonNoMDesignSystem_afdf82;
const {
  Button,
  Card,
  Address,
  Amount,
  TxStatus,
  TxDirection,
  TokenIcon,
  Input,
  Badge,
  Tabs
} = NS;

/* ----------------------------------------------------------- Dashboard --- */
function StatRow({
  tx
}) {
  return /*#__PURE__*/React.createElement("tr", {
    style: {
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 8px"
    }
  }, /*#__PURE__*/React.createElement(TxDirection, {
    direction: tx.dir
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 8px"
    }
  }, /*#__PURE__*/React.createElement(Address, {
    address: tx.hash,
    start: 8,
    end: 5,
    copy: false,
    href: "https://explorer.zenon.network/tx/" + tx.hash
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 8px",
      color: "var(--muted-foreground)",
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  }, tx.peer), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 8px",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontSize: 13.5
    }
  }, tx.dir === "in" ? "+" : "−", tx.amount.toLocaleString("en-US", {
    maximumFractionDigits: 5
  }), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted-foreground)"
    }
  }, tx.symbol))), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 8px",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(TxStatus, {
    status: tx.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "13px 8px",
      textAlign: "right",
      color: "var(--muted-foreground)",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, tx.when));
}
function DashboardScreen({
  onNavigate
}) {
  const totalFiat = BALANCES.reduce((s, b) => s + b.fiat, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      padding: "26px 28px",
      color: "#0c1f12",
      backgroundImage: "var(--plasma)",
      boxShadow: "var(--shadow-md)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: ".07em",
      opacity: .72
    }
  }, "Total portfolio value"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "8px 0 18px",
      fontFamily: "var(--font-mono)",
      fontVariantNumeric: "tabular-nums",
      fontSize: 40,
      fontWeight: 700,
      letterSpacing: "-.02em"
    }
  }, fmtFiat(totalFiat)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("send"),
    style: heroBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "send",
    size: 15
  }), " Send"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("receive"),
    style: heroBtn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "receive",
    size: 15
  }), " Receive"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate("bridge"),
    style: heroBtnGhost
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bridge",
    size: 15
  }), " Bridge"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, BALANCES.map(b => /*#__PURE__*/React.createElement(Card, {
    key: b.symbol
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(TokenIcon, {
    symbol: b.symbol,
    size: 44
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, b.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--muted-foreground)",
      fontFamily: "var(--font-mono)"
    }
  }, b.symbol, " \xB7 ", fmtFiat(b.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement(Amount, {
    value: b.amount,
    symbol: b.symbol,
    fiat: "≈ " + fmtFiat(b.fiat),
    className: "dash-amt"
  })))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      padding: "16px 20px 6px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, "Recent activity"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    style: {
      marginLeft: "auto"
    },
    onClick: () => onNavigate("send")
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 12px 8px",
      overflowX: "auto"
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ["Type", "Hash", "Counterparty", "Amount", "Status", "Time"].map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: h,
    className: "text-ledger",
    style: {
      textAlign: i >= 3 ? "right" : "left",
      padding: "8px",
      color: "var(--muted-foreground)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, TXNS.map(t => /*#__PURE__*/React.createElement(StatRow, {
    key: t.hash,
    tx: t
  })))))));
}
const heroBtn = {
  display: "inline-flex",
  alignItems: "center",
  gap: 7,
  height: 38,
  padding: "0 18px",
  borderRadius: "var(--radius-md)",
  border: "none",
  cursor: "pointer",
  font: "inherit",
  fontWeight: 600,
  fontSize: 14,
  background: "rgba(8,24,14,.9)",
  color: "#eafff1"
};
const heroBtnGhost = {
  ...heroBtn,
  background: "rgba(255,255,255,.22)",
  color: "#0c1f12"
};

/* ---------------------------------------------------------------- Send --- */
function SendScreen() {
  const [token, setToken] = React.useState("ZNN");
  const [amount, setAmount] = React.useState("");
  const [to, setTo] = React.useState("");
  const [phase, setPhase] = React.useState(null); // null | pending | confirming | success
  const bal = BALANCES.find(b => b.symbol === token);
  const submit = () => {
    setPhase("pending");
    setTimeout(() => setPhase("confirming"), 1100);
    setTimeout(() => setPhase("success"), 2600);
  };
  const reset = () => {
    setPhase(null);
    setAmount("");
    setTo("");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "22px 24px"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: token,
    onValueChange: setToken,
    items: BALANCES.map(b => ({
      value: b.symbol,
      label: b.symbol
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-ledger",
    style: {
      color: "var(--muted-foreground)",
      display: "block",
      marginBottom: 7
    }
  }, "Amount"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    numeric: true,
    placeholder: "0.00",
    value: amount,
    onChange: e => setAmount(e.target.value),
    disabled: !!phase
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "default",
    disabled: !!phase,
    onClick: () => setAmount(String(bal.amount))
  }, "Max")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      fontSize: 12.5,
      color: "var(--muted-foreground)",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Available"), /*#__PURE__*/React.createElement(Amount, {
    value: bal.amount,
    symbol: token
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "text-ledger",
    style: {
      color: "var(--muted-foreground)",
      display: "block",
      marginBottom: 7
    }
  }, "Recipient address"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "z1\u2026",
    value: to,
    onChange: e => setTo(e.target.value),
    disabled: !!phase,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: "12px 14px",
      borderRadius: "var(--radius-md)",
      background: "var(--muted)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted-foreground)"
    }
  }, "Network fee"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--success)"
    }
  }, "Feeless \xB7 PoW")), !phase && /*#__PURE__*/React.createElement(Button, {
    style: {
      width: "100%",
      marginTop: 20
    },
    size: "lg",
    onClick: submit
  }, "Send ", token), phase && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: "16px",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(TxStatus, {
    status: phase
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: "var(--muted-foreground)"
    }
  }, phase === "pending" && "Generating Plasma…", phase === "confirming" && "Broadcasting to the network…", phase === "success" && `Sent ${amount || "0"} ${token}`), phase === "success" && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    style: {
      marginLeft: "auto"
    },
    onClick: reset
  }, "New transfer")))));
}

/* ------------------------------------------------------------- Receive --- */
function ReceiveScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-ledger",
    style: {
      color: "var(--muted-foreground)",
      margin: 0
    }
  }, "Your receiving address"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 168,
      height: 168,
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--border)",
      background: "var(--muted)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--muted-foreground)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "qr",
    size: 96,
    strokeWidth: 1.4
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "10px 14px",
      borderRadius: "var(--radius-md)",
      background: "var(--muted)",
      maxWidth: "100%"
    }
  }, /*#__PURE__*/React.createElement(Address, {
    address: WALLET_ADDRESS,
    start: 10,
    end: 8
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12.5,
      color: "var(--muted-foreground)",
      textAlign: "center",
      maxWidth: 320
    }
  }, "Send only Network of Momentum assets (ZNN / QSR) to this address."))));
}

/* ---------------------------------------------------- Generic placeholder --- */
function ComingSoon({
  title,
  icon
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "56px 24px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 12,
      color: "var(--muted-foreground)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 40,
    strokeWidth: 1.4
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 16,
      color: "var(--foreground)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5
    }
  }, "This surface is part of the full Syrius experience.")));
}
Object.assign(window, {
  DashboardScreen,
  SendScreen,
  ReceiveScreen,
  ComingSoon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wallet/WalletScreens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Address = __ds_scope.Address;

__ds_ns.Amount = __ds_scope.Amount;

__ds_ns.NetworkGlyph = __ds_scope.NetworkGlyph;

__ds_ns.NETWORK_GLYPHS = __ds_scope.NETWORK_GLYPHS;

__ds_ns.ZnnLogo = __ds_scope.ZnnLogo;

__ds_ns.QsrLogo = __ds_scope.QsrLogo;

__ds_ns.TokenIcon = __ds_scope.TokenIcon;

__ds_ns.TxDirection = __ds_scope.TxDirection;

__ds_ns.TxStatus = __ds_scope.TxStatus;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
