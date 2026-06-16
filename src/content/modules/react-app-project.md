---
title: "Ship a real React app"
focus: "Plan, build, deploy, and write up a complete single-page app — start to finish."
hours: 34
tech: ["React", "Vite"]
objectives:
  - "Scaffold a Vite + React project with a sensible folder structure from day one."
  - "Structure a multi-view app using React Router so each screen lives at its own URL."
  - "Manage state across components using useState and prop-passing without reaching for a library."
  - "Consume a real public API and handle loading, error, and empty states properly."
  - "Deploy the app live on Vercel and write a portfolio case study that explains the work."
days:
  - n: 1
    topic: "Plan & scaffold"
    learn: "How to pick an idea worth shipping, sketch the screens on paper, and set up Vite + React Router + a folder structure that won't hurt you later."
    build: "Scaffold a new Vite React project, install React Router, create your top-level routes, and confirm each view renders something."
    assignment: "Sketch three screens on paper (or in a notes app), write one sentence per screen describing what the user can do there, then scaffold the project and wire up the routes so each URL shows the right placeholder component."
    time: "~6h"
    details: "The single biggest mistake in project work is jumping straight into code before you know what you're building. Spend the first hour picking a genuine idea — a habit tracker, a recipe finder, a local-event board — and drawing the screens with a pencil. Real planning takes twenty minutes and saves five hours. Then scaffold: Vite gives you a running app in under two minutes, React Router gives each screen its own URL, and a clean folder structure (components/, pages/, hooks/) means you'll always know where a file lives."
    steps:
      - "Decide on your app idea. It must solve a real (even small) problem and have at least two distinct views. Write it in one sentence."
      - "Sketch three to five screens on paper — what the user sees, what they can click, where they go next."
      - "Run npm create vite@latest my-app -- --template react, then cd my-app && npm install."
      - "Run npm run dev and confirm the default Vite + React page loads in the browser."
      - "Install React Router with npm install react-router-dom."
      - "Create a pages/ folder. Add a file for each screen (e.g. Home.jsx, Detail.jsx, NotFound.jsx) with a placeholder heading inside each."
      - "Open main.jsx and wrap your app in BrowserRouter. Open App.jsx, add a Routes block, and add a Route for each page."
      - "Visit each URL in the browser to confirm the right component renders. Add a catch-all Route path='*' pointing to NotFound."
    stuck: "If React Router renders nothing, check that your Route elements are direct children of a Routes element — nesting them incorrectly is the most common first-day Router mistake."
    resources:
      - label: "Vite — Getting Started"
        url: "https://vite.dev/guide/"
      - label: "React Router — Installation"
        url: "https://reactrouter.com/start/library/installation"
      - label: "React — Thinking in React"
        url: "https://react.dev/learn/thinking-in-react"
  - n: 2
    topic: "Build the core features and components"
    learn: "How to break a screen into small, focused components; when to lift state up; and the props-down-events-up data-flow that makes React predictable."
    build: "Build the primary view of your app — the one the user sees first — out of real components with real data (hard-coded for now)."
    assignment: "Build the main screen of your app using at least three components. Pass data via props. Add one piece of state (a search filter, a toggle, a selected item) that changes what the user sees."
    time: "~7h"
    details: "React's entire philosophy is in Thinking in React: start with a static version of the UI, identify the pieces that need to change, and put state exactly where it needs to live — no higher, no lower. Hard-code the data on Day 2. Seriously. Trying to build components and fetch data at the same time doubles the number of things that can go wrong. Get the component structure solid first; the real data comes tomorrow."
    steps:
      - "Open the Thinking in React page and read the five-step breakdown before writing a line of code."
      - "Draw a box around each logical piece of your main screen on your sketch. Each box is probably a component."
      - "Create a components/ folder. Write the smallest, most reusable component first (e.g. a Card, a ListItem)."
      - "Pass hard-coded data into it via props and confirm it renders correctly."
      - "Compose your page component from smaller components, passing data down via props."
      - "Add one piece of useState — a search input, a tab, a toggle — and write the logic that filters or changes the rendered output."
      - "Check in the browser that clicking or typing actually changes what you see."
    stuck: "If state isn't updating what you expect, add a console.log inside the component to confirm the state value is changing — then check whether the component that renders the output is actually reading from that state."
    resources:
      - label: "React — Thinking in React"
        url: "https://react.dev/learn/thinking-in-react"
      - label: "React — Passing props to a component"
        url: "https://react.dev/learn/passing-props-to-a-component"
      - label: "React — Managing state"
        url: "https://react.dev/learn/managing-state"
  - n: 3
    topic: "Wire up the data layer"
    learn: "How to fetch from a real public API inside useEffect, store the result in state, and pass it through your component tree."
    build: "Replace every piece of hard-coded data with live API data, and add a loading spinner and an error message that actually appear during the right states."
    assignment: "Wire your app to a real public API. Display a loading state while the request is in flight, an error message if it fails (test by disconnecting your internet), and the real data when it succeeds."
    time: "~7h"
    details: "The data layer is where most tutorials cut corners, so this is where you'll stand out. useEffect with a fetch call is only four lines — what takes time is handling the three states that always exist: loading (show a spinner), error (show a message, don't just crash), and success (show the data). Handling all three is not optional; it is the difference between a toy and a shippable product. Pick a free public API that needs no auth key for your first attempt — it removes one variable."
    steps:
      - "Find a free public API that fits your app idea. Good starting points: the Open Trivia DB, the REST Countries API, or the Open Library API — all are free with no signup."
      - "Add three pieces of state to the component that owns the data: data (null), loading (true), error (null)."
      - "Inside a useEffect, call fetch(url), await the JSON, and set the data state on success."
      - "Add a catch block that sets the error state."
      - "In the JSX, return early with a loading spinner if loading is true, an error message if error is set, and the real UI if data is available."
      - "Open DevTools → Network tab, reload, and confirm you can see the API request and its response."
      - "Test the error state by going offline (DevTools → Network → Offline) and reloading — your error message should appear."
    stuck: "Getting a CORS error? That means the API server is blocking browser requests. Try a different public API — the REST Countries API (restcountries.com) and the Open Library API (openlibrary.org) both support CORS out of the box."
    resources:
      - label: "React — Synchronizing with effects"
        url: "https://react.dev/learn/synchronizing-with-effects"
      - label: "MDN — Using the Fetch API"
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
      - label: "React — You might not need an effect"
        url: "https://react.dev/learn/you-might-not-need-an-effect"
  - n: 4
    topic: "Polish — loading, errors, responsive, accessible, empty states"
    learn: "What production-quality UI actually means in practice: every state handled, every screen size usable, keyboard navigation working."
    build: "Walk every state of every view — loading, error, empty, partial data — and make each one render something helpful and non-broken."
    assignment: "Complete a self-audit checklist: (1) every route loads and handles errors, (2) the app works on a 375px-wide screen, (3) every interactive element is reachable by Tab and activatable by Enter or Space, (4) empty states show a friendly message rather than a blank page."
    time: "~7h"
    details: "Polish is not cosmetic. Loading states tell the user the app is working, not broken. Error states prevent silent failures that make people give up. Empty states — when there are zero results, zero items, zero anything — are the easiest thing to forget and the first thing a real user hits. Responsive layout means the app works on the phone in a client's pocket. Keyboard accessibility means the Tab key never gets trapped. These are not extras; they are the job."
    steps:
      - "Open the app on your phone (or in DevTools device mode at 375px). Fix anything that breaks, overlaps, or goes off-screen."
      - "Add a min-height or min-width safeguard to any container that could collapse to zero and hide content."
      - "Add an empty-state message to every list: if the data array is empty, show 'No results found. Try a different search.' or equivalent."
      - "Tab through the entire app with your mouse off the table. Every button and link must be reachable. If focus disappears, find the element and add tabIndex={0} or switch it to a real button element."
      - "Add aria-label to any icon-only button (hamburger menu, close button, search icon)."
      - "Test in DevTools with CPU throttling set to 4x slowdown — confirm the loading state is visible for at least a moment."
      - "Fix any layout that only looks good when data loads instantly."
    stuck: "Focus jumping to an unexpected place? Check for elements with tabIndex={-1} that are accidentally swallowing focus. Remove any tabIndex values you added speculatively — the default HTML tab order is usually better than a custom one."
    resources:
      - label: "web.dev — Accessible to all"
        url: "https://web.dev/accessible"
      - label: "MDN — ARIA: button role"
        url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role"
      - label: "web.dev — Responsive design"
        url: "https://web.dev/learn/design"
  - n: 5
    topic: "Deploy + write the case study"
    learn: "How to deploy a Vite React app to Vercel in under ten minutes, and how to write a case study that makes a client want to hire you."
    build: "Push your final code to GitHub, deploy it on Vercel, and write a 300-word case study covering problem → approach → result."
    assignment: "Submit a live URL (Vercel) and a written case study with: one paragraph on the problem, one on the technical approach, one on what you'd change next time, and one screenshot of the working app."
    time: "~7h"
    details: "Deploying is not the last step — it is proof the thing is real. Vercel connects to your GitHub repo, detects Vite automatically, and gives you a live https:// URL in about ninety seconds. The case study is the part most developers skip, and that is exactly why writing one sets you apart. A case study doesn't show that you know React; it shows that you can think about a problem, make decisions, and reflect on them. Those are the skills clients actually pay for."
    steps:
      - "Make a final commit with a meaningful message (e.g. 'Finish polish pass and add empty states')."
      - "Push to GitHub with git push."
      - "Go to vercel.com, sign in with GitHub, and click 'Add New Project'."
      - "Select your repo. Vercel will detect the Vite framework automatically — accept the defaults."
      - "Click Deploy and wait roughly ninety seconds. Copy the live URL."
      - "Open the live URL on your phone to confirm everything works in production."
      - "Open a new document and write four paragraphs: (1) What problem does this app solve and for whom? (2) What technical decisions did you make and why — routing, state management, API choice? (3) What would you do differently with another week? (4) Screenshot or link."
    stuck: "Vercel build fails with 'command not found: vite'? Your package.json probably has vite in devDependencies. For Vercel to build it, move vite to dependencies, or add an overrideInstallCommand in the Vercel project settings to run npm install --include=dev."
    resources:
      - label: "Vercel Docs — Get started"
        url: "https://vercel.com/docs"
      - label: "Vite — Getting Started"
        url: "https://vite.dev/guide/"
      - label: "React Router — Installation"
        url: "https://reactrouter.com/start/library/installation"
