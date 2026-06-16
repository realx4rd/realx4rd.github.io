# Design Spec — Freelancer Roadmap: Year 1 — The Deep Foundation

**Date:** 2026-06-16 (rev. 2 — deepened to a ~6-month full-time foundation)
**Project:** Extend `click-and-learn-academy` (realx4rd.github.io) with a multi-year
"beginner → earning IT freelancer" roadmap. The build-now deliverable is a **deep Year-1
Foundation** that takes a complete beginner to genuinely **market-ready** before they go pro.
**Status:** Design direction approved (full-depth, reuse components, AI-first). Rev 2 expands
scope per user: *"full + deep before going to pro… ~6 months minimum before ready to earn."*

---

## 1. Vision & goal

Take a **complete beginner** to a **market-competitive, earning IT freelancer**. The student
does **not** rush to market in 3 months — they build a **deep, full foundation first**
(full-stack development + real AI engineering + freelance business skill), then enter the
professional market ready to **compete and win their first $**.

**Target pace:** ~**900 hours** of curriculum = roughly **6 months at full-time intensity
(30–40 hrs/week)** before "Go Pro." The curriculum is expressed in **hours**, not fixed
calendar weeks, with a **pace table** so any schedule works:

| Pace | Hours/week | Time to "Go Pro" |
|---|---|---|
| Casual | ~10 | ~18 months |
| Part-time | ~20 | ~9 months |
| **Full-time (target)** | **~35** | **~6 months** |
| Intensive | ~45 | ~4.5 months |

**Year 1 = Foundation (months 0–6 full-time) + Go Pro (first income, months 6–12).**
Years 2–4 (scale → authority) are shown as a preview so the student sees the long climb.

**Positioning thesis (from research):** the 2026 winner delivers **business outcomes, in a
specific niche, using AI as leverage** — and can actually *build*, not just assemble no-code
tools. So the foundation goes deep enough to build custom AI-powered products, which is where
the durable, high-value, AI-resilient money is.

---

## 2. Research-grounded principles (the rules this curriculum obeys)

1. **Web-first, then full-stack, then AI engineering.** Borrow CS50 for mental models only.
2. **Canonical order:** mindset → web/computer literacy → CLI → Git → HTML → CSS → JavaScript
   (deep) → framework (React) → backend/DB → AI engineering → real projects → go pro.
3. **Ship from day one; deploy everything.** Tutorial hell is the #1 failure mode.
4. **Depth before pro.** Don't enter the market half-ready; a shallow freelancer competing on
   price loses to AI. A deep builder selling outcomes wins. Hence ~6 months, not ~3.
5. **Thread monetization from week one** (Freelance-Readiness thread), but *launch* only after
   the skills are real (Phase 9).
6. **AI as tutor (not crutch) early; AI as leverage once skilled.** One AI-free rep per concept.
7. **Specialize to be defensible** — AI engineering/automation is the primary lane.
8. **Honest timelines** — first $ within 1–3 months of *active* marketing after going pro;
   first $1k/mo ~9–18 months from zero. No "$10k/mo in 90 days" fantasy.

---

## 3. Information architecture (pages & routes)

All new pages reuse `BaseLayout`, the Warm Workshop Blueprint tokens, and existing components.
**No design-system changes.**

| Route | Type | Purpose |
|---|---|---|
| `/journey` | new | The multi-year arc (vision). Year 1 (Foundation + Go Pro) detailed entry + Years 2–4 preview + milestone ladder. |
| `/foundation` | new | **Centerpiece.** The deep Year-1 Foundation as a phase-by-phase timeline (10 phases), each listing weeks (reused) + modules (new) with goals; pace table; freelance-readiness thread; lane chooser. |
| `/foundation/[module]` | new dynamic | Per-module detail page (mirrors `/weeks/[week]`): objectives, day-by-day `DayCard`s, project/deliverable, resources, progress checklist. |
| `/resources` | extend | Add: JavaScript/React, Backend/DB, AI engineering & automation, Deployment/DevOps, Freelancing & business, AI-as-tutor. |
| `/start-here` | new | The friendly on-ramp: pick your pace, set up your workshop, your first 3 actions, links into `/foundation`. Satisfies "reference page(s) where the student can start." |

**Navigation (decided):** **Start Here · Foundation · Roadmap · Resources · How it works**
(+ existing "Start free" button). `/journey` is linked from `/start-here`, top of `/foundation`,
and the homepage (not a top-nav item). `Assignments` moves to the Footer.

---

## 4. Content model & component reuse

