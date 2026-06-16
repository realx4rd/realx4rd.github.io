---
title: "React hooks & data"
focus: "Side effects, real API data, forms, and sharing state across an app."
hours: 40
tech: ["React"]
objectives:
  - "Use useEffect correctly — including dependency arrays and cleanup — without triggering infinite loops."
  - "Fetch real API data and handle loading, empty, and error states in the UI."
  - "Build controlled forms with per-field validation and a clean submit flow."
  - "Share state sensibly across a component tree using lifting state up and Context."
  - "Extract repeated logic into a custom hook and add client-side routing with React Router."
days:
  - n: 1
    topic: "useEffect & the component lifecycle"
    learn: "What a side effect is, why useEffect exists, and how the dependency array controls when it runs."
    build: "Add a document title that updates with a counter, then add a cleanup function that cancels a timer."
    assignment: "Build a component that logs 'mounted' on mount, logs 'count changed' whenever a counter changes, and logs 'unmounted' on teardown — each in its own useEffect."
    time: "~8h"
    details: "A side effect is anything that reaches outside React's render cycle: setting the document title, starting a timer, subscribing to an event, or calling an API. useEffect is React's designated place for this work. The dependency array is the key to getting it right: an empty array [] means run once on mount; listing a value means run whenever that value changes; no array at all means run after every render — which is almost never what you want. Cleanup is the second half of the story: the function you return from useEffect runs before the next effect fires and before the component unmounts, preventing memory leaks and stale callbacks."
    steps:
      - "Create a Counter component with a useState count and a button to increment it."
      - "Add useEffect(() => { document.title = `Count: ${count}`; }, [count]) and verify the tab title updates on each click."
      - "Add a second useEffect with [] that console.logs 'Component mounted' — confirm it only fires once."
      - "Add a third useEffect that starts a setInterval logging every second, then return a cleanup function that clears it with clearInterval."
      - "Unmount the component (conditionally render it) and confirm the interval stops — check the console."
      - "Try removing the dependency array from the first effect and watch it fire on every render."
      - "Restore the array and make sure no console warnings remain."
    stuck: "Getting an infinite re-render loop? Your effect is almost certainly updating state that is also listed as a dependency — double-check the array and move the update logic to an event handler instead."
    resources:
      - label: "React — Synchronizing with Effects"
        url: "https://react.dev/learn/synchronizing-with-effects"
      - label: "React — You Might Not Need an Effect"
        url: "https://react.dev/learn/you-might-not-need-an-effect"
  - n: 2
    topic: "Fetching data"
    learn: "How to fetch from a real API inside useEffect, handle loading and error states, show an empty state, and clean up in-flight requests."
    build: "Fetch posts from JSONPlaceholder and render a loading spinner, an error message, an empty state, and the results — in that order."
    assignment: "Build a component that fetches a list of items from a public API, and displays four distinct UI states: loading, error, empty (when the list is genuinely empty), and success."
    time: "~8h"
    details: "Fetching data is the most common side effect in real apps, and it exposes several things that go wrong: the component unmounts before the fetch finishes (stale update), the API returns an empty array (an empty-state your UI must handle), and the network fails (an error your UI must handle). The pattern is always the same: three pieces of state — data, loading, error — set them in sequence inside useEffect. Cleanup matters here too: use an AbortController to cancel the fetch when the component unmounts, or track a boolean 'cancelled' flag, so you never call setState on an unmounted component."
    steps:
      - "Create a Posts component with three state variables: posts (array), loading (true), and error (null)."
      - "Inside useEffect with [], call fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')."
      - "Await .json(), set posts, set loading to false — wrap in try/catch and set error on failure."
      - "Render a spinner when loading is true, an error message when error is set, 'No posts found' when posts.length === 0, and the list otherwise."
      - "Add an AbortController: const controller = new AbortController(); pass { signal: controller.signal } to fetch, and return () => controller.abort() from useEffect."
      - "Test the abort by opening DevTools Network tab — you should see the request cancelled when you navigate away."
      - "Try the empty state: filter the API URL to a query that returns zero results and confirm your 'No posts found' message appears."
    stuck: "Seeing 'Can't perform a React state update on an unmounted component'? Add the AbortController cleanup described in step 5 — or use a cancelled flag and guard every setState call with if (!cancelled)."
    resources:
      - label: "React — You Might Not Need an Effect"
        url: "https://react.dev/learn/you-might-not-need-an-effect"
      - label: "React — Synchronizing with Effects"
        url: "https://react.dev/learn/synchronizing-with-effects"
      - label: "React — Managing State"
        url: "https://react.dev/learn/managing-state"
  - n: 3
    topic: "Forms"
    learn: "Controlled inputs, form state, per-field validation, and a clean submit flow."
    build: "Build a sign-up form with name, email, and password fields that validates on submit and shows inline errors."
    assignment: "Add a search field that updates a query state on every keystroke, validates that the query is at least two characters before triggering a search, and clears results when the field is emptied."
    time: "~8h"
    details: "A controlled input is one where React owns the value — you store it in state, pass it as value, and update it in onChange. This gives you total control: you can validate, transform, or block input at any point. The classic approach stores all field values in a single object (useState for the form) and a matching errors object. Validate in the submit handler — not on every keystroke — to avoid yelling at the user before they have finished typing. The one exception is a search field, where live feedback is the point."
    steps:
      - "Create a SignupForm component with a formData state: { name: '', email: '', password: '' }."
      - "Write one handleChange function that spreads the previous state and updates the field by event.target.name."
      - "Add three inputs, each with a name, value, and onChange={handleChange}."
      - "Add an errors state and a validate function that returns an errors object with a message for each invalid field."
      - "In the handleSubmit function, call validate — if there are errors, set them and return early; otherwise proceed."
      - "Render each error below its field using the errors object."
      - "After a successful submit, reset formData to empty strings and clear errors."
    stuck: "Input not updating? Confirm the name attribute on the input exactly matches the key in your state object — a mismatch means the state update targets a key that does not exist."
    resources:
      - label: "React — Managing State"
        url: "https://react.dev/learn/managing-state"
      - label: "React — Synchronizing with Effects"
        url: "https://react.dev/learn/synchronizing-with-effects"
  - n: 4
    topic: "Sharing state"
    learn: "When to lift state up versus when to use Context, and the trade-offs of each."
    build: "Lift a search query from a search box into a parent so a sibling results list can read it; then convert a theme toggle to Context so any component can read it."
    assignment: "Build a parent component that holds a favourites list, passes it and an addFavourite function down to a card component, and renders a summary count in a separate sibling — all reading from the same state."
    time: "~8h"
    details: "The moment two components need the same piece of state, you have two choices: lift it to their nearest common ancestor (the first tool to reach for), or put it in Context (the right tool when drilling props more than two levels deep or across many unrelated components). Lifting state is just moving useState to a parent and passing the value and its setter as props — simple, explicit, and easy to trace. Context lets any component in the tree read a value without threading props through every layer. Use it for genuinely global concerns — theme, locale, authenticated user — not for every shared value, or your app becomes hard to reason about."
    steps:
      - "Build a SearchBar component that accepts a query prop and an onQueryChange handler."
      - "Build a ResultsList component that accepts the same query prop and renders filtered results."
      - "Lift the query state into a parent App component that passes query and setQuery down to both."
      - "Confirm that typing in SearchBar updates ResultsList in real time."
      - "Create a ThemeContext with createContext and a ThemeProvider that holds a 'light'/'dark' toggle in state."
      - "Wrap App in ThemeProvider and consume the context in a Header component using useContext."
      - "Confirm the toggle updates the header without any prop drilling."
    stuck: "useContext returning undefined? Make sure the component consuming the context is a child of the Provider in the component tree — if it sits outside the Provider, it gets the default value you passed to createContext, which is often undefined."
    resources:
      - label: "React — Managing State"
        url: "https://react.dev/learn/managing-state"
      - label: "React — Reusing Logic with Custom Hooks"
        url: "https://react.dev/learn/reusing-logic-with-custom-hooks"
  - n: 5
    topic: "Custom hooks + client-side routing"
    learn: "How to extract stateful logic into a reusable custom hook, and how React Router adds URL-driven navigation to a single-page app."
    build: "Extract the fetch-with-loading-error pattern into a useFetch hook; add two pages and a nav using React Router."
    assignment: "Wire up React Router with at least three routes — a home page, a list page that uses your useFetch hook, and a detail page that reads an id from the URL — and add a nav that highlights the active link."
    time: "~8h"
    details: "A custom hook is just a function whose name starts with use and that calls other hooks. That simple rule lets you lift stateful logic out of components so it can be reused without repeating code. The useFetch pattern — three pieces of state, a useEffect that fetches, an AbortController cleanup — is the canonical first custom hook to write. React Router adds a router layer on top of React so different URL paths render different components; useParams reads dynamic segments from the URL; NavLink applies an active class to the current route's link automatically."
    steps:
      - "Create src/hooks/useFetch.js and move your three-state fetch pattern into it — it accepts a url and returns { data, loading, error }."
      - "Replace the inline fetch logic in your Posts component with const { data: posts, loading, error } = useFetch(url)."
      - "Confirm Posts still works exactly as before — the behaviour is identical, the logic is now reusable."
      - "Install React Router: npm install react-router-dom."
      - "Wrap your app in BrowserRouter and add three Route elements inside a Routes block."
      - "On the detail route, use useParams to read the id from the URL and fetch that single item."
      - "Add a Nav component with NavLink elements and confirm the active class updates on navigation."
    stuck: "Getting a blank page after adding routes? Make sure you have wrapped everything in BrowserRouter and that your Routes block has at least one Route with path='/' — a missing root route gives you nothing to render on the home URL."
    resources:
      - label: "React — Reusing Logic with Custom Hooks"
        url: "https://react.dev/learn/reusing-logic-with-custom-hooks"
      - label: "React Router — Installation"
        url: "https://reactrouter.com/start/library/installation"
      - label: "React — Managing State"
        url: "https://react.dev/learn/managing-state"