project:
  title: "Your first portfolio-grade React app"
  brief: "Ship a complete, deployed React SPA solving a real (even small) problem — e.g. a habit tracker, a recipe finder, a finance dashboard — then write it up as a case study."
  deploy: "Vercel"
  rubric:
    - "Multiple routes — at least two distinct views, each at its own URL via React Router"
    - "Data from a real public API, with visible loading and error states"
    - "Responsive layout that works without horizontal scrolling at 375px wide"
    - "Keyboard-accessible — every interactive element reachable by Tab and operable without a mouse"
    - "Deployed at a live HTTPS URL on Vercel"
    - "A written case study covering the problem, the approach, and a screenshot of the working app"
milestone: true
proSkills: ["Proof-of-Work Portfolio", "Niche & Positioning"]
resources:
  - label: "Vite — Getting Started"
    url: "https://vite.dev/guide/"
  - label: "React — Thinking in React"
    url: "https://react.dev/learn/thinking-in-react"
  - label: "React Router — Installation"
    url: "https://reactrouter.com/start/library/installation"
  - label: "Vercel Docs — Get started"
    url: "https://vercel.com/docs"
---

## The module in one sentence

This is the proof — a complete, deployed, publicly accessible React app that you planned,
built, polished, and can explain to a client.

## What we're really building

Every tutorial you've ever followed gave you the answer before the question. This module
reverses that. You pick the problem, you design the screens, you decide how to break the
UI into components, and you deal with the real messiness of a public API that occasionally
goes down or returns an empty array.

The technical surface area is deliberately small: **Vite, React Router, useState,
useEffect, fetch**. No Redux, no React Query, no component library. Constraints are the
point. When you can ship something clean with the basics, you have real understanding —
not just pattern-matching from docs.

## Why the case study is not optional

A deployed URL proves you can build. A case study proves you can think. When a client
asks "tell me about a project you've done," the correct answer is never a link — it's a
story with a problem, a set of decisions, and a result. Spending two hours writing that
story returns more long-term value than spending two more hours on CSS. Start it while
the project is fresh.

## Using AI on this module

Use AI to explain an error message you don't understand, to suggest a free public API
that fits your idea, or to review a piece of logic after you've written it yourself. Do
not use it to generate your component structure or your data-fetching code — those are
exactly the skills this module is building. If an AI writes your useEffect, you will
struggle to debug it when (not if) the API changes or the network is slow. Write it
yourself. Get it wrong. Fix it. That is the learning.
