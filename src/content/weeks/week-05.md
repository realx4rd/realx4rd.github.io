---
week: 5
title: "JavaScript fundamentals"
focus: "Teaching the browser to think — variables, logic, and functions from scratch."
phase: "JavaScript"
phaseNumber: 2
hours: 10
tech: ["JavaScript"]
objectives:
  - "Run JavaScript in the browser and store information in variables."
  - "Choose the right data type and use operators with confidence."
  - "Make decisions in code with if / else and switch statements."
  - "Write reusable functions with parameters, return values, and clear scope."
  - "Debug small logic problems in the DevTools Console before asking for help."
days:
  - n: 1
    topic: "Running JS + variables & data types"
    learn: "How to run JavaScript (script tag + Console), then let / const and the core types: string, number, boolean, null, undefined."
    build: "Open the Console, declare a few variables, and log them; move the same code into a linked script file."
    assignment: "Create a script that stores your name, age, and 'is learning to code' as three variables and logs a sentence built from them."
  - n: 2
    topic: "Operators & working with strings"
    learn: "Arithmetic, comparison, and logical operators, plus string template literals and common string methods."
    build: "Use a template literal to build a greeting, and try .length, .toUpperCase(), and .includes() in the Console."
    assignment: "Write a script that takes two number variables and logs their sum, difference, and whether the first is larger."
  - n: 3
    topic: "Conditionals (if / else, switch)"
    learn: "Truthiness, if / else if / else, the ternary operator, and when a switch reads more clearly."
    build: "Write an if / else that prints a different message for three score ranges, then refactor a chain into a switch."
    assignment: "Build a 'grade checker' that turns a number score (0–100) into a letter grade A–F using conditionals."
  - n: 4
    topic: "Functions, parameters & scope"
    learn: "Declaring functions, parameters vs. arguments, return values, arrow functions, and local vs. global scope."
    build: "Write a function that takes two numbers and returns their average; call it with different arguments."
    assignment: "Write a function 'celsiusToFahrenheit(c)' that returns the converted temperature, and test it with three values."
  - n: 5
    topic: "Logic drills — putting it together"
    learn: "Combining variables, conditionals, and functions into one small program; reading errors calmly in the Console."
    build: "Sketch the tip-calculator logic in plain words, then turn each step into a function before you touch the page."
    assignment: "Draft and test the core 'calculateTip(bill, percent)' function for this week's project — Console only, no UI yet."
project:
  title: "Tip calculator"
  brief: "A tiny page with a function at its heart: enter a bill amount and a tip percentage, and get back the tip and total. Logic first in the Console, then wired to a simple HTML page so you can see real numbers change."
  deploy: "GitHub Pages"
  rubric:
    - "Core logic lives in a named function that takes inputs and returns a value"
    - "Uses variables and at least one conditional (e.g. handle a 0 or empty bill)"
    - "Calculates the tip and the grand total correctly across several test cases"
    - "No errors in the Console; values update when inputs change"
    - "Pushed to GitHub and live on GitHub Pages"
milestone: false
proSkills: ["Debug-first reflex", "AI-free rep", "Git ritual"]
resources:
  - label: "MDN — What is JavaScript?"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript"
  - label: "javascript.info — The JavaScript language (Fundamentals)"
    url: "https://javascript.info/first-steps"
  - label: "The Odin Project — JavaScript Basics"
    url: "https://www.theodinproject.com/paths/foundations/courses/foundations"
  - label: "freeCodeCamp — JavaScript Algorithms and Data Structures"
    url: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
---

## The week in one sentence

This week the page stops being a static poster and starts being able to **think** — you teach the browser to store values, make decisions, and run little functions you wrote yourself.

## What we're really learning

Variables, operators, conditionals, and functions are the four words of JavaScript you'll use in literally every program for the rest of your life. Everything fancier — the DOM, events, fetching live data — is built on top of these. So we go slowly and on purpose. A **function** is just a named recipe: give it inputs, get back a result. Once that clicks, half of programming clicks with it.

Be honest with yourself about pace. **JavaScript is the biggest and slowest phase of this whole course**, and Week 5 is where it can feel steep. That is completely normal. You are not behind; you are doing the hard, real part.

## Your new reflex: debug first

> When something breaks, open the **DevTools Console** and investigate *before* you ask anyone — including an AI.

This is the **debug-first reflex**, and it runs hot all phase. Read the red error out loud. `console.log` the values you *think* you have. Nine times out of ten the bug is a typo or a value that isn't what you assumed — and finding it yourself is exactly the skill that makes you a developer.

Pair that with the **AI-free rep**: solve at least one exercise each day completely on your own before comparing with any AI answer. Renting the solution feels fast and teaches you nothing. You've got this.
