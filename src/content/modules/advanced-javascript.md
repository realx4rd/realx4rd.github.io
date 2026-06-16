---
title: "JavaScript, deeper"
focus: "From 'I can write a loop' to professional, modern JavaScript you can reason about."
hours: 40
tech: ["JavaScript"]
objectives:
  - "Use modern ES syntax fluently — destructuring, spread/rest, modules, optional chaining."
  - "Transform data with array methods and write pure, immutable-friendly functions."
  - "Handle async code with promises and async/await, including proper error handling."
  - "Organise a project into ES modules with clear, single-responsibility boundaries."
  - "Debug systematically using DevTools and reason confidently about scope, closures, and this."
days:
  - n: 1
    topic: "Modern syntax & scope"
    learn: "let/const, arrow functions, template literals, destructuring, spread/rest — and the scope rules (including closures) that make them behave the way they do."
    build: "Rewrite a file of old-style var declarations and string concatenation using modern equivalents; trace the closure step-by-step in DevTools."
    assignment: "Write five functions that each demonstrate one ES6+ feature — no console.log dump, each function should return a value and be called with a test input."
    time: "~6h"
    details: "let and const aren't just 'new var' — they're block-scoped, which changes how loops and if-blocks behave. Arrow functions are shorter, but their real advantage is that they don't rebind this, which matters on Day 5. Destructuring and spread are the syntax you'll see in every modern codebase; learning to read them quickly removes a huge amount of cognitive friction. Closures — functions that remember the variables around them — are not an advanced topic. They're something every function you've ever written has always had. Today you just make that visible."
    steps:
      - "Open a blank JS file. Declare three variables with var, then rewrite them with let and const. Try reassigning a const and observe the error."
      - "Write an arrow function that takes two numbers and returns their sum. Note the concise body form (no braces, no return) for single-expression functions."
      - "Rewrite a string built with + concatenation as a template literal. Add an expression inside ${} that does a calculation."
      - "Create an object with four properties. Destructure three of them into named variables in one line."
      - "Create an array of five numbers. Spread it into a new array that adds one value at the start and one at the end — without mutating the original."
      - "Write a function that takes ...args (rest parameter) and returns their sum. Call it with three, then five arguments."
      - "Write a counter() function that returns an inner function; call the inner function three times and log the result. That count variable is a closure. Open DevTools Sources, set a breakpoint inside the inner function, and inspect the Closure scope in the right panel."
    stuck: "If the closure example confuses you, ignore the word 'closure' and just ask: what variables does this inner function need? Where do they live? DevTools will show you the answer directly in the Scope panel."
    resources:
      - label: "javascript.info — Variables and scoping"
        url: "https://javascript.info/variables"
      - label: "javascript.info — Destructuring assignment"
        url: "https://javascript.info/destructuring-assignment"
      - label: "javascript.info — Closures"
        url: "https://javascript.info/closure"
  - n: 2
    topic: "Working with data"
    learn: "map, filter, reduce and when to use each; what immutability means in practice; optional chaining (?.) and nullish coalescing (??) for safe property access."
    build: "Take a raw array of objects from a real API response (copy one from JSONPlaceholder), and transform it three ways — filter to a subset, map to a new shape, reduce to a summary."
    assignment: "Given an array of ten products with name, price, and inStock fields, write four separate functions: one to filter in-stock items, one to get an array of just the names, one to total the prices, and one to find the most expensive item."
    time: "~6h"
    details: "Array methods are not a performance trick — they are a readability tool. A well-named map or filter communicates intent in a way a for-loop never can. Immutability is the discipline of never changing data in place — instead you return a new value. It sounds limiting but it makes your functions predictable: same input, same output, no surprises. Optional chaining (?.) is the practical fix for a huge class of real bugs: instead of crashing on Cannot read properties of undefined, it short-circuits to undefined."
    steps:
      - "Go to https://jsonplaceholder.typicode.com/todos and copy the first ten items into a JS file as a const array."
      - "Use .filter() to get only the completed items. Log the length of the result."
      - "Use .map() on the original array to return a new array of just the title strings."
      - "Use .reduce() to count how many items have userId === 1."
      - "Write a function getUsername(user) that safely returns user?.profile?.username ?? 'Anonymous'. Test it by calling it with undefined, an empty object, and a valid object."
      - "Try mutating one of the todos directly (todos[0].completed = false). Now write a version that returns a new array with that item changed, leaving the original untouched. Console.log both to confirm."
    stuck: "reduce feels abstract at first. Start by writing the equivalent for-loop, then translate it: the accumulator is the variable you update each iteration, and the starting value is the second argument to reduce."
    resources:
      - label: "MDN — Array methods reference"
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
      - label: "javascript.info — Array methods"
        url: "https://javascript.info/array-methods"
      - label: "MDN — Optional chaining"
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
  - n: 3
    topic: "Async mastery"
    learn: "The callback → promise → async/await arc; how to fetch real data; running requests in parallel with Promise.all; error handling with try/catch that actually catches things."
    build: "Fetch data from a public API, transform the result with array methods from Day 2, handle the loading state, and display an error message when the request fails (use DevTools Network throttling to simulate a slow connection)."
    assignment: "Write an async function that fetches posts from JSONPlaceholder and users from a second endpoint in parallel, then returns a merged array where each post has the matching user's name attached. Handle the case where either request fails."
    time: "~7h"
    details: "JavaScript runs on a single thread, so async work — network requests, timers, file reads — has to be handled without blocking that thread. Callbacks were the original solution; promises cleaned them up; async/await made them readable. The underlying mechanism is the same event loop in all three cases. Knowing the progression from callbacks matters because you'll encounter all three in real codebases. Promise.all is the tool you reach for when two or more things can happen at the same time — fetching user data and their posts simultaneously instead of waiting for one to finish before starting the other."
    steps:
      - "Write a fetch call to https://jsonplaceholder.typicode.com/posts/1 using .then() and .catch(). Log the result."
      - "Rewrite the same fetch using async/await. Wrap it in a try/catch block."
      - "Add a check: if the response.ok is false, throw a new Error with the status code."
      - "Open DevTools → Network → Throttling → Slow 3G. Reload your script and observe the delay. Add a loading state (a boolean that's set before the fetch and cleared after)."
      - "Write a second fetch for https://jsonplaceholder.typicode.com/users/1."
      - "Combine both requests into a single await Promise.all([...]) call. Log the time difference versus running them sequentially."
      - "In DevTools Network, right-click one of your requests and choose 'Block request URL'. Refresh and confirm your catch block handles the failure gracefully."
    stuck: "If async/await feels like magic, read a promise version of the same code side by side. async function always returns a promise, and await just pauses until that promise settles — it is not stopping the whole program, only this one async function."
    resources:
      - label: "MDN — Using promises"
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"
      - label: "javascript.info — Promises"
        url: "https://javascript.info/promise-basics"
      - label: "javascript.info — Async/await"
        url: "https://javascript.info/async-await"
  - n: 4
    topic: "Modules & code organisation"
    learn: "ES import/export; how to split a working script into focused modules; the single-responsibility principle applied to real JavaScript files."
    build: "Take the async data app you started on Day 3 and split it into at least three modules: one for API calls, one for data transformation, one for rendering to the DOM."
    assignment: "Add a fourth module for error handling utilities. Wire the modules together so the entry point (main.js) is under 20 lines and reads like a plain-English description of what the app does."
    time: "~6h"
    details: "A file with 400 lines is not a hard rule violation — but it is usually a symptom of functions doing too many things. Modules make your code composable: you can test the transform logic without a network request; you can swap the API file for a mock during development. ES modules (import/export) are the standard the whole ecosystem converged on — they work natively in modern browsers and in Node.js. The mental shift is going from 'one big script' to 'small pieces that call each other clearly'."
    steps:
      - "Create a project folder with an index.html that loads main.js as type='module'."
      - "Move your fetch logic into api.js and export the fetch functions as named exports."
      - "Move your array-method transforms into transform.js and export those as named exports."
      - "Move any DOM manipulation into render.js and export a render function."
      - "In main.js, import from each module and wire them together. The flow should be: fetch → transform → render."
      - "Open DevTools → Sources and confirm you can see the separate module files listed. Set a breakpoint in transform.js and confirm it is hit when the app runs."
      - "Try importing a name that doesn't exist and observe the error message. Fix it."
    stuck: "Getting 'Cannot use import statement' errors? Make sure your script tag has type='module' and you are serving the files from a local dev server (VS Code Live Server extension) — ES modules block on file:// URLs for security reasons."
    resources:
      - label: "javascript.info — ES Modules"
        url: "https://javascript.info/modules-intro"
      - label: "MDN — JavaScript modules"
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
      - label: "You Don't Know JS Yet (free)"
        url: "https://github.com/getify/You-Dont-Know-JS"
  - n: 5
    topic: "this, prototypes & common gotchas"
    learn: "How this is bound (and when it isn't what you expect); what hoisting actually means; why == vs === matters; prototype chains without mysticism."
    build: "Build a small object-oriented counter example that breaks with a regular function callback — then fix it using an arrow function; trace the prototype chain of a plain array in DevTools."
    assignment: "Write three code samples that each demonstrate a classic JS gotcha (pick from: this in a setTimeout, typeof null, NaN comparison, == coercion, var hoisting inside a loop). For each, write the broken version, explain why it breaks, then write the fixed version."
    time: "~7h"
    details: "this in JavaScript is determined at call time, not at definition time — which is why the same method can behave differently depending on how you invoke it. Arrow functions are the practical fix for most this confusion in modern code, because they inherit this from the surrounding scope rather than creating their own. Hoisting is the reason var declarations can be read before the line they're written on — let and const are also hoisted but not initialised, which is why they throw a ReferenceError instead of silently returning undefined. These gotchas are not obscure edge cases: they appear in job interviews, in code reviews, and in real bugs."
    steps:
      - "Create an object with a name property and a greet method that logs 'Hello, ' + this.name. Call it directly (obj.greet()) and confirm it works."
      - "Extract the method to a variable (const fn = obj.greet) and call fn(). Observe that this is now undefined (or window in non-strict mode). Explain why."
      - "Fix it using an arrow function for greet. Re-run both calling styles."
      - "Write a for loop using var i = 0; inside a setTimeout — observe the classic closure-over-var bug. Rewrite with let and confirm it behaves correctly."
      - "In the browser console, check the type of null and compare it to undefined. Run null == undefined and null === undefined and explain the difference."
      - "In DevTools console, create a plain array, then inspect its __proto__ to see Array.prototype. Click through to find methods like push and map. This is the prototype chain."
      - "Spend 20 minutes reading one section from You Don't Know JS on scope or this — the goal is depth, not coverage."
    stuck: "If this is still confusing after the exercise, a simple rule covers 90% of cases: this is whatever is to the left of the dot when you call a method. If there is no dot, this is undefined in strict mode. Arrow functions ignore this rule entirely."
    resources:
      - label: "javascript.info — The 'this' keyword"
        url: "https://javascript.info/this"
      - label: "You Don't Know JS Yet (free)"
        url: "https://github.com/getify/You-Dont-Know-JS"
      - label: "MDN — JavaScript Guide"
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
  - n: 6
    topic: "Debugging & problem-solving"
    learn: "The DevTools debugger — breakpoints, step-over/into/out, the call stack, the watch panel; how to read a stack trace; how to decompose a problem before you start typing."
    build: "Take a buggy version of a small app (deliberately broken by you), and debug it entirely using breakpoints — no console.log allowed."
    assignment: "Finish and polish your modular async data app. Debug any remaining issues using the DevTools debugger. Write a short paragraph (for your own notes) describing one bug you found and how you tracked it down."
    time: "~8h"
    details: "The single biggest difference between a junior and an experienced developer is not syntax — it is the ability to isolate a problem. Experienced developers add a breakpoint, inspect state, and know within two minutes where the bug is. Juniors often spend an hour adding console.logs. The DevTools debugger gives you everything console.log gives you, plus the ability to pause, step through execution line by line, and inspect every variable in scope at that exact moment. Pair that with the skill of decomposing a problem — breaking it into smaller questions before touching the keyboard — and most bugs stop being mysterious."
    steps:
      - "Open your modular async app from Days 3 and 4. Open DevTools → Sources."
      - "Click the line number on your fetch function to set a breakpoint. Reload. Observe that execution pauses before the request is made."
      - "Step over (F10) line by line and watch the variable values update in the right-hand Scope panel."
      - "Step into (F11) your transform function when it is called. Inspect the input array before it is processed."
      - "Now deliberately introduce a bug — access a property that doesn't exist. Find the resulting error in the Console, click the filename:line link, and confirm DevTools lands you at the error."
      - "Read the full call stack in the Sources panel. Trace upward from the error to understand what called what."
      - "Fix the bug. Confirm no console errors remain, and that all three states (loading, data, error) work correctly."
    stuck: "Breakpoints not pausing? Check that DevTools is open before you reload, and that the file you're setting breakpoints in is the one actually running (the Sources panel shows all loaded files). Also confirm your code isn't being minified or bundled in a way that changes line numbers."
    resources:
      - label: "javascript.info — Debugging in the browser"
        url: "https://javascript.info/debugging-chrome"
      - label: "MDN — JavaScript Guide"
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      - label: "You Don't Know JS Yet (free)"
        url: "https://github.com/getify/You-Dont-Know-JS"
