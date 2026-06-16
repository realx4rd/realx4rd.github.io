---
title: "React fundamentals"
focus: "Build user interfaces the industry-standard way — components, props, and state."
hours: 36
tech: ["React"]
objectives:
  - "Explain what React is and the problem it solves compared to raw HTML + JS."
  - "Write functional components with JSX and scaffold a project using Vite."
  - "Pass data between components using props and compose UIs from small reusable pieces."
  - "Manage local state with useState and wire up event handlers."
  - "Render lists with stable keys and show or hide content with conditional rendering."
days:
  - n: 1
    topic: "Why React + JSX + your first component"
    learn: "What problem React solves, how the component model works, and what JSX is under the hood. Scaffold a fresh project with Vite."
    build: "Scaffold a Vite + React app, explore the generated files, and replace the default App with your own component that renders a heading and a paragraph."
    assignment: "Write three small components from scratch — a Header, a Card, and a Footer — and render them all inside App. Each must accept no props yet; just hard-code some text."
    time: "~6h"
    details: "React's core idea is the component: a function that returns UI. JSX looks like HTML but it is JavaScript — Babel compiles it to React.createElement calls. Vite gives you a dev server with instant hot-reload so you see every change without a full page refresh. The mental model to cement today: UI = f(data). Your function runs, returns JSX, React updates the DOM. Everything else builds on this."
    steps:
      - "Open your terminal and run: npm create vite@latest my-react-app -- --template react"
      - "cd my-react-app, then npm install, then npm run dev. Open the localhost URL Vite prints."
      - "Open src/App.jsx in your editor. Delete everything inside the return and replace with a single <h1>Hello, React</h1>."
      - "Watch the browser update instantly — no refresh needed. That is Vite's HMR."
      - "Create a new file src/components/Card.jsx. Export a function Card() that returns a <div> with a title and a short paragraph."
      - "Import Card into App.jsx and render it: <Card />. Confirm it appears in the browser."
      - "Create Header.jsx and Footer.jsx the same way, then line them all up inside App's return."
    stuck: "Vite won't start? Run node --version — you need Node 18 or later. If you have an older version, download the LTS from nodejs.org and reinstall."
    resources:
      - label: "Vite — Getting Started"
        url: "https://vite.dev/guide/"
      - label: "React — Your First Component"
        url: "https://react.dev/learn/your-first-component"
      - label: "React — Writing Markup with JSX"
        url: "https://react.dev/learn/writing-markup-with-jsx"
  - n: 2
    topic: "Props and composition"
    learn: "How props flow from parent to child, how to make components reusable by parameterising them, and how to compose a UI from small specialised pieces."
    build: "Take yesterday's Card component and make it accept title, description, and imageUrl props so the same component can render different content."
    assignment: "Build a ProductCard component that accepts name, price, and inStock props. Render at least four of them inside App, each with different data. No arrays or loops yet — just write them out."
    time: "~7h"
    details: "Props are the arguments you pass to a component — they are read-only from the child's perspective, which is what makes React's data flow predictable. Composition means building complex UIs by nesting simple components, not by writing one giant monolith. The skill of knowing how small to slice a component — 'single responsibility' for UI — is one of the most useful judgements you will develop as a React developer."
    steps:
      - "Update Card.jsx to accept props: function Card({ title, description }) { ... }"
      - "Replace the hard-coded text inside the JSX with {title} and {description}."
      - "Back in App.jsx, pass different values to each Card: <Card title='Post one' description='...' />"
      - "Add a third prop imageUrl. Render an <img src={imageUrl} alt={title} /> inside the card."
      - "Create a new component CardList that renders three Cards side by side — it receives no props; it owns the data for now."
      - "Notice how Card has no idea what content it displays — that's the power of props."
      - "Open React DevTools (browser extension) and inspect the component tree — you can see each Card's props live."
    stuck: "Props showing as undefined? Check the spelling matches exactly between where you pass the prop (App.jsx) and where you destructure it (Card.jsx). JavaScript is case-sensitive."
    resources:
      - label: "React — Passing Props to a Component"
        url: "https://react.dev/learn/passing-props-to-a-component"
      - label: "React — Thinking in React"
        url: "https://react.dev/learn/thinking-in-react"
      - label: "Scrimba — Learn React (free)"
        url: "https://scrimba.com/learn/learnreact"
  - n: 3
    topic: "State with useState and event handling"
    learn: "What state is, why React needs to manage it, how useState works, and how to wire up event handlers so user interactions update the UI."
    build: "Build a counter component with increment and decrement buttons, then extend it to a colour-picker that changes the background of a box."
    assignment: "Build a simple tip calculator: a number input for the bill amount and buttons for 10 %, 15 %, and 20 % tip. Show the tip amount and total below. All logic lives in one component."
    time: "~8h"
    details: "State is data that can change over time and should cause the UI to re-render when it does. useState returns a pair — the current value and a setter function. The golden rule: never mutate state directly. Call the setter, and React schedules a re-render. Event handlers in JSX use camelCase (onClick, onChange) and receive a synthetic event object — the same pattern as vanilla JS, just a different attachment point."
    steps:
      - "Create Counter.jsx. Import useState: import { useState } from 'react';"
      - "Declare state inside the component: const [count, setCount] = useState(0);"
      - "Render a <p> that shows {count} and two buttons labelled '+' and '–'."
      - "Add onClick handlers: <button onClick={() => setCount(count + 1)}>+</button>"
      - "Click the buttons in the browser. The count updates without a page reload."
      - "Now add a text input that controls a separate piece of state: const [name, setName] = useState('');"
      - "Wire the input: <input value={name} onChange={(e) => setName(e.target.value)} /> and show {name} in a greeting below it."
    stuck: "State not updating? Make sure you are calling the setter (setCount) — not reassigning count directly. Reassigning a local variable never triggers a re-render."
    resources:
      - label: "React — State: A Component's Memory"
        url: "https://react.dev/learn/state-a-components-memory"
      - label: "React — Responding to Events"
        url: "https://react.dev/learn/responding-to-events"
      - label: "The Odin Project — React"
        url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/react"
  - n: 4
    topic: "Conditional rendering and lists with keys"
    learn: "How to show or hide UI based on state using &&, ternaries, and early returns. How to render arrays of data with .map() and why every list item needs a stable key."
    build: "Add a loading skeleton to a fake data fetch, then render a dynamic list of items from a JavaScript array."
    assignment: "Build a simple task list: an input and an 'Add' button that appends items to a state array (use the spread pattern), and render each task with a 'Done' button that removes it. Include a 'No tasks yet' message when the list is empty."
    time: "~7h"
    details: "Conditional rendering is just JavaScript inside JSX: condition && <Component /> for 'show or nothing', condition ? <A /> : <B /> for 'show one or the other', or an early return when an entire component should bail out. Lists are rendered by mapping an array to JSX — the key prop is not optional. React uses keys to identify which items changed, added, or removed. Bad keys (like array indexes on dynamic lists) cause subtle bugs; use a stable unique id from your data instead."
    steps:
      - "Create a TaskList component with const [tasks, setTasks] = useState([]) and a text input with its own state."
      - "Write an addTask function that calls setTasks([...tasks, { id: Date.now(), text: inputText }])."
      - "Render the list: {tasks.map((task) => (<li key={task.id}>{task.text}</li>))}"
      - "Add a 'No tasks yet' message: {tasks.length === 0 && <p>No tasks yet.</p>}"
      - "Add a Done button in each list item. Its onClick calls setTasks(tasks.filter(t => t.id !== task.id))."
      - "Open DevTools → Console. React will warn you if you forget a key. Fix any warnings you see."
      - "Try using array index as the key (key={index}) and notice it still works — then switch to task.id and understand why id is safer when items can be added or removed."
    stuck: "Warning about missing keys in the console? Find every .map() call in your JSX and add key={item.id} (or a similarly unique, stable value) to the outermost element returned."
    resources:
      - label: "React — Conditional Rendering"
        url: "https://react.dev/learn/conditional-rendering"
      - label: "React — Rendering Lists"
        url: "https://react.dev/learn/rendering-lists"
      - label: "React — Learn (full guide)"
        url: "https://react.dev/learn"
  - n: 5
    topic: "Build day — putting it all together"
    learn: "No new concepts today. Review the week's mental models: component tree, unidirectional data flow, state vs props. Then build something that combines all of them."
    build: "Start your week project from scratch. Sketch your component tree on paper before writing a single line of code."
    assignment: "Complete the interactive mini-app from your sketch. By the end of the session you should have a working, error-free app deployed to Vercel."
    time: "~8h"
    details: "The best way to know if you really understand something is to build it without a tutorial open. Today you face a blank Vite project and a brief — that's the real skill. Reach for the React docs when you're stuck on syntax, not for a walkthrough. If you get completely stuck on a specific thing, use AI to explain the concept, not to write the component for you. The gap between 'I understood the tutorials' and 'I can build without one' is exactly the gap this day is designed to close."
    steps:
      - "Sketch your app on paper: list the components, what data (state) each owns, and what props flow between them."
      - "Scaffold with Vite: npm create vite@latest my-mini-app -- --template react"
      - "Create your top-level state in App.jsx and stub out the component tree with placeholder text."
      - "Build one component at a time from the bottom up — get each one working before wiring it to the rest."
      - "Add at least one conditional render (e.g. an empty state, an error message, or a toggle)."
      - "Render a list with .map() and stable keys — no warnings in the console."
      - "Deploy to Vercel: npm install -g vercel, then vercel --prod in the project root. Paste the live URL into your portfolio."
    stuck: "Completely stuck on where to start? Write the data first: what JavaScript object or array represents the app's state? Once the data shape is clear, the component tree almost draws itself."
    resources:
      - label: "React — Thinking in React"
        url: "https://react.dev/learn/thinking-in-react"
      - label: "React — Learn (full guide)"
        url: "https://react.dev/learn"
      - label: "Scrimba — Learn React (free)"
        url: "https://scrimba.com/learn/learnreact"
