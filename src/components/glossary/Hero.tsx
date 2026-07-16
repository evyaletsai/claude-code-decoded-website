import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">{"// claude.ai/code — the agentic era field manual"}</p>
      <h1 className="hero-title">
        <span className="t1">CLAUDE</span>
        <span className="t2">CODE</span>
      </h1>
      <Typewriter />
      <div className="hero-stats">
        <div className="stat">
          <div className="stat-n">20</div>
          <div className="stat-l">Concepts</div>
        </div>
        <div className="stat">
          <div className="stat-n">5</div>
          <div className="stat-l">Categories</div>
        </div>
        <div className="stat">
          <div className="stat-n">∞</div>
          <div className="stat-l">Possibilities</div>
        </div>
      </div>
      <div className="scroll-hint">
        <span>scroll to explore</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden="true">
          <path
            d="M7 1v16M1 12l6 8 6-8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
