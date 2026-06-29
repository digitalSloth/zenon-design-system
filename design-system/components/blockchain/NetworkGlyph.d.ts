import React from "react";

export type NetworkGlyphName = "az" | "bridge" | "pillar" | "sentinel";

export interface NetworkGlyphProps extends React.SVGProps<SVGSVGElement> {
  /** Which network mark: `az` (Accelerator-Z), `bridge`, `pillar`, `sentinel`. */
  name: NetworkGlyphName;
  /** Pixel size (default 24). */
  size?: number;
  /** Accessible label; also renders an SVG <title>. Omit for decorative use. */
  title?: string;
  className?: string;
}

/**
 * Zenon's network-concept brand glyphs, normalized onto the 24×24 grid.
 * Filled identity marks (inherit `currentColor`) — not generic UI icons.
 */
export function NetworkGlyph(props: NetworkGlyphProps): JSX.Element | null;

/** The valid glyph names. */
export const NETWORK_GLYPHS: NetworkGlyphName[];
