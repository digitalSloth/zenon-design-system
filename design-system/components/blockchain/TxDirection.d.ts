import React from "react";

export interface TxDirectionProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** `in` = received (green); `out` = sent (neutral — not an error). */
  direction: "in" | "out";
  /** Override the default label ("In" / "Out"). */
  label?: string;
  className?: string;
}

/** In/out transaction-direction chip with an arrow + label. */
export function TxDirection(props: TxDirectionProps): JSX.Element;
