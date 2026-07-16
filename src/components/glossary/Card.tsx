import { forwardRef, type PointerEventHandler } from "react";
import type { GlossaryTerm } from "@/types/glossary";
import { renderEmphasized } from "@/lib/emphasize";

const CATEGORY_COLOR_VARS: Record<GlossaryTerm["category"], string> = {
  core: "var(--c-core)",
  tools: "var(--c-tools)",
  memory: "var(--c-memory)",
  commands: "var(--c-commands)",
  arch: "var(--c-arch)",
};

interface CardProps {
  term: GlossaryTerm;
  revealed: boolean;
  dimmed: boolean;
  style?: React.CSSProperties;
  onPointerMove?: PointerEventHandler<HTMLDivElement>;
  onPointerLeave?: PointerEventHandler<HTMLDivElement>;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { term, revealed, dimmed, style, onPointerMove, onPointerLeave },
  ref
) {
  const className = ["card", revealed ? "reveal" : "", dimmed ? "dim" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={className}
      data-id={term.id}
      data-cat={term.category}
      style={{ ["--cc" as string]: CATEGORY_COLOR_VARS[term.category], ...style }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-hidden={dimmed || undefined}
    >
      <div className="card-glow" aria-hidden="true" />
      <span className="card-cat">{term.categoryLabel}</span>
      <p className="card-term">{term.term}</p>
      <p className="card-def">{renderEmphasized(term.description, term.emphasizedPhrases)}</p>
      <span className="card-num" aria-hidden="true">
        {term.index}
      </span>
    </div>
  );
});
