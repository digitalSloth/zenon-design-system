import React from "react";
import { Badge } from "../core/Badge.jsx";

const ArrowIn = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 7 7 17M17 17H7V7" />
  </svg>
);
const ArrowOut = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 7h10v10M7 17 17 7" />
  </svg>
);

/**
 * TxDirection — in/out chip. `in` reads green (received); `out` is neutral
 * (sending isn't an error). Arrow + label, never color alone.
 */
export function TxDirection({ direction, label, className = "", ...props }) {
  const isIn = direction === "in";
  return (
    <Badge
      variant={isIn ? "success" : "outline"}
      className={className}
      style={!isIn ? { background: "var(--muted)", color: "var(--muted-foreground)", borderColor: "transparent" } : undefined}
      {...props}
    >
      {isIn ? <ArrowIn /> : <ArrowOut />}
      {label ?? (isIn ? "In" : "Out")}
    </Badge>
  );
}
