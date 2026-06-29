import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `default` carries the plasma gradient — reserve for the main action. */
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  /** Control height + padding. */
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-sm" | "icon-lg";
  /** Render as a link to this URL instead of a <button>. */
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * The primary action primitive for Zenon NoM surfaces.
 *
 * @startingPoint section="Core" subtitle="Plasma-gradient action button" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
