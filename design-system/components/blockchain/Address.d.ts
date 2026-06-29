import React from "react";

export interface AddressProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full address or hash. */
  address: string;
  /** Leading characters to keep (includes any prefix like 0x / z1). */
  start?: number;
  /** Trailing characters to keep. */
  end?: number;
  truncate?: boolean;
  /** Show the inline copy button. */
  copy?: boolean;
  /** Explorer URL — renders the value as a link (hovers blue) when set. */
  href?: string;
  className?: string;
}

/**
 * Addresses & hashes: truncation, mono, full value on hover, copy, explorer link.
 *
 * @startingPoint section="Blockchain" subtitle="Truncated address with copy + explorer link" viewport="700x150"
 */
export function Address(props: AddressProps): JSX.Element;
