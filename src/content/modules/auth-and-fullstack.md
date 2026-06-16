---
title: "Auth & the full-stack app"
focus: "Tie front-end, back-end, and database together — with real user accounts."
hours: 42
tech: ["Node.js", "Supabase"]
objectives:
  - "Explain authentication vs authorisation — and the difference between sessions, JWTs, and OAuth — in plain words."
  - "Add sign-up and login to a real app, with passwords stored safely using hashing."
  - "Protect routes and data so each user can only access what belongs to them."
  - "Connect a React front-end to an API and a database with auth working end to end."
  - "Deploy the full stack and handle secrets, HTTPS, and input validation like a professional."
days:
  - n: 1
    topic: "Auth concepts: hashing, sessions, JWTs, OAuth"
    learn: "How authentication actually works under the hood — and why plain-text passwords are a career-ending mistake."
    build: "Trace the login flow for a real app using DevTools; read a decoded JWT at jwt.io and map its parts to the spec."
    assignment: "Write a one-page plain-English explanation of the difference between sessions and JWTs — including one scenario where you'd choose each."
    time: "~8h"
    details: "Authentication is about proving you are who you say you are; authorisation is about what you're allowed to do once you've proved it — most apps need both, and they're different problems. Passwords must never be stored as plain text: a one-way hashing function (bcrypt) turns 'hunter2' into an unreadable digest so that even if your database leaks, passwords aren't exposed. Sessions store a small ID in a cookie and look up the rest of the data server-side; JWTs pack all the claims into a self-contained signed token the client holds. OAuth is a different thing entirely — it lets users log in with Google or GitHub instead of creating yet another password."
    steps:
      - "Read the MDN 'Website security' article, focusing on the section on storing passwords."
      - "Go to jwt.io and paste in any sample JWT — map the three parts (header, payload, signature) to what you read."
      - "Open DevTools on any site you have an account with, go to Application → Cookies, and find the session or auth cookie."
      - "Read the OWASP Authentication Cheat Sheet section on password storage."
      - "In a scratch file, write pseudocode (no real code yet) for the sign-up flow: receive password → hash → store hash."
      - "Write pseudocode for the login flow: receive password → hash → compare with stored hash → issue token or session."
      - "Write your plain-English explanation for the assignment — no jargon allowed."
    stuck: "If JWT feels abstract, focus on the analogy: a session is a coat-check ticket (the real coat lives at the venue), a JWT is a laminated badge with your name and permissions printed on it (you carry everything). The trade-offs follow from that difference."
    resources:
      - label: "MDN — Website security"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security"
      - label: "OWASP — Authentication Cheat Sheet"
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
      - label: "jwt.io — JWT debugger and explainer"
        url: "https://jwt.io"
  - n: 2
    topic: "Implement sign-up and login"
    learn: "Supabase Auth from scratch: sign-up, login, logout, and how Supabase handles the hashing and token issuance for you."
    build: "Wire up Supabase sign-up and login in a small Node/Express app; test every path with curl or Postman before touching the front-end."
    assignment: "Add a /register and /login route to your API. Signing up must create a user in Supabase Auth; logging in must return a session token. Test both with a REST client — no UI yet."
    time: "~9h"
    details: "Supabase Auth is a managed auth service that handles bcrypt hashing, email confirmation, and JWT issuance out of the box — which means you get secure auth without having to implement the hard parts yourself. That doesn't mean you skip understanding it: read what Supabase does behind the scenes so you know what to do if you outgrow it. Today's rule is test-first, UI-second: prove your API works with curl or Postman before you build a single login form. This catches bugs fast, keeps your API and front-end concerns separate, and builds a professional habit."
    steps:
      - "Create a new Supabase project. Copy the project URL and anon key into a .env file — add .env to .gitignore immediately."
      - "In your Node/Express project, install @supabase/supabase-js and initialise the client using the env variables."
      - "Write a POST /register route: call supabase.auth.signUp with the email and password from the request body."
      - "Write a POST /login route: call supabase.auth.signInWithPassword and return the session token in the response."
      - "Write a POST /logout route that calls supabase.auth.signOut."
      - "Test each route with curl (or Postman/Insomnia). Sign up with a real email address, log in, confirm you get a token."
      - "Read the Supabase Auth docs page to understand what the token contains and how long it lasts."
    stuck: "Getting a 400 from Supabase? Log the full error object — supabase.auth.signUp returns { data, error }, and the error message usually tells you exactly what went wrong (invalid email format, user already registered, etc.)."
    resources:
      - label: "Supabase — Auth documentation"
        url: "https://supabase.com/docs/guides/auth"
      - label: "The Odin Project — NodeJS (auth)"
        url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs"
      - label: "OWASP — Authentication Cheat Sheet"
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
  - n: 3
    topic: "Protected routes and per-user authorisation"
    learn: "Middleware that verifies JWTs on every protected request; Row Level Security in Supabase so users can only touch their own rows."
    build: "Add an auth middleware to your Express app; enable RLS on a Supabase table and write policies."
    assignment: "Add a GET /me route that only works with a valid token. In Supabase, create a 'notes' table with RLS policies so each user can only read and write their own notes — test with two different accounts."
    time: "~9h"
    details: "Authentication proves who you are; authorisation enforces what you're allowed to do. In Express, middleware is the right place to check tokens — write it once, attach it to any route that needs protection. In Supabase, Row Level Security (RLS) is the database-layer enforcement: even if a bug in your API forgets to filter by user, the database refuses to return rows that don't belong to the authenticated caller. Both layers together are the professional pattern — never rely on just one. Testing with two accounts is not optional: it's the only way to be sure the walls are actually there."
    steps:
      - "Write an Express middleware function that reads the Authorization header, verifies the JWT using supabase.auth.getUser(), and attaches the user object to req.user."
      - "Attach the middleware to a new GET /me route and confirm it returns 401 without a token and 200 with a valid one."
      - "In the Supabase dashboard, create a 'notes' table with columns: id, user_id (references auth.users), content, created_at."
      - "Enable RLS on the table, then write a SELECT policy: auth.uid() = user_id."
      - "Write INSERT and DELETE policies using the same pattern."
      - "Add API routes for creating, reading, and deleting notes — each using the authenticated Supabase client from the request."
      - "Sign in as two different users and confirm each can only see their own notes."
    stuck: "RLS not blocking the second user's data? Make sure you're passing the user's JWT to the Supabase client on each request — using createClient with the user's token in the Authorization header, not the server-side service-role key. The service-role key bypasses RLS entirely."
    resources:
      - label: "Supabase — Auth documentation"
        url: "https://supabase.com/docs/guides/auth"
      - label: "OWASP — Authentication Cheat Sheet"
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
      - label: "The Odin Project — NodeJS (auth)"
        url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs"
  - n: 4
    topic: "Full-stack integration: front-end + API + database + auth"
    learn: "How the React front-end talks to your API — passing tokens in headers, managing auth state client-side, redirecting unauthenticated users."
    build: "Build a login form and a protected dashboard page in React; wire them to your existing API."
    assignment: "Connect your React front-end to your Node API. A logged-in user sees their notes; a logged-out visitor is redirected to login. The token must survive a page refresh."
    time: "~9h"
    details: "This is the day everything connects: the form posts credentials to your API, the API returns a JWT, the front-end stores it (localStorage is simple; an httpOnly cookie is more secure — pick one and understand the trade-off), and every subsequent API request includes it in the Authorization header. Managing auth state in React means deciding what to render before you know if the token is valid — a brief loading state, then either the app or the login page. Persisting the token across page refreshes is the specific thing most tutorials gloss over; tackle it intentionally today."
    steps:
      - "Create a login form component in React with email and password fields and a submit handler."
      - "On submit, POST to your /login API route and store the returned token in localStorage (or a cookie)."
      - "Create an AuthContext with React context and a useAuth hook; expose the current user and a logout function."
      - "On app load, read the token from storage and call GET /me to check if it's still valid — set the user state accordingly."
      - "Create a ProtectedRoute component that redirects to /login if there's no authenticated user."
      - "Wrap your notes dashboard in ProtectedRoute; confirm that reloading the page keeps you logged in."
      - "Add a logout button that clears the token and redirects to the login page."
    stuck: "Token lost on refresh? Check that you're reading from localStorage in a useEffect on mount (not during render, which runs before the DOM is available on some setups). Also verify the key name you're writing and reading matches exactly."
    resources:
      - label: "Supabase — Auth documentation"
        url: "https://supabase.com/docs/guides/auth"
      - label: "MDN — Website security"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security"
      - label: "The Odin Project — NodeJS (auth)"
        url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs"
  - n: 5
    topic: "Deploy the full stack + security checklist"
    learn: "Deploying front-end to Vercel and back-end to Render; environment variables in production; HTTPS, CORS, input validation, and no secrets in git."
    build: "Deploy both halves of your app; run through the security checklist until every item is green."
    assignment: "Your full-stack app must be live and publicly reachable. Run through every item on today's security checklist and fix anything that fails — then add the live URL and a short case study to your README."
    time: "~7h"
    details: "A full-stack app has more deployment moving parts than a static site — and more ways for secrets to leak. Environment variables must stay out of git, always (check with git log and git grep before every push). CORS must be configured so only your front-end domain can call your API. Input coming from the client must be validated and sanitised on the server — never trust the front-end. HTTPS is non-negotiable and free on both Vercel and Render. The case study in your README is not optional busywork: it's the thing that turns a project on GitHub into a portfolio piece a client can evaluate."
    steps:
      - "Push your front-end to a GitHub repo, import it on Vercel, and set the REACT_APP_API_URL environment variable to your Render URL."
      - "Push your back-end to a separate GitHub repo, create a new Web Service on Render, and add all environment variables (Supabase URL, anon key, any secrets) in the Render dashboard — never in your code."
      - "Configure CORS on your Express server to only allow requests from your Vercel front-end domain."
      - "Add server-side input validation to your register, login, and notes routes — reject empty fields and validate email format."
      - "Run git log and git grep -r 'SUPABASE\\|PASSWORD\\|SECRET' to confirm no secrets are committed anywhere in history."
      - "Open your live front-end URL, sign up, log in, create a note, log out, confirm the note is gone from view — then log back in and confirm it's still there."
      - "Write a 150-word case study in your README covering what the app does, the tech stack, the auth approach, and one thing you'd do differently next time."
    stuck: "CORS errors in the browser console? The error message will show the origin that was blocked — make sure the origin string in your Express cors() config matches your Vercel URL exactly, including https:// and without a trailing slash."
    resources:
      - label: "Supabase — Auth documentation"
        url: "https://supabase.com/docs/guides/auth"
      - label: "MDN — Website security"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security"
      - label: "OWASP — Authentication Cheat Sheet"
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
project:
  title: "A deployed full-stack app with accounts"
  brief: "Ship a complete app where users sign up, log in, and manage their own private data — front-end, API, database, and auth all deployed and live. This is your capstone: the first thing in your portfolio that demonstrates you can build a real, production-grade web application from end to end."
  deploy: "Vercel (front-end) + Supabase/Render (back-end)"
  rubric:
    - "Working sign-up and login — new users can register and returning users can authenticate"
    - "Passwords never stored in plain text — handled via Supabase Auth (bcrypt under the hood)"
    - "Users can only access their own data — enforced by both API middleware and Supabase RLS"
    - "The whole stack is deployed and publicly reachable via live URLs"
    - "No secrets committed to git — verified by git grep before final push"
    - "A README with a live URL, tech stack overview, and a short case study"
