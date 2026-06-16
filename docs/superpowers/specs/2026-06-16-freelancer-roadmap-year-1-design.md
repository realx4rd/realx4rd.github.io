# Design Spec — Freelancer Roadmap: Year 1 Foundation

**Date:** 2026-06-16
**Project:** Extend `click-and-learn-academy` (realx4rd.github.io) with a multi-year
"beginner → earning IT freelancer" roadmap, starting with a fully-built **Year 1 Foundation**.
**Status:** Approved design direction (full-depth build, reuse components, AI-Automation-first).

---

## 1. Vision & goal

Take a **complete beginner** from zero to a **market-competitive, earning IT freelancer**
within a couple of years. This is **not** a degree companion — it is a practical,
monetization-driven path. Year 1 builds the universal technical foundation *and* starts the
earning engine, ending with the learner able to take their first paid gigs. Years 2–4 are
shown as a preview so the learner sees the long game ("years and years").

**Positioning thesis (from research):** the winner in the 2026 market delivers
**business outcomes, in a specific niche, using AI as leverage** — never generic output by
hand. The roadmap trains *that* person.

---

## 2. Research-grounded principles (the rules this curriculum obeys)

1. **Web-first foundation beats CS-theory-first** for an earning goal (Odin / freeCodeCamp /
   roadmap.sh consensus). Borrow CS50 only for "how computers/the web work" mental models.
2. **Canonical order:** mindset/how-to-learn → web literacy → command line → Git → HTML →
   CSS → JavaScript → problem-solving → projects-from-day-one → deploy + portfolio.
3. **Ship from day one; deploy everything.** Tutorial hell is the #1 failure mode. Every
   module ends in a built, version-controlled, deployed artifact.
4. **Thread monetization from week one.** Talented learners fail to earn because business
   skills are bolted on at the end. A recurring **Freelance-Readiness thread** runs through
   every phase.
5. **AI as a tutor, not a crutch** early; **AI as leverage** once skilled. One AI-free rep
   per concept.
6. **Specialize to be defensible.** Lead learners toward one niche (AI Automation primary).
7. **Honest timelines.** First $ within 1–3 months of *active* marketing once skilled; first
   $1k/month ~9–18 months from zero. No "$10k/mo in 90 days" fantasy.

---

## 3. Information architecture (pages & routes)

All new pages reuse `BaseLayout`, the Warm Workshop Blueprint design tokens, and existing
components. **No design-system changes.**

| Route | Type | Purpose |
|---|---|---|
| `/journey` | new page | The multi-year arc (the "vision"). Year 1 detailed entry + Years 2–4 preview. The long game. |
| `/foundation` | new page | **The centerpiece.** Year-1 plan laid out phase-by-phase as a timeline; each phase lists its weeks (existing) and modules (new) with goals; embeds the freelance-readiness thread, milestone ladder, and lane chooser. |
| `/foundation/[module]` | new dynamic page | Per-module detail page (mirrors `/weeks/[week]`): objectives, day-by-day `DayCard`s, project/deliverable, resources, progress checklist. |
| `/resources` | **extend existing** | Add categories: AI Automation tooling, Freelancing & business, Deployment, AI-as-tutor. |
| `/start-here` | new page | "Where the student can start" — a friendly on-ramp: pick your starting point, the daily loop, what to install, first 3 actions, links into `/foundation`. Satisfies the "reference page(s) where the student can start" ask. |

**Navigation (decided):** top nav becomes **Start Here · Foundation · Roadmap · Resources ·
How it works** (5 items + the existing "Start free" button). `Start Here` → `/start-here`,
`Foundation` → `/foundation`. `/journey` is **not** a top-nav item — it is linked prominently
from `/start-here`, the top of `/foundation`, and the homepage. `Assignments` moves from top
nav into the Footer (keeps nav uncluttered; page stays live). The hero CTA on `/foundation`
and `/journey` points to `/start-here`.

---

## 4. Content model & component reuse

### 4.1 Reuse, don't duplicate
- **Existing `weeks` collection stays untouched** (weeks 0–12 = the technical core, reused as
  Year-1 Phases 2–4).
