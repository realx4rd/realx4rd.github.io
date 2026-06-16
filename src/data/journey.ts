/**
 * The Freelancer Journey — the multi-year arc layered on top of the 12-week course.
 *
 * Year 1 is the deep, full FOUNDATION (~900 hrs ≈ 6 months at full-time pace) that takes a
 * complete beginner to genuinely market-ready BEFORE going pro. Years 2–4 are previews of
 * the long climb.
 *
 * This file is the single source of truth for the journey's STRUCTURE — phases, ordering,
 * pace, the freelance-readiness thread, milestones, and specialization lanes. Lesson CONTENT
 * lives in the two content collections:
 *   - src/content/weeks/*.md   → the reused 12-week course (Phases 0/2/3/4 technical core)
 *   - src/content/modules/*.md → the new foundation modules (everything else)
 */
import type { LinkResource } from '../types';

/* ── Pace ──────────────────────────────────────────────────────────────────── */

export interface Pace {
  label: string;
  hoursPerWeek: number;
  toGoPro: string; // human label, e.g. "~6 months"
  featured?: boolean; // the target pace
}

export const pace: Pace[] = [
  { label: 'Casual', hoursPerWeek: 10, toGoPro: '~18 months' },
  { label: 'Part-time', hoursPerWeek: 20, toGoPro: '~9 months' },
  { label: 'Full-time', hoursPerWeek: 35, toGoPro: '~6 months', featured: true },
  { label: 'Intensive', hoursPerWeek: 45, toGoPro: '~4.5 months' },
];

/* ── Year-1 foundation phases ──────────────────────────────────────────────── */

/** A reference into one of the two content collections, in journey order. */
export type PhaseItem =
  | { kind: 'week'; week: number } // reused course week (links to /weeks/N)
  | { kind: 'module'; slug: string }; // new module (links to /foundation/slug)

export interface FoundationPhase {
  key: string;
  number: number;
  name: string;
  hours: number;
  blurb: string;
  hex: string; // accent on the timeline (inline style, not a Tailwind class)
  items: PhaseItem[];
}

export const year1Phases: FoundationPhase[] = [
  {
    key: 'launch',
    number: 0,
    name: 'Launch Pad & Mental Models',
    hours: 40,
    blurb:
      'Adopt a how-to-learn mindset, understand how computers and the web really work, and set up a real developer workshop — before any heavy code.',
    hex: '#80705c',
    items: [
      { kind: 'week', week: 0 },
      { kind: 'module', slug: 'how-the-web-works' },
    ],
  },
  {
    key: 'tools',
    number: 1,
    name: 'Workshop Tools',
    hours: 30,
    blurb:
      'Drive your machine like a pro from the command line, and version everything from day one with Git and GitHub.',
    hex: '#0a4f46',
    items: [
      { kind: 'module', slug: 'command-line' },
      { kind: 'module', slug: 'git-and-github' },
    ],
  },
  {
    key: 'structure-style',
    number: 2,
    name: 'Structure & Style',
    hours: 80,
    blurb:
      'Build accessible, responsive pages with semantic HTML and modern CSS — and ship them to the real internet.',
    hex: '#0f6f63',
    items: [
      { kind: 'week', week: 1 },
      { kind: 'week', week: 2 },
      { kind: 'week', week: 3 },
      { kind: 'week', week: 4 },
      { kind: 'module', slug: 'modern-css-and-accessibility' },
    ],
  },
  {
    key: 'javascript',
    number: 3,
    name: 'JavaScript, Deep',
    hours: 130,
    blurb:
      'Make pages think: logic, the DOM, events, and live data — then go beyond the basics into modern, professional JavaScript.',
    hex: '#d63c11',
    items: [
      { kind: 'week', week: 5 },
      { kind: 'week', week: 6 },
      { kind: 'week', week: 7 },
      { kind: 'week', week: 8 },
      { kind: 'module', slug: 'advanced-javascript' },
      { kind: 'module', slug: 'typescript-intro' },
    ],
  },
  {
    key: 'tooling-ship',
    number: 4,
    name: 'Modern Tooling & Ship',
    hours: 60,
    blurb:
      'Move faster with Tailwind and Alpine, then deploy real projects with confidence — environments, domains, and performance.',
    hex: '#b3760a',
    items: [
      { kind: 'week', week: 9 },
      { kind: 'week', week: 10 },
      { kind: 'week', week: 11 },
      { kind: 'week', week: 12 },
      { kind: 'module', slug: 'deploy-and-performance' },
    ],
  },
  {
    key: 'react',
    number: 5,
    name: 'React: Build Real Apps',
    hours: 110,
    blurb:
      'Step up to the industry-standard UI library: components, hooks, routing, and data — then build and ship a real single-page app.',
    hex: '#ad2f0a',
    items: [
      { kind: 'module', slug: 'react-fundamentals' },
      { kind: 'module', slug: 'react-hooks-and-data' },
      { kind: 'module', slug: 'react-app-project' },
    ],
  },
  {
    key: 'backend',
    number: 6,
    name: 'Backend: Node, APIs & Databases',
    hours: 130,
    blurb:
      'Build the server side: Node, REST APIs, a real database, and auth — so you can ship full-stack products, not just front-ends.',
    hex: '#8a3a5b',
    items: [
      { kind: 'module', slug: 'node-and-rest-apis' },
      { kind: 'module', slug: 'databases-and-data-modeling' },
      { kind: 'module', slug: 'auth-and-fullstack' },
    ],
  },
  {
    key: 'ai',
    number: 7,
    name: 'AI Engineering & Automation',
    hours: 150,
    blurb:
      'The differentiator: build with LLM APIs, engineer prompts, automate real workflows, and ship AI agents — the AI-resilient work that actually pays in 2026.',
    hex: '#d63c11',
    items: [
      { kind: 'module', slug: 'llm-apis-and-prompting' },
      { kind: 'module', slug: 'ai-features-in-apps' },
      { kind: 'module', slug: 'automation-n8n-make' },
      { kind: 'module', slug: 'ai-agents-and-rag' },
    ],
  },
  {
    key: 'portfolio',
    number: 8,
    name: 'Portfolio & Specialization Projects',
    hours: 120,
    blurb:
      'Build 3–4 substantial, deployed, case-studied projects in your chosen lane — the proof-of-work that actually wins clients.',
    hex: '#8a6d3b',
    items: [
      { kind: 'module', slug: 'portfolio-projects' },
      { kind: 'module', slug: 'capstone-ai-product' },
    ],
  },
  {
    key: 'go-pro',
    number: 9,
    name: 'Go Pro: Freelance Launch',
    hours: 60,
    blurb:
      'Turn skills into income: niche & positioning, profiles that convert, the outreach habit, pricing, proposals, and your first paid gig.',
    hex: '#6d2348',
    items: [
      { kind: 'module', slug: 'portfolio-and-positioning' },
      { kind: 'module', slug: 'profiles-and-outreach' },
      { kind: 'module', slug: 'pricing-proposals-first-gig' },
    ],
  },
];

