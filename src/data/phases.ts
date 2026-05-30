/** The five arcs of the course. Drives roadmap colours + phase labels. */
export interface Phase {
  number: number;
  key: string;
  name: string;
  weeks: string;
  blurb: string;
  hex: string; // accent used on the roadmap timeline
}

export const phases: Phase[] = [
  {
    number: 0,
    key: 'launch',
    name: 'Launch Pad',
    weeks: 'Week 0',
    blurb: 'Set up your tools, accounts, and a how-to-learn mindset before any code.',
    hex: '#80705c',
  },
  {
    number: 1,
    key: 'foundations',
    name: 'Foundations',
    weeks: 'Weeks 1–4',
    blurb: 'Structure & style the web with HTML and CSS — and ship from day one.',
    hex: '#0f6f63',
  },
  {
    number: 2,
    key: 'javascript',
    name: 'JavaScript',
    weeks: 'Weeks 5–8',
    blurb: 'The engine: logic, the DOM, events, and live data from real APIs.',
    hex: '#d63c11',
  },
  {
    number: 3,
    key: 'tooling',
    name: 'Modern Tooling',
    weeks: 'Weeks 9–11',
    blurb: 'Move faster with Tailwind and Alpine — plus a jQuery legacy overview.',
    hex: '#b3760a',
  },
  {
    number: 4,
    key: 'capstone',
    name: 'Capstone',
    weeks: 'Week 12',
    blurb: 'Plan, build, and deploy a full project; launch your portfolio.',
    hex: '#8a3a5b',
  },
];

export const phaseByNumber = (n: number): Phase =>
  phases.find((p) => p.number === n) ?? phases[0];
