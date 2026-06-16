---
title: "Node.js & REST APIs"
focus: "Build the server side — your own APIs that real apps can talk to."
hours: 44
tech: ["Node.js", "Express"]
objectives:
  - "Explain in plain words the difference between server-side and client-side, and what an API actually is."
  - "Install Node.js, run JavaScript outside the browser, and manage packages with npm."
  - "Build a REST API with Express: define routes, apply middleware, and return JSON."
  - "Design endpoints with correct HTTP methods (GET/POST/PUT/DELETE) and meaningful status codes."
  - "Validate incoming data, centralise error handling, and never leak secrets through environment variables."
  - "Test every endpoint with curl and Postman or Thunder Client before connecting a front-end."
days:
  - n: 1
    topic: "Node.js & npm — JavaScript off the browser"
    learn: "What Node is, how it differs from browser JavaScript, and how npm manages the packages your project depends on."
    build: "Install Node, run a one-line script with node, then scaffold a project with npm init and install your first package."
    assignment: "Write a Node script that reads a local JSON file and prints three fields from it to the console using fs.readFileSync — no browser, no HTML."
    time: "~7h"
    details: "Node.js is V8 (Chrome's JS engine) extracted from the browser and given access to the file system, network, and OS. Everything you already know about JavaScript — functions, objects, async/await — still applies; what changes is the runtime environment. npm (the Node Package Manager) ships with Node and lets you add open-source libraries with one command. Understanding the node_modules folder and package.json scripts now saves you enormous confusion later when you read every README in the wild."
    steps:
      - "Check whether Node is already installed: node --version and npm --version in your terminal."
      - "If missing, download the LTS installer from nodejs.org — install it, then re-run the version checks."
      - "Create a new folder (node-sandbox), cd into it, and run npm init -y to generate a package.json."
      - "Create index.js with one line: console.log('Hello from Node') and run it: node index.js."
      - "Install a tiny utility: npm install chalk (or any package). Open node_modules and package.json to see what changed."
      - "Add a start script to package.json: { \"start\": \"node index.js\" } and run npm start."
      - "Create a data.json file with a few key/value pairs, then update index.js to read and print them with require('./data.json') or fs.readFileSync."
    stuck: "npm install hanging or showing EACCES permission errors? Never use sudo with npm. Instead, follow the Node.js docs on fixing npm permissions — or switch to a version manager like nvm so Node lives in your home folder."
    resources:
      - label: "Node.js — Official Learn guide"
        url: "https://nodejs.org/en/learn"
      - label: "MDN — Express/Node intro (server-side)"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs"
      - label: "roadmap.sh — Backend developer roadmap"
        url: "https://roadmap.sh/backend"
  - n: 2
    topic: "Express basics — routing and middleware"
    learn: "What Express adds on top of Node's built-in http module, how routes map URLs to handler functions, and what middleware is and why you stack it."
    build: "Start an Express server on port 3000, add three routes that return different JSON responses, and add morgan (or a manual log) as middleware."
    assignment: "Add a /hello route that returns { message: 'Hello, world' } and a /about route that returns a JSON object with your name and today's date — then curl both from the terminal to confirm."
    time: "~7h"
    details: "Express is a thin wrapper around Node's http module that adds a clean API for routing (matching URLs to handler functions) and middleware (functions that run before your route handler and can modify the request or response). Almost every Express app follows the same shape: create an app, register middleware, define routes, and listen on a port. Understanding the req and res objects — and that they are just Node's IncomingMessage and ServerResponse with extras — means you can always read the source when Express feels mysterious."
    steps:
      - "Inside a new folder, run npm init -y, then npm install express."
      - "Create server.js. Import express: const express = require('express'); const app = express();"
      - "Add app.use(express.json()) as the first middleware line — this parses JSON request bodies automatically."
      - "Define a GET route: app.get('/', (req, res) => res.json({ status: 'ok' }));"
      - "Start the server: app.listen(3000, () => console.log('Listening on port 3000'));"
      - "Run node server.js, then in a second terminal run curl http://localhost:3000 to see the JSON."
      - "Add two more routes (/hello and /about), test each with curl, then stop the server with Ctrl+C."
    stuck: "Port already in use? Another process owns 3000. Run lsof -i :3000 (macOS/Linux) or netstat -ano | findstr 3000 (Windows) to find the PID, then kill it — or just change your listen port to 3001."
    resources:
      - label: "Express — Getting started guide"
        url: "https://expressjs.com/en/starter/installing.html"
      - label: "MDN — Express/Node intro (server-side)"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs"
      - label: "Node.js — Official Learn guide"
        url: "https://nodejs.org/en/learn"
  - n: 3
    topic: "RESTful design — methods, resources, status codes"
    learn: "What REST means in practice: resource URLs, the four HTTP methods (GET/POST/PUT/DELETE) and when to use each, and which status codes mean what."
    build: "Design and implement a full set of CRUD routes for a single resource (e.g. /tasks) stored in a plain in-memory array."
    assignment: "Using Postman or Thunder Client, test all five routes (GET all, GET one, POST, PUT, DELETE) against your in-memory task API and take a screenshot showing each returning the correct status code."
    time: "~7h"
    details: "REST is not a protocol or a library — it is a set of conventions for designing URLs and using HTTP methods in a predictable way. A resource is a thing (tasks, notes, users). Its URL names the thing (/tasks), and the HTTP method says what to do with it: GET to read, POST to create, PUT/PATCH to update, DELETE to remove. Status codes are the server's short reply: 200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found, 500 Internal Server Error. Getting these right makes your API usable by anyone without reading documentation."
    steps:
      - "Plan your routes on paper first: GET /tasks, GET /tasks/:id, POST /tasks, PUT /tasks/:id, DELETE /tasks/:id."
      - "Declare let tasks = [] at the top of server.js to act as your temporary database."
      - "Implement GET /tasks: return the full array with res.json(tasks)."
      - "Implement POST /tasks: push a new object (with a generated id and req.body fields) into tasks and respond with res.status(201).json(newTask)."
      - "Implement GET /tasks/:id: use tasks.find(t => t.id === Number(req.params.id)), return 404 if missing."
      - "Implement PUT /tasks/:id: find the task, update its fields from req.body, return the updated object."
      - "Implement DELETE /tasks/:id: splice it from the array and respond with 204 and no body."
    stuck: "req.body is undefined? You are missing app.use(express.json()) before your routes — that one middleware line is the most common source of confusion in new Express apps."
    resources:
      - label: "MDN — Express/Node intro (server-side)"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs"
      - label: "roadmap.sh — Backend developer roadmap"
        url: "https://roadmap.sh/backend"
      - label: "Express — Getting started guide"
        url: "https://expressjs.com/en/starter/installing.html"
  - n: 4
    topic: "Request handling — params, query, body & validation"
    learn: "The three places data arrives in a request (route params, query strings, body), how to read each, and how to validate input before trusting it."
    build: "Add query-string filtering to your GET all route and write a simple validation function that checks required fields before accepting a POST."
    assignment: "Add a GET /tasks?done=true query filter to your API and a validation step on POST /tasks that returns 400 with a descriptive JSON error if the title field is missing or empty."
    time: "~7h"
    details: "User input is the most dangerous thing your server handles. Route params (:id) come from the URL path; query strings (?done=true) come from the URL after the ?; body fields come from the request payload. Never assume any of them are present or the right type — always validate. For small projects a manual check is fine; as projects grow you will reach for a library like zod or express-validator, but the habit of validating early and returning clear error messages is the skill, not the library."
    steps:
      - "Log req.params, req.query, and req.body in a test route to see what Express gives you raw."
      - "Update GET /tasks to check for a done query parameter: if (req.query.done !== undefined) filter tasks by their done field."
      - "Write a validate(body) function that returns an error string if title is missing or empty."
      - "Call validate inside your POST handler: if there is an error, return res.status(400).json({ error: errorString }) immediately."
      - "Test the happy path (valid body) and the sad path (missing title) with curl or Postman."
      - "Try passing a non-numeric id to GET /tasks/:id — notice what happens, then add a Number.isNaN guard that returns 400."
      - "Review: make sure every route that receives data validates it before using it."
    stuck: "Query param comes back as a string, not a boolean? Everything in req.query is a string — compare with === 'true', not === true. This trips up almost every developer the first time."
    resources:
      - label: "Express — Getting started guide"
        url: "https://expressjs.com/en/starter/installing.html"
      - label: "Node.js — Official Learn guide"
        url: "https://nodejs.org/en/learn"
      - label: "MDN — Express/Node intro (server-side)"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs"
  - n: 5
    topic: "Error handling, project structure & environment variables"
    learn: "How Express's centralised error handler works, how to split a growing server into files (routes, controllers), and how to use .env files to keep secrets out of your code."
    build: "Move your routes into a separate router file, add a catch-all error-handling middleware, and load your port from a .env file using dotenv."
    assignment: "Refactor your API so routes live in routes/tasks.js, add a 404 handler for unknown routes, wire up a five-argument (err, req, res, next) error middleware, and load PORT from .env — then confirm curl still works and your .env is in .gitignore."
    time: "~7h"
    details: "A flat server.js that handles everything works for twenty lines. At a hundred lines it becomes unmanageable. The fix is the same pattern every Express codebase uses: an express.Router() for each resource lives in its own file, route files are imported into server.js, and a single error-handling middleware at the very bottom catches anything thrown anywhere. Environment variables (via dotenv) keep ports, API keys, and database URLs out of your git history — a secret committed once is a secret compromised forever, even after you delete it."
    steps:
      - "Install dotenv: npm install dotenv. Create a .env file with PORT=3000 and add .env to .gitignore."
      - "At the top of server.js add require('dotenv').config() and replace the hard-coded port with process.env.PORT."
      - "Create a routes/ folder and a routes/tasks.js file. Move all task routes there using express.Router()."
      - "In server.js, import the router and mount it: app.use('/tasks', taskRouter)."
      - "After all routes in server.js, add a 404 handler: app.use((req, res) => res.status(404).json({ error: 'Not found' }))."
      - "Add the error-handling middleware (four parameters — Express uses the arity to detect it): app.use((err, req, res, next) => res.status(500).json({ error: err.message }))."
      - "Throw a test error in a route to confirm the middleware catches it, then remove the test throw."
    stuck: "Error middleware not catching anything? It must have exactly four parameters (err, req, res, next) and it must be registered after all your routes — Express uses both conditions to recognise it as an error handler."
    resources:
      - label: "Express — Getting started guide"
        url: "https://expressjs.com/en/starter/installing.html"
      - label: "Node.js — Official Learn guide"
        url: "https://nodejs.org/en/learn"
      - label: "roadmap.sh — Backend developer roadmap"
        url: "https://roadmap.sh/backend"
  - n: 6
    topic: "Connect a front-end & test the whole API"
    learn: "How to enable CORS so a browser front-end can call your API, how to use curl and Postman systematically, and a full review of everything built this week."
    build: "Add the cors package to your Express server, write a minimal HTML+fetch front-end that reads and creates tasks, and run the whole stack locally."
    assignment: "Ship the complete task API from Days 1–5 to Render or Railway (free tier), update your front-end fetch URL to the deployed address, and paste the live API URL into your project README with a table of endpoints."
    time: "~7h"
    details: "Browsers block cross-origin requests by default — CORS (Cross-Origin Resource Sharing) is the mechanism that tells a browser it is allowed to call your API from a different domain. The cors npm package adds the right response headers in one line. This review day is about closing the loop: a real front-end calling a real deployed server over the real internet is what you have been building toward. A well-documented README listing every endpoint, its method, expected body, and example response is also what separates a portfolio project from a homework exercise."
    steps:
      - "Install cors: npm install cors and add app.use(cors()) near the top of server.js."
      - "Create a simple index.html with a fetch call: fetch('http://localhost:3000/tasks').then(r => r.json()).then(console.log)."
      - "Open index.html in a browser and confirm the task list appears in the console."
      - "Add a form that POSTs a new task to your API and refreshes the list on success."
      - "Push your project to GitHub (make sure .env is in .gitignore and never committed)."
      - "Create a free account on Render or Railway, connect your repo, set PORT as an environment variable in their dashboard, and deploy."
      - "Update your front-end to use the deployed URL, and write a README listing every endpoint with method, path, body, and example response."
    stuck: "CORS error in the browser console even though you added the cors package? Make sure app.use(cors()) comes before your route definitions — middleware order in Express is execution order."
    resources:
      - label: "Express — Getting started guide"
        url: "https://expressjs.com/en/starter/installing.html"
      - label: "MDN — Express/Node intro (server-side)"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs"
      - label: "roadmap.sh — Backend developer roadmap"
        url: "https://roadmap.sh/backend"
