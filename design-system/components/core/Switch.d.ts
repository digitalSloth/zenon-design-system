import React from "react";

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  /** Controlled on/off state. */
  checked?: boolean;
  /** Fired with the next value when toggled. */
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}

/** Binary on/off toggle; the "on" state carries the plasma gradient. */
export function Switch(props: SwitchProps): JSX.Element;
