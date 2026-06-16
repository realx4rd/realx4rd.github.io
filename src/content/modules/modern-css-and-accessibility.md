---
title: "Modern CSS & accessibility"
focus: "Level up from 'it works' to professional, accessible, maintainable interfaces."
hours: 24
tech: ["CSS", "Accessibility"]
objectives:
  - "Use CSS custom properties as design tokens and modern units (clamp, min, max) for fluid, maintainable styles."
  - "Build layouts with container queries, :has(), and logical properties — and know when subgrid saves the day."
  - "Meet WCAG 2.1 AA basics: colour contrast, keyboard navigation, visible focus, and semantic structure."
  - "Build accessible forms and interactive components using ARIA only where native HTML falls short."
  - "Apply a type scale, spacing system, and colour palette — then audit with Lighthouse and axe and fix what fails."
days:
  - n: 1
    topic: "CSS custom properties & modern units"
    learn: "What CSS custom properties (variables) are, how the cascade handles them, and how clamp(), min(), and max() replace magic numbers with fluid, self-adjusting values."
    build: "Convert a plain CSS file to use custom properties for colours, spacing, and font sizes; replace at least one fixed px value with a clamp() call."
    assignment: "Set up a :root block with at least six custom properties (two colours, two spacing steps, two font sizes). Replace every hard-coded colour in a stylesheet with var(). Then write one font-size rule using clamp() so the heading scales between two sizes without a media query."
    time: "~4h"
    details: "Custom properties are not pre-processor variables — they live in the cascade, which means a component can override them locally without touching global styles. That is what makes them powerful as design tokens. Pair them with clamp(minimum, preferred, maximum) and you get fluid typography and spacing that adapts to any viewport with a single line — no breakpoints needed. min() and max() round out the trio for clamping widths or padding in different situations."
    steps:
      - "Open your project's main CSS file and add a :root { } block at the top."
      - "Define a colour palette: --color-brand, --color-text, --color-bg, --color-muted."
      - "Define a spacing scale: --space-sm: 0.5rem; --space-md: 1rem; --space-lg: 2rem; --space-xl: 4rem."
      - "Define two font sizes: --text-base: 1rem; --text-lg: 1.25rem."
      - "Search the file for every hard-coded hex, rgb(), or named colour and swap it to the matching var()."
      - "Find the largest heading rule and change font-size to clamp(1.75rem, 5vw, 3rem) — test by resizing the browser."
      - "Try min() for a container: width: min(65ch, 100%); — it picks whichever is smaller."
    stuck: "var() showing the wrong value? Check that the property is defined on :root or a parent — custom properties are inherited but do not reach up the tree, only down."
    resources:
      - label: "MDN — Using CSS custom properties"
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
      - label: "web.dev — Learn CSS (custom properties chapter)"
        url: "https://web.dev/learn/css"
  - n: 2
    topic: "Modern layout: container queries, :has(), logical properties"
    learn: "Container queries (so components respond to their own width, not the viewport), the :has() relational selector, logical properties (margin-inline, padding-block), and a brief overview of CSS subgrid."
    build: "Add a @container rule to a card component so it reflows at a container-defined breakpoint, not a viewport one; use :has() to style a list item differently when its checkbox is checked."
    assignment: "Take a card component that currently uses a media query. Wrap it in a container context (container-type: inline-size), replace the media query with an @container rule, and confirm the card reflows when its container shrinks — even if the viewport stays wide. Then add one :has() rule of your choice."
    time: "~5h"
    details: "Media queries answer 'how wide is the viewport?' — but a card in a sidebar and the same card in a full-width grid need different breakpoints despite living on the same page. Container queries solve this by letting a component ask 'how wide am I?' instead. :has() is the long-missing parent selector: it lets you write .form:has(input:invalid) to style the whole form when any input fails validation. Logical properties (margin-inline-start instead of margin-left) make layouts that work in right-to-left languages without extra code — a small habit with a big payoff."
    steps:
      - "Pick a card or panel component that uses a media query to switch from stacked to side-by-side."
      - "Add container-type: inline-size to the card's parent wrapper in CSS."
      - "Replace the @media (min-width: ...) rule with @container (min-width: 400px) and confirm the reflow."
      - "Add a second card in a narrow sidebar and watch it reflow independently of the first."
      - "Add a checkbox inside a list item, then write li:has(input:checked) { opacity: 0.5; } and test it."
      - "Replace two or three margin-left / padding-right rules with margin-inline-start and padding-inline-end."
      - "Skim the MDN subgrid article — note where it helps columns inside a nested grid align to the outer grid's tracks."
    stuck: "Container query not triggering? Make sure container-type is on the parent element, not the card itself, and that you are resizing the container — not the viewport."
    resources:
      - label: "MDN — CSS container queries"
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries"
      - label: "web.dev — Learn CSS (container queries)"
        url: "https://web.dev/learn/css"
      - label: "MDN — :has() selector"
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
  - n: 3
    topic: "Accessibility foundations: contrast, keyboard nav, focus"
    learn: "The four WCAG principles (POUR), colour contrast ratios, semantic HTML as the first line of defence, keyboard-only navigation, and :focus-visible."
    build: "Run the WebAIM Contrast Checker on your site's colour palette, fix any failures, then tab through your page from top to bottom and note every focus problem."
    assignment: "Audit your current project page for three things: (1) check every foreground/background colour pair against WCAG AA (4.5:1 for normal text, 3:1 for large text) using the WebAIM checker; (2) tab through the entire page without touching the mouse and write down every place focus is invisible or in the wrong order; (3) open the Accessibility tab in DevTools and read the computed name of three interactive elements."
    time: "~5h"
    details: "Accessibility is not a feature you add at the end — it is a quality standard. WCAG 2.1 AA is the baseline the industry expects and many legal frameworks require. Most failures are not exotic: wrong colour contrast, missing focus rings, and un-labelled buttons cover the vast majority. The most powerful tool is the one you already have: the Tab key. If you cannot operate a page entirely by keyboard, sighted keyboard users (and the millions who rely on keyboard access) are locked out. :focus-visible is the modern CSS answer — it shows a focus ring for keyboard users and suppresses it for mouse clicks, so you never need to write outline: none again."
    steps:
      - "List every colour pair in your design: text on background, link on background, button label on button colour."
      - "Paste each pair into the WebAIM Contrast Checker at webaim.org/resources/contrastchecker/ and note which fail AA."
      - "Fix failing pairs by darkening or lightening one colour — use the slider in the checker to find the nearest passing value."
      - "Open your page in a browser, click somewhere before the first interactive element, and press Tab repeatedly — never touch the mouse."
      - "Note every element where you cannot see the focus ring, where focus order feels wrong, or where Tab skips something interactive."
      - "Add :focus-visible { outline: 3px solid var(--color-brand); outline-offset: 3px; } to your CSS and check every interactive element gets a visible ring."
      - "Open DevTools → Accessibility tab → click an element → read its computed name and role."
    stuck: "Focus ring still invisible? Check that no parent or global rule sets outline: none or outline: 0 without a :focus-visible guard. Search your CSS for outline: none and audit each one."
    resources:
      - label: "web.dev — Learn Accessibility"
        url: "https://web.dev/learn/accessibility"
      - label: "WebAIM Contrast Checker"
        url: "https://webaim.org/resources/contrastchecker/"
      - label: "The A11Y Project Checklist"
        url: "https://www.a11yproject.com/checklist/"
  - n: 4
    topic: "ARIA & accessible components"
    learn: "The first rule of ARIA (do not use ARIA if you can use native HTML), roles, states, and properties; then build an accessible navigation and a disclosure (show/hide) component."
    build: "Mark up a navigation with aria-label and aria-current='page', then build a disclosure widget (<button> + hidden content) that is fully keyboard-operable with the correct aria-expanded state."
    assignment: "Build a small page with two components: (1) a site navigation where the current page link has aria-current='page' and the whole nav has a unique aria-label; (2) a disclosure widget — a button that reveals and hides a block of content — where aria-expanded on the button toggles between 'true' and 'false' in JavaScript, and the content panel uses hidden (not display: none) when closed. Tab through both and confirm a screen reader (VoiceOver on Mac, or NVDA on Windows — both free) announces them correctly."
    time: "~5h"
    details: "ARIA (Accessible Rich Internet Applications) lets you describe semantics that HTML cannot express on its own — but it only adds labels and descriptions to what the browser already exposes. It does not add keyboard behaviour. That means an ARIA button role on a div still will not respond to Enter and Space unless you wire that up in JavaScript — which is exactly why you should reach for a real <button> first. The first rule of ARIA is not a suggestion: every ARIA role you add is a commitment to maintain the correct states in code. For the patterns you will build most often — navigation, modals, disclosures, tabs — follow the ARIA Authoring Practices Guide exactly rather than inventing your own implementation."
    steps:
      - "Build a nav element with an aria-label (e.g., aria-label='Main navigation') so it is distinct from any other nav on the page."
      - "Add aria-current='page' to the link that matches the current URL — update it in code if your nav is shared across pages."
      - "Build a disclosure: a <button> and a <div> below it that starts hidden."
      - "Add aria-expanded='false' to the button and aria-controls pointing to the div's id."
      - "Write a small JS toggle: on click, flip aria-expanded, and add/remove the hidden attribute on the div."
      - "Tab to the button and press Enter — the content should reveal. Tab again — focus should move naturally to the revealed content."
      - "Open VoiceOver (macOS: Cmd+F5) and navigate to the button — confirm it announces 'collapsed' or 'expanded'."
    stuck: "VoiceOver not reading aria-expanded? Make sure the attribute is on the <button> itself, not a wrapper div. Also confirm you are updating the attribute value in JS — removing and re-adding the attribute is not the same as changing its value."
    resources:
      - label: "MDN — ARIA"
        url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
      - label: "web.dev — Learn Accessibility"
        url: "https://web.dev/learn/accessibility"
      - label: "The A11Y Project Checklist"
        url: "https://www.a11yproject.com/checklist/"
  - n: 5
    topic: "Design polish & accessibility audit"
    learn: "What a type scale is and why it matters, a simple spacing system built on a base unit, a cohesive colour palette, and how to run a full accessibility audit with Lighthouse and axe."
    build: "Install the axe DevTools browser extension, run it on your project, run a Lighthouse Accessibility audit, and work through every flagged issue."
    assignment: "Apply a type scale to your project (at minimum: a display size, h1–h3 sizes, and body text — defined as custom properties), lock your spacing to multiples of a base unit (e.g., 4px or 8px), then run Lighthouse and axe. Screenshot the Accessibility score before you start. Fix every critical and serious issue axe reports, re-run both tools, and screenshot the improved score. Your deliverable is the before-and-after screenshots plus a written list of what you fixed and why."
    time: "~5h"
    details: "Professional interfaces do not happen by accident — they follow a system. A type scale (e.g., a ratio of 1.25 between each step) means every font size is visually related, even if you cannot say exactly why. A spacing system built on a single base unit (4 or 8 px is the industry standard) means your margins, paddings, and gaps feel harmonious because they are mathematically consistent. Lighthouse gives you a top-line accessibility score and flags the most common WCAG failures; axe goes deeper and surfaces issues Lighthouse misses. Using both is the professional standard. The score is a lagging indicator — fix the real problems, and the number follows."
    steps:
      - "Define a type scale in :root — try the 1.25 ratio: --text-sm: 0.8rem; --text-base: 1rem; --text-lg: 1.25rem; --text-xl: 1.563rem; --text-2xl: 1.953rem; --text-3xl: 2.441rem."
      - "Define spacing steps as multiples of 4px: --space-1: 0.25rem; --space-2: 0.5rem; --space-4: 1rem; --space-8: 2rem; --space-16: 4rem."
      - "Apply the scale throughout: every font-size uses a --text-* variable, every margin and padding uses a --space-* variable."
      - "Install the axe DevTools extension from deque.com (free tier), open your page, click the extension, and run the analysis."
      - "Triage the results: Critical issues first (missing labels, missing alt text, contrast failures), then Serious, then Moderate."
      - "Open DevTools → Lighthouse → check Accessibility → Analyse page load. Screenshot the score."
      - "Fix every critical and serious issue, re-run both tools, and screenshot the improved results."
    stuck: "Lighthouse score not improving after fixes? Hard-reload the page (Shift+Reload) before re-running — Lighthouse audits the live DOM, and cached assets can mask your changes."
    resources:
      - label: "web.dev — Learn Accessibility"
        url: "https://web.dev/learn/accessibility"
      - label: "WebAIM Contrast Checker"
        url: "https://webaim.org/resources/contrastchecker/"
      - label: "The A11Y Project Checklist"
        url: "https://www.a11yproject.com/checklist/"
