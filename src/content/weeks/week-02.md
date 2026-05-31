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
    time: "~90 min"
    details: "Forms are how the web listens — logins, searches, checkouts, sign-ups. The key pairing is a label tied to an input: it tells assistive tech what each field is and lets users tap the label to focus the field. Different type values (email, password, number) also give users the right keyboard and some free validation."
    steps:
      - "Add a form element to your page."
      - "Add a text input with a label linked by matching for and id attributes."
      - "Add email and password inputs using the right type values."
      - "Add a textarea and a submit button."
      - "Click each label and confirm it focuses its field."
    stuck: "Clicking a label doesn't focus the input? The label's for attribute must exactly match the input's id."
    resources:
      - label: "MDN — The form element"
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"
      - label: "MDN — The input element"
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"
  - n: 2
    topic: "Accessibility basics & validation"
    learn: "Labels tied to inputs, meaningful alt text, colour contrast, visible focus, and native form validation."
    build: "Wire every input to a label, add required and type-based validation, and test with the keyboard."
    assignment: "Make your sign-up form fully keyboard-navigable with linked labels and required fields — no mouse allowed."
    time: "~90 min"
    details: "Accessibility (a11y) means everyone can use your site — including people on keyboards, screen readers, or low-vision settings. The basics are cheap and high-impact: real labels, enough colour contrast, visible focus outlines, and full keyboard operation. Build them in from day one rather than bolting them on later."
    steps:
      - "Put your mouse away and Tab through the form — every field should be reachable in order."
      - "Confirm a visible focus outline appears on each field as you Tab."
      - "Run your text and background colours through the WebAIM contrast checker, aiming for 4.5 to 1."
      - "Check every input has an associated label."
      - "Add the required attribute where it makes sense and fix the worst issue you found."
    stuck: "No focus outline visible? A CSS reset may have removed it — never set outline: none without providing a clear replacement focus style."
    resources:
      - label: "The A11Y Project — Checklist"
        url: "https://www.a11yproject.com/checklist/"
      - label: "WebAIM — Contrast Checker"
        url: "https://webaim.org/resources/contrastchecker/"
  - n: 3
    topic: "CSS syntax & selectors"
    learn: "What CSS is, the rule anatomy (selector, property, value), and how to link a stylesheet."
    build: "Create a styles.css, link it in the head, and target elements, classes, and ids."
    assignment: "Link a stylesheet to your form and give headings, inputs, and the button distinct styles."
    time: "~90 min"
    details: "CSS works by selecting elements and declaring how they look. The cascade and specificity decide which rule wins when several match the same element. Class selectors are the everyday workhorse — more reusable than styling by tag, less brittle than IDs. Get this model right and CSS stops feeling random."
    steps:
      - "Create styles.css and link it in the head with a link tag."
      - "Add a body rule setting font-family and a background colour."
      - "Style your form using a class selector such as .form."
      - "Give the inputs a shared class and style them consistently."
      - "Change one value, save, and confirm Live Server reloads."
    stuck: "Styles not applying? Check the link href path, then inspect the element in DevTools to see which rules actually match it."
    resources:
      - label: "MDN — CSS first steps"
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"
      - label: "MDN — CSS selectors"
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors"
  - n: 4
    topic: "Colours, units & typography"
    learn: "Colour formats (hex, rgb, hsl), units (px, rem, em, %), and font-family, size, weight, and line-height."
    build: "Set a readable base font, a sensible line-height, and an accessible colour palette."
    assignment: "Restyle your form's type and colours so all text comfortably passes a contrast check."
    time: "~90 min"
    details: "Colour, units, and type are the levers of visual design. px is fixed; rem and em scale with font size; % is relative. rem is the modern default for sizing because it respects the user's browser settings. A small, consistent set of colours and font sizes always looks more professional than many ad-hoc ones."
    steps:
      - "Pick a palette: one main colour, one accent, plus neutrals."
      - "Set a base font-size on the body and size everything else in rem."
      - "Choose a font pairing from Google Fonts and add the link tags in the head."
      - "Apply your palette and type scale to the form."
      - "Re-check contrast after the colour changes."
    stuck: "Google Font not loading? The font link tags must go in the head, above your own stylesheet link."
    resources:
      - label: "Google Fonts"
        url: "https://fonts.google.com/"
      - label: "Type Scale — a visual type calculator"
        url: "https://typescale.com/"
  - n: 5
    topic: "The box model"
    learn: "Content, padding, border, and margin — and how box-sizing keeps sizing sane."
    build: "Add padding inside inputs, spacing between fields, and a bordered card around the form."
    assignment: "Use the box model to space and frame your sign-up form into a tidy, breathable card."
    time: "~90 min"
    details: "Every element is a rectangular box with four layers: content, padding, border, and margin. Padding is space inside the border; margin is space outside it. Setting box-sizing: border-box makes width include padding and border, which makes layouts predictable — this one line prevents countless sizing headaches."
    steps:
      - "Add box-sizing: border-box to everything with a * selector."
      - "Build a .card with padding, a border, and a background."
      - "Add margin to space cards apart."
      - "Open DevTools and hover the box-model diagram to see each layer."
      - "Tweak padding versus margin and watch the difference."
    stuck: "Box wider than expected? Without border-box, width plus padding plus border add up — set box-sizing: border-box and measure again."
    resources:
      - label: "MDN — The box model"
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model"
      - label: "web.dev — Box model"
        url: "https://web.dev/learn/css/box-model"
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