- **Existing `weeks` collection untouched** (weeks 0–12 = reused technical core).
- **New `modules` content collection** for new lessons. Schema mirrors `weeks` `day`/`project`
  shapes so `DayCard`, `ProgressChecklist`, `TechBadge` work unchanged.
- **Generalize `DayCard.astro`** to a structural `Day` type (extract to `src/types.ts`) so it
  serves both collections. Pure type change; no markup change.
- **`src/data/journey.ts`** — single source for: `years` (4-year arc), `year1Phases` (the 10
  phases, each with ordered `items[]` = `{kind:'week',week}` reused or `{kind:'module',slug}`
  new), `pace` table, `freelanceThread` (FR-1…FR-7), `milestones` ladder, `lanes`
  (AI = primary; Web+AI, E-commerce, UI/UX, AI-Video = options).

New `modules` schema:
```ts
{ slug, order, title, focus, phaseKey, hours, tech[], lane?, objectives[], days: Day[],
  project?, deliverable?, milestone, proSkills[], resources: LinkResource[] }
```

---

## 5. The Year-1 Deep Foundation curriculum (~900 hrs, 10 phases)

Reuse map in the right column. Each module/week carries 3–5 objectives ("goals") + curated
references. The 🔥 Freelance-Readiness thread runs throughout (see §6).

| # | Phase | ~Hrs | Content | Source |
|---|---|---|---|---|
| 0 | **Launch Pad & Mental Models** | 40 | How to learn, escape tutorial hell, AI-as-tutor rules; how computers + the web/HTTP/DNS actually work (CS50 Week-0 flavor); set up the workshop | reuse `week-00` + 1 new module |
| 1 | **Workshop Tools** | 30 | Command line (navigation, pipes, permissions, scripting basics); Git + GitHub (branching, PRs, conflicts, README-as-bio) | **NEW** ×2 |
| 2 | **Structure & Style** | 80 | Semantic HTML, accessibility (deep), CSS, Flexbox/Grid, responsive, modern CSS (custom props, container queries) | reuse `week-01…04` + 1 new module |
| 3 | **JavaScript, Deep** | 130 | JS fundamentals → DOM/events → APIs/async; then advanced: ES6+ modules, functional patterns, error handling, async mastery, **intro to TypeScript**, debugging as a discipline, DSA intuition | reuse `week-05…08` + **NEW** ×2–3 |
| 4 | **Modern Tooling & Ship** | 60 | Tailwind, Alpine, jQuery overview, first capstone; deployment deep (Vercel/Netlify, env vars, domains, perf basics) | reuse `week-09…12` + 1 new module |
| 5 | **React: Build Real Apps** | 110 | Components, props, state, hooks, routing, data fetching, forms, state mgmt; build a real SPA | **NEW** ×3–4 |
| 6 | **Backend: Node, APIs & Databases** | 130 | Node.js, REST APIs (Express), databases (Postgres/Supabase + ORM), auth basics, connect FE↔BE, deploy a full-stack app | **NEW** ×3–4 |
| 7 | **AI Engineering & Automation** ⭐ | 150 | LLM APIs (OpenAI/Anthropic) + prompt engineering; build AI features into apps; automation platforms (n8n/Make/Zapier) in depth; agents & multi-step workflows; RAG/vector basics; package AI outcomes for clients | **NEW** ×4–5 (primary lane) |
| 8 | **Portfolio & Specialization Projects** | 120 | Build 3–4 substantial, deployed, case-studied projects in the chosen lane — the proof-of-work that wins clients | **NEW** ×2–3 project guides |
| 9 | **Go Pro: Freelance Launch** | 60 | Portfolio polish, niche/positioning locked, platform profiles (Upwork/Fiverr/Contra), outreach habit, pricing/deposits/contracts, proposals, first gig, first testimonial | **NEW** ×3 |

**Total ≈ 910 hrs** (~6 months full-time). New modules ≈ **20–23**; existing weeks 0–12 fully
reused as the core of Phases 0/2/3/4.

⭐ **AI Engineering (Phase 7) is the primary specialization** — the differentiator. Phases 5–6
(React + backend) exist so the student can build *custom* AI-powered products, not just wire up
no-code tools — that's the AI-resilient, high-value work. Alternate lanes (e-commerce, UI/UX,
AI-video) branch at Phase 8 and deepen in Year 2.

---

## 6. Freelance-Readiness thread (recurring "pro-skills")

Threaded from Phase 0 (not bolted on). Surfaced as `proSkills` tags + an explainer block on
`/foundation`. **Launch happens in Phase 9, once skills are real.**

