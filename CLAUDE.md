# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project State

This repository currently contains only planning artifacts:

- `PLAN.md` — the architectural source of truth. Read it in full before any implementation work.
- `Claude Code Decoded.html` — a single-file HTML/JS prototype of the glossary page. It is the visual and content reference for Phase 1, not a codebase to extend in place.

No Next.js project has been scaffolded yet. There is no `package.json`, no `src/`, no build tooling. The first implementation work (Phase 0 below) is to create that project structure.

## Execution Protocol — read this before writing any code

`PLAN.md` section 8 defines a strict phase-by-phase protocol. Follow it exactly:

1. **Implement one phase at a time.** Never combine phases (e.g. do not start Phase 2 content while Phase 1 accessibility/SEO work is unfinished).
2. **Plan before implementing.** For the active phase, first produce: files to create/modify, architectural decisions, implementation sequence, assumptions, risks, and validation commands. Do not proceed to implementation until this is reviewed.
3. **After implementing a phase**, report: summary of changes, changed-file list, build/lint/typecheck results, and unresolved issues.
4. Do not implement a phase whose Critical/Major risks (PLAN.md section 6) are unresolved.

The phases, in order, are: **Phase 0** (project foundation + prototype audit) → **Phase 1** (`/` glossary page) → **Phase 2** (`/course` page) → **Phase 3** (cross-page QA/launch readiness) → **Phase 4** (GitHub export + Vercel deploy). Full detail for each phase is in `PLAN.md` — do not summarize it into a shorter/looser version when working; follow the source.

## Architecture (once scaffolded)

- **Framework:** Next.js, App Router, TypeScript (strict mode).
- **Styling:** CSS Modules or a structured global CSS architecture — not Tailwind, not CSS-in-JS, unless the plan is explicitly amended.
- **Backend:** None. This is a fully static site with no API routes, no database, no auth, in the current scope.
- **Package manager:** npm.
- **Deployment:** Vercel, deploying only from the GitHub default branch (no manual/CLI deploys).

Route structure:

```
/                 → glossary landing page (English, LTR)
/course           → LetsAI Claude Code course page (Hebrew, RTL)
/privacy          → only if required before launch
/accessibility    → recommended before public promotion
/404              → custom not-found page
```

Directory boundaries (see PLAN.md 2.3 for full detail):

```
src/
├── app/                # routes only — page.tsx, layout.tsx, course/page.tsx, not-found.tsx, globals.css
├── components/
│   ├── layout/         # shared header/footer/nav
│   ├── glossary/       # Phase 1 components
│   ├── course/         # Phase 2 components
│   └── ui/             # shared primitives (buttons, pills, etc.)
├── content/
│   ├── glossary.ts     # typed glossary data — no HTML strings in the model
│   └── course.ts        # typed course content — see CourseFact/CurriculumModule/CourseFaqItem shapes in PLAN.md
├── lib/
│   ├── constants.ts
│   └── analytics.ts     # placeholder only, only if analytics is later explicitly approved
├── public/
└── types/
```

## Hard constraints (violating these blocks phase approval)

These come from PLAN.md 2.4 and section 6 (Key Risks) — they are not suggestions:

- **No monolithic HTML/JS.** The prototype's inline `<script>` approach must not be ported as-is into a single component. Content, interaction, and presentation are separate.
- **No CDN runtime dependencies.** The prototype loads React, ReactDOM, and Babel from unpkg at runtime, plus `tweaks-panel.jsx` (an editor-only, non-existent-in-prod file) and `useTweaks`. None of this reaches production. This is a Major risk in PLAN.md and blocks Phase 1 approval if not fully removed.
- **No `dangerouslySetInnerHTML`** for glossary or course content — the prototype's `def` strings contain inline `<strong>` HTML; these need a real content model (e.g. render emphasized phrases via a typed `emphasizedPhrases` field, not raw HTML injection).
- **No Supabase, API routes, auth, CMS, or form persistence** in current scope — this is deferred (PLAN.md section 4/5). Do not add it opportunistically even if it seems convenient for a form or analytics feature.
- **No analytics by default.** Only add if explicitly approved, and isolate it entirely in `src/lib/analytics.ts`; never block navigation if tracking fails.
- **Motion must respect `prefers-reduced-motion`**, and all animated/typewriter content needs an accessible static equivalent. The prototype's continuous ticker, orb drift, hero glitch, typewriter, scroll reveal, and 3D card tilt all need bounded, reduced-motion-aware reimplementations. Disable 3D tilt on touch devices specifically.
- **Course page content is time-sensitive.** Pricing, curriculum, instructors, format, and bonuses must be verified against `https://letsai.co.il/product/claude-code-course/` immediately before implementation and again before launch — do not hard-code unverified facts. Anything time-sensitive should carry a `verificationDate`.
- **RTL/LTR correctness.** `/course` is Hebrew/RTL; `/` is English/LTR. Mixed-direction text (English technical terms inside Hebrew copy) must be handled at the component/semantic level, not worked around with hacks.
- **No unauthorized use of third-party assets** (testimonials, photos, logos) — only use content with confirmed permission/source.

## Content migration notes (Phase 1 specifics)

- The prototype defines 20 glossary terms across 5 categories (`core`, `tools`, `memory`, `commands`, `arch`) in a `TERMS` array inside the HTML's `<script>` block — this is the canonical content to migrate into `src/content/glossary.ts`, preserving all 20 entries and their category assignments, but restructured to the typed `GlossaryTerm` interface in PLAN.md (no raw HTML in `description`).
- Category colors in the prototype use `oklch()` values keyed per category (e.g. `--c-core: oklch(76% 0.21 42)`) — extract these as CSS custom properties per PLAN.md's design-token extraction task, don't hardcode them per-component.
- Fonts (`Syne`, `Space Mono`) are currently loaded via Google Fonts `<link>` — replace with `next/font` or self-hosted fonts; do not keep a direct Google Fonts request in the shipped page.

## Definition of done

A phase is not complete until its PLAN.md acceptance criteria and validation checklist are satisfied — notably `npm run build`, lint, and typecheck all passing, and (for Phase 1 onward) Lighthouse targets of Performance ≥90, Accessibility ≥95, Best Practices ≥95, SEO ≥95 on a production build.
