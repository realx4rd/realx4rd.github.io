---
title: "Portfolio projects that win clients"
focus: "Build the 2–3 real, deployed projects that prove you can deliver."
hours: 70
tech: ["React", "Node.js", "AI"]
objectives:
  - "Choose portfolio projects that match your niche and attract your ideal client."
  - "Build 2–3 real, polished, deployed projects that solve genuine problems."
  - "Write each up as a case study using the problem → approach → obstacle → measurable result format."
  - "Assemble a personal portfolio site that ties your work together."
  - "Meet a quality bar covering accessibility, performance, and clean GitHub repos with READMEs."
days:
  - n: 1
    topic: "Choose projects that sell"
    learn: "Why most developer portfolios fail to win work — and how to pick niche-aligned projects that a real client would pay to have built."
    build: "Map your chosen niche to 3–5 project ideas; apply the 'would a business pay for this?' test to each."
    assignment: "Write a one-paragraph pitch for each of your top two project ideas: who is the client, what problem does it solve, and what is the measurable outcome the client cares about?"
    time: "~3h"
    details: "The classic mistake is building what you find technically interesting rather than what a client would pay for. A to-do app demonstrates React; it does not demonstrate that you understand a business problem. The most powerful move at this stage — especially if you have zero paid work — is to find a local business (a cafe, a gym, a tradesperson) and offer to build something real for free. You get a live URL, a real brief, and a person who can say 'they built this for me.' That beats ten tutorial clones every time."
    steps:
      - "Write down your chosen niche in one sentence (e.g. 'I build web tools for independent personal trainers')."
      - "List five problems a business in that niche faces day-to-day. Think about bookings, payments, client communication, social proof, inventory — anything analog or broken."
      - "For each problem, sketch a one-screen solution you could build in 2–3 weeks."
      - "Apply the filter: would someone pay £200–£2 000 to have this built? If yes, it stays. If not, cut it."
      - "Pick your top two or three ideas. At least one should be something you could offer for free to a real business in exchange for permission to put it in your portfolio."
      - "Search GitHub and Frontend Mentor for prior art on each idea — not to copy, but to understand the complexity and spot gaps."
      - "Write your two-paragraph pitches (the Day 1 assignment) before you open any code editor."
    stuck: "Can't think of a niche? Start with the industry you know best from previous work or hobbies — that insider knowledge is your edge over other developers, and it makes choosing realistic projects much easier."
    resources:
      - label: "SelfEmployed — Portfolio without paid projects"
        url: "https://www.selfemployed.com/how-to-create-a-freelance-portfolio-without-paid-projects/"
      - label: "Frontend Mentor — free real-world briefs"
        url: "https://www.frontendmentor.io/"
  - n: 2
    topic: "Build project #1"
    learn: "How to plan → build → deploy a solo project without losing scope, momentum, or your mind."
    build: "Scaffold your first project from scratch, working through the plan you wrote yesterday."
    assignment: "Deploy project #1 to a live HTTPS URL and write a one-paragraph 'what went wrong and how I fixed it' entry in your build log."
    time: "~20h"
    details: "This is a multi-day build effort — twenty hours is realistic, not padded. Work in daily sessions with a clear stopping condition each day (e.g. 'today I finish the data layer'). The build log matters: noting an obstacle and its solution in real time gives you the raw material for your case study later and keeps you from re-solving the same problem twice. Deploy early — even a half-built version on a live URL means you're always one step from something real rather than one merge away from a vague 'coming soon' state."
    steps:
      - "Write a one-page spec: what the app does, who it's for, what the three core screens are, and what 'done' looks like."
      - "Identify the riskiest technical unknown (an API, a payment flow, a complex UI) and spike it first — prove it works before building around it."
      - "Scaffold the project (Vite + React, or your chosen stack) and push to a new GitHub repo with a README that describes the project."
      - "Deploy the empty scaffold to Vercel or Netlify immediately so the URL exists."
      - "Build the core feature first — the one thing the app must do — before any polish."
      - "Add real data or real API calls. Handle loading, error, and empty states."
      - "Polish: responsive layout, keyboard accessibility, meaningful page titles and meta descriptions."
      - "Final commit: run a Lighthouse audit in Chrome DevTools. Aim for Performance ≥ 80 and Accessibility ≥ 90."
    stuck: "Scope creep killing your momentum? Cut every feature that isn't the core problem. 'Version 2' is a real concept — ship a focused v1, then iterate. A live simple thing beats an unfinished complex thing every time."
    resources:
      - label: "Frontend Mentor — free real-world briefs"
        url: "https://www.frontendmentor.io/"
      - label: "Refactoring UI"
        url: "https://www.refactoringui.com/"
      - label: "FinalRound — GitHub developer portfolio"
        url: "https://www.finalroundai.com/articles/github-developer-portfolio"
  - n: 3
    topic: "Build project #2 — ideally AI-powered"
    learn: "How to integrate an AI API (or AI-adjacent feature) in a way that solves a real problem rather than adding it for the CV line."
    build: "Build and deploy your second project, incorporating an AI feature that the end user can actually feel."
    assignment: "Deploy project #2. Write a one-paragraph explanation of what the AI does, why a human alone would be slower or worse at it, and how you'd explain it to a non-technical client."
    time: "~20h"
    details: "An AI-powered project is increasingly what separates freelancers who get repeat work from those who don't — clients want someone who can bring modern tools to their problems, not just someone who can write JavaScript. But 'I used an API' is not enough. The project needs to demonstrate judgment: when to call the model, what prompt produces a useful result, how to handle when the AI is wrong or slow. If you already have a strong project #1 that isn't AI-powered, make project #2 the one that is. If both projects can be AI-powered naturally, even better."
    steps:
      - "Decide whether project #2 is a fresh idea or project #1 extended with an AI feature. Either is valid."
      - "Identify one specific place in the user journey where AI creates a step-change: summarisation, categorisation, generation, or extraction — not just a chatbot bolted on."
      - "Sign up for an AI API (OpenAI, Anthropic, or equivalent). Protect your API key server-side — never expose it in frontend code."
      - "Build a small Node.js backend (or a Vercel serverless function) to proxy the AI call. Test it with curl before touching the frontend."
      - "Integrate the AI call into the UI with a proper loading state — AI calls take 1–5 seconds and the user must know the app is working."
      - "Add a fallback: if the AI call fails, the app should still be usable. Never make AI a single point of failure."
      - "Deploy and run another Lighthouse audit. Commit a clean README with a GIF or screenshot showing the AI feature in action."
    stuck: "Uncertain which AI API to use? Start with whichever has the clearest documentation and a free tier — learning the integration pattern matters more than the provider at this stage. You can swap later."
    resources:
      - label: "Refactoring UI"
        url: "https://www.refactoringui.com/"
      - label: "Frontend Mentor — free real-world briefs"
        url: "https://www.frontendmentor.io/"
      - label: "FinalRound — GitHub developer portfolio"
        url: "https://www.finalroundai.com/articles/github-developer-portfolio"
  - n: 4
    topic: "Write the case studies"
    learn: "The problem → approach → obstacle → measurable result format that turns a GitHub repo into a client conversation."
    build: "Draft a case study for each project using a structured template — then cut every sentence that doesn't help a client understand your thinking."
    assignment: "Publish a case study for each project (300–500 words each) that ends with at least one number: time saved, error rate reduced, Lighthouse score, or business outcome."
    time: "~7h"
    details: "The case study is the highest-value thing you will do this module. Most developers write a description ('I built a React app that fetches from the OpenWeatherMap API'). That tells a client nothing. A case study tells a story: here was the client's problem, here is how I approached it, here is the obstacle I hit halfway through and how I resolved it, here is the measurable result. The obstacle paragraph is the most important one — it proves you can troubleshoot, not just follow tutorials. Numbers are non-negotiable: a Lighthouse score, a percentage improvement, a line count reduced, anything concrete. If you don't have a client outcome yet, instrument your own project and report on it."
    steps:
      - "Open a blank document for each project."
      - "Write the Problem paragraph first: what situation prompted this project, who has this problem, and what was the pain before the solution existed?"
      - "Write the Approach paragraph: what technical decisions did you make and why? What alternatives did you consider and reject?"
      - "Write the Obstacle paragraph: what broke, what surprised you, what did you Google at 11pm? How did you resolve it? Be specific."
      - "Write the Result paragraph: what is measurably different because this project exists? Include at least one number."
      - "Add a screenshot or short screen-recording GIF of the working app."
      - "Cut every sentence you could apply to any project — keep only what is specific to this one."
      - "Ask someone who is not a developer to read it. If they are confused, rewrite the confusing part."
    stuck: "Struggling to find a number to report? Run a Lighthouse audit and cite the Accessibility and Performance scores. Even 'reduced form completion time from 4 steps to 1' is a measurable result — you set the baseline."
    resources:
      - label: "SelfEmployed — Portfolio without paid projects"
        url: "https://www.selfemployed.com/how-to-create-a-freelance-portfolio-without-paid-projects/"
      - label: "FinalRound — GitHub developer portfolio"
        url: "https://www.finalroundai.com/articles/github-developer-portfolio"
  - n: 5
    topic: "Assemble & polish your portfolio site"
    learn: "What makes a developer portfolio site actually convert — and how to clean up your GitHub so it reinforces rather than undermines your work."
    build: "Build or update your personal portfolio site to feature your projects and case studies, then audit every public GitHub repo for a clean README."
    assignment: "Publish your portfolio site at a custom domain or at yourname.vercel.app. Share the URL — it should take less than ten seconds for a visitor to understand who you are, what you build, and how to contact you."
    time: "~20h"
    details: "Your portfolio site has one job: get a potential client from 'found your link' to 'I want to talk to this person' in under thirty seconds. That means: a headline that names your niche (not 'full-stack developer' — that's everyone), your two or three projects with visible screenshots and a link to each case study, and a contact method that requires exactly one click. GitHub is the second thing any technical client checks. Pin your best repos, and make sure every pinned repo has a README that explains what the project is, how to run it locally, and a link to the live URL."
    steps:
      - "Decide: build your portfolio site with your existing stack (React + Vite) or use a simple static approach (plain HTML/CSS or a starter). The tech doesn't matter; the content does."
      - "Write the headline first. It should name your niche and the outcome you create: 'I build booking and scheduling tools for independent fitness professionals.'"
      - "Add a Projects section with a card per project: screenshot, project name, one-sentence description, and links to the live URL and case study."
      - "Add a short About section: who you are, what you've built, and why clients should trust you."
      - "Add a clear Contact section or button. An email link is fine. Don't hide it."
      - "Go to your GitHub profile. Write a profile README (create a repo named after your username). Add your headline, your niche, and links to your portfolio and your three best repos."
      - "Pin your three best repos. Update each README: project description, tech used, live URL, and how to run it locally."
      - "Deploy the portfolio site to Vercel or Netlify. If you have a custom domain, use it."
      - "Run Lighthouse on your portfolio site itself. Fix any Accessibility issues — this is the page clients see."
    stuck: "Portfolio site looking generic? The fastest fix is to add a real screenshot of your actual projects above the fold. Images of real work — even imperfect ones — are more convincing than any amount of copy."
    resources:
      - label: "FinalRound — GitHub developer portfolio"
        url: "https://www.finalroundai.com/articles/github-developer-portfolio"
      - label: "Refactoring UI"
        url: "https://www.refactoringui.com/"
      - label: "SelfEmployed — Portfolio without paid projects"
        url: "https://www.selfemployed.com/how-to-create-a-freelance-portfolio-without-paid-projects/"
