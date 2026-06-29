import React from "react";

/**
 * Tabs — simple controlled tab strip.
 * `variant="default"` is a pill group on a muted track; `underline` is a flat
 * underline indicator. Pass `items` ([{value,label}]) + `value` + `onValueChange`.
 */
export function Tabs({ items = [], value, onValueChange, variant = "default", className = "" }) {
  return (
    <div role="tablist" className={`nom-tabs__list nom-tabs__list--${variant} ${className}`.trim()}>
      {items.map((it) => (
        <button
          key={it.value}
          role="tab"
          type="button"
          className="nom-tab"
          data-active={value === it.value ? "true" : "false"}
          aria-selected={value === it.value}
          onClick={() => onValueChange && onValueChange(it.value)}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
}
