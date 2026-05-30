---
week: 10
title: "Tailwind components + Alpine.js"
focus: "Adding interactivity declaratively — Alpine is like 'Tailwind for behaviour'."
phase: "Modern Tooling"
phaseNumber: 3
hours: 9
tech: ["Tailwind CSS", "Alpine.js"]
objectives:
  - "Assemble small Tailwind component patterns and understand what the build step adds."
  - "Add Alpine.js to a page and hold state right in your markup with x-data."
  - "Respond to clicks and toggle visibility with x-on and x-show."
  - "Bind inputs and attributes to state with x-model and x-bind."
  - "Build three real interactive components: a dropdown, a modal, and tabs."
days:
  - n: 1
    topic: "Component patterns + the build step"
    learn: "How to compose utilities into repeatable component patterns (cards, buttons, alerts), and a brief look at what the Tailwind build step does beyond the CDN."
    build: "Build a small library of Tailwind components — a card, a badge, and an alert — by reusing utility patterns."
    assignment: "Create three reusable Tailwind components and note one reason you'd eventually move from the CDN to a build step."
  - n: 2
    topic: "Alpine setup + x-data (state)"
    learn: "What Alpine is ('Tailwind for behaviour'), how to add it via CDN, and how x-data declares a small piece of state on an element."
    build: "Add Alpine to a page and wire up an x-data counter that tracks a number in markup."
    assignment: "Make an element with x-data that stores an 'open' boolean and a count, and display both on the page."
  - n: 3
    topic: "x-on events & x-show toggles"
    learn: "Listening for events with x-on (and the @ shorthand) and showing or hiding elements with x-show based on state."
    build: "Build a show/hide panel: a button toggles a boolean, and x-show reveals the content."
    assignment: "Create a 'read more' toggle and a simple notification banner you can dismiss with a click."
  - n: 4
    topic: "x-model & x-bind"
    learn: "Two-way binding form inputs to state with x-model, and binding attributes and classes dynamically with x-bind."
    build: "Build a live character counter and a button whose disabled state and classes are bound to the input."
    assignment: "Make a small form where typing updates a live preview, and a checkbox toggles a bound CSS class with x-bind."
  - n: 5
    topic: "Dropdown, modal & tabs"
    learn: "How the same handful of Alpine directives compose into the interactive patterns every UI needs."
    build: "Build a dropdown menu, a modal dialog (with a backdrop and close), and a tabbed panel using only Alpine and Tailwind."
    assignment: "Finish all three components and make sure each can be opened and closed cleanly via keyboard and mouse."
project:
  title: "Interactive UI kit (accordion, modal, tabs)"
  brief: "Build a small, reusable UI kit styled with Tailwind and made interactive with Alpine.js. Include at least an accordion, a modal, and a tab group — the building blocks you'll reuse in every project from here on."
  deploy: "GitHub Pages"
  rubric:
    - "Styled with Tailwind utilities and made interactive with Alpine (no hand-written JS files)"
    - "Includes a working accordion, modal, and tab group"
    - "Uses x-data for state and x-show / x-on / x-bind appropriately"
    - "Components are keyboard-usable and close cleanly (modal has a backdrop and Esc/close)"
    - "Responsive and live on GitHub Pages"
milestone: false
proSkills: ["Design rubric", "Debug-first reflex"]
resources:
  - label: "Alpine.js — Start Here"
    url: "https://alpinejs.dev/start-here"
  - label: "Tailwind CSS — Documentation"
    url: "https://tailwindcss.com/docs"
  - label: "Tailwind CSS — Play CDN"
    url: "https://tailwindcss.com/docs/installation/play-cdn"
  - label: "MDN — Introduction to events"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events"
---

## The week in one sentence

This week your pages start to *do* things — Alpine.js lets you add interactivity right in
your markup, the same declarative way Tailwind lets you add styles.

## What we're really learning

Alpine is often described as **"Tailwind for behaviour"**, and that's a fair pitch: instead
of styling in attributes you now sprinkle small behaviour directives — `x-data`, `x-on`,
`x-show`, `x-model`, `x-bind` — directly onto elements. There's no separate app file to
wire up, no framework ceremony. For the kind of small, sprinkled interactivity most sites
need (menus, modals, toggles), it's a joy.

But Alpine isn't a shortcut around fundamentals. It leans on the **JavaScript you learned
in Phase 2** — variables, functions, events, truthy/falsy values. When `x-data` holds an
object and `x-on:click` runs an expression, that *is* JavaScript. Because you know what's
happening underneath, Alpine will feel like a convenience rather than a black box. And it
pairs naturally with Tailwind: behaviour and styling both live in the markup, so you can
read a component top to bottom in one place.

## A pro-skill for this week: the debug-first reflex

Interactivity is where bugs appear, so practise your **debug-first reflex**: when something
doesn't toggle, open DevTools, check the console, and inspect your state before changing
code. Keep your **design rubric** handy too — focus states and motion still matter.

> Build the dropdown, modal, and tabs once, properly, and you'll reuse them forever.
> These three patterns cover a huge share of everyday UI work.