project:
  title: "Your client-ready portfolio"
  brief: "Publish a personal portfolio site featuring 2–3 deployed projects, each with a written case study framed around the client outcome — not just 'I built X'."
  deploy: "Vercel/Netlify"
  rubric:
    - "2–3 deployed, working projects accessible at live HTTPS URLs"
    - "Each project has a case study that includes a measurable result"
    - "A personal portfolio site that ties the projects together with a clear niche headline and contact method"
    - "Clean GitHub repos with READMEs covering description, tech stack, live URL, and local setup"
    - "At least one project is directly aligned to your chosen niche"
milestone: false
proSkills: ["Proof-of-Work Portfolio", "Niche & Positioning", "AI-Leverage & Defensibility"]
resources:
  - label: "SelfEmployed — Portfolio without paid projects"
    url: "https://www.selfemployed.com/how-to-create-a-freelance-portfolio-without-paid-projects/"
  - label: "FinalRound — GitHub developer portfolio"
    url: "https://www.finalroundai.com/articles/github-developer-portfolio"
  - label: "Frontend Mentor — free real-world briefs"
    url: "https://www.frontendmentor.io/"
  - label: "Refactoring UI"
    url: "https://www.refactoringui.com/"
---

## The module in one sentence

This is the turning point — where you stop practicing skills and start
accumulating **proof** that you can solve real problems for real people.

