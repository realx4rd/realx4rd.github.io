# Click & Learn Academy

A free, non-profit course website that takes complete beginners from zero to shipping
real, responsive, interactive websites — in **3 self-paced months** (~120 hours).

The curriculum covers **HTML, CSS, JavaScript, Tailwind CSS, Alpine.js** and a brief
**jQuery** legacy overview, plus the "pro-skills" that turn a beginner into a developer:
Git/GitHub, browser DevTools, accessibility, design, SEO, deployment, and a responsible
**AI code-of-conduct** for 2026.

> The site is intentionally built with **Astro + Tailwind + Alpine** — the same stack the
> course teaches. It's a working demo of what students can build.

## Tech stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | [Astro 5](https://astro.build) | Content-first, ships ~zero JS, fast |
| Lessons | Markdown content collection | Maintainers edit prose, not code |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) | Utility-first; dogfoods the curriculum |
| Interactivity | [Alpine.js](https://alpinejs.dev) | Tiny, declarative (mobile nav, progress checklist) |
| Fonts | Fraunces · Hanken Grotesk · JetBrains Mono | Self-hosted via Fontsource |
| Hosting | **Cloudflare Pages** (free) | Unlimited bandwidth, free HTTPS, donation-safe |

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321
```

Other commands:

```bash
npm run build    # production build → ./dist
npm run preview  # preview the production build
```

Requires Node 18.17+, 20, or 22 (see `.nvmrc`).

## Project structure

```
src/
  content/weeks/      ← THE CURRICULUM. One Markdown file per week (week-00 … week-12)
  content.config.ts   ← the schema every week file must follow
  data/phases.ts      ← the 5 phase definitions (names, colours)
  layouts/            ← BaseLayout (head, SEO/OG, header, footer)
  components/         ← Header, Footer, Logo, TechBadge, ProgressChecklist
  pages/              ← index, roadmap, assignments, how-it-works, resources, 404
    weeks/[week].astro← renders each week from the content collection
  styles/global.css   ← design tokens (@theme), base styles, lesson prose
public/               ← favicon, og image, robots.txt
```

## Editing the course

**To add or change a lesson, you only edit Markdown** in `src/content/weeks/`.
See **[MAINTAINING.md](./MAINTAINING.md)** for the full guide — no framework knowledge needed.

## Deploy for free

### Cloudflare Pages (recommended)

1. Push this repo to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION = 22`
4. Deploy. Add your custom domain under **Custom domains** (free HTTPS is automatic).

Cloudflare Pages has **unlimited bandwidth** on the free plan and no "non-commercial only"
restriction — safe for a non-profit that may accept donations.

> **Before going live:** set your real domain in `astro.config.mjs` (`site:`) and in
> `public/robots.txt`, and replace `public/og.svg` with a 1200×630 PNG for best social
> previews. See MAINTAINING.md.

### GitHub Pages (simplest alternative)

Use the official Astro GitHub Pages Action — see
<https://docs.astro.build/en/guides/deploy/github/>. Note GitHub Pages forbids running an
"online business" on it, so keep it strictly educational.

**Avoid Vercel's free tier** for the public academy site — its 2026 Fair-Use policy bans
non-commercial-only sites and counts donations as commercial use.

## License

Course content and code are intended to be freely used and adapted for non-profit
educational purposes. Attribution to Click & Learn Academy is appreciated.
