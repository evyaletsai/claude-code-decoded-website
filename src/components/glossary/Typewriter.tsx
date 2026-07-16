"use client";

import { useEffect, useRef, useState } from "react";

const PHRASES = [
  "The definitive glossary for the agentic era.",
  "20 concepts every Claude Code user must know.",
  "Stop nodding along. Start understanding.",
  "From /init to subagents — decoded.",
];

export function Typewriter() {
  const [text, setText] = useState(PHRASES[0]);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mql.matches;
    if (mql.matches) return;

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let hold = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const phrase = PHRASES[phraseIndex];
      if (!deleting) {
        charIndex++;
        setText(phrase.slice(0, charIndex));
        if (charIndex === phrase.length) {
          deleting = true;
          hold = 55;
        }
        timeoutId = setTimeout(tick, 52);
      } else {
        if (--hold > 0) {
          timeoutId = setTimeout(tick, 28);
          return;
        }
        charIndex--;
        setText(phrase.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % PHRASES.length;
        }
        timeoutId = setTimeout(tick, 26);
      }
    }

    timeoutId = setTimeout(tick, 52);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <p className="hero-sub">
      <span>{text}</span>
      <span className="cursor" aria-hidden="true" />
    </p>
  );
}
