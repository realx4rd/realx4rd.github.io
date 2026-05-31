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
    time: "~90 min"
    details: "Before tags, understand the system. Your browser (the client) asks a server for files over HTTP, the server responds, and the browser renders the HTML it gets back. Five minutes on this mental model saves hours later, because every bug you will ever debug happens somewhere along that request-and-response journey."
    steps:
      - "Open a real website, right-click, and choose View Page Source to see the raw HTML the server sent."
      - "Open DevTools, go to the Network tab, and reload the page."
      - "Watch the list of files the browser requests; click the first one."
      - "Read its Status (200 means OK) and Type (document)."
      - "Notice how one HTML file then pulls in more requests for CSS, images, and scripts."
    stuck: "If the Network tab is empty, reload the page while DevTools is open — it only records requests made after it opens."
    resources:
      - label: "MDN — How does the web work?"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work"
      - label: "MDN — What is HTTP?"
        url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview"
  - n: 2
    topic: "Semantic structure"
    learn: "The HTML skeleton and semantic elements: header, nav, main, section, article, footer."
    build: "Rebuild a page outline using semantic tags instead of a pile of divs."
    assignment: "Mark up a short news article using only semantic elements — zero generic divs."
    time: "~90 min"
    details: "Semantic HTML means using tags that describe what content is, not how it looks. A nav says this is navigation; a plain div says nothing. Screen readers, search engines, and your future self all rely on that meaning — and it makes styling far easier because your structure is already logical."
    steps:
      - "Start from the Emmet ! boilerplate in a fresh index.html."
      - "Add a header with the site title and a nav."
      - "Add a main containing one article with an h1 and a few paragraphs."
      - "Add a footer with a copyright line."
      - "Open DevTools and confirm the page uses real landmarks, not divs."
    stuck: "Unsure which tag to use? If nothing semantic fits, a div is fine — semantics is about using meaningful tags where they exist, not banning divs entirely."
    resources:
      - label: "MDN — Semantics (glossary)"
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
      - label: "web.dev — Learn HTML"
        url: "https://web.dev/learn/html"
  - n: 3
    topic: "Text, links & navigation"
    learn: "Heading hierarchy, paragraphs, lists, and anchor links (internal and external)."
    build: "Add a clear heading hierarchy and a nav that links between two pages."
    assignment: "Build a tiny 2-page site (Home + Contact) joined by a shared nav."
    time: "~90 min"
    details: "Headings (h1 to h6) create the outline of your page, and both search engines and screen readers use that outline to understand it. Links are what make it the web — the a element connects pages through its href, whether to another file in your project or a URL across the world."
    steps:
      - "Add a single h1, then h2 subsections beneath it in logical order."
      - "Write a couple of paragraphs and an unordered list."
      - "Create a second page named contact.html."
      - "Add a nav that links between index.html and contact.html using relative paths."
      - "Add one external link that opens a real website."
    stuck: "Link goes nowhere? Check the href is relative to the current file — contact.html, not /contact.html, unless you have set up a leading-slash root."
    resources:
      - label: "MDN — The anchor element"
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
      - label: "MDN — Creating hyperlinks"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links"
  - n: 4
    topic: "Images, lists & attributes"
    learn: "The img element, attributes, and writing alt text that actually helps."
    build: "Add images with descriptive alt text and a figure with a figcaption."
    assignment: "Make a 'three favourite things' page with captioned images and meaningful alt text."
    time: "~90 min"
    details: "Attributes configure elements: src tells an img which file to load, and alt describes it for people who cannot see it. Good alt text conveys the image's purpose in a few words; purely decorative images get an empty alt. Lists (ul and ol) give structure to any set of related items."
    steps:
      - "Add an img with a real src and write alt text that describes its meaning."
      - "Wrap an image and its caption in figure and figcaption."
      - "Add one unordered list and one ordered list."
      - "In DevTools, temporarily break the src and confirm the alt text appears."
      - "Restore the src and check the image loads."
    stuck: "Image not showing? The src path is almost always the culprit — check the filename spelling and capitalisation exactly match the actual file."
    resources:
      - label: "MDN — The image element"
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"
      - label: "web.dev — Images"
        url: "https://web.dev/learn/html/images"
  - n: 5
    topic: "Tables & your bio page"
    learn: "When a table is the right tool (data, not layout) — then review everything."
    build: "Assemble a simple bio page that combines the week's elements."
    assignment: "Draft the content and structure for your About Me page (this week's project)."
    time: "~90 min"
    details: "Tables are for tabular data — rows and columns that relate, like a schedule or a price list — never for page layout. This is also review day: you will combine headings, links, images, and lists into one coherent page that becomes the skeleton for this week's project."
    steps:
      - "Build a small table with thead, tbody, th headers, and tr and td rows."
      - "Start a new bio page with a semantic header, main, and footer."
      - "Add a short intro, a list of interests, and a captioned image."
      - "Add internal navigation and one external link."
      - "Validate the structure in DevTools: exactly one h1 and logical landmarks."
    stuck: "Table looks misaligned? Make sure every row has the same number of cells, and that headers use th while data cells use td."
    resources:
      - label: "MDN — The table element"
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
      - label: "MDN — HTML table basics"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"
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
