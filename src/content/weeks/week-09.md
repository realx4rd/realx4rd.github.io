---
week: 9
title: "Tailwind CSS"
focus: "Styling at speed with utilities — now that you know the CSS underneath."
phase: "Modern Tooling"
phaseNumber: 3
hours: 9
tech: ["Tailwind CSS"]
objectives:
  - "Explain the utility-first mindset and why it speeds you up once you know CSS."
  - "Set up Tailwind v4 in seconds with the Play CDN — zero build tooling."
  - "Style spacing, colour, and sizing with utility classes instead of writing rules."
  - "Build responsive layouts with Tailwind's flex, grid, and breakpoint utilities."
  - "Handle hover and focus states and extract repeated utilities into reusable patterns."
days:
  - n: 1
    topic: "The utility-first mindset + setup"
    learn: "What utility-first means, why it's not 'inline styles', and how each class maps to one real CSS declaration you already know."
    build: "Drop the Tailwind v4 Play CDN script into an HTML page and style a heading and button with utilities — no build step, no config."
    assignment: "Set up a fresh page with the Play CDN and recreate a simple card (border, padding, rounded corners) using only utility classes."
  - n: 2
    topic: "Spacing, colour & sizing"
    learn: "The spacing scale (p-, m-, gap-), the colour palette (bg-, text-, border-), and sizing utilities (w-, h-, max-w-)."
    build: "Style a profile card with consistent padding, a colour theme, and a constrained max width."
    assignment: "Build a pricing card using the spacing scale and colour utilities — no custom CSS allowed."
  - n: 3
    topic: "Responsive flex & grid"
    learn: "Flexbox and grid utilities, plus responsive prefixes (sm:, md:, lg:) that map straight onto the media queries you learned in Phase 1."
    build: "Lay out a 3-column feature section that stacks to one column on mobile using grid and breakpoint prefixes."
    assignment: "Build a responsive navbar (row on desktop, stacked on mobile) and a card grid that reflows at each breakpoint."
  - n: 4
    topic: "States & reusable patterns"
    learn: "State variants (hover:, focus:, active:) and how to tame repetition by extracting components or using @apply when a pattern repeats."
    build: "Add hover and focus styles to buttons and links, then factor a repeated button into one reusable class."
    assignment: "Style a set of three buttons with distinct hover and focus states, and document where you'd extract a pattern."
  - n: 5
    topic: "Re-skin a Phase 1 project"
    learn: "How to migrate an existing hand-written-CSS page to Tailwind by translating each rule into utilities."
    build: "Open your Week-4 landing page and rebuild its styles in Tailwind, side by side with the original."
    assignment: "Finish the Tailwind re-skin of your landing page and write three sentences comparing the two approaches."
project:
  title: "Rebuild your Week-4 landing page in Tailwind"
  brief: "Take the landing page you styled by hand in Phase 1 and rebuild it entirely with Tailwind utilities. Keep the original around so you can compare the raw-CSS and utility approaches honestly — same result, very different workflow."
  deploy: "GitHub Pages"
  rubric:
    - "Styled entirely with Tailwind utilities via the Play CDN — no separate stylesheet"
    - "Fully responsive with breakpoint prefixes (looks right on mobile and desktop)"
    - "Uses the spacing scale and colour palette consistently, not one-off magic numbers"
    - "Buttons and links have clear hover and focus states"
    - "Pushed to GitHub and live, with a short note comparing raw CSS vs utilities"
milestone: false
proSkills: ["Design rubric", "Ship + SEO"]
resources:
  - label: "Tailwind CSS — Documentation"
    url: "https://tailwindcss.com/docs"
  - label: "Tailwind CSS — Play CDN"
    url: "https://tailwindcss.com/docs/installation/play-cdn"
  - label: "MDN — CSS basics"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"
  - label: "web.dev — Learn CSS"
    url: "https://web.dev/learn/css"
---

## The week in one sentence

Tailwind lets you style at the speed of thought by composing tiny utility classes right
in your markup — and it finally clicks **because** you already learned the real CSS
underneath.

## What we're really learning

Here's the honest truth a lot of tutorials skip: Tailwind is **not** magic, and those
class names are **not** mystery strings. `p-4` is just `padding: 1rem`. `flex` is just
`display: flex`. `md:grid-cols-3` is a `grid-template-columns` rule wrapped in a media
query. Everything you spent Phase 1 learning is still there — Tailwind is a faster way to
*type* it, with a sensible design scale baked in so your spacing and colours stay
consistent.

That ordering matters. People who learn Tailwind before CSS end up stuck the moment
something breaks, because they never learned what the classes actually do. You did it the
right way round, so this week is mostly about building fluency and speed.

## A pro-skill for this week: a design rubric

As you re-skin, lean on your **design rubric** — consistent spacing, a limited colour
palette, clear hover and focus states, readable line lengths. Tailwind's scale nudges you
toward good defaults, but taste is still yours. And since you'll **ship** the result,
carry your SEO habits along: titles, meta description, semantic structure.

> Rebuilding your Week-4 page side by side is the whole lesson. You'll feel exactly where
> utilities save you time — and where plain CSS was already fine. Both are real tools. 🎉
