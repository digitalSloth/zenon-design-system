import React from "react";

/** Switch — on/off toggle. The "on" state carries the plasma gradient. */
export function Switch({ checked = false, onCheckedChange, className = "", ...props }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      data-on={checked ? "true" : "false"}
      className={`nom-switch ${className}`.trim()}
      onClick={() => onCheckedChange && onCheckedChange(!checked)}
      {...props}
    >
      <span className="nom-switch__thumb" />
    </button>
  );
}
