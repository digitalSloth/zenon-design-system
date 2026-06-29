import React from "react";
import { Badge } from "../core/Badge.jsx";

const Spinner = () => (
  <svg className="nom-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true" style={{ width: ".75rem", height: ".75rem" }}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const XMark = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

const CONFIG = {
  pending: { variant: "pending", label: "Pending", spin: true },
  confirming: { variant: "warning", label: "Confirming", spin: true },
  success: { variant: "success", label: "Confirmed", spin: false },
  failed: { variant: "destructive-soft", label: "Failed", spin: false },
};

/**
 * TxStatus — one soft-chip family for transaction state. Spinner on in-flight
 * states; icon + label so it never relies on color alone.
 */
export function TxStatus({ status, label, className = "", ...props }) {
  const c = CONFIG[status] || CONFIG.pending;
  return (
    <Badge variant={c.variant} className={className} {...props}>
      {c.spin ? <Spinner /> : status === "success" ? <Check /> : status === "failed" ? <XMark /> : null}
      {label ?? c.label}
    </Badge>
  );
}