- **New `modules` content collection** for the *new* lessons (Phases 1, 5, 6). Schema mirrors
  the `weeks` `day`/`project` shapes so `DayCard`, `ProgressChecklist`, `TechBadge` work
  unchanged.

### 4.2 Shared `Day` type
`DayCard.astro` is currently typed `CollectionEntry<'weeks'>['data']['days'][number]`.
Refactor to accept a **structural `Day` type** (extract to `src/types.ts` or accept a plain
interface) so it serves both `weeks` and `modules`. Pure type-level change; no markup change.

### 4.3 New `modules` collection schema (`src/content.config.ts`)
Mirrors `weeks` with journey-oriented fields:
```ts
{
  slug: string,            // url slug, e.g. "command-line"
  order: number,           // global ordering within Year 1
  title: string,
  focus: string,
  phaseKey: string,        // matches a Year-1 phase key in journey.ts
  hours: number,
  tech: string[],
  lane?: string,           // optional: which specialization lane (for Phase 5)
  objectives: string[],    // the "goals"
  days: Day[],             // same shape as weeks (learn/build/assignment + go-deeper)
  project?: {...},         // same as weeks
  deliverable?: string,
  milestone: boolean,
  proSkills: string[],
  resources: LinkResource[],
}
```

### 4.4 New journey data (`src/data/journey.ts`)
Single source of truth for the non-lesson structure:
- `years: Year[]` — the 4-year arc (Year 1 = `detailed`; Years 2–4 = `preview` with blurb +
  outcomes + target income).
- `year1Phases: Phase[]` — the 7 phases (key, name, weeks-range label, blurb, hex), each with
  an ordered `items[]` where each item is `{kind:'week', week:number}` (existing) or
  `{kind:'module', slug:string}` (new). This lets `/foundation` render existing weeks and new
  modules in one unified timeline.
- `freelanceThread: ReadinessModule[]` — the recurring FR-1…FR-7 themes (title, what it
  covers, when it starts).
- `milestones: Milestone[]` — the zero → first-$1k/month ladder.
- `lanes: Lane[]` — specialization lanes (AI Automation = primary/featured; Web+AI,
  E-commerce/Shopify, UI/UX, AI-Video = options) with blurb, demand note, starter module.

Phase accent colors extend the existing palette (vermilion/teal/honey/plum + the launch
brown) so the timeline reads as one family.

---

## 5. The Year-1 curriculum (the meat)

12-month arc, ~10 hrs/week. **Reuse map** in the right column. Each phase has a one-line goal;
each module/week carries 3–5 objectives ("goals") and curated references.

### Phase 0 · Launch Pad — *Weeks 1–2* — accent: brown `#80705c`
**Goal:** adopt a how-to-learn mindset, understand how the web works, set up your workshop.
- **Reuse existing `week-00`** (Launch Pad onboarding). Add a short journey framing note.
- Freelance thread starts: "the long game" + tentatively pick a direction.
- Key refs: freeCodeCamp "avoid tutorial hell", CS50 Week 0, MDN "How the web works".

### Phase 1 · Workshop Tools — *Weeks 3–4* — accent: teal `#0f6f63` — **NEW modules**
**Goal:** drive your machine like a pro and version everything from day one.
- **Module `command-line`** — terminal navigation, files/dirs, running programs.
  Objectives: navigate the FS, run commands, understand paths, use a few power commands.
  Ref: Odin "Command Line Basics", MDN terminal crash-course.
- **Module `git-github`** — Git fundamentals (init/add/commit/branch/merge), GitHub
  (push/clone/PR), good commit messages, README-as-bio. Objectives: version a project,
  publish to GitHub, write a clean history. Ref: Odin "Git Basics", GitHub Docs/Skills.
- Freelance thread: GitHub profile as portfolio.

### Phase 2 · Structure & Style — *Weeks 5–10* — accent: teal/honey — **REUSE weeks 1–4**
**Goal:** build accessible, responsive pages and ship them.
- Reuse existing `week-01`…`week-04` (HTML, CSS, box model/Flexbox/Grid, responsive).
- Freelance thread: first portfolio pieces; deploy to GitHub Pages.

