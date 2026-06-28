# Design — Separate the v2 Foundation under `/v2/`

- **Date:** 2026-06-28
- **Status:** Approved (design); pending spec review
- **Branch:** `v2-foundation-split`
- **Related:** [`2026-06-16-freelancer-roadmap-year-1-design.md`](./2026-06-16-freelancer-roadmap-year-1-design.md) (the original v2 build this untangles)

## Problem

The site currently ships **two complete, contradictory course identities** in one navigation:

- **v1 — "The 12-week course":** root `/` homepage, `/roadmap`, `/weeks/*`. Framed as a **3-month, ~120-hour, front-end-only** course. Its "Let's be honest" box explicitly says *"you won't be a job-ready full-stack engineer… React, backends, and databases are the next path."*
- **v2 — "The Foundation / Journey":** `/foundation`, `/journey`, `/start-here`, `/foundation/*`. Framed as a **~833-hour, ~6-month** path that **does** teach full-stack, AI engineering, and freelancing — reusing the 12 week files as its technical core.

A visitor hits the contradiction directly:
- The homepage sells only v1 and never mentions v2.
- The global nav lists **Foundation · Journey · Roadmap** as three peers, so they read as three separate courses.
- Two front doors: `/` → `/weeks/0`; everything in v2 → `/start-here` → `/foundation`.
- Vocabulary collides ("journey" used for both; `/foundation` calls itself "this roadmap").

## Decision

Keep **v1 untouched at the root** as the standalone free front-end course. Relocate **v2 entirely under `/v2/`** as the separate "Freelancer Foundation," reusing the same week content through its own routes. The two never share navigation. `/v2` is the **Foundation (Year 1)** itself ("foundation to start with").

**Reuse model (chosen):** shared content, separate v2 routes. A new `/v2/weeks/[week]` route renders the same `src/content/weeks/*.md` files inside the v2 shell — **zero content duplication**, single-source authoring, every v2 URL stays under `/v2`.

## URL map

| Status | URL | File |
|---|---|---|
| Untouched (v1) | `/` | `pages/index.astro` (one additive link to v2 — see §4) |
| Untouched (v1) | `/roadmap` | `pages/roadmap.astro` |
| Untouched (v1) | `/weeks/[week]` | `pages/weeks/[week].astro` |
| Untouched (v1) | `/assignments`, `/404` | as-is |
| Shared infra | `/how-it-works`, `/resources` | stay at root; track-agnostic (method + link lists). Both navs may link to them. |
| Moved → v2 | `/v2` (Foundation, Year 1) | `pages/foundation.astro` → `pages/v2/index.astro` |
| Moved → v2 | `/v2/journey` (4-year arc) | `pages/journey.astro` → `pages/v2/journey.astro` |
| Moved → v2 | `/v2/start-here` | `pages/start-here.astro` → `pages/v2/start-here.astro` |
| Moved → v2 | `/v2/modules/[module]` | `pages/foundation/[module].astro` → `pages/v2/modules/[module].astro` |
| **New (v2)** | `/v2/weeks/[week]` | new `pages/v2/weeks/[week].astro` |

**Note on module path:** because `/v2` is now the Foundation page itself, the old `/v2/foundation/[module]` would be an orphaned segment. Modules move to **`/v2/modules/[module]`**, a clean parallel to `/v2/weeks/[week]`. Both are items in the foundation sequence (weeks = reused from v1, modules = new).

## §1 — Navigation (the core de-tangle)

`Header.astro` and `Footer.astro` stay global (rendered by `BaseLayout`) but become **context-aware** via `const isV2 = Astro.url.pathname === '/v2' || Astro.url.pathname.startsWith('/v2/')`. One component, two link sets, no per-page props.