/* ── The multi-year arc (Years 2–4 are preview only) ───────────────────────── */

export interface JourneyYear {
  year: number;
  key: string;
  name: string;
  tagline: string;
  detailed: boolean; // Year 1 is built; 2–4 are previews
  hex: string;
  outcomes: string[];
  targetIncome: string;
}

export const years: JourneyYear[] = [
  {
    year: 1,
    key: 'foundation',
    name: 'Foundation + Go Pro',
    tagline: 'Zero → market-ready, then land your first paid client.',
    detailed: true,
    hex: '#d63c11',
    outcomes: [
      'Build & deploy full-stack, AI-powered web apps',
      'A portfolio of real, case-studied projects',
      'Profiles live and first proposals sent',
      'Land your first paid work',
    ],
    targetIncome: 'First $ → first $1k month',
  },
  {
    year: 2,
    key: 'specialize',
    name: 'Specialize & Earn',
    tagline: 'Go deep in your lane and make freelancing consistent.',
    detailed: false,
    hex: '#8a3a5b',
    outcomes: [
      'Mastery of your chosen specialization',
      'Direct clients beyond marketplaces',
      'Consistent monthly income; first rate raise',
    ],
    targetIncome: '$1–3k / month',
  },
  {
    year: 3,
    key: 'scale',
    name: 'Scale',
    tagline: 'Stop trading hours for dollars — systematize and raise rates.',
    detailed: false,
    hex: '#b3760a',
    outcomes: [
      'Retainers & productized services',
      'Higher rates and selective clients',
      'Authority through content & referrals',
    ],
    targetIncome: '$3–6k / month',
  },
  {
    year: 4,
    key: 'authority',
    name: 'Authority & Leverage',
    tagline: 'Build leverage: products, a team, or premium positioning.',
    detailed: false,
    hex: '#0f6f63',
    outcomes: [
      'Own products or a small agency/subcontractors',
      'Premium positioning in a niche',
      'Income that compounds beyond your own hours',
    ],
    targetIncome: '$6k+ / month',
  },
];

/* ── The freelance-readiness thread (recurring pro-skills) ──────────────────── */

export interface ReadinessTheme {
  id: string;
  name: string;
  covers: string;
  starts: string; // human label, e.g. "Phase 0"
}