### Phase 3 · The Engine — *Weeks 11–20* — accent: vermilion `#d63c11` — **REUSE weeks 5–8**
**Goal:** make pages think — logic, the DOM, events, live data.
- Reuse existing `week-05`…`week-08` (JS fundamentals, DOM, events, APIs/async).
- Add emphasis note: problem-solving & reading errors as explicit skills.
- Freelance thread: niche exploration; first case-studied project.

### Phase 4 · Modern Tooling + Ship — *Weeks 21–26* — accent: honey `#b3760a` — **REUSE weeks 9–12**
**Goal:** move faster and ship a real, deployed capstone + portfolio.
- Reuse existing `week-09`…`week-12` (Tailwind, Alpine, jQuery overview, capstone).
- Freelance thread: portfolio site live; draft platform profiles.

### Phase 5 · Choose Your Lane — *Weeks 27–36* — accent: plum `#8a3a5b` — **NEW modules**
**Goal:** go deep enough on ONE marketable niche to take first gigs. **AI Automation is the
featured primary lane; others are first-class options.**
- **Module `choose-your-lane`** — how to pick a niche (buyer + problem + AI-leverage), the
  2026 demand map, "generalist locally, specialist online." Decision deliverable: pick a lane.
- **Module `ai-automation-starter`** (PRIMARY, full depth) — n8n/Make/Zapier + LLM APIs;
  build real automations (lead capture → CRM, content repurposing, support triage);
  package an outcome offer; a free-for-local-business case study. Multiple days, project +
  rubric. Refs: n8n/Make/Zapier docs, OpenAI/Anthropic API quickstarts, automation communities.
- **Lane overviews (lighter, in `journey.ts` `lanes` + short modules or cards):** Web+AI
  integration, E-commerce/Shopify, UI/UX (Figma), AI-assisted video. Each: what it is, demand
  note, the one starter resource, "go deep in Year 2."
- Freelance thread: niche locked; productized offer drafted.

### Phase 6 · First Income — *Weeks 37–48* — accent: vermilion-deep — **NEW modules**
**Goal:** convert skills into the first paid work. The launch sprint.
- **Module `portfolio-and-positioning`** — 3–5 niche pieces as case studies
  (problem→approach→obstacle→measurable result); one-line positioning statement; personal site.
- **Module `profiles-and-outreach`** — Upwork/Fiverr/Contra profiles that convert; the
  daily outreach habit (~5 personalized msgs/day); local-business + LinkedIn + community
  channels; fast-response tactic.
- **Module `pricing-proposals-first-gig`** — pricing (hourly/fixed/value), deposits 25–50%,
  simple contracts, proposals (150–250 words), scope-creep defense, getting paid safely,
  asking for the first testimonial.
- Deliverable for the phase: profiles live + first proposals sent + (target) first paid gig.
- Refs: SelfEmployed/UpHunt/Jobbers guides, Freelancers Union payment guides, Bonsai scope.

---

## 6. The Freelance-Readiness thread (recurring "pro-skills")

Rendered as an explainer block on `/foundation` and surfaced as `proSkills` tags on modules.
Threaded from week one (not a final module):

| # | Theme | Covers | Starts |
|---|---|---|---|
| FR-1 | Proof-of-Work Portfolio | niche-relevant case studies; GitHub README-as-bio; personal site | Phase 0–1 |
| FR-2 | Niche & Positioning | one buyer + one problem; one-line statement; resist generalist drift | Phase 2 |
| FR-3 | Visibility & Pipeline | daily/weekly outreach habit; profiles that convert; content; referrals | Phase 4 |
| FR-4 | Pricing & Money | rate-setting; underpricing trap; deposits; invoicing; contracts | Phase 5–6 |
| FR-5 | Client Comms & Delivery | proposals; scoping/SoW; expectations; scope-creep defense | Phase 6 |
| FR-6 | Reputation Compounding | testimonials at delivery; repeat/retainer; social proof | Phase 6+ |
| FR-7 | AI-Leverage & Defensibility | deliver faster with AI; outcome offers; stay above commodity layer | all phases |

