---
week: 3
title: "Design + Flexbox"
focus: "Making it look intentional — then laying it out cleanly with Flexbox."
phase: "Foundations"
phaseNumber: 1
hours: 9
tech: ["CSS"]
objectives:
  - "Apply beginner design rules — type scale, spacing, and a small colour palette — to avoid the 'ugly default' look."
  - "Add a real typeface with Google Fonts and use whitespace on purpose."
  - "Explain display values and how elements sit in normal flow."
  - "Lay out items along the main and cross axis with Flexbox."
  - "Align, justify, wrap, and gap your way to a responsive navbar and card row."
days:
  - n: 1
    topic: "Design basics"
    learn: "A simple type scale, spacing and whitespace, a restrained colour palette, and adding Google Fonts."
    build: "Pick one font pairing, define a spacing scale, and choose two or three colours that work together."
    assignment: "Write a one-page 'style sheet for myself': your fonts, sizes, spacing steps, and colours."
  - n: 2
    topic: "Display & normal flow"
    learn: "Block vs inline vs inline-block, and how the browser stacks elements in normal document flow."
    build: "Experiment with display values on the same markup and watch the layout change."
    assignment: "Predict, then verify, how five elements flow with different display values — note what surprised you."
  - n: 3
    topic: "Flexbox fundamentals"
    learn: "display: flex, the flex container and items, and the main axis vs the cross axis."
    build: "Turn a row of boxes into a flex container and watch them line up along the main axis."
    assignment: "Lay out a simple horizontal navbar using a single flex container."
  - n: 4
    topic: "Alignment, justify, wrap & gap"
    learn: "justify-content, align-items, flex-wrap, and gap for spacing between flex items."
    build: "Centre items, space them out, let them wrap on small screens, and add a consistent gap."
    assignment: "Build a row of three cards that wraps neatly and keeps even spacing with gap."
  - n: 5
    topic: "Navbar + card row build"
    learn: "Combining the week's design and Flexbox skills into reusable layout patterns."
    build: "Assemble a polished navbar above a responsive row of product cards."
    assignment: "Draft the navbar and card layout for this week's project — design rules applied."
project:
  title: "Responsive product-card layout"
  brief: "A clean navbar sitting above a row of product cards that rearrange gracefully as the screen shrinks — all built with Flexbox. The goal isn't a complicated layout; it's an *intentional* one. We apply a few design rules so it looks considered, not accidental."
  deploy: "GitHub Pages"
  rubric:
    - "Uses a clear type scale, deliberate spacing, and a small, consistent colour palette"
    - "Navbar and card row are laid out with Flexbox (not floats or hacks)"
    - "Cards wrap and stay evenly spaced using flex-wrap and gap"
    - "Text remains readable and accessible at every width"
    - "Pushed to GitHub and live on GitHub Pages"
milestone: false
proSkills: ["Design rubric", "Accessibility", "Git ritual"]
resources:
  - label: "MDN — Flexbox"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox"
  - label: "CSS-Tricks — A Complete Guide to Flexbox"
    url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
  - label: "web.dev — Learn CSS"
    url: "https://web.dev/learn/css"
  - label: "The Odin Project — Foundations (Flexbox)"
    url: "https://www.theodinproject.com/paths/foundations/courses/foundations"
---

## The week in one sentence

You'll make your pages *look intentional* with a few design rules, then arrange things properly using Flexbox — the layout tool you'll reach for every single day.

## What we're really learning

Two skills, working together. First, **design for non-designers**: a sensible type scale (so headings and body text relate), generous **whitespace** (the most underrated design tool there is), and a small, restrained colour palette. Add one nice typeface from **Google Fonts** and even plain content suddenly reads as "considered."

Second, **Flexbox**. Before Flexbox, centring things and spacing a row evenly was genuinely painful. Now you tell a container `display: flex` and arrange its children along a **main axis** and a **cross axis** using `justify-content`, `align-items`, `flex-wrap`, and `gap`. It's intuitive once you stop fighting it — so we go slow and let it click.

## Your "don't make it ugly" pro-skill

This week introduces the **design rubric** thread. You don't need to be a designer — you need a short checklist that keeps your work out of the "default browser" look: consistent spacing, a real type scale, limited colours, and enough contrast to read. Run that checklist on everything you build from here on.

> **Mentor truth:** beginners reach for fancy CSS to look professional. Pros reach for *whitespace and restraint*. Less, arranged well, beats more.

## Shipping on Friday

You'll ship a responsive product-card layout — a navbar over cards that reflow as the window narrows. Resize your browser and watch it adapt. That little moment of "oh, it just *works*" is the whole reward.