project:
  title: "A REST API you built"
  brief: "Build a small but complete REST API (e.g. tasks, notes, or bookmarks) with full CRUD, validation and error handling, consumed by a simple front-end or tested in Postman."
  deploy: "Render or Railway (free tier)"
  rubric:
    - "Full CRUD with correct HTTP methods (GET/POST/PUT/DELETE) and appropriate status codes"
    - "Input validation on every route that accepts a body — missing or invalid fields return 400 with a clear message"
    - "Centralised error-handling middleware catches unexpected errors and returns 500 JSON (not a raw stack trace)"
    - "No secrets in the code — port and any keys loaded from environment variables via dotenv, .env in .gitignore"
    - "A README documenting every endpoint: method, path, request body, example response"
milestone: false
proSkills: ["Debug-first reflex", "Proof-of-Work Portfolio"]
resources:
  - label: "Node.js — Official Learn guide"
    url: "https://nodejs.org/en/learn"
  - label: "Express — Getting started guide"
    url: "https://expressjs.com/en/starter/installing.html"
  - label: "MDN — Express/Node server-side"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs"
  - label: "roadmap.sh — Backend developer roadmap"
    url: "https://roadmap.sh/backend"
---

## The module in one sentence

This is where you stop *consuming* APIs and start *building* them — writing the server-side code that other apps, browsers, and scripts call to get things done.