- **v1 nav (root):** `Roadmap · How it works · Resources` + CTA **"The Foundation ↗" → `/v2`**. (Replaces today's "Start here" CTA, which currently points into v2.)
- **v2 nav (`/v2/*`):** `Foundation (→/v2) · Journey (→/v2/journey) · Start here (→/v2/start-here) · Resources (→/resources)` + a small **"← Front-end course" → `/`** back-link.
- **Footer:** keeps its two columns but fixes hrefs to the correct `/v2/*` vs root targets, and emphasizes the active section by context. The v1-flavored blurb ("three self-paced months") shows only in v1 context.

## §2 — The `/v2/weeks/[week]` route

- `getStaticPaths` reads the same `weeks` collection (single source — week edits stay in one `.md`).
- **Back-link → `/v2`** (not `/roadmap`).
- **Prev/next walk the foundation sequence** (`foundationSequence` from `journey.ts` — weeks *and* modules interleaved), identical to how the module page already navigates, so the v2 flow is continuous (week → module → week…). Targets resolve to `/v2/weeks/N` or `/v2/modules/slug`.
- **Phase badge uses the v2 phase:** add `phaseForWeek(n)` to `journey.ts` (mirrors `phaseForModule`); a week then reads e.g. "Phase 2 · Structure & Style" (v2) rather than "Foundations" (v1).
- **Progress key namespaced `clala:v2:week-N`** so v2 progress doesn't collide with v1's `clala:week-N`.

## §3 — Internal link updates inside moved v2 pages

All of these are absolute root paths today and must point at `/v2/*`:

- `v2/index.astro` (was foundation.astro): week items `/weeks/N` → `/v2/weeks/N`; module items `/foundation/slug` → `/v2/modules/slug`; `/journey` → `/v2/journey`; `/start-here` → `/v2/start-here`. The prose "reuses the 12-week course" note keeps its link to v1 `/roadmap` (it is deliberately referencing v1 as the origin).
- `v2/journey.astro`: `/foundation` → `/v2`; `/start-here` → `/v2/start-here`.
- `v2/start-here.astro`: `/foundation` → `/v2`; the `firstActions` `/weeks/0` → `/v2/weeks/0`.
- `v2/modules/[module].astro`: back-link `/foundation` → `/v2`; `getStaticPaths` builds `/weeks/N` → `/v2/weeks/N` and `/foundation/slug` → `/v2/modules/slug`.

**Build-critical — relative import depth changes on move.** Each moved file sits one directory deeper, so its `import` paths must gain one `../`:
- `v2/index.astro`, `v2/journey.astro`, `v2/start-here.astro` (was `src/pages/*.astro`): `../layouts|components|data` → `../../layouts|components|data`.
- `v2/modules/[module].astro` (was `src/pages/foundation/[module].astro`): `../../…` → `../../../…`.
- `v2/weeks/[week].astro` (new, modeled on `src/pages/weeks/[week].astro` which uses `../../…`): use `../../../…`.

## §4 — v1 touch-points (minimal)

Only the homepage changes on the v1 side: the existing **"Let's be honest"** box already names "React, backends, and databases" as "the next path." Make that the bridge — add a CTA **"Ready for more? → The Foundation"** → `/v2`. Plus the nav/footer link from §1. Everything else in v1 (roadmap, weeks, assignments, how-it-works) is unchanged.

## §5 — Data changes

- `phases.ts` (v1): no change.
- `journey.ts` (v2): add `phaseForWeek(n)` helper. No other change.
- Content collections (`weeks`, `modules`): no change — single source, reused by v2 routes.

## Out of scope (YAGNI)

- No rewrites of week/module markdown content.
- No visual redesign — reuse the existing components and styles.
- No Years 2–4 build-out.
- One incidental copy fix: `/v2` meta description says "~900 hours" while `totalFoundationHours` sums to ~833h — align the copy to the computed value.

## Verification

- `npm run build` passes; `@astrojs/sitemap` regenerates with the new `/v2/*` routes.
- `grep` for any remaining links into moved pages (`/foundation`, `/journey`, `/start-here`, `/foundation/`) so nothing 404s; confirm v1 pages never link into v2 except the one intentional homepage CTA, and v2 pages never link into v1 except the shared `/how-it-works`, `/resources`, and the deliberate `/roadmap` origin note + the "← Front-end course" back-link.
- Manual smoke test in dev: load `/`, `/roadmap`, `/v2`, `/v2/journey`, `/v2/start-here`, `/v2/weeks/0`, `/v2/modules/command-line`; verify each shows the correct (v1 vs v2) nav and that prev/next + back-links stay within their track.

## Open questions

None blocking. Defaults above stand unless changed at spec review.
