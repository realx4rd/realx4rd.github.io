---
week: 6
title: "Arrays, loops & objects"
focus: "Working with collections of data — the quiet engine behind every real app."
phase: "JavaScript"
phaseNumber: 2
hours: 10
tech: ["JavaScript"]
objectives:
  - "Store lists of data in arrays and read items by their index."
  - "Repeat work with for, while, and forEach loops without getting stuck."
  - "Transform lists cleanly with map, filter, and find."
  - "Model real-world things as objects with properties and methods."
  - "Combine arrays and objects to represent the data behind an app."
days:
  - n: 1
    topic: "Arrays & indexing"
    learn: "Creating arrays, zero-based indexing, .length, and adding/removing with push, pop, and shift."
    build: "Build an array of your five favourite foods and log the first, last, and total count."
    assignment: "Make a 'shopping list' array, add two items and remove one, then log the final list and its length."
  - n: 2
    topic: "Loops (for, while, forEach)"
    learn: "The classic for loop, while loops, and the friendlier array.forEach — plus how to avoid an infinite loop."
    build: "Loop over your foods array three different ways and log each item with its position number."
    assignment: "Write a loop that logs the numbers 1–10, and a second loop that logs only the even ones."
  - n: 3
    topic: "Array methods (map, filter, find)"
    learn: "Transforming with .map(), narrowing with .filter(), and locating one item with .find()."
    build: "From an array of prices, use .map() to add tax and .filter() to keep only items under $20."
    assignment: "Given an array of numbers, produce a new array of their doubles and a separate array of only the big ones (> 50)."
  - n: 4
    topic: "Objects & properties"
    learn: "Object literals, dot vs. bracket access, adding/updating properties, and a quick look at methods."
    build: "Model a 'book' as an object with title, author, and pages, then read and update a property."
    assignment: "Create a 'user' object describing yourself, then log a sentence that pulls three properties out of it."
  - n: 5
    topic: "Arrays of objects"
    learn: "The most common real-world shape: a list of objects, and looping over it to read each one's fields."
    build: "Build an array of three 'movie' objects and forEach over it to log 'Title (year)' for each."
    assignment: "Model three quiz questions as an array of objects (question, options, answer) — the data for this week's project."
project:
  title: "Data-driven quiz app"
  brief: "A small quiz where the questions are not hard-coded into the page but stored as an array of objects. Your JavaScript loops over that data to show each question — change the data, and the quiz changes. This is your first taste of separating content from code."
  deploy: "GitHub Pages"
  rubric:
    - "Questions are stored as an array of objects (not hard-coded in the HTML)"
    - "Code loops over the data instead of repeating itself per question"
    - "Tracks and reports the user's score at the end"
    - "Adding a new question object requires no other code changes"
    - "Pushed to GitHub and live on GitHub Pages"
milestone: false
proSkills: ["Debug-first reflex", "Git ritual"]
resources:
  - label: "MDN — Arrays"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays"
  - label: "javascript.info — Arrays and methods"
    url: "https://javascript.info/array-methods"
  - label: "MDN — Working with objects"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects"
  - label: "The Odin Project — Arrays and Loops"
    url: "https://www.theodinproject.com/paths/foundations/courses/foundations"
---

## The week in one sentence

Real apps are mostly **data being shuffled around**, so this week you learn the containers that hold it — arrays and objects — and the loops and methods that move it.

## What we're really learning

Last week you taught the browser to think about one value at a time. Now we scale up to *collections*. An **array** is an ordered list (your to-dos, a quiz's questions, a feed of posts). An **object** is a single thing described by named properties (a user, a book, a movie). Put them together — an **array of objects** — and you've got the exact shape that powers almost every app you use daily.

The big mindset shift is letting the computer do the repetitive work. Instead of writing the same line ten times, you write it **once inside a loop**. Methods like `.map()` and `.filter()` take that even further: describe the transformation, and the array applies it for you.

> Loops are also the easiest place to create a confusing bug. When a loop misbehaves, drop a `console.log` *inside* it to watch each pass.

## Keep the debug-first reflex hot

You'll meet "undefined" and off-by-one index errors this week — everyone does. That's not a sign you're failing; it's the **debug-first reflex** getting its reps. Open the Console, log what you actually have versus what you expected, and let the gap point you to the fix. Commit your work often, too — a clean Git history is a safety net you'll be glad to have. 🙂