| # | Theme | Starts |
|---|---|---|
| FR-1 | Proof-of-Work Portfolio (case studies, GitHub README-as-bio, personal site) | P0–1 |
| FR-2 | Niche & Positioning (one buyer + one problem; one-line statement) | P2 |
| FR-3 | Visibility & Pipeline (outreach habit, profiles that convert, content, referrals) | P5 |
| FR-4 | Pricing & Money (rates, underpricing trap, deposits, invoicing, contracts) | P8 |
| FR-5 | Client Comms & Delivery (proposals, scoping/SoW, scope-creep defense) | P9 |
| FR-6 | Reputation Compounding (testimonials, repeat/retainer, social proof) | P9+ |
| FR-7 | AI-Leverage & Defensibility (deliver faster with AI; outcome offers) | all |

**Rule:** each project/module ends with a *monetization action* (publish a case-studied
piece / draft an offer / later: send proposals). No skill is "done" without a pipeline action.

---

## 7. Milestone ladder (zero → first $1k/month)

Behavioral checkpoints on `/journey`: demoable skill → first portfolio piece → first deployed
full-stack app → first AI-powered project → niche statement → 3–5 portfolio pieces → profile/
site live → outreach habit → first proposal → **first paid project** → first testimonial →
first repeat/referral → first rate raise → **first $1k month** → first retainer.

---

## 8. Multi-year arc (preview only, not built now)

- **Year 1 — Foundation + Go Pro:** the ~6-month deep foundation, then first income. *(built now)*
- **Year 2 — Specialize & Earn:** go deeper in the lane; consistent $1k+ months; direct clients.
- **Year 3 — Scale:** retainers, productized services, higher rates, authority/content.
- **Year 4 — Authority / Leverage:** own products, small agency, or premium positioning.

Rendered as cards with outcomes + target income on `/journey`. Labeled "the long game."

---

## 9. Scope & execution

**Built now (this project):** the full deep Year-1 Foundation above.

Because this is ~20–23 new modules, execution is **staged so progress is visible**:

1. **Skeleton** — `journey.ts`, `modules` collection + schema, `DayCard` type generalization,
   `astro` build green with empty/stub modules.
2. **Pages** — `/foundation`, `/journey`, `/start-here`, `/foundation/[module]`, extended
   `/resources`, nav/footer update. Verified rendering with stub content.
3. **Author modules in waves** (each wave = a phase or two, fully authored against the proven
   `week-01` template; parallelizable):
   - Wave A: Phases 0–1 (mental models, CLI, Git)
   - Wave B: Phase 3 advanced JS + Phase 4 deployment
   - Wave C: Phase 5 React
   - Wave D: Phase 6 backend
   - Wave E: Phase 7 AI engineering (the ⭐ differentiator)
   - Wave F: Phases 8–9 (projects + go pro)
4. **Verify** — `npm run build` clean; spot-check pages in the dev preview each wave.
5. **Update `MAINTAINING.md`** to document the new `modules` collection.

**Later (not now):** full deep modules for non-primary lanes; detailed Years 2–4; backfilling
go-deeper fields on reused weeks 5–12.

---

## 10. Design system

**No changes.** Reuse all tokens, fonts, and components. New pages copy section patterns from
`index.astro`/`roadmap.astro` (grid-paper hero bands, bordered `shadow-block` cards, dark
inverted sections, phase timelines with colored left borders).

---

## 11. Risks & mitigations

- **Big content volume (~20+ modules).** *Mitigation:* staged waves; proven template;
  research-grounded; parallelizable drafting; build stays green at every stage.
- **Two roadmaps could confuse** (`/roadmap` course vs `/foundation`). *Mitigation:*
  `/foundation` frames the course weeks as its reused core; clear cross-links.
- **Scope creep into Years 2–4 / extra lanes.** *Mitigation:* preview-only; enforced by §9.
- **Depth vs. overwhelm.** *Mitigation:* pace table + clear phases + "you are here" progress;
  honest "this is ~6 months full-time" framing up front.
- **Academy brand drift.** *Mitigation:* additive only; existing name/pages untouched.

---

## 12. Success criteria

- `npm run build` passes clean at every stage.
- `/foundation` shows all 10 phases as a unified timeline (reused weeks + new modules), each
  with goals; pace table, freelance thread, milestone ladder, lane chooser render.
- All new module pages render with `DayCard`s, objectives, project/deliverable, resources, and
  working progress checklist — visually identical to existing week pages.
- `/journey` shows the 4-year arc + milestone ladder; `/start-here` gives a clear first-action
  on-ramp with the pace table.
- `/resources` includes the new categories; nav/footer updated; no regressions.
