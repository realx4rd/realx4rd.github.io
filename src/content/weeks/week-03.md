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
    time: "~90 min"
    details: "Good design is mostly rules you can follow, not innate taste. The big four are consistent spacing (use a scale like 4, 8, 16, 24px), a clear type scale, a restrained colour palette, and generous whitespace. Restraint beats decoration — most beginner designs are too busy, not too plain."
    steps:
      - "Define a spacing scale and use only those values for margin and padding."
      - "Set a type scale: a base size plus a couple of larger heading sizes."
      - "Limit yourself to two or three colours plus neutrals."
      - "Apply the scale and palette to your About Me page from Week 1."
      - "Add whitespace until the page feels uncrowded."
    stuck: "Looks off but you can't say why? It's usually inconsistent spacing — snap every gap to your scale and it tends to click."
    resources:
      - label: "Google Fonts — pairing and embedding"
        url: "https://fonts.google.com/"
      - label: "Type Scale — a visual type calculator"
        url: "https://typescale.com/"
  - n: 2
    topic: "Display & normal flow"
    learn: "Block vs inline vs inline-block, and how the browser stacks elements in normal document flow."
    build: "Experiment with display values on the same markup and watch the layout change."
    assignment: "Predict, then verify, how five elements flow with different display values — note what surprised you."
    time: "~90 min"
    details: "Before Flexbox, understand the default. Block elements stack vertically and take full width; inline elements sit in a line and take only the space they need. Normal flow is how the page lays out before you intervene, and the display property switches an element between these behaviours — the foundation Flexbox builds on."
    steps:
      - "Make a page with a few divs and spans and watch how they stack versus line up."
      - "Set a span to display: block and see it take a whole line."
      - "Set a div to display: inline-block and place two side by side."
      - "Add width and padding and notice how block and inline respect them differently."
      - "Write one sentence describing the difference."
    stuck: "Inline element ignoring your width or height? Inline elements don't take a size — switch it to inline-block or block."
    resources:
      - label: "MDN — The display property"
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/display"
      - label: "web.dev — Learn CSS"
        url: "https://web.dev/learn/css"
  - n: 3
    topic: "Flexbox fundamentals"
    learn: "display: flex, the flex container and items, and the main axis vs the cross axis."
    build: "Turn a row of boxes into a flex container and watch them line up along the main axis."
    assignment: "Lay out a simple horizontal navbar using a single flex container."
    time: "~90 min"
    details: "Flexbox lays out items in one dimension — a row or a column. You set display: flex on a container, and its direct children become flex items you can align and space. flex-direction picks the main axis, and everything else is relative to that axis. It's the right tool for navbars, button groups, and card rows."
    steps:
      - "Wrap a few boxes in a container and set display: flex on it."
      - "Switch flex-direction between row and column and watch the layout flip."
      - "Add gap to space the items evenly."
      - "Turn a list of nav links into a horizontal flex row."
      - "Play a few levels of Flexbox Froggy to lock it in."
    stuck: "Flex not doing anything? display: flex goes on the parent container, not on the items you want to arrange."
    resources:
      - label: "MDN — Flexbox"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox"
      - label: "Flexbox Froggy (game)"
        url: "https://flexboxfroggy.com/"
  - n: 4
    topic: "Alignment, justify, wrap & gap"
    learn: "justify-content, align-items, flex-wrap, and gap for spacing between flex items."
    build: "Centre items, space them out, let them wrap on small screens, and add a consistent gap."
    assignment: "Build a row of three cards that wraps neatly and keeps even spacing with gap."
    time: "~90 min"
    details: "Alignment is where Flexbox shines. justify-content distributes items along the main axis; align-items positions them on the cross axis. flex-wrap lets items flow onto new lines, and flex-grow lets them share leftover space. Together these solve centring and responsive rows — the problems that tormented developers for a decade."
    steps:
      - "Take your flex row and try justify-content values: center, space-between, space-around."
      - "Use align-items: center to vertically centre items of different heights."
      - "Add flex-wrap: wrap so items flow to the next line when space runs out."
      - "Give items flex-grow so they share leftover space."
      - "Build a card row that stays tidy as you resize the window."
    stuck: "Items won't centre vertically? align-items works on the cross axis — in a row that's the vertical direction, so rethink it if flex-direction is column."
    resources:
      - label: "CSS-Tricks — A Complete Guide to Flexbox"
        url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
      - label: "web.dev — Flexbox"
        url: "https://web.dev/learn/css/flexbox"
  - n: 5
    topic: "Navbar + card row build"
    learn: "Combining the week's design and Flexbox skills into reusable layout patterns."
    build: "Assemble a polished navbar above a responsive row of product cards."
    assignment: "Draft the navbar and card layout for this week's project — design rules applied."
    time: "~90 min"
    details: "Real sections combine several flex containers: a nav row, a hero, and a card row can each be their own flex context. This is integration day — you'll compose the week's patterns into one polished section and start developing the eye to judge spacing and alignment for yourself."
    steps:
      - "Sketch a section: nav at the top, hero in the middle, three cards below."
      - "Build the nav as a flex row with space-between."
      - "Lay out the hero and centre its content with flex."
      - "Build the card row with flex-wrap and gap."
      - "Refine spacing against your scale until it looks deliberate."
    stuck: "Whole thing feels cramped? Increase the gap and section padding first — undersized whitespace is the most common culprit."
    resources:
      - label: "MDN — Flexbox"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox"
      - label: "CSS-Tricks — A Complete Guide to Flexbox"
        url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
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