## What we're really learning

Most tutorials skip straight to Express routes and leave you confused about why any of it works. We start a layer below: **Node.js** is just JavaScript running outside a browser, with access to the file system and network. Once that clicks, Express is just a thin, sensible wrapper that adds routing and middleware. The pattern you learn here — resource URLs, HTTP methods, status codes, validation, error handling — is the same pattern used by APIs at every company on the internet. REST is not a framework; it is a set of conventions, and conventions are what make APIs predictable without documentation.

The hidden skill this module builds is the **debug-first reflex**. Servers are invisible — you cannot click them. Your debugging tools are your terminal (`console.log`, `curl`), your HTTP client (Postman or Thunder Client), and your error messages. Learning to read a stack trace, correlate a 500 response with the line that threw, and fix it systematically is worth more than memorising any API surface.

## Why the project matters more than the exercises

Every day's assignment keeps the API alive and growing. By Day 6 you have a deployed, documented API with a front-end consuming it. That is a **portfolio piece** — something you can link to, something interviewers can poke at, something you built without following a tutorial that handed you the answer. Document it properly (endpoint table, example curl commands, what it does and why) and it does more work for you than five tutorial completions ever could.

## AI as tutor, not as code vending machine

It is very easy to ask an AI to "write me an Express route that validates this input" and paste the result in. Resist — especially here. Server-side bugs are subtle, and code you paste without understanding will fail in ways you cannot diagnose. Instead, use AI to *explain* what you have written: *"Walk me through what happens when this error-handling middleware receives an error — step by step."* Write the code yourself, even slowly, then ask AI to review it. The understanding you build that way is the thing you will be selling to clients.