milestone: true
proSkills: ["Proof-of-Work Portfolio", "AI-Leverage & Defensibility"]
resources:
  - label: "Supabase — Auth documentation"
    url: "https://supabase.com/docs/guides/auth"
  - label: "MDN — Website security"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security"
  - label: "The Odin Project — NodeJS (auth)"
    url: "https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs"
  - label: "OWASP — Authentication Cheat Sheet"
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html"
---

## The module in one sentence

Authentication is the skill that separates "I can build UIs" from "I can build real products"
— and this week you'll build one, deploy it, and put it in your portfolio with a live URL.

## What we're really learning

Most tutorials show you how to add auth to an existing starter. That's not this module.
Here you understand **why** every piece exists — because auth done wrong is how data
breaches happen, how user accounts get hijacked, and how client trust evaporates. The good
news: doing it right isn't much harder than doing it wrong, once you understand the model.

The mental model you're building is a chain: **the front-end collects credentials, the API
validates them, the database stores only what it's safe to store, and every subsequent
request proves identity by carrying a token.** Each link in that chain has a job, and
understanding each job means you can debug failures, explain your choices to a client, and
adapt when requirements change.

## The two things AI can and cannot do here

AI is genuinely useful in this module — for explaining error messages, generating
boilerplate middleware, and talking through trade-offs. Use it. But there are two things
to do yourself, without shortcuts:

First, **trace every flow manually** before you automate it. Step through sign-up, login,
and a protected request in your own words (or pseudocode) before you write a line of code.
Auth bugs are almost always conceptual, not syntactic — an AI can write you correct-looking
code that implements the wrong mental model.

Second, **run the security checklist yourself on Day 5.** Not "ask AI if my app is secure"
— open the terminal, run the grep, click the live URL, sign in as two different users.
Security is verified by evidence, not by confidence.

## Why this module is a milestone

By the end you'll have a live, full-stack application with real user accounts in your
portfolio. That's the threshold moment in a freelance career: the shift from "I can build
pages" to "I can build products." Every paid project from here involves some version of
what you built this week — auth, data isolation, deployment, secrets management. You've
done it once for real. Now you can do it for a client.
