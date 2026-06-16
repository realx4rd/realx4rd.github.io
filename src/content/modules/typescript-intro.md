---
title: "TypeScript, an introduction"
focus: "Add types to JavaScript for safer, clearer, more hireable code."
hours: 18
tech: ["TypeScript"]
objectives:
  - "Explain why types catch bugs at write-time and improve editor tooling."
  - "Annotate variables, function parameters, and return types with basic TypeScript syntax."
  - "Model data with interfaces, type aliases, and union types."
  - "Type arrays, objects, and functions confidently."
  - "Read and fix common TypeScript compiler errors without reaching for any."
days:
  - n: 1
    topic: "Why TypeScript + the basic types"
    learn: "What TypeScript actually is (a typed superset of JavaScript), why companies use it, and the four types you will write every day: string, number, boolean, and arrays of each."
    build: "Install TypeScript globally, write a tiny .ts file, annotate a few variables, and compile it to JavaScript with tsc."
    assignment: "Write a TypeScript file that declares five variables with explicit type annotations, runs tsc on it with no errors, and then deliberately introduce a type mismatch to read the error message — write down what the error says in plain English."
    time: "~4h"
    details: "TypeScript is JavaScript with an extra layer that checks your code before it runs. You write .ts files, run tsc, and get plain .js back — the types exist only at write-time and compile-time; they are stripped away completely in production. The payoff is immediate: your editor starts flagging mistakes the moment you make them instead of waiting for a runtime crash. Type inference means you rarely have to annotate every line — TypeScript often figures it out — but being explicit in function signatures and data structures is where the real value lives."
    steps:
      - "Install TypeScript: npm install -g typescript. Confirm with tsc --version."
      - "Create a folder ts-practice and inside it a file basics.ts."
      - "Declare a string: let name: string = 'Alice'; and a number: let age: number = 30;"
      - "Declare a boolean: let isHired: boolean = true;"
      - "Declare a string array: let skills: string[] = ['HTML', 'CSS', 'TypeScript'];"
      - "Run tsc basics.ts and open the generated basics.js — notice the type annotations are gone."
      - "Now change age to 'thirty' and run tsc again. Read the error, understand it, then fix it."
    stuck: "tsc not found after installing? Close and reopen your terminal so the PATH is refreshed, then try again. On Windows you may also need to run npm install -g typescript in a terminal opened as Administrator."
    resources:
      - label: "TypeScript Handbook — Introduction"
        url: "https://www.typescriptlang.org/docs/handbook/intro.html"
      - label: "TypeScript for JavaScript Programmers"
        url: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
      - label: "Total TypeScript — Beginner tutorials"
        url: "https://www.totaltypescript.com/tutorials"
  - n: 2
    topic: "Functions, objects, interfaces, and type aliases"
    learn: "How to type function parameters and return values, how to describe object shapes with interfaces and type aliases, and when to use one over the other."
    build: "Write a small set of typed utility functions and an interface that describes a real-world data object (a user, a product, a task)."
    assignment: "Define an interface for a BlogPost (title, author, publishedAt, body, tags). Write a function printPost(post: BlogPost): void that logs the title and author. Call it with a valid object — then try calling it with a missing field and read what TypeScript says."
    time: "~4h"
    details: "Functions without type annotations are where most JavaScript bugs hide: you pass a string where a number was expected and the error shows up three function calls later. Adding parameter types and a return type turns that runtime mystery into a compile-time message pointing exactly at the problem. Interfaces let you give a name to an object's shape so you can reuse it across multiple functions without repeating yourself. Type aliases do the same thing and are more flexible for non-object shapes — in practice, either works for objects; pick one style and be consistent."
    steps:
      - "Write a function with typed parameters: function greet(name: string, age: number): string { return 'Hi ' + name; }"
      - "Add a return type annotation and confirm tsc accepts it."
      - "Define an interface: interface User { name: string; age: number; email: string; }"
      - "Write a function that accepts a User: function displayUser(user: User): void { console.log(user.name); }"
      - "Call displayUser with a valid object literal — TypeScript checks each property matches."
      - "Try the same with type alias: type Product = { title: string; price: number; }; — notice the syntax difference."
      - "Run tsc and fix any errors before moving on."
    stuck: "Getting 'Property X does not exist on type Y'? TypeScript is telling you the object does not match the interface — check spelling, check the type of the value, and check nothing required is missing."
    resources:
      - label: "TypeScript Handbook — Introduction"
        url: "https://www.typescriptlang.org/docs/handbook/intro.html"
      - label: "Total TypeScript — Beginner tutorials"
        url: "https://www.totaltypescript.com/tutorials"
      - label: "MDN — JavaScript reference (for the JS underneath)"
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  - n: 3
    topic: "Unions, literal types, narrowing, and a gentle intro to generics"
    learn: "How union types let a value be one of several types, how literal types pin a value to a specific string or number, how TypeScript narrows a union inside conditionals, and what generics look like in the wild."
    build: "Write a function that accepts a union type and narrows it with typeof and an if-else, then use a generic function to see why they exist."
    assignment: "Write a function formatId(id: string | number): string that returns the id formatted as a string ('ID: 42' or 'ID: abc'). Then write a literal-type union type Direction = 'north' | 'south' | 'east' | 'west' and a function move(direction: Direction): void — call it with all four valid directions and then try an invalid one."
    time: "~4h"
    details: "Real data is often one of several shapes: an ID might be a number from a database or a string slug from a URL. Union types (string | number) let you say exactly that, and TypeScript then forces you to handle both cases before you can safely use the value. Literal types narrow a string to a fixed set of valid values — great for enums like status codes, directions, or button variants. Narrowing is how TypeScript gets smarter inside an if: after typeof id === 'string', it knows id is definitely a string. Generics are TypeScript's way of writing code that works across types without giving up type safety — you will see them on every Array, Promise, and fetch call, and knowing how to read them is what matters most at this stage."
    steps:
      - "Declare a union type variable: let id: string | number = 42; then reassign it to 'slug-abc'."
      - "Write a function that narrows: function describe(val: string | number) { if (typeof val === 'string') { ... } else { ... } }"
      - "Declare a literal union: type Status = 'pending' | 'active' | 'closed'; and annotate a variable with it."
      - "Try assigning a value outside the union — read the error TypeScript gives you."
      - "Look at a built-in generic: write const names: Array<string> = ['Alice', 'Bob']; — this is the same as string[]."
      - "Write a tiny identity function with a type parameter: function identity<T>(val: T): T { return val; } and call it with a string and a number."
      - "Run tsc — zero errors before moving on."
    stuck: "Confused why TypeScript still complains inside your if block? Make sure the condition tests the right thing: typeof works for primitives; for objects you usually need a property check (if ('title' in post)) or a discriminant field."
    resources:
      - label: "TypeScript Handbook — Introduction"
        url: "https://www.typescriptlang.org/docs/handbook/intro.html"
      - label: "TypeScript for JavaScript Programmers"
        url: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
      - label: "Total TypeScript — Beginner tutorials"
        url: "https://www.totaltypescript.com/tutorials"
  - n: 4
    topic: "TypeScript in practice: tsconfig, Vite, compiler errors, and no any"
    learn: "How tsconfig.json controls the compiler, how to add TypeScript to a Vite project, how to read compiler errors calmly, and why any defeats the whole point of TypeScript."
    build: "Scaffold a Vite + TypeScript project, open an existing JS file, rename it to .ts, fix the errors tsc surfaces, and push to a state with zero errors and zero uses of any."
    assignment: "Take your advanced-JS data project (or any small JS app), rename the .js files to .ts, run tsc and read every error, then fix them one by one until the compiler is silent — without using any. Log what each error was and how you fixed it."
    time: "~6h"
    details: "A tsconfig.json is how you tell the TypeScript compiler what files to check, what JavaScript version to target, and how strict to be. The most important flag is strict: true, which enables a group of checks (including strict null checks) that catch the category of bugs TypeScript is best at. Vite has built-in TypeScript support — scaffolding with npm create vite@latest and choosing the TypeScript template gives you a ready-made tsconfig with sensible defaults. When the compiler lists ten errors, work through them top-to-bottom: errors cascade, and fixing the first one often clears several below it. any is a trap: it tells TypeScript to trust you completely, which switches its checking off entirely. If you find yourself reaching for any, that is a signal to look up the real type instead."
    steps:
      - "Scaffold a Vite project with TypeScript: npm create vite@latest my-ts-app -- --template vanilla-ts then cd my-ts-app && npm install."
      - "Open tsconfig.json and find the strict flag — confirm it is true."
      - "Run npx tsc --noEmit to check types without writing files (what you will use in CI)."
      - "Copy a JavaScript function you wrote previously into src/main.ts and run tsc again."
      - "Fix the errors one at a time, from top to bottom, using the Handbook as reference — not any."
      - "Search your codebase for any with grep -r 'any' src/ — there should be zero."
      - "Run npm run dev to confirm the app still builds and runs in the browser."
    stuck: "Stuck on a type error and nothing in the Handbook seems to match? Paste the exact error text into your AI assistant and ask it to explain what TypeScript is complaining about — then write the fix yourself. Reading the explanation beats accepting a code paste you do not understand."
    resources:
      - label: "TypeScript Handbook — Introduction"
        url: "https://www.typescriptlang.org/docs/handbook/intro.html"
      - label: "TypeScript for JavaScript Programmers"
        url: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
      - label: "Total TypeScript — Beginner tutorials"
        url: "https://www.totaltypescript.com/tutorials"
