# Claude Code Decoded — Implementation Plan

**Document:** `PLAN.md`  
**Project type:** Static multi-page marketing website  
**Primary implementation tool:** Claude Code  
**Hosting:** Vercel  
**Source control:** GitHub  
**Backend:** None in current scope  
**Future backend option:** Supabase  
**Primary source artifact:** `Claude Code Decoded.html`

---

## 1. Project Goal

Convert the existing single-file HTML concept into a production-ready website that can be publicly shared with the LetsAI audience.

The website will initially contain:

1. A polished, responsive glossary landing page based on the supplied HTML.
2. A separate course landing page presenting the LetsAI Claude Code course.
3. Clear navigation and conversion paths between the educational glossary and the course page.
4. A clean deployment workflow through Vercel.
5. A GitHub repository containing the final source code and project documentation.

The implementation must preserve the visual identity of the supplied concept while replacing prototype-only dependencies, fragile runtime behavior, and editor-specific artifacts with maintainable production code.

---

## 2. Approved Architecture

### 2.1 Application Architecture

Use a statically generated frontend application with no server-side business logic.

Recommended stack:

- **Framework:** Next.js using the App Router
- **Language:** TypeScript
- **Styling:** CSS Modules or a structured global CSS architecture
- **Deployment:** Vercel
- **Package manager:** npm
- **Source control:** Git and GitHub
- **Content storage:** Local typed data files
- **Analytics:** Optional, added only after explicit approval
- **Backend:** None
- **Future backend:** Supabase, isolated behind a dedicated data-access layer if introduced later

### 2.2 Route Structure

```text
/
├── Home / Claude Code glossary
├── /course
│   └── Claude Code course landing page
├── /privacy        [only if required before launch]
├── /accessibility  [recommended before public promotion]
└── /404
```

