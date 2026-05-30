# Maintainer's guide

You do **not** need to know Astro, JavaScript, or any framework to maintain the course
content. Everything students read lives in **Markdown** files. This guide shows you how.

---

## 1. Edit a week's lesson

Every week is one file in `src/content/weeks/`, named `week-00.md` … `week-12.md`.

Open the file. The top part (between the `---` lines) is the **frontmatter** — structured
data that fills in the page. Below it is the **lesson write-up** in plain Markdown.

Change the text, save the file, and the site updates automatically while `npm run dev` is
running. That's it.

### The frontmatter fields

```yaml
---
week: 1                         # 0–12 (0 = the Launch Pad)
title: "HTML + web literacy"    # the week's name
focus: "How the web works…"     # one-line tagline
phase: "Foundations"            # Launch Pad | Foundations | JavaScript | Modern Tooling | Capstone
phaseNumber: 1                  # 0 | 1 | 2 | 3 | 4  (must match the phase above)
hours: 9                        # estimated hours
tech: ["HTML"]                  # badges shown on the card
objectives:                     # "by the end you can…" bullets
  - "Explain how the web works."
days:                           # the 5 daily lessons
  - n: 1
    topic: "How the web works"  # the day's title
    learn: "Read about…"        # the 20-min learn slot
    build: "Follow along to…"   # the guided code-along (optional)
    assignment: "On your own…"  # the blank-slate exercise
project:                        # the weekend project (omit for Week 0)
  title: "Your About Me page"
  brief: "A short description."
  deploy: "GitHub Pages"        # optional
  rubric:                       # self/peer-review checklist
    - "Uses semantic HTML"
deliverable: "…"                # use INSTEAD of project for setup weeks (Week 0)
milestone: false                # true marks a phase milestone (gold star)
proSkills: ["Git ritual"]       # pro-skill threads active this week
resources:                      # free links shown in the sidebar
  - label: "MDN — HTML"
    url: "https://developer.mozilla.org/…"
---

Your lesson write-up goes here, in normal Markdown.
```

### Rules that keep the build working

- Keep the `---` fences at the very top and bottom of the frontmatter.
- **Wrap every text value in "double quotes"** (it safely handles apostrophes and colons).
- Numbers (`week`, `hours`, `n`) and `true`/`false` are **not** quoted.
- Every `resources` URL must start with `https://`.
- `phase` and `phaseNumber` must match (see the table above).

If a value breaks the rules, `npm run dev` will print a clear error naming the file and
field — fix it and save.

---

## 2. Add a brand-new week

1. Copy an existing file, e.g. `week-05.md`, to a new name like `week-13.md`.
2. Change the `week:` number and all the content.
3. Save. The roadmap, week page, and navigation update **automatically** — the new week
   slots itself into the right phase by its `phaseNumber`.

---

## 3. Change the branding

- **Site name, footer, social tags:** `src/layouts/BaseLayout.astro` and
  `src/components/Footer.astro`.
- **Navigation links:** the `nav` array at the top of `src/components/Header.astro`.
- **Colours & fonts:** `src/styles/global.css`, in the `@theme { … }` block at the top.
  Each `--color-*` and `--font-*` token flows through the whole site. If you change a
  colour, re-check contrast at <https://webaim.org/resources/contrastchecker/> — the
  course teaches accessibility, so the site should pass (AA, 4.5:1 for text).
- **Phase names/colours:** `src/data/phases.ts`.
- **Logo mark:** `src/components/Logo.astro`.

---

## 4. The social share image

`public/og.svg` is the image shown when someone shares a link. SVG works, but some
platforms render PNG more reliably — for best results, export a **1200×630 PNG**, save it
as `public/og.png`, and change the `image` default in `src/layouts/BaseLayout.astro` from
`/og.svg` to `/og.png`.

---

## 5. Before you publish

- [ ] Set your real domain in `astro.config.mjs` (the `site:` line) and in `public/robots.txt`.
- [ ] Run `npm run build` — it should finish with no errors.
- [ ] Skim the new pages with `npm run preview`.
- [ ] (Optional) Replace `public/og.svg` with a PNG (see above).

Deployment steps are in **[README.md](./README.md)**.