project:
  title: "Accessible, polished component set"
  brief: "Refactor an earlier project (or build a small component page) to a professional standard: design tokens via custom properties, a modern responsive layout, and full keyboard + screen-reader accessibility."
  deploy: "Netlify or Vercel"
  rubric:
    - "Uses CSS custom properties for a small design-token system (colours, spacing, type scale all defined in :root)"
    - "Passes WCAG AA colour contrast for all text and interactive elements"
    - "Fully keyboard-navigable with a visible :focus-visible ring on every interactive element"
    - "At least one container query or :has() rule in use"
    - "Lighthouse Accessibility score of 95 or above (screenshot submitted)"
milestone: false
proSkills: ["Accessibility", "Design eye", "Niche & Positioning"]
resources:
  - label: "MDN — Using CSS custom properties"
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
  - label: "web.dev — Learn CSS"
    url: "https://web.dev/learn/css"
  - label: "web.dev — Learn Accessibility"
    url: "https://web.dev/learn/accessibility"
  - label: "The A11Y Project Checklist"
    url: "https://www.a11yproject.com/checklist/"
  - label: "WebAIM Contrast Checker"
    url: "https://webaim.org/resources/contrastchecker/"
  - label: "MDN — ARIA"
    url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA"
---

## The module in one sentence