export const freelanceThread: ReadinessTheme[] = [
  {
    id: 'FR-1',
    name: 'Proof-of-Work Portfolio',
    covers: 'Niche-relevant case studies, a GitHub README-as-bio, and a simple personal site.',
    starts: 'Phase 0',
  },
  {
    id: 'FR-2',
    name: 'Niche & Positioning',
    covers: 'One buyer + one problem; a one-line positioning statement; resisting generalist drift.',
    starts: 'Phase 2',
  },
  {
    id: 'FR-3',
    name: 'Visibility & Pipeline',
    covers: 'The outreach habit, profiles that convert, content, and referrals.',
    starts: 'Phase 5',
  },
  {
    id: 'FR-4',
    name: 'Pricing & Money',
    covers: 'Rate-setting, the underpricing trap, deposits, invoicing, and simple contracts.',
    starts: 'Phase 8',
  },
  {
    id: 'FR-5',
    name: 'Client Comms & Delivery',
    covers: 'Proposals, scoping a statement of work, and defending against scope creep.',
    starts: 'Phase 9',
  },
  {
    id: 'FR-6',
    name: 'Reputation Compounding',
    covers: 'Testimonials at delivery, repeat/retainer work, and social proof loops.',
    starts: 'Phase 9',
  },
  {
    id: 'FR-7',
    name: 'AI-Leverage & Defensibility',
    covers: 'Deliver faster with AI, sell outcomes, and stay above the commodity layer.',
    starts: 'All phases',
  },
];

/* ── Milestone ladder (zero → first $1k/month) ─────────────────────────────── */

export interface Milestone {
  label: string;
  big?: boolean; // headline milestones
}

export const milestones: Milestone[] = [
  { label: 'First demoable skill' },
  { label: 'First portfolio piece live' },
  { label: 'First deployed full-stack app' },
  { label: 'First AI-powered project' },
  { label: 'Niche & positioning statement written' },
  { label: '3–5 portfolio pieces' },
  { label: 'Profile & personal site live' },
  { label: 'Outreach habit running' },
  { label: 'First proposal sent' },
  { label: 'First paid project', big: true },
  { label: 'First testimonial' },
  { label: 'First repeat or referral client' },
  { label: 'First rate raise' },
  { label: 'First $1k month', big: true },
  { label: 'First retainer / productized offer' },
];

/* ── Specialization lanes (AI is the primary path) ─────────────────────────── */

export interface Lane {
  key: string;
  name: string;
  primary?: boolean;
  blurb: string;
  demand: string; // a short, research-grounded demand note
  starter: LinkResource;
}

export const lanes: Lane[] = [
  {
    key: 'ai-automation',
    name: 'AI Automation & Engineering',
    primary: true,
    blurb:
      'Build AI workflows, agents, and integrations that save businesses real time and money. The spine of this foundation.',
    demand: 'Fastest-growing & AI-resilient — AI integration +178%, automation the #1 coding skill on Upwork.',
    starter: { label: 'roadmap.sh — AI & Data Scientist', url: 'https://roadmap.sh/ai-data-scientist' },
  },
  {
    key: 'web-ai',
    name: 'Web + AI Integration',
    blurb: 'Full-stack web apps with AI features baked in. The most durable, transferable path.',
    demand: 'Deepest market; the AI-integrated segment is growing fast.',
    starter: { label: 'roadmap.sh — Full Stack', url: 'https://roadmap.sh/full-stack' },
  },
  {
    key: 'ecommerce',
    name: 'E-commerce / Shopify',
    blurb: 'Stores that sell: setup, migration, apps, conversion. Money-adjacent, so clients pay readily.',
    demand: 'E-commerce management +130% YoY on Upwork.',
    starter: { label: 'Shopify — Dev docs', url: 'https://shopify.dev/docs' },
  },
  {
    key: 'uiux',
    name: 'UI/UX & Product Design',
    blurb: 'Design judgment: research, flows, and systems — not just pretty mockups.',
    demand: 'Design postings up ~60% in 2025; product/UX thinking is AI-resilient.',
    starter: { label: 'Refactoring UI', url: 'https://www.refactoringui.com/' },
  },
  {
    key: 'ai-video',
    name: 'AI-Assisted Video',
    blurb: 'Short-form video editing with AI tools, hooks, and a repurposing strategy.',
    demand: 'AI video generation & editing +329% — the single fastest-growing skill on Upwork.',
    starter: { label: 'CapCut — Creator resources', url: 'https://www.capcut.com/' },
  },
];

/* ── Derived helpers (used by the pages) ───────────────────────────────────── */

export const totalFoundationHours = year1Phases.reduce((s, p) => s + p.hours, 0);

/** All phase items flattened into one ordered list, each tagged with its phase. */
export const foundationSequence: { item: PhaseItem; phase: FoundationPhase }[] =
  year1Phases.flatMap((phase) => phase.items.map((item) => ({ item, phase })));

/** Find which phase a given module slug belongs to. */
export const phaseForModule = (slug: string): FoundationPhase | undefined =>
  year1Phases.find((p) => p.items.some((it) => it.kind === 'module' && it.slug === slug));

/** All module slugs referenced by the journey, in order (for stub-generation / sanity checks). */
export const allModuleSlugs: string[] = foundationSequence
  .map(({ item }) => (item.kind === 'module' ? item.slug : null))
  .filter((s): s is string => s !== null);
