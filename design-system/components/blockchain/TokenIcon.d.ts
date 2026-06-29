import React from "react";

export interface TokenIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Ticker. Built-in marks for `ZNN` / `QSR` render automatically. */
  symbol: string;
  /** Logo URL — overrides the built-in mark. */
  src?: string;
  /** Pixel size of the icon (default 40). */
  size?: number;
  className?: string;
}

/** Token logo with ticker fallback; built-in ZNN / QSR marks. */
export function TokenIcon(props: TokenIconProps): JSX.Element;

/** The official angular ZNN mark. */
export function ZnnLogo(props: React.SVGProps<SVGSVGElement>): JSX.Element;
/** Complementary angular QSR mark (Zenon blue). */
export function QsrLogo(props: React.SVGProps<SVGSVGElement>): JSX.Element;