project:
  title: "An interactive React mini-app"
  brief: "Build a component-based interactive app — e.g. a quiz, a filterable product list, or a budget tracker — using props, state, events and lists. Choose something small enough to finish in a day but interesting enough to show a potential client. It should do one thing well."
  deploy: "Vercel"
  rubric:
    - "Broken into small reusable components — no single component doing everything"
    - "State managed with useState; no direct mutation of state variables"
    - "Lists rendered with stable, unique keys — zero key warnings in the console"
    - "At least one piece of conditional rendering (empty state, toggle, or error message)"
    - "No errors or warnings in the browser console"
milestone: false
proSkills: ["Proof-of-Work Portfolio"]
resources:
  - label: "React — Learn"
    url: "https://react.dev/learn"
  - label: "Vite — Getting Started"
    url: "https://vite.dev/guide/"
  - label: "Scrimba — Learn React (free)"
    url: "https://scrimba.com/learn/learnreact"
  - label: "The Odin Project — React"
    url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/react"
---

## React in one sentence

React is a JavaScript library for building UIs out of **components** — small, self-contained functions that each own a piece of the interface — so your app is a tree of pieces you can understand, reuse, and change independently.

## What problem React actually solves

Plain JavaScript can update a web page, but it does not help you *organise* the code for a complex UI. As apps grow, DOM-manipulation code becomes a tangle of "find this element, change that attribute, update this other thing" that nobody can follow. React replaces that tangle with a single rule: **describe what the UI should look like for a given state, and React figures out the DOM updates for you.** This is the declarative model. You stop thinking about *how* to change the UI and start thinking about *what it should show*.

Components are the unit of organisation. A Button, a Card, a SearchBar — each is a function. You compose them like Lego. When your designer hands you a mock-up, your first question is no longer "where do I put this code?" It's "which component owns this?"

## On tutorials and building

React has excellent official tutorials. Read them. Then close them and build something with a blank file open. The most common trap for React learners is staying in tutorial mode — always following along, never building alone. That feels productive but it isn't: you can follow a tutorial perfectly and still freeze on a blank project.

The structure here is deliberate: each day you first *learn* the concept, then *build along* with a guided exercise, then *build alone* with no instructions. That last step is where learning actually happens. Resist the urge to look up examples when you are building alone. Sit with the discomfort for ten minutes first. If you are still stuck after that, look up the concept — not someone else's finished code.

## AI as concept explainer, not component writer

AI tools can generate React components faster than you can type. That is precisely the danger for a learner. If you ask for a component and paste it in, you have learned nothing — and you won't be able to debug it when it breaks. Use AI the way you'd use a senior dev on Slack: ask *"why does useState re-render the component?"* not *"write me a useState counter."* Build the understanding first. The components come from you.