## Why most portfolios don't win work

The average developer portfolio is a list of technologies and a gallery of
tutorial-clone apps. A client looking at it thinks: "OK, this person can follow
instructions." That is not the same as "I want to hire this person."

What wins work is specificity. A project that solves a problem a client
**recognises from their own life**. A case study that shows you can **think
through a problem**, hit an obstacle, and come out the other side with something
working. A portfolio site that answers the question "why this person?" in under
thirty seconds.

The 70 hours in this module are heavy — intentionally so. This is building
time, not learning time. You are not consuming content; you are creating
artefacts that will represent you to strangers on the internet. Treat each
project like a client paid for it, because the next one might.

## The free build for a local business

If you have no paid work yet, this is the single highest-leverage thing you can
do: find a local business whose website is broken or missing, offer to fix or
build it for free in exchange for a brief testimonial and permission to include
it in your portfolio.

You get a real brief, a real deadline, a real person to answer to, and a real
URL with a real business's name attached. That is worth more than five polished
personal projects, because it proves you can work with a client — which is
exactly what the next client needs to know before hiring you.

## Using AI on this module

AI is welcome here — this module is partly about demonstrating that you can
use it. But use it for the right things. AI is an excellent first-draft reviewer
("what would make this case study more specific?"), a debugging partner when
you're stuck on a Node.js serverless function at midnight, and a useful second
opinion on whether your project idea is genuinely client-valuable.

Do not use it to write your case studies for you. A case study written by AI
reads like one — and a client who has seen a few of them will notice. The
specific obstacles you hit, the exact line in the Node.js docs that unblocked
you, the moment you realised the scope was wrong and cut a feature — those are
yours. Write them yourself. They are the most valuable part.