project:
  title: "A data-driven React app"
  brief: "Build an app that fetches from a real public API, lets the user search or filter the results, and includes a form with validation — all with proper loading and error handling and at least one custom hook. Ship it to Vercel."
  deploy: "Vercel"
  rubric:
    - "Data is fetched inside useEffect with visible loading and error states in the UI"
    - "A controlled form validates input and shows per-field error messages"
    - "State is shared sensibly — lifted to a common parent or placed in Context where appropriate"
    - "At least one custom hook extracts reusable logic (useFetch is a good start)"
    - "Multiple pages are connected with React Router, including a route that reads a URL parameter"
milestone: false
proSkills: ["Proof-of-Work Portfolio", "Debug-first reflex"]
resources:
  - label: "React — Synchronizing with Effects"
    url: "https://react.dev/learn/synchronizing-with-effects"
  - label: "React — You Might Not Need an Effect"
    url: "https://react.dev/learn/you-might-not-need-an-effect"
  - label: "React — Managing State"
    url: "https://react.dev/learn/managing-state"
  - label: "React — Reusing Logic with Custom Hooks"
    url: "https://react.dev/learn/reusing-logic-with-custom-hooks"
  - label: "React Router — Installation"
    url: "https://reactrouter.com/start/library/installation"
---

## The module in one sentence

