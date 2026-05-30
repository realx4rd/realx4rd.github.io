---
week: 7
title: "The DOM & events"
focus: "Making pages react — read, change, and respond to what the user does."
phase: "JavaScript"
phaseNumber: 2
hours: 10
tech: ["JavaScript"]
objectives:
  - "Select elements on the page and read or change their content and styles."
  - "Create and remove DOM nodes so the page can grow and shrink."
  - "Respond to clicks and other events with event listeners."
  - "Read what a user types into form inputs from JavaScript."
  - "Build a small interactive feature that updates the page live."
days:
  - n: 1
    topic: "Selecting & changing elements"
    learn: "What the DOM is, then querySelector / querySelectorAll, and changing textContent, innerHTML, classList, and style."
    build: "Select a heading and a button, change the heading's text, and toggle a CSS class on it."
    assignment: "On a practice page, swap the page title text and add a 'highlight' class to one paragraph using JavaScript."
  - n: 2
    topic: "Creating & removing nodes"
    learn: "createElement, appendChild, and remove() — building HTML from JavaScript instead of typing it."
    build: "Loop over an array of names and create one list item per name, appending each to a <ul>."
    assignment: "From an array of three tasks, generate a real <ul> on the page, then remove the middle item by code."
  - n: 3
    topic: "Events & event listeners"
    learn: "addEventListener, the event object, click and other common events, and why we avoid inline onclick."
    build: "Wire a button so each click adds 1 to a counter shown on the page."
    assignment: "Build a 'click counter' with a reset button — two listeners updating the same on-page number."
  - n: 4
    topic: "Handling forms & inputs in JS"
    learn: "Reading input.value, the submit event, event.preventDefault(), and clearing an input after use."
    build: "Read text from an input on button click and display it on the page, then empty the input."
    assignment: "Make a tiny form that takes a name and shows 'Hello, NAME!' without reloading the page."
  - n: 5
    topic: "Build an interactive list"
    learn: "Combining selecting, creating nodes, and events into one feature; keeping a data array in sync with the page."
    build: "Type an item, press Add, and watch it appear as a new list item — the core of a to-do app."
    assignment: "Assemble the add-an-item flow for this week's To-Do project: input + button create live list items."
project:
  title: "To-Do list app"
  brief: "The classic — and for good reason. Add tasks, mark them complete, and delete them, all updating the page live with no reload. It pulls together everything in this phase so far: arrays of data, the DOM, and events working as one."
  deploy: "GitHub Pages"
  rubric:
    - "Can add a new task from an input, with the empty input cleared afterward"
    - "Can mark a task complete (e.g. toggling a class) and delete a task"
    - "The page updates live with no full reload"
    - "Buttons and inputs are keyboard-usable with sensible labels"
    - "Pushed to GitHub and live on GitHub Pages"
milestone: false
proSkills: ["Debug-first reflex", "Accessibility"]
resources:
  - label: "MDN — Introduction to the DOM"
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
  - label: "MDN — Introduction to events"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events"
  - label: "javascript.info — Introduction to the DOM"
    url: "https://javascript.info/dom-nodes"
  - label: "web.dev — Learn HTML: Forms"
    url: "https://web.dev/learn/forms"
---

## The week in one sentence

This is the week JavaScript reaches out and **touches the page** — reading what's there, changing it, and reacting the instant a user clicks or types.

## What we're really learning

Everything so far has run quietly in the Console. Now we connect your logic to the real page through the **DOM** — the live, in-memory tree of every element. You'll *select* elements, *change* them, *create* brand-new ones, and *remove* them. Then we add **events**: code that runs in response to a click, a keypress, or a form submit. Selecting plus events is the whole game of interactive front-end work, and once it clicks, the web stops feeling like a document and starts feeling like an *app you built*.

There's a lot of small new vocabulary here (`querySelector`, `addEventListener`, `textContent`). Don't try to memorise it — look it up, use it, and it'll stick through repetition.

## Accessibility rides along

> Interactive doesn't mean mouse-only. Make sure every button is a real `<button>` and every input has a label.

That's the **accessibility** pro-skill in action: people navigate with keyboards and screen readers, and semantic, labelled controls keep your shiny new features usable by everyone.

## And keep debugging first

When a click "does nothing," the **debug-first reflex** is your friend: check the Console for errors, confirm your selector actually found the element (`console.log` it), and verify the listener is attached. The fix is almost always smaller than the panic. You're building real software now — that's worth being proud of.