### 2.3 Component Boundaries

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── course/
│   │   └── page.tsx
│   ├── not-found.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   ├── glossary/
│   ├── course/
│   └── ui/
├── content/
│   ├── glossary.ts
│   └── course.ts
├── lib/
│   ├── constants.ts
│   └── analytics.ts       [placeholder only if later approved]
├── public/
│   ├── images/
│   ├── icons/
│   └── social/
└── types/
```

### 2.4 Architectural Rules

1. Do not keep the application as one monolithic HTML file.
2. Do not load React, ReactDOM, Babel, or other runtime dependencies from public CDNs.
3. Do not use `dangerouslySetInnerHTML` for glossary or course content.
4. Do not add Supabase, API routes, authentication, a CMS, or form persistence in the current scope.
5. Keep content separate from presentation components.
6. Keep shared UI primitives reusable across both pages.
7. Keep client-side JavaScript limited to interactions that require it.
8. Use semantic HTML and progressive enhancement.
9. Do not silently redesign the visual language of the supplied glossary.
10. Any deviation from this plan must be documented before implementation.

---

## 3. Product and UX Principles

### 3.1 Primary Audience

- People learning Claude Code and the Anthropic ecosystem
- Non-technical and semi-technical professionals
- Business owners, managers, marketers, creators, educators, product professionals, freelancers, and operators
- Users arriving from LetsAI communities, newsletters, social channels, and course promotions

### 3.2 Primary User Journey

```text
Audience link
→ Glossary landing page
→ Explore concepts
→ Understand Claude Code value
→ Discover course CTA
→ Visit /course
→ Review course value, curriculum, format, instructors, and FAQ
→ Continue to the official registration page
```

### 3.3 Experience Requirements

- Fast first load
- Strong mobile experience
- Clear Hebrew RTL course page
- English glossary content may remain LTR
- Consistent branding between both pages
- Reduced-motion support
- Keyboard-accessible filtering and navigation
- Visible focus states
- No interaction may be required merely to access essential content
- CTA buttons must clearly state where they lead

---

# Phase 0 — Project Foundation and Prototype Audit

## Objectives

- Establish the production project structure.
- Audit the supplied HTML before migration.
- define the visual, technical, accessibility, and content baseline.
- Remove prototype-only assumptions before feature work begins.

## Features and Tasks

### Repository and Framework Setup

- Create a new Next.js TypeScript project using the App Router.
- Configure ESLint and TypeScript strict mode.
- Add a `.gitignore`, `README.md`, and this `PLAN.md`.
- Define npm scripts for:
  - development
  - production build
  - lint
  - type checking
- Confirm the project builds locally before migration begins.

### Prototype Audit

Review the supplied HTML and explicitly document:

- Existing design tokens
- Fonts
- Color categories
- Animation behavior
- Glossary content
- Filter behavior
- Typewriter behavior
- Scroll reveal behavior
- 3D hover behavior
- Mobile behavior
- External dependencies
- Invalid or obsolete prototype elements

### Prototype Elements That Must Not Reach Production

Remove or replace:

- React and ReactDOM development builds loaded from unpkg
- Browser-side Babel compilation
- `tweaks-panel.jsx`
- `useTweaks`
- The editor-specific tweak panel root
- Inline JSX scripts
- Global mutable runtime controls intended only for design tuning
- Excessive inline styles
- Unbounded animation intensity settings
- Any missing-file dependency

### Design Tokens

Extract into CSS custom properties:

- Background and surface colors
- Text and muted text colors
- Border colors
- Category colors
- Spacing scale
- Radius scale
- Shadow scale
- Animation durations
- Container widths
- Typography rules

## Inputs

- Supplied `Claude Code Decoded.html`
- Existing LetsAI visual identity where appropriate
- This architecture plan

## Outputs

- Running Next.js project
- Documented prototype audit
- Stable directory structure
- Extracted global design tokens
- No broken imports
- No production page implementation yet beyond a minimal shell

## Acceptance Criteria

- `npm run build` succeeds.
- `npm run lint` succeeds.
- TypeScript reports no errors.
- No CDN React or Babel scripts exist.
- No tweak-panel code remains.
- The application shell renders on desktop and mobile.
- The project contains no backend dependency.
- Architectural folders and boundaries match this plan.

## Validation Checklist

- [ ] Framework and versions are recorded in `README.md`
- [ ] Node version is defined
- [ ] Strict TypeScript is enabled
- [ ] Build, lint, and type-check commands work
- [ ] Design token inventory exists
- [ ] Prototype dependency audit is complete
- [ ] No editor-only artifact remains
- [ ] No Supabase package is installed

---

# Phase 1 — Production Glossary Landing Page

## Objectives

- Convert the supplied HTML into a real, maintainable website.
- Preserve the intended visual identity and motion.
- Make the page responsive, accessible, performant, and shareable.
- Introduce a course discovery path without overwhelming the educational content.

## Features and Tasks

### Page Structure

Implement the `/` route with:

1. Animated background layer
2. Top ticker
3. Hero section
4. Statistics
5. Scroll cue
6. Sticky category filter
7. Glossary card grid
8. Course teaser section
9. Footer
10. Persistent or clearly visible navigation link to `/course`

### Glossary Data Model

Move all glossary entries into `src/content/glossary.ts`.

Each item must use a typed structure similar to:

```ts
type GlossaryCategory =
  | "core"
  | "tools"
  | "memory"
  | "commands"
  | "architecture";