project:
  title: "A modular, async data app"
  brief: "Build a small app that fetches from a real public API, transforms the data with array methods, handles loading/empty/error states, and is split cleanly into ES modules. No frameworks — just JavaScript doing real work."
  deploy: "Netlify or Vercel"
  rubric:
    - "Uses ES modules — at least three separate files wired together with import/export"
    - "Async/await with try/catch error handling — not raw .then() chains"
    - "Array methods (map, filter, reduce) used where natural instead of manual loops"
    - "No console errors in a clean browser load"
    - "Handles loading state, empty-data state, and error state visibly in the UI"
milestone: false
proSkills: ["Debug-first reflex", "How to learn"]
resources:
  - label: "javascript.info"
    url: "https://javascript.info/"
  - label: "MDN — JavaScript Guide"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
  - label: "You Don't Know JS Yet (free)"
    url: "https://github.com/getify/You-Dont-Know-JS"
  - label: "MDN — Using promises"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"
  - label: "MDN — Array methods reference"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
---

## The module in one sentence

Weeks 5–8 gave you the tools — this module teaches you to think with them, so you can
read any JavaScript codebase and write code other developers trust.

## What we're really learning

There is a ceiling you hit with tutorial-based JavaScript learning: you can follow along
with anything, but struggle when facing a blank file. The gap is not more syntax — it is
**mental models**. How does scope actually work? Why does `this` behave differently here
than there? Why does my async function return a promise instead of the data?

