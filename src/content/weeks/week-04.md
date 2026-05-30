---
week: 4
title: "Grid, Responsive & Deploy/SEO"
focus: "Full-page layouts that work on every screen — and look great the moment they're shared."
phase: "Foundations"
phaseNumber: 1
hours: 9
tech: ["CSS"]
objectives:
  - "Build two-dimensional page layouts with CSS Grid columns, rows, and gaps."
  - "Name regions with grid template areas and make grids respond to screen size."
  - "Write mobile-first layouts using media queries."
  - "Add tasteful transitions and hover polish without overdoing it."
  - "Deploy a page with proper SEO and Open Graph tags so it previews beautifully when shared."
days:
  - n: 1
    topic: "CSS Grid fundamentals"
    learn: "display: grid, grid-template-columns and rows, the fr unit, gap, and placing items."
    build: "Build a basic page grid with header, content, and footer regions."
    assignment: "Lay out a three-section page using Grid columns, rows, and a consistent gap."
  - n: 2
    topic: "Template areas & responsive grids"
    learn: "grid-template-areas for readable layouts, plus repeat, minmax, and auto-fit for flexible grids."
    build: "Name your layout regions with template areas and make a card grid that fits the space."
    assignment: "Rebuild your page using grid-template-areas, then make the card grid auto-fit its columns."
  - n: 3
    topic: "Media queries (mobile-first)"
    learn: "Why mobile-first, the viewport meta tag, breakpoints, and the min-width media query pattern."
    build: "Start from a single-column mobile layout, then add breakpoints that expand it on larger screens."
    assignment: "Make your landing page look right on a phone first, then enhance it for tablet and desktop."
  - n: 4
    topic: "Transitions & hover polish"
    learn: "The transition property, hover and focus states, and keeping motion subtle and accessible."
    build: "Add smooth hover transitions to buttons and cards — gentle, not flashy."
    assignment: "Add restrained hover and focus polish to your interactive elements, keeping focus states visible."
  - n: 5
    topic: "Deployment, SEO & Open Graph"
    learn: "A descriptive title and meta description, Open Graph og: tags, and a 1200x630 social share image."
    build: "Add title, meta description, and og: tags, then test the link preview before going live."
    assignment: "Deploy your landing page with full meta tags and confirm the share card renders correctly."
project:
  title: "Multi-section responsive landing page"
  brief: "A complete, multi-section landing page built with Grid and Flexbox that looks great from phone to desktop — and, crucially, previews beautifully when someone pastes the link into a chat. This is your Phase 1 showcase: everything from Weeks 0 to 4 coming together in one shippable page."
  deploy: "GitHub Pages"
  rubric:
    - "Looks and works well from mobile through to desktop"
    - "Uses CSS Grid for page structure and Flexbox for component layout"
    - "Has a descriptive title, a meta description, and Open Graph tags"
    - "Passes a quick accessibility check (contrast, labels, visible focus)"
    - "Deployed to GitHub Pages with a working social share preview"
milestone: true
proSkills: ["Ship + SEO", "Accessibility", "Design rubric"]
resources:
  - label: "MDN — CSS grid layout"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids"
  - label: "CSS-Tricks — A Complete Guide to Grid"
    url: "https://css-tricks.com/snippets/css/complete-guide-grid/"
  - label: "web.dev — Learn Responsive Design"
    url: "https://web.dev/learn/design"
  - label: "GitHub Pages — Quickstart"
    url: "https://docs.github.com/en/pages/quickstart"
---

## The week in one sentence

This week you build full-page layouts that adapt to *any* screen with CSS Grid, then make them look great the instant someone shares the link — and it's your **Phase 1 milestone**.

## What we're really learning

**CSS Grid** is Flexbox's two-dimensional sibling. Where Flexbox lines things up along one axis, Grid lets you place content into rows *and* columns at once — perfect for whole-page layouts. With `grid-template-areas` you can even sketch your layout in plain, readable names. Then **media queries** make it responsive: we go **mobile-first**, designing for the small screen first and *adding* room as it grows, because that order is simpler and produces better results.

We finish with the part beginners skip and pros never do: **shipping well**. A good `<title>`, a `meta description`, and **Open Graph** `og:` tags (plus a 1200×630 share image) decide whether your link looks like a polished card or a sad grey blob when pasted into a chat. First impressions are made in the preview.

## Your "ship + SEO" pro-skill

This week's pro-skill is **shipping like a professional**: making your work discoverable and shareable, not just live. It's a small set of tags, but it's the difference between a project that *exists* and one that *gets seen*.

> **Milestone moment:** this landing page is the capstone of Phase 1 — Foundations. Everything from your first semantic tags to accessible forms to Grid layouts converges here.

## Shipping on Friday — and celebrating

You'll deploy a responsive landing page with a real share preview, then paste the link to a friend and watch the card appear. Look back at your Week 1 page: you've come a genuinely long way. Be proud — you've finished Foundations. 🎉
