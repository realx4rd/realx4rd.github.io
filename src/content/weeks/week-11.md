---
week: 11
title: "Alpine deeper + a jQuery overview"
focus: "Render lists and live data with Alpine — then meet jQuery as legacy literacy."
phase: "Modern Tooling"
phaseNumber: 3
hours: 9
tech: ["Alpine.js", "jQuery"]
objectives:
  - "Render lists from arrays in markup with Alpine's x-for."
  - "Fetch live data and display it with Alpine to build a small data UI."
  - "Organise reusable Alpine components and share state cleanly."
  - "Recognise jQuery in old code and understand why it once existed."
  - "Know when NOT to use jQuery — and reach for vanilla JS or Alpine instead."
days:
  - n: 1
    topic: "Alpine x-for & rendering lists"
    learn: "Looping over arrays with x-for to render lists, and why a template element and keys keep things tidy."
    build: "Render a to-do list and a card grid from an array held in x-data."
    assignment: "Build a filterable list (e.g. tags or products) that renders from an array with x-for."
  - n: 2
    topic: "Alpine + fetch (a mini data UI)"
    learn: "Combining the fetch you learned in Phase 2 with Alpine — loading data on init and rendering it into the page."
    build: "Fetch from a public API and render the results as a live list, with a basic loading state."
    assignment: "Build a small data UI that fetches a list from an API and shows loading and error states."
  - n: 3
    topic: "Alpine components & reusable patterns"
    learn: "Extracting reusable Alpine components with Alpine.data(), and sharing state between components."
    build: "Refactor a repeated widget into a named Alpine.data() component you can reuse."
    assignment: "Turn one of your interactive widgets into a reusable component and use it twice on a page."
  - n: 4
    topic: "A jQuery legacy overview (~2 hours)"
    learn: "What jQuery is, why it existed (cross-browser pain in the 2000s), how to read and recognise it in old code (WordPress themes, legacy sites), and crucially when NOT to use it — reach for vanilla JS or Alpine first on anything new."
    build: "Read a short jQuery snippet and rewrite it in modern vanilla JS or Alpine to see the equivalence."
    assignment: "Find a jQuery example online, explain in two sentences what it does, and rewrite it without jQuery."
  - n: 5
    topic: "Review & refactor"
    learn: "Pulling the phase together: where Alpine fits, where vanilla JS fits, and how to spot and modernise legacy patterns."
    build: "Audit your Week-8 API app and plan an Alpine refactor, replacing manual DOM updates with declarative directives."
    assignment: "Complete and tidy the Alpine refactor of your API app (this week's project)."
project:
  title: "Refactor your Week-8 API app with Alpine"
  brief: "Take the API-driven app you built in Phase 2 and refactor it to use Alpine for state and rendering. Replace manual DOM manipulation with x-data, x-for, and fetch-on-init — same features, far less wiring. This is your Phase 3 milestone."
  deploy: "GitHub Pages"
  rubric:
    - "Fetches live data and renders it with Alpine x-for (no manual createElement loops)"
    - "State lives in x-data; loading and error states are handled"
    - "At least one reusable Alpine.data() component"
    - "Styled with Tailwind and responsive on mobile and desktop"
    - "Live on GitHub Pages with a short note on what the refactor improved"
milestone: true
proSkills: ["Debug-first reflex"]
resources:
  - label: "Alpine.js — Start Here"
    url: "https://alpinejs.dev/start-here"
  - label: "jQuery — API Documentation"
    url: "https://api.jquery.com/"
  - label: "MDN — Fetching data from the server"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests"
  - label: "web.dev — Learn JavaScript"
    url: "https://web.dev/learn/javascript"
---

## The week in one sentence

You'll go deeper with Alpine — rendering lists and live data — and then meet **jQuery**,
not to build with it, but to *read* it when you inherit someone else's old code.

## What we're really learning

First, the fun part: Alpine's `x-for` turns an array into a rendered list, and pairing it
with `fetch` gives you a real, live data UI in a few lines. This is the payoff for learning
JavaScript properly in Phase 2 — `fetch`, arrays, and objects are all still here, just
expressed declaratively. Refactoring your Week-8 API app to Alpine is your **Phase 3
milestone**, and you'll be surprised how much manual DOM code simply disappears.

Then, an honest detour: **jQuery**. For years it was *the* way to write JavaScript, because
browsers behaved so differently that plain JS was painful. Today the browser caught up —
`fetch`, `querySelector`, and modern syntax do what jQuery used to. Almost no **new**
project chooses jQuery, yet it still ships on roughly **74% of existing websites** (think
WordPress and older codebases). So treat it as **legacy literacy**: learn to recognise the
`$(...)` patterns and read them confidently, and know that **Alpine or vanilla JS is the
modern replacement**. When NOT to use jQuery? On anything new.

## A pro-skill for this week: the debug-first reflex

Refactors break things in interesting ways, so practise your **debug-first reflex** —
reproduce, inspect the console, check your state, *then* change code. It's the habit that
separates flailing from fixing.

> Keep the jQuery part short — about two hours. The goal is to read it without fear, not to
> master a tool you'll rarely choose.