Hooks are how React components **reach beyond rendering** — and this module is where your
apps stop being static demos and start talking to the real world.

## What we're actually learning

React's built-in hooks follow a strict mental model. `useState` owns a value; `useEffect`
runs code *after* the render and cleans up after itself; `useContext` reads a value from
anywhere in the tree. Get those three right and everything else — custom hooks, libraries
like React Query, even server components — becomes legible, because they all follow the
same logic.

The biggest source of confusion here is the **dependency array**. Think of it as a
declaration: *"re-run this effect when these things change."* An empty array says "run
once"; a populated array says "run when these values change"; no array at all says "run
every render" — a footgun you almost never want to pull. Spend real time on Day 1 before
writing a single fetch call. Every bug you prevent there saves you hours later.

**Data fetching** is the first real test. The pattern is always the same three pieces of
state — `data`, `loading`, `error` — and always cleaned up with an `AbortController`. Once
you have written it from scratch twice, you will extract it into a custom hook (Day 5), and
that hook becomes one of the most reusable things in your toolkit.

## Forms are not special — but they do have rules

Controlled forms feel like boilerplate until you need them to do something a native HTML
form cannot: live validation, conditional fields, async submit with error feedback. The
controlled-input pattern (React owns the value, `onChange` updates state) costs a few extra
lines upfront and pays back every time you need to do anything non-trivial. Validate on
**submit, not on every keystroke** — nobody wants to be told their email is invalid before
they have finished typing it.

## AI as a reviewer, not a form-builder

It is tempting to ask an AI to generate your form or your fetch logic for you. Resist — you
will not understand what it produced, and you will not be able to debug it when it breaks.
Use AI to **explain an error message** you do not understand, to **review your hook** for
missing cleanup, or to suggest an edge case you missed. The goal is to develop a
*debug-first reflex*: when something breaks, form a hypothesis before you reach for outside
help. Nine times out of ten you will find the issue yourself, and that muscle is worth more
than any generated snippet.
