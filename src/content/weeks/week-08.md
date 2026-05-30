---
week: 8
title: "Async & APIs"
focus: "Saving data locally and pulling live data from the internet into your pages."
phase: "JavaScript"
phaseNumber: 2
hours: 10
tech: ["JavaScript"]
objectives:
  - "Persist data between visits with localStorage."
  - "Explain what an API is and request data from one with fetch."
  - "Handle asynchronous code cleanly with promises and async / await."
  - "Render fetched data into the page by building DOM from a response."
  - "Show clear loading and error states so the app never feels broken."
days:
  - n: 1
    topic: "localStorage — persist your To-Do app"
    learn: "What localStorage is, setItem / getItem, and JSON.stringify / JSON.parse for saving arrays and objects."
    build: "Save your To-Do list to localStorage and reload it on page load so tasks survive a refresh."
    assignment: "Upgrade last week's To-Do app so every add, complete, and delete is remembered after a refresh."
  - n: 2
    topic: "APIs & the fetch function"
    learn: "What a web API and JSON are, reading API docs, and making a basic fetch() request to a public endpoint."
    build: "Fetch from a free public API and log the JSON response to the Console; read the docs to find one field."
    assignment: "Call a free public API (e.g. Open-Meteo) and log one specific value — like the current temperature."
  - n: 3
    topic: "async / await & promises"
    learn: "Why network calls are asynchronous, what a promise is, and writing readable code with async / await."
    build: "Rewrite yesterday's fetch using async / await and pull out two fields from the response."
    assignment: "Write an async function 'getData(url)' that fetches, parses JSON, and returns one tidy object."
  - n: 4
    topic: "Rendering fetched data into the page"
    learn: "Turning a JSON response into DOM nodes — the same create-and-append skills, now driven by live data."
    build: "Take a fetched result and display it on the page (e.g. a weather card or a movie title and poster)."
    assignment: "Render at least three fields from an API response into nicely structured HTML on the page."
  - n: 5
    topic: "Loading & error states"
    learn: "try / catch around fetch, showing a 'Loading…' message, and handling 'not found' or offline gracefully."
    build: "Add a loading indicator while data is fetched and a friendly message when a request fails."
    assignment: "Polish this week's project so it shows loading feedback and a clear error when a search has no results."
project:
  title: "Weather or movie-search app"
  brief: "Your phase finale: a real app that pulls live data from a free public API. Pick weather (Open-Meteo, no key needed) or movie search (OMDb, free key). The user enters a place or title, you fetch it, and you render the result — with loading and error states so it feels finished. This is the project that proves the JavaScript phase paid off."
  deploy: "GitHub Pages"
  rubric:
    - "Fetches live data from a free public API based on user input"
    - "Uses async / await with try / catch around the request"
    - "Renders multiple fields from the response into structured HTML"
    - "Shows a loading state while fetching and a clear message on error or no results"
    - "Pushed to GitHub and live on GitHub Pages"
deliverable: "A deployed app that fetches and displays live API data with working loading and error states — your Phase 2 milestone and mid-course checkpoint."
milestone: true
proSkills: ["Debug-first reflex", "Ship + SEO"]
resources:
  - label: "MDN — Fetching data from the server"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests"
  - label: "javascript.info — Promises, async/await"
    url: "https://javascript.info/async"
  - label: "MDN — Window.localStorage"
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"
  - label: "Open-Meteo — Free weather API docs"
    url: "https://open-meteo.com/"
  - label: "OMDb — Free movie API docs"
    url: "https://www.omdbapi.com/"
---

## The week in one sentence

This week your apps stop living in isolation: they **remember** data between visits and **reach out to the internet** to pull in live information from real APIs.

## What we're really learning

Two big powers land together. **localStorage** lets the browser remember things after a refresh — so your To-Do list survives the night. And **fetch** lets your code ask another server for data over the web, getting back **JSON** you can render into the page. Because the internet is unpredictable and slow, these calls are **asynchronous**, so you'll learn **async / await** to write them in a calm, top-to-bottom style instead of a tangle of callbacks.

The honest truth about this phase: it was the **biggest and slowest** stretch of the course, and you pushed all the way through it. That's a real milestone, not a small one.

## This is your mid-course checkpoint

> **Pause here and look back.** This is the **Phase 2 milestone** and the course's mid-point.

Take your weather or movie app and review it honestly against the project rubric above. Does it fetch live data, handle errors, and show a loading state? If a box isn't ticked yet, that's not failure — it's your personalised to-do list, and it tells you exactly where to firm up before the tooling phase.

## Ship it like you mean it

The **Ship + SEO** pro-skill starts now: give the page a real `<title>` and description, deploy it, and put the live link somewhere you'll see it. And keep the **debug-first reflex** close — the Network tab plus a `console.log` of your response will solve almost every "why is it blank?" moment. Halfway there. Be proud. 🚀
