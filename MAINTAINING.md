# Maintaining Click & Learn Academy

This guide is for **content maintainers** — no coding experience needed.
You edit simple text files; the website updates itself.

---

## The one thing to understand

**All course content lives in Markdown files** in `src/content/weeks/`.
Each week is one file: `week-00.md`, `week-01.md`, … `week-12.md`.
You edit those files. That's it. The site rebuilds from them automatically.

---

## Editing a week

Open any `week-XX.md` file. The top part (between the `---` lines) is the
**frontmatter** — structured fields the site reads. Below it is freeform
Markdown for the longer lesson notes.

### The fields

```yaml
week: 1                      # which week (0–12)
title: "HTML + web literacy" # the week's name
focus: "..."                 # one-line summary shown on cards
phase: "Foundations"         # Launch Pad | Foundations | JavaScript | Modern Tooling | Capstone
phaseNumber: 1               # 0–4 (groups weeks on the roadmap)
hours: 9                     # estimated hours
tech: ["HTML"]               # tech tags shown as badges
objectives:                  # 3–5 bullet points
  - "Understand how the web works"
days:                        # the daily breakdown (see below)
  - n: 1
    topic: "..."             # the day's concept
    learn: "..."             # what to read/watch (the ~20-min slot)
    build: "..."             # the guided code-along
    assignment: "..."        # the do-it-alone exercise
project:                     # the weekend project
  title: "..."
  brief: "..."
  deploy: "GitHub Pages"
  rubric:
    - "..."
milestone: false             # true only for phase-final weeks
proSkills: ["Git ritual"]    # cross-cutting skills practiced
resources:                   # free links shown in the sidebar
  - label: "MDN"
    url: "https://..."
---
```

### Optional "go deeper" fields on a day

Each day can include up to five **optional** extra fields. When a day has any
of them, the site shows a **"Details, steps & resources"** toggle on that day's
card — collapsed by default, so the page stays clean. Leave them out and the day
simply shows no toggle. Add as many or as few as you like.

```yaml
days:
  - n: 1
    topic: "The box model"
    learn: "..."
    build: "..."
    assignment: "..."
    # ---- optional from here down ----
    time: "~90 min"          # shown as a small pill next to the day number
    details: "..."           # 2–4 sentences: what it is, why it matters
    steps:                   # a numbered build walkthrough
      - "First, do this"
      - "Then do that"
    stuck: "..."             # one short 'if you're stuck, try this' hint
    resources:               # 2–3 precise links for THIS day's topic
      - label: "MDN — The box model"
        url: "https://developer.mozilla.org/..."
```

**Tip:** day-level `resources` are for the *exact* page a learner needs that day
(a specific MDN article, a single video). The week-level `resources:` block
(further down the file) is the broader reading list for the whole week.

> Weeks 0–4 are fully authored with these fields and make the best template to
> copy from. Weeks 5–12 don't have them yet — adding them is the next content task.

### Rules that keep the site working

1. **Keep the quotes.** Text values go in `"double quotes"`.
2. **Don't change the field names.** `topic:`, `learn:`, etc. must stay as-is.
3. **Indentation matters.** Use 2 spaces, never tabs. Each `steps:`/`resources:`
   item is indented one more level than its field.
4. **URLs need `https://`.** And keep them in quotes.
5. After saving, the dev server reloads automatically.

---

## Adding a brand-new week

1. Copy an existing file (e.g. `cp src/content/weeks/week-01.md src/content/weeks/week-13.md`).
2. Change `week:` to the new number and update the content.
3. Set `phase` / `phaseNumber` so it lands in the right roadmap group.
4. Save. The week appears automatically — no other files to touch.

**The build broke?** 99% of the time it's a YAML indentation or quote issue.
Check the file you just edited against the rules above.

---

## The freelancer foundation track (Year 1)

Alongside the 12-week course, the site has a **Year-1 freelancer foundation** — a deeper,
10-phase path from beginner to earning freelancer. It lives in two places:

- **Structure** (phases, order, pace table, the 4-year arc, milestone ladder, lanes):
  `src/data/journey.ts`.
- **Lessons**: `src/content/modules/*.md` — one file per module, the **same format as a week**
  (minus the `week`/`phase`/`phaseNumber` fields). Reused course weeks also appear in the
  foundation; `journey.ts` references them by number, so you don't duplicate them.

### Editing a module

Open any `src/content/modules/<name>.md`. The frontmatter mirrors a week's: `title`, `focus`,
`hours`, `tech`, `objectives`, `days` (same day shape, including optional
`details`/`steps`/`stuck`/`resources`), `project` **or** `deliverable`, `milestone`,
`proSkills`, `resources`. Same YAML rules as weeks apply.

### Adding a module

1. Create `src/content/modules/my-module.md` (copy an existing module).
2. Add it to a phase in `src/data/journey.ts`: find that phase's `items` array and add
   `{ kind: 'module', slug: 'my-module' }` in the right position. **The filename is the slug.**
3. Save. It appears on `/foundation`, gets its own page at `/foundation/my-module`, and slots
   into the prev/next flow automatically.

To place a reused course week in a phase, use `{ kind: 'week', week: 5 }` instead.
Until a referenced module file exists, it shows as a muted **"coming soon"** card — so you can
sketch the whole roadmap first and fill in lessons over time.

### The pages

- `/foundation` — the Year-1 timeline (phases → weeks + modules), pace table, freelance thread, lanes.
- `/journey` — the 4-year arc + milestone ladder.
- `/start-here` — the on-ramp.

Phase colours, hour estimates, the pace table, and the milestone ladder all live in
`journey.ts` — edit data there, not markup.

---

## Previewing and deploying

Run these from the project folder in a terminal:

```bash
npm install     # first time only
npm run dev     # preview locally at http://localhost:4321
npm run build   # check it builds cleanly before publishing
```

Deployment is automatic: pushing to the `main` branch on GitHub triggers the
GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site
and publishes it to **https://realx4rd.github.io**. Just commit and push:

```bash
git add -A
git commit -m "Update week 5 content"
git push
```

Give it 1–2 minutes, then refresh the live site.

---

## Need help?

- **Content/YAML questions:** re-read the rules above; compare your file to a
  working week (weeks 0–4 are good references).
- **Build or deploy errors:** check the repo's **Actions** tab on GitHub for the
  red ✗ and the error message it prints.