interface GlossaryTerm {
  id: string;
  index: number;
  category: GlossaryCategory;
  categoryLabel: string;
  term: string;
  description: string;
  emphasizedPhrases?: string[];
}
```

Do not store HTML strings inside the data model.

### Interactions

Reimplement:

- Category filtering
- Scroll reveal
- Typewriter messaging
- Card hover treatment
- Ticker animation

Interaction rules:

- Filtering must use accessible buttons with `aria-pressed`.
- Hidden or filtered cards must not remain confusingly focusable.
- Typewriter content must have an accessible static equivalent.
- Hover effects must not be required to understand content.
- 3D tilt should be disabled on touch devices.
- Motion must respect `prefers-reduced-motion`.
- Animations must not cause layout shifts.
- Avoid unnecessary React state and rerenders.

### Navigation and Conversion

Add:

- A primary navigation element
- A “Learn Claude Code with LetsAI” CTA
- A concise course teaser near the end of the glossary
- A link to `/course`
- Optional secondary link to the original LetsAI registration page

The glossary must remain useful as a standalone educational asset. It must not become a disguised sales page.

### SEO and Sharing

Configure:

- Page title
- Meta description
- Canonical URL placeholder
- Open Graph metadata
- Twitter/X card metadata
- Social sharing image placeholder
- Favicon
- Semantic headings
- JSON-LD only if it accurately reflects the page content

### Accessibility

- Correct heading hierarchy
- Landmark elements
- Skip link
- Keyboard-accessible filters
- Visible focus states
- Sufficient contrast
- Reduced-motion behavior
- Decorative visuals marked appropriately
- No text embedded only in images
- Minimum touch target sizes
- Screen-reader-readable CTA labels

### Performance

- Use `next/font` or self-hosted optimized fonts rather than Google Fonts loaded directly in the page.
- Avoid large client bundles.
- Prefer CSS animations over JavaScript animation loops.
- Use dynamic client components only where necessary.
- Do not ship source maps or development dependencies to the client.
- Avoid hydration for static content where possible.

## Inputs

- Approved Phase 0 foundation
- Supplied HTML design and glossary content
- Existing category colors and visual treatments

## Outputs

- Complete production-ready `/` page
- Reusable glossary components
- Typed glossary content
- Responsive navigation
- Course teaser and `/course` link
- SEO metadata
- Accessibility and performance baseline

## Acceptance Criteria

- The visual result is recognizably faithful to the source HTML.
- All 20 glossary concepts are present and accurate.
- All five filters work.
- The page works without console errors.
- The page is usable at 320px width.
- The page supports current desktop and mobile browsers.
- Reduced-motion mode removes or simplifies non-essential animation.
- Keyboard users can operate every interactive element.
- No essential content depends on JavaScript animation completing.
- Lighthouse targets on a production build:
  - Performance: at least 90
  - Accessibility: at least 95
  - Best Practices: at least 95
  - SEO: at least 95
- `npm run build`, lint, and type checks pass.

## Validation Checklist

- [ ] All 20 terms render from typed content
- [ ] Category filters expose selected state
- [ ] Filter behavior works by keyboard
- [ ] Touch devices do not receive desktop-only tilt behavior
- [ ] Reduced-motion behavior is verified
- [ ] No browser-side Babel exists
- [ ] No React development build is loaded
- [ ] No missing `tweaks-panel.jsx` request occurs
- [ ] Social metadata is present
- [ ] CTA links are valid
- [ ] Mobile screenshots are reviewed
- [ ] Production Lighthouse audit meets targets

---

# Phase 2 — Claude Code Course Page

## Objectives

- Create a dedicated `/course` page.
- Explain the LetsAI Claude Code and Anthropic ecosystem course clearly.
- Present course information in a structured, conversion-oriented format.
- Keep registration on the existing official LetsAI course page.
- Avoid introducing a backend or duplicating checkout functionality.

## Content Source

Use the official course page as the factual source of truth:

`https://letsai.co.il/product/claude-code-course/`

Course facts must be reviewed against the live source immediately before launch because pricing, syllabus, instructors, format, dates, bonuses, and availability can change.

## Language and Direction

- Primary language: Hebrew
- Document direction: RTL
- Technical product names may remain in English
- Components must support mixed RTL/LTR text correctly
- Glossary-to-course navigation must preserve understandable language context

## Recommended Page Structure

### 1. Course Hero

Include:

- Course name
- “No prior experience required”
- Clear value proposition
- Brief explanation of what students will learn
- Primary registration CTA
- Secondary CTA back to glossary
- Price only if verified at implementation time
- Payment details only if verified at implementation time

### 2. Audience Fit

Explain that the course is relevant to:

- Business owners
- Managers
- Organizational employees
- Marketers
- Content creators
- Entrepreneurs
- Freelancers
- Product professionals
- Training professionals
- Operations professionals
- Beginners without coding experience

### 3. Outcomes

Focus on measurable learning outcomes, including:

- Understanding the Claude and Anthropic ecosystem
- Working effectively with Claude Chat
- Using Claude Code for practical workflows
- Managing projects, files, and structured tasks
- Working with skills, plugins, and MCP
- Building dashboards and practical artifacts
- Creating automations and repeatable workflows
- Applying real-world use cases

### 4. Learning Format

Present verified details such as:

- Recorded lessons
- Written guides
- Downloadable materials
- Practice assignments
- Live Zoom sessions
- Course platform access
- Support channels
- Certificate conditions

Do not hard-code numbers unless verified immediately before implementation.

### 5. Curriculum

Create structured curriculum sections based on the current official program:

1. Foundations and Anthropic ecosystem
2. AI toolset, skills, MCP, and plugins
3. Claude Chat
4. Productivity with Claude
5. Getting started with Claude Code
6. Designing and building interfaces with Claude
7. Skills and plugins
8. Automations and remote operation
9. Practical field use cases

### 6. Instructor Section

Present the currently listed instructors and short verified biographies.

Instructor names, titles, and biographies must be sourced from the official course page and reviewed before launch.

### 7. Proof and Trust

Possible content:

- Verified course rating
- Verified review count
- Selected approved testimonials
- LetsAI experience
- Client logos only with approved assets and permission

Do not scrape or republish testimonial photos without permission.

### 8. FAQ

Include verified answers for:

- Who is the course for?
- Is prior coding experience required?
- What is the learning format?
- Are there live sessions?
- Is support included?
- Is there a certificate?
- How long is access available?
- Is the content updated?
- Where does registration happen?

### 9. Conversion Section

End with:

- Clear summary
- Primary CTA linking to the official course checkout/registration page
- Transparent note that registration is completed on LetsAI’s official website
- Optional WhatsApp/contact CTA only if an approved destination is provided

## Content Architecture

Store content in `src/content/course.ts`.

Use structured objects rather than long JSX blobs.

Suggested types:

```ts
interface CourseFact {
  label: string;
  value: string;
  verificationDate: string;
}

interface CurriculumModule {
  id: string;
  title: string;
  topics: string[];
}

interface CourseFaqItem {
  question: string;
  answer: string;
}
```

Time-sensitive data must carry a `verificationDate` or be configured centrally.

## SEO and Structured Data

Configure:

- Hebrew title and meta description
- Open Graph metadata
- Canonical URL
- Course-specific social image
- Breadcrumbs
- Appropriate `Course` structured data only when all fields are accurate
- No fake review schema
- No price schema unless current and reliable

## Conversion Tracking

Do not add analytics by default.

If analytics is approved later:

- Track CTA clicks only after consent requirements are evaluated.
- Keep analytics isolated in `src/lib/analytics.ts`.
- Do not block navigation if tracking fails.
- Do not expose personal data.
- Document event names.

## Inputs

- Completed Phase 1 website
- Official live course page
- Approved LetsAI brand assets
- Approved registration URL
- Verified course facts

## Outputs

- Complete `/course` page
- Structured Hebrew RTL content
- Shared header and footer
- Course SEO metadata
- Registration CTA to the official LetsAI page
- No checkout or lead-storage backend

## Acceptance Criteria

- All factual claims match the official course page at review time.
- The course page is fully responsive.
- RTL layout works correctly.
- Mixed Hebrew and English content displays correctly.
- Registration links lead to the approved official destination.
- No form falsely implies local data submission.
- No outdated prices, session counts, instructor details, or bonuses are published.
- The page meets the same Lighthouse targets as Phase 1.
- The page is navigable using keyboard and assistive technology.
- Build, lint, and type checks pass.

