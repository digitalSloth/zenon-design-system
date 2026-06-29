import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Soft-tint status variants read as state, not action. `highlight` = reserved brand pink. */
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "pending" | "highlight";
  className?: string;
  children?: React.ReactNode;
}

/** Compact status / category chip. */
export function Badge(props: BadgeProps): JSX.Element;
