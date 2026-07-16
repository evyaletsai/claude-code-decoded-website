# Claude Code Decoded

A glossary landing page for Claude Code and the Anthropic ecosystem, plus (Phase 2) a LetsAI course landing page. See [`PLAN.md`](./PLAN.md) for the full architecture and phased execution plan, and [`CLAUDE.md`](./CLAUDE.md) for guidance when working on this repo with Claude Code.

## Stack

- Next.js (App Router) + TypeScript (strict mode)
- Global CSS with custom properties for design tokens (no Tailwind, no CSS-in-JS)
- No backend — fully static in the current scope

## Requirements

- Node.js 20 LTS or newer
- npm

## Scripts

```bash
npm run dev        # start the local dev server
npm run build       # production build
npm run start        # serve the production build locally
npm run lint          # ESLint
npm run typecheck    # TypeScript, no emit
```

## Status

- Phase 0 (project foundation) — done
- Phase 1 (`/` glossary page) — done, this build
- Phase 2 (`/course` page) — placeholder only, full page pending
- Phase 3/4 (QA, launch, deploy) — pending