## Validation Checklist

- [ ] Every time-sensitive fact has been rechecked
- [ ] All registration links are tested
- [ ] RTL is set at the page or section level
- [ ] English technical terms remain readable
- [ ] FAQ content matches the official source
- [ ] Curriculum matches the current official syllabus
- [ ] Instructor data is approved
- [ ] Testimonials and logos have usage approval
- [ ] No local checkout exists
- [ ] No backend or database has been introduced
- [ ] Structured data passes validation
- [ ] Mobile and desktop visual QA is complete

---

# Phase 3 — Cross-Page Integration, Quality, and Launch Readiness

## Objectives

- Make both pages behave as one coherent website.
- Complete technical QA, content QA, and browser testing.
- Prepare the project for public deployment.
- Define a safe rollback path.

## Features and Tasks

### Shared Site Experience

- Shared header and footer
- Consistent typography and color tokens
- Clear navigation between `/` and `/course`
- Consistent CTA styles
- Shared focus and motion rules
- Custom 404 page
- Favicon and social image set

### Responsive QA

Test at minimum:

- 320px
- 375px
- 768px
- 1024px
- 1440px

Validate:

- No horizontal overflow
- No clipped hero text
- No unreadable sticky filter
- No overlap between navigation and content
- Stable card grid
- Course sections remain readable in RTL
- CTA buttons remain reachable and legible

### Browser QA

Test current stable versions of:

- Chrome
- Safari
- Firefox
- Edge
- iOS Safari
- Android Chrome

### Accessibility QA

- Keyboard-only walkthrough
- Screen-reader spot check
- Focus order review
- Color contrast review
- Reduced-motion review
- Heading hierarchy review
- Link purpose review
- RTL reading-order review

### Performance QA

- Production build testing
- Bundle review
- Font loading review
- Image optimization
- Cumulative layout shift review
- Animation CPU review
- Slow mobile connection test
- Vercel preview deployment test

### Security and Privacy

Even without a backend:

- No secrets in client code
- No unnecessary environment variables
- No untrusted script injection
- No third-party scripts without approval
- No copied production cookies or tokens
- External links use safe attributes where appropriate
- Dependencies are reviewed for known issues
- Security headers configured where useful
- Contact or analytics features require a separate privacy review

### Content QA

- Spelling and terminology review
- Hebrew punctuation and RTL review
- Claude/Anthropic naming consistency
- Course claims verified
- CTA destinations verified
- Copyright and asset permissions verified

## Inputs

- Completed Phases 1 and 2
- Approved production domain
- Approved brand and social assets
- Current course information

## Outputs

- Release candidate
- QA report
- Known limitations list
- Deployment configuration
- Rollback instructions
- Final launch checklist

## Acceptance Criteria

- No Critical or Major defects remain.
- All required pages work on Vercel preview.
- No console errors occur.
- No broken links occur.
- Accessibility and Lighthouse targets are met.
- Course claims are verified.
- Public assets are optimized.
- Rollback to the previous Vercel deployment is documented.
- The production domain configuration is ready.

## Validation Checklist

- [ ] Cross-browser testing completed
- [ ] Responsive testing completed
- [ ] Keyboard walkthrough completed
- [ ] Reduced-motion mode completed
- [ ] Course facts reverified
- [ ] Broken-link scan completed
- [ ] Console clean
- [ ] Production build clean
- [ ] Dependency audit reviewed
- [ ] Asset rights confirmed
- [ ] Vercel preview approved
- [ ] Rollback procedure recorded

---

# Phase 4 — GitHub Export and Vercel Production Deployment

## Objectives

- Publish the final code to GitHub.
- Connect the repository to Vercel.
- Deploy a production release.
- Confirm reproducibility and ownership.

