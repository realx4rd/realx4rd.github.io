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
