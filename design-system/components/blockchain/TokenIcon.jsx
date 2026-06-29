import React from "react";

/** The official angular ZNN mark (plasma-green gradient). */
export function ZnnLogo({ className = "", ...props }) {
  const id = React.useId();
  return (
    <svg viewBox="0 0 48 77" fill="none" className={className} {...props}>
      <path
        d="M47.9838 6.10352e-05H0V9.43394H30.8722L0 28.627V29.9282V39.2971V77.0001H8.36965V52.8623L39.4685 77.0001H48V71.356V29.9282H15.7518L47.9838 9.30382V6.10352e-05ZM39.4685 39.2971L39.4847 64.4595L8.36965 39.3296V39.2971H39.4685Z"
        fill={`url(#znn-${id})`}
      />
      <defs>
        <linearGradient id={`znn-${id}`} x1="24" y1="0" x2="24" y2="77" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6FF34D" />
          <stop offset="1" stopColor="#4BD926" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Complementary angular "Q" mark in Zenon blue (no official QSR mark exists). */
export function QsrLogo({ className = "", ...props }) {
  const id = React.useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
      <rect x="12" y="12" width="40" height="40" stroke={`url(#qsr-${id})`} strokeWidth="9" strokeLinejoin="miter" />
      <path d="M42 42L58 58" stroke={`url(#qsr-${id})`} strokeWidth="9" strokeLinecap="round" />
      <defs>
        <linearGradient id={`qsr-${id}`} x1="32" y1="8" x2="32" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4D9BFF" />
          <stop offset="1" stopColor="#0061EB" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const BUILTIN = { ZNN: ZnnLogo, QSR: QsrLogo };

/**
 * TokenIcon — token logo with ticker fallback. Ships built-in ZNN / QSR marks
 * (used automatically by symbol). An explicit `src` overrides; unknown symbols
 * fall back to a tinted ticker disc. Size via `size` (px).
 */
export function TokenIcon({ symbol, src, size = 40, className = "", ...props }) {
  const Logo = !src && BUILTIN[symbol?.toUpperCase()];
  const box = {
    width: size, height: size, flexShrink: 0,
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    borderRadius: "var(--radius-full)", overflow: "hidden",
  };
  if (Logo) {
    return <span className={className} style={box} {...props}><Logo style={{ width: "62%", height: "62%" }} /></span>;
  }
  if (src) {
    return <span className={className} style={box} {...props}><img src={src} alt={symbol} style={{ width: "100%", height: "100%", objectFit: "contain" }} /></span>;
  }
  return (
    <span
      className={className}
      style={{ ...box, background: "var(--muted)", color: "var(--muted-foreground)", fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: size * 0.3 }}
      {...props}
    >
      {(symbol || "?").slice(0, 3).toUpperCase()}
    </span>
  );
}