## GitHub Tasks

- Initialize Git if not already initialized.
- Create a clear commit history.
- Ensure secrets and local files are excluded.
- Add repository documentation.
- Push to the approved GitHub organization or account.
- Protect the default branch if the repository will be maintained by multiple contributors.
- Create a release tag for the first public version.

Recommended branch model for this small project:

```text
main
└── feature/* or fix/* branches when needed
```

Avoid unnecessary Git-flow complexity.

## Required Repository Files

```text
README.md
PLAN.md
.gitignore
package.json
package-lock.json
tsconfig.json
next.config.*
src/
public/
```

Recommended:

```text
.env.example
CONTRIBUTING.md
LICENSE
```

Only include `.env.example` if environment variables are actually needed.

## Vercel Tasks

- Import the GitHub repository into Vercel.
- Confirm framework auto-detection.
- Configure the production domain.
- Configure redirects only if required.
- Configure security headers if approved.
- Confirm preview deployments for pull requests.
- Deploy from the default branch.
- Confirm the final production URL.
- Test both `/` and `/course` on production.
- Verify Open Graph previews after deployment.

## Deployment Rules

- No manual file upload deployment.
- Production deploys must come from the GitHub repository.
- Main branch must always be buildable.
- Failed builds must block deployment.
- Production changes should be reviewable through a Vercel preview.
- Rollback should use Vercel’s previous deployment mechanism.

## Outputs

- GitHub repository
- Connected Vercel project
- Production deployment
- Tagged first release
- Documented deployment and rollback process

## Acceptance Criteria

- A fresh clone can be installed and built using documented commands.
- The GitHub default branch matches production.
- Vercel deploys automatically from the repository.
- Both routes are publicly reachable.
- The production site has no build or runtime errors.
- The domain and metadata are correct.
- A rollback path has been tested or explicitly verified.
- No secrets exist in Git history.

## Validation Checklist

- [ ] Repository ownership confirmed
- [ ] Default branch confirmed
- [ ] Clean clone test passes
- [ ] Production build passes
- [ ] GitHub push completed
- [ ] Vercel integration completed
- [ ] Production domain connected
- [ ] `/` verified in production
- [ ] `/course` verified in production
- [ ] Open Graph preview verified
- [ ] Release tag created
- [ ] Rollback method documented
- [ ] Secret scan completed

---

# 4. Deferred Scope

The following items are explicitly outside the current implementation:

- User accounts
- Authentication
- Supabase
- Database storage
- Lead capture storage
- Local checkout
- Payment processing
- Admin dashboard
- CMS
- Personalized content
- AI-generated content
- Search backend
- Email automation
- Marketing automation
- User progress tracking
- Course delivery
- Analytics without explicit approval
- Cookie consent tooling unless required by selected tracking tools

These items must not be introduced opportunistically.

---

# 5. Future Supabase Boundary

If a backend is later approved, Supabase may be introduced for specific use cases such as lead capture, content management, or saved user state.

It must be added under these rules:

1. Define the exact backend use case first.
2. Do not expose privileged Supabase keys in the browser.
3. Use Row Level Security for every user-accessible table.
4. Keep database access behind a dedicated data-access layer.
5. Add input validation at the trusted boundary.
6. Define retention and deletion rules.
7. Define consent requirements for personal data.
8. Add monitoring and error handling.
9. Create migration files and rollback instructions.
10. Treat the backend as a separate approved phase.

---

# 6. Key Risks and Required Mitigations

## Risk: Prototype Runtime Dependencies

### Cause

The supplied HTML loads React development builds, Babel, and an editor-specific tweak panel directly in the browser.

### Consequence

Broken production behavior, unnecessary client weight, missing-file errors, security exposure, and poor maintainability.

### Severity

Major

### Required Mitigation

Rebuild interactions in the framework, remove browser-side Babel and editor dependencies, and verify the production bundle.

### Approval Effect

