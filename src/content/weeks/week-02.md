---
week: 2
title: "Forms + CSS basics + accessibility"
focus: "Capturing real input and starting to style — accessibly from the very first line."
phase: "Foundations"
phaseNumber: 1
hours: 9
tech: ["HTML", "CSS"]
objectives:
  - "Build forms with the right inputs, labels, and native validation."
  - "Bake in accessibility from day one — linked labels, focus states, and colour contrast."
  - "Link a stylesheet and write CSS using selectors, colours, units, and typography."
  - "Explain and control the box model — content, padding, border, and margin."
  - "Style and ship an accessible sign-up form that anyone can use, including keyboard users."
days:
  - n: 1
    topic: "Forms & inputs"
    learn: "The form element, common input types, textarea, select, and the submit button."
    build: "Build a contact form with text, email, and message fields plus a submit button."
    assignment: "Create a sign-up form with name, email, password, and a 'sign me up' button — HTML only."
  - n: 2
    topic: "Accessibility basics & validation"
    learn: "Labels tied to inputs, meaningful alt text, colour contrast, visible focus, and native form validation."
    build: "Wire every input to a label, add required and type-based validation, and test with the keyboard."
    assignment: "Make your sign-up form fully keyboard-navigable with linked labels and required fields — no mouse allowed."
  - n: 3
    topic: "CSS syntax & selectors"
    learn: "What CSS is, the rule anatomy (selector, property, value), and how to link a stylesheet."
    build: "Create a styles.css, link it in the head, and target elements, classes, and ids."
    assignment: "Link a stylesheet to your form and give headings, inputs, and the button distinct styles."
  - n: 4
    topic: "Colours, units & typography"
    learn: "Colour formats (hex, rgb, hsl), units (px, rem, em, %), and font-family, size, weight, and line-height."
    build: "Set a readable base font, a sensible line-height, and an accessible colour palette."
    assignment: "Restyle your form's type and colours so all text comfortably passes a contrast check."
  - n: 5
    topic: "The box model"
    learn: "Content, padding, border, and margin — and how box-sizing keeps sizing sane."
    build: "Add padding inside inputs, spacing between fields, and a bordered card around the form."
    assignment: "Use the box model to space and frame your sign-up form into a tidy, breathable card."
project:
  title: "Styled, accessible sign-up / contact form"
  brief: "A real, working form that looks intentional and is usable by everyone — keyboard users, screen-reader users, and people with low vision included. Accessibility isn't a final polish step here; we build it in from the first line. This is the page you'll ship."
  deploy: "GitHub Pages"
  rubric:
    - "Every input has a label that is programmatically linked to it"
    - "The form is fully keyboard-navigable with a clearly visible focus state"
    - "All text meets a comfortable colour-contrast ratio"
    - "Spacing and framing are done deliberately with the box model"
    - "Pushed to GitHub and live on GitHub Pages"
milestone: false
proSkills: ["Accessibility", "Design rubric", "Git ritual"]
resources:
  - label: "MDN — Web forms"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms"
  - label: "MDN — CSS styling basics"
    url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"
  - label: "web.dev — Learn Accessibility"
    url: "https://web.dev/learn/accessibility"
  - label: "web.dev — Learn Forms"
    url: "https://web.dev/learn/forms"
---

## The week in one sentence

This week your pages start *doing* things — collecting input through forms — and start *looking* like something, with your first real CSS.

## What we're really learning

Forms are how the web listens. Every login, search box, and checkout is a form, so getting the fundamentals right matters more than almost anything else you'll learn early on. The secret most beginners miss: a `<label>` isn't decoration. When you link a label to its input, you make the form usable by screen readers *and* you grow the clickable area for everyone. Tiny effort, big payoff.

Then we open CSS. You'll link a stylesheet, learn the rule anatomy (selector, property, value), and meet the **box model** — the idea that every element is a box with content, padding, border, and margin. Once the box model clicks, spacing stops feeling like guesswork.

## Your accessibility thread starts here

This week we begin a **pro-skill** you'll carry through every remaining week: **accessibility**. From now on, "done" includes *usable by everyone*. That means labelled inputs, a visible focus ring you can see when you Tab, and text with enough colour contrast to read in real light. Build it in now and it becomes muscle memory — far easier than bolting it on later.

> **Honest note:** accessible code is just *better* code. It's clearer, more semantic, and search engines love it too.

## Shipping on Friday

You'll ship a styled, accessible sign-up form to GitHub Pages. Try it with your mouse hidden — Tab through it. If you can complete it with the keyboard alone, you've built something genuinely good. 🎉
