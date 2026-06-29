import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Render as a numeric field: mono + tabular-nums + decimal keypad. */
  numeric?: boolean;
  className?: string;
}

/** Single-line text or numeric input. */
export function Input(props: InputProps): JSX.Element;
