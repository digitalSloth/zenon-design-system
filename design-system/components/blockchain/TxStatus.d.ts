import React from "react";

export interface TxStatusProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Transaction state. Spinner shows on `pending` / `confirming`. */
  status: "pending" | "confirming" | "success" | "failed";
  /** Override the default label. */
  label?: string;
  className?: string;
}

/** Standard transaction-state chip — one soft-tint family with icon + label. */
export function TxStatus(props: TxStatusProps): JSX.Element;
