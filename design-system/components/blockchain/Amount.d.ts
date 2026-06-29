import React from "react";

export interface AmountProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Amount to display. Pass a string for values beyond JS number precision. */
  value: string | number;
  /** Fixed fraction digits. */
  decimals?: number;
  /** Token ticker shown after the number (e.g. "ZNN"). */
  symbol?: string;
  /** Secondary fiat line, already formatted (e.g. "≈ $9,420.18"). */
  fiat?: string;
  /** Compact notation (12.4K) for values ≥ 10,000. */
  compact?: boolean;
  locale?: string;
  /** Render insignificant trailing zeros muted so decimals stay aligned. */
  dimTrailingZeros?: boolean;
  className?: string;
}

/**
 * Token amounts, balances and fees — mono, tabular, dimmed trailing zeros.
 *
 * @startingPoint section="Blockchain" subtitle="Token amount with dimmed zeros + fiat" viewport="700x150"
 */
export function Amount(props: AmountProps): JSX.Element;

/** Standalone number formatter used by <Amount>. */
export function formatNumber(
  value: string | number,
  opts?: { decimals?: number; compact?: boolean; locale?: string }
): string;