This module is the difference between CSS that *works* and CSS that a professional team would actually maintain — paired with the baseline accessibility knowledge that separates freelancers who get repeat work from those who don't.

## Why this, why now

You can already build layouts. Weeks 1–4 gave you the structure and the fundamentals. Now the question is: does it hold up under scrutiny? Can a colleague read your CSS in six months? Can a screen reader user navigate your nav? Can the page hold its own against a Lighthouse audit run by a client's developer?

Modern CSS has quietly closed the gap between "you need a design system and a team of engineers" and "one developer with good habits." Custom properties as design tokens, container queries for truly composable components, `clamp()` for fluid type — these are not tricks. They are the current professional baseline. Missing them does not make you a junior; it makes you slower and harder to work with.

Accessibility is not a nice-to-have. It is increasingly a legal requirement in many countries, and it is a genuine competitive advantage for a freelancer. Most agencies and in-house teams do it badly. If you can deliver an accessible site, you can charge for it — and you will get called back.

## The habit this module builds

Every time you open a new CSS file: start with `:root`. Design tokens first, components second. And every time you finish a feature: tab through it with a keyboard before you call it done. These two habits alone will put you ahead of the majority of working front-end developers.

## A word on AI and accessibility

AI coding assistants are genuinely useful for CSS — they are reasonably good at suggesting custom property structures, generating type scales, and explaining WCAG criteria. What they cannot do is tell you whether your site actually *feels* accessible to a keyboard user, or whether a screen reader announces your component correctly. For that, you have to use the tools: Tab key, VoiceOver, axe, Lighthouse. Use AI to help you understand what you are building; use the real tools to verify it works.