**Rule baked into every module:** each ends with a *monetization action* (publish a
case-studied piece / send N proposals / ask for a testimonial). No skill is "done" without a
pipeline action attached.

---

## 7. Milestone ladder (zero → first $1k/month)

Behavioral, celebrated checkpoints rendered on `/journey` (and/or `/foundation`):
demoable skill → first portfolio piece live → niche statement written → profile/site live →
3–5 portfolio pieces → outreach habit running → first proposal sent → **first paid project** →
first testimonial → first repeat/referral → first rate raise → **first $1k month** → first
retainer/productized offer.

---

## 8. Multi-year arc (Years 2–4 — preview only, not built now)

- **Year 2 — Specialize & Earn:** go deep in the chosen lane; consistent $1k+ months; direct
  clients; raise rates.
- **Year 3 — Scale:** retainers, productized services, higher rates, systems, maybe a
  second skill; build authority/content.
- **Year 4 — Authority / Leverage:** own products, small agency/subcontractors, or premium
  positioning. Income compounds.

Rendered as cards with outcomes + target income on `/journey`. Clearly labeled "the long game."

---

## 9. Scope: built now vs. later

**Built now (this project):**
- `journey.ts` data; `modules` collection + schema; `DayCard` type generalization.
- Pages: `/journey`, `/foundation`, `/foundation/[module]`, `/start-here`; extended `/resources`; nav update.
- **New modules authored in full:** `command-line`, `git-github`, `choose-your-lane`,
  `ai-automation-starter`, `portfolio-and-positioning`, `profiles-and-outreach`,
  `pricing-proposals-first-gig` (7 modules). Lighter lane overviews via data + cards.
- Reuse existing weeks 0–12 as Phases 0/2/3/4 (no rewrite).
- Update `MAINTAINING.md` to document the new `modules` collection.

**Later (not now):** authoring full deep modules for the non-primary lanes; building out
Years 2–4 in detail; per-day content for every reused-week's missing go-deeper fields.

---

## 10. Design system

**No changes.** Reuse all existing tokens (`--color-paper`, `--color-ink`, `--color-vermilion`,
block shadows, grid-paper), fonts (Fraunces/Hanken/JetBrains), and components
(`BaseLayout`, `Header`, `Footer`, `DayCard`, `ProgressChecklist`, `TechBadge`, `Logo`).
New pages copy the section patterns already used in `index.astro`/`roadmap.astro`
(hero band with `grid-paper`, bordered cards with `shadow-block`, dark inverted sections,
phase timelines with colored left borders).

---

## 11. Risks & mitigations

- **Two "roadmaps" could confuse** (the 12-week course `/roadmap` vs. the Year-1
  `/foundation`). *Mitigation:* `/foundation` explicitly frames the course as its technical
  core ("Phases 2–4 are the Click & Learn 12-week course"); cross-link clearly.
- **Content volume** (7 full modules). *Mitigation:* author against the proven `week-01`
  template; can parallelize drafting; content is research-grounded (citations on file).
- **Scope creep into Years 2–4.** *Mitigation:* preview-only, enforced by §9.
- **Identity drift** of the academy brand. *Mitigation:* additive only; existing pages and
  "Click & Learn Academy" name untouched; the freelancer track is a layer on top.

---

## 12. Success criteria

- `npm run build` passes clean.
- `/foundation` shows all 7 phases as a unified timeline mixing existing weeks + new modules,
  each with goals; the freelance thread, milestone ladder, and lane chooser render.
- All 7 new module pages render with `DayCard`s, objectives, project/deliverable, resources,
  and working progress checklist — visually identical in style to existing week pages.
- `/journey` shows the 4-year arc; `/start-here` gives a clear first-action on-ramp.
- `/resources` includes the new freelance/AI/deploy categories.
- Nav updated; no regressions to existing course pages.
