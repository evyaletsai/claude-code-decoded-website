"use client";

import { GLOSSARY_CATEGORIES } from "@/content/glossary";
import type { GlossaryCategory } from "@/types/glossary";

const CATEGORY_COLOR_VARS: Record<GlossaryCategory, string> = {
  core: "var(--c-core)",
  tools: "var(--c-tools)",
  memory: "var(--c-memory)",
  commands: "var(--c-commands)",
  arch: "var(--c-arch)",
};

interface FilterBarProps {
  active: GlossaryCategory | "all";
  onChange: (value: GlossaryCategory | "all") => void;
}

export function FilterBar({ active, onChange }: FilterBarProps) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter glossary by category">
      <button
        type="button"
        className="fpill"
        style={{ ["--pc" as string]: "#ede9f8" }}
        aria-pressed={active === "all"}
        onClick={() => onChange("all")}
      >
        All
      </button>
      {GLOSSARY_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          className="fpill"
          style={{ ["--pc" as string]: CATEGORY_COLOR_VARS[cat.id] }}
          aria-pressed={active === cat.id}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