Blocks Phase 1 approval.

---

## Risk: Animation Accessibility and Performance

### Cause

The prototype uses continuous ticker motion, floating orbs, glitch effects, typewriter effects, scroll reveals, and 3D card movement.

### Consequence

Motion sensitivity issues, excessive CPU usage, poor mobile battery use, and reduced readability.

### Severity

Major

### Required Mitigation

Implement reduced-motion support, disable non-essential effects where appropriate, bound animation intensity, and test on mobile hardware.

### Approval Effect

Blocks launch approval if unresolved.

---

## Risk: Time-Sensitive Course Claims

### Cause

Pricing, course structure, lesson counts, live session format, instructors, and bonuses may change.

### Consequence

Misleading marketing content and loss of audience trust.

### Severity

Major

### Required Mitigation

Use the official course page as the source of truth, centralize volatile facts, and reverify them immediately before release.

### Approval Effect

Blocks Phase 2 and launch approval.

---

## Risk: Unauthorized Use of Reviews or Brand Assets

### Cause

The source page contains reviews, profile media, logos, and other third-party assets.

### Consequence

Copyright, privacy, brand, or compliance issues.

### Severity

Major

### Required Mitigation

Use only approved testimonials, portraits, logos, and images. Record the asset source and approval status.

### Approval Effect

Blocks publication of the affected asset, not necessarily the entire page if removed.

---

## Risk: RTL/LTR Layout Errors

### Cause

The glossary is in English while the course page is in Hebrew and contains English technical terms.

### Consequence

Incorrect reading order, broken punctuation, misaligned UI, and poor accessibility.

### Severity

Major

### Required Mitigation

Apply direction at page and component boundaries, use semantic language attributes, and test mixed-direction content manually.

### Approval Effect

Blocks Phase 2 approval.

---

## Risk: Architectural Drift Toward an Unnecessary Backend

### Cause

Forms, analytics, or content requests may encourage adding Supabase or API routes prematurely.

### Consequence

Increased security, privacy, maintenance, and operational burden.

### Severity

Minor initially; Major if personal data collection is introduced.

### Required Mitigation

Keep the current release static. Add backend capabilities only through a separately approved phase.

### Approval Effect

Unauthorized backend additions must be removed before approval.

---

## Risk: Single-File Monolith Reappears

### Cause

Fast migration may encourage copying the original HTML into one large component.

### Consequence

Poor maintainability, fragile interactions, and difficult future expansion.

### Severity

Major

### Required Mitigation

Enforce component and content boundaries defined in this plan.

### Approval Effect

Blocks architectural approval.

---

# 7. Definition of Done

The project is complete only when:

- The supplied concept has been converted into maintainable production code.
- The glossary is publicly usable and visually faithful.
- The course page is complete, accurate, and responsive.
- Navigation between the two pages is clear.
- No backend is present.
- Accessibility, SEO, performance, and responsive requirements are met.
- Course details have been verified against the official source.
- All Critical and Major risks are resolved.
- The repository is published to GitHub.
- Vercel deploys production from GitHub.
- The production site and rollback path are verified.
- Documentation is sufficient for another developer to clone, run, review, and deploy the project.

---

# 8. Claude Code Execution Protocol

Implement one phase at a time.

For each phase:

1. Copy only the prompt for the active phase into Claude Code.
2. Ask Claude Code to operate in **Plan Mode** first.
3. Require it to return:
   - files it intends to create or modify
   - architectural decisions
   - implementation sequence
   - assumptions
   - risks
   - validation commands
4. Review the returned plan against this document.
5. Do not authorize implementation while Critical or Major deviations remain.
6. After implementation, require:
   - summary of changes
   - changed-file list
   - test/build results
   - unresolved issues
   - screenshots or preview URL where relevant
7. Approve the phase before moving to the next one.
8. Never combine phases.

A fast implementation that ignores the boundaries is not faster. It merely postpones the invoice.
