---
week: 1
title: "HTML + web literacy"
focus: "How the web actually works — and your first semantic, shippable pages."
phase: "Foundations"
phaseNumber: 1
hours: 9
tech: ["HTML"]
objectives:
  - "Explain in plain words how the web, browsers, and HTTP fit together."
  - "Structure a page with semantic HTML instead of div soup."
  - "Write accessible links, lists, and images with meaningful alt text."
  - "Know when a table is the right tool — and when it isn't."
  - "Ship your very first page to the internet on GitHub Pages."
days:
  - n: 1
    topic: "How the web actually works"
    learn: "Clients, servers, HTTP, and what a browser really does with an HTML file."
    build: "Trace what happens when you visit a URL; use View Source on a real site."
    assignment: "In your own words, write a five-step explanation of what happens when you load a web page."
  - n: 2
    topic: "Semantic structure"
    learn: "The HTML skeleton and semantic elements: header, nav, main, section, article, footer."
    build: "Rebuild a page outline using semantic tags instead of a pile of divs."
    assignment: "Mark up a short news article using only semantic elements — zero generic divs."
  - n: 3
    topic: "Text, links & navigation"
    learn: "Heading hierarchy, paragraphs, lists, and anchor links (internal and external)."
    build: "Add a clear heading hierarchy and a nav that links between two pages."
    assignment: "Build a tiny 2-page site (Home + Contact) joined by a shared nav."
  - n: 4
    topic: "Images, lists & attributes"
    learn: "The img element, attributes, and writing alt text that actually helps."
    build: "Add images with descriptive alt text and a figure with a figcaption."
    assignment: "Make a 'three favourite things' page with captioned images and meaningful alt text."
  - n: 5
    topic: "Tables & your bio page"
    learn: "When a table is the right tool (data, not layout) — then review everything."
    build: "Assemble a simple bio page that combines the week's elements."
    assignment: "Draft the content and structure for your About Me page (this week's project)."
project:
  title: "Your 'About Me' page"
  brief: "A single, semantic, content-rich page that introduces you to the world — no CSS yet. We structure first and make it beautiful in later weeks. This is the page you'll ship to the internet."
  deploy: "GitHub Pages"
  rubric:
    - "Uses semantic elements (header / main / section / footer) — no layout tables"
    - "Has a clear heading hierarchy with exactly one h1"
    - "Every image has meaningful alt text"
    - "Includes at least one internal and one external link"
    - "Pushed to GitHub and live on GitHub Pages"
milestone: false
proSkills: ["Git ritual", "How to learn", "Accessibility"]
resources:
  - label: "MDN — Structuring content with HTML"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"
  - label: "The Odin Project — HTML Foundations"
    url: "https://www.theodinproject.com/paths/foundations/courses/foundations"
  - label: "web.dev — Learn HTML"
    url: "https://web.dev/learn/html"
  - label: "GitHub Pages — Quickstart"
    url: "https://docs.github.com/en/pages/quickstart"
---

## The week in one sentence

HTML is the **structure** of every page on the web — and by Sunday you'll have written
your own and put it online for anyone in the world to see.

## What we're really learning

Beginners often skip *how the web works* and jump straight to tags. Don't — five minutes
of mental model saves you hours later. When you type a URL, your **browser** (the client)
asks a **server** for a file using a protocol called **HTTP**. The server sends back HTML,
and the browser turns those tags into the page you see. Everything else this course
covers — CSS, JavaScript, APIs — is just adding paint and electricity to this structure.

Then we focus on **semantic HTML**: using elements that *mean* something
(`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) instead of wrapping everything in
anonymous `<div>`s. Semantic markup is the foundation of **accessibility** (screen readers
rely on it), **SEO** (search engines read it), and your own sanity (it's far easier to
style and maintain).

## Your accessibility starter habit

We introduce one **pro-skill** this week that you'll apply forever: **meaningful `alt`
text**. Every image gets an `alt` that describes its content or purpose — or `alt=""` if
it's purely decorative. It costs seconds and makes your sites usable by everyone.

## Shipping on Friday

The best anti-quitting trick in existence: **see your work live on the real internet in
week one.** Your About Me page goes onto **GitHub Pages** at `yourname.github.io` — a free
URL you can send to friends and family. It won't be pretty yet (no CSS until next week),
and that's the point: structure first, style second. Be proud of the ugly version — it's
*on the internet* and you built it.

> **Heads up:** keep this About Me content. You'll restyle it with CSS, then Tailwind, and
> it may even become part of your final portfolio. Everything in this course compounds.
