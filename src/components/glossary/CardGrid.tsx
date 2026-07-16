"use client";

import { useEffect, useRef, useState } from "react";
import type { GlossaryCategory, GlossaryTerm } from "@/types/glossary";
import { Card } from "./Card";
import { FilterBar } from "./FilterBar";

interface CardGridProps {
  terms: GlossaryTerm[];
}

export function CardGrid({ terms }: CardGridProps) {
  const [active, setActive] = useState<GlossaryCategory | "all">("all");
  const [revealed, setRevealed] = useState<Set<string>>(new Set());
  const [tiltStyles, setTiltStyles] = useState<Record<string, React.CSSProperties>>({});
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mql.matches;

    // Reduced-motion cards are made fully visible via CSS regardless of the
    // "revealed" class, so the observer can run unconditionally here.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("data-id");
          if (!id) return;
          setRevealed((prev) => new Set(prev).add(id));
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
    );

    cardRefs.current.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [terms]);

  function handlePointerMove(id: string): React.PointerEventHandler<HTMLDivElement> {
    return (e) => {
      if (e.pointerType !== "mouse" || reducedMotionRef.current) return;
      const el = cardRefs.current.get(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTiltStyles((prev) => ({
        ...prev,
        [id]: { transform: `translateY(-6px) rotateX(${-y * 7}deg) rotateY(${x * 7}deg)` },
      }));
    };
  }

  function handlePointerLeave(id: string): React.PointerEventHandler<HTMLDivElement> {
    return () => {
      setTiltStyles((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    };
  }

  return (
    <>
      <FilterBar active={active} onChange={setActive} />
      <main id="content" className="glossary">
        <p className="section-eyebrow">{"// 20 concepts you need to know"}</p>
        <div className="cards">
          {terms.map((term) => (
            <Card
              key={term.id}
              ref={(el) => {
                if (el) cardRefs.current.set(term.id, el);
                else cardRefs.current.delete(term.id);
              }}
              term={term}
              revealed={revealed.has(term.id)}
              dimmed={active !== "all" && active !== term.category}
              style={tiltStyles[term.id]}
              onPointerMove={handlePointerMove(term.id)}
              onPointerLeave={handlePointerLeave(term.id)}
            />
          ))}
        </div>
      </main>
    </>
  );
}