deliverable: "Convert a small JavaScript project (e.g. your advanced-JS data app) to TypeScript with zero uses of any and no compiler errors."
milestone: false
proSkills: ["AI-Leverage & Defensibility", "Debug-first reflex"]
resources:
  - label: "TypeScript Handbook — Introduction"
    url: "https://www.typescriptlang.org/docs/handbook/intro.html"
  - label: "TypeScript for JavaScript Programmers"
    url: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
  - label: "Total TypeScript — Beginner tutorials"
    url: "https://www.totaltypescript.com/tutorials"
  - label: "MDN — JavaScript reference"
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
---

## The module in one sentence

TypeScript is JavaScript with a spell-checker built in — and by the end of this module
you will never want to ship code without it.

## What we are actually doing here

JavaScript is famously permissive. You can pass a string where a function expected a number,
access a property that does not exist, and return `undefined` by accident — and the language
will not say a word until your code runs (or your user hits the bug first). TypeScript adds a
layer of static analysis that catches those mistakes **while you type**, in your editor, before
a single line executes.

The payoff compounds. Autocomplete becomes smarter because your editor understands the shape of
every object. Refactoring becomes safer because renaming a function or changing its signature
surfaces every affected call site immediately. And when a new team member (or future you) reads
the code, the types are documentation that cannot drift out of date the way comments do.

## This is not a new language

TypeScript compiles to plain JavaScript. Every `.ts` file you write becomes a `.js` file you
could have written by hand — the types just do not survive the compilation step. That means:

- Every JavaScript library works with TypeScript.
- Every JavaScript skill you already have transfers completely.
- You can adopt TypeScript **incrementally** — one file at a time — inside an existing project.

The shift is mostly a habit change: you think in types while you write, and the compiler
validates that thinking for you.

## The any trap

The single biggest mistake beginners make is using `any` when they are stuck. It feels like a
solution — the red squiggles go away — but `any` tells TypeScript "stop checking this." You have
effectively turned off the feature you are paying for. When you hit an error you cannot solve
immediately, use the compiler message and the Handbook to find the real type. Ask an AI to
**explain the error**, not to hand you `any`. The debug-first reflex you build here is what
separates engineers who grow from ones who just ship and hope.

## AI as a type tutor, not a type vending machine

TypeScript errors can look intimidating: deeply nested generics, long type names, `inferred as
never`. AI tools are genuinely useful here — but only if you use them to understand, not to
bypass. The workflow that builds real skill: paste the error, ask the AI to explain it in plain
English, then **write the fix yourself**. You learn the pattern. The next time you see that
error, you do not need to ask.
