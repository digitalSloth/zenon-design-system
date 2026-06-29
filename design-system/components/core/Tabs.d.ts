import React from "react";

export interface TabItem {
  value: string;
  label: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  /** Active tab value. */
  value: string;
  onValueChange?: (value: string) => void;
  /** Pill group (`default`) or flat underline indicator (`underline`). */
  variant?: "default" | "underline";
  className?: string;
}

/** Controlled tab strip. */
export function Tabs(props: TabsProps): JSX.Element;