This module attacks that gap directly. We spend time on the mechanisms behind the
features, not just their syntax. We read stack traces instead of panicking. We use the
debugger instead of drowning in `console.log`. We organise code into modules before the
file becomes a 600-line mess. These habits are what separate developers who can solve
their own problems from developers who need to find a tutorial every time something goes
wrong.

## AI is a tutor here, not a pair programmer

This is the module where the AI-as-crutch trap is hardest to avoid. Destructuring syntax
looks odd? Ask the AI to explain it. `this` is behaving unexpectedly? Tempting to paste
the error and let it fix the code. Resist that second impulse, at least the first time.

Instead: read the error, form a hypothesis about what is wrong, set a breakpoint, check
whether your hypothesis was right. Then — if you are still stuck — ask the AI to
*explain the concept*, not to write the fix. The goal of this module is that you walk
away able to reason about JavaScript without a lifeline. That only happens if you do the
thinking yourself most of the time.

## What the project is really testing

The final app is not about picking the right API or building an impressive UI. It is
about demonstrating four things at once: that you can structure a codebase, handle the
real complexity of async data (it is slow, it fails, it can be empty), transform data
cleanly without tangled loops, and ship it somewhere live. Those four things together
are what a professional JavaScript task actually looks like.

> **Quick skill-check before Day 1:** open a JS file, write a `for` loop that sums an
> array, then immediately try to rewrite it as a `.reduce()`. If that feels difficult,
> spend 30 minutes on the javascript.info array methods page before starting — you will
> move faster through the whole module with that foundation solid.
