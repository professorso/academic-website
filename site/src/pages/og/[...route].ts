// Dynamic OG image generator. One PNG per listed page, rendered at build time.
// Matches the site's dark aesthetic: black background, white Bebas-style title,
// gray subtitle, MIT-red accent bar.

import { OGImageRoute } from 'astro-og-canvas';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

type PageEntry = {
  title: string;
  description: string;
  subtitle?: string;
};

const pages: Record<string, PageEntry> = {
  index: {
    title: 'Eric So',
    subtitle: 'MIT Sloan · Applied AI',
    description:
      'Sloan Distinguished Professor of Global Economics and Behavioral Science at MIT Sloan.',
  },
  research: {
    title: 'Research',
    subtitle: 'Publications',
    description:
      'Published research across behavioral finance, applied AI, and regulatory policy.',
  },
  'working-papers': {
    title: 'Working Papers',
    subtitle: 'Research in Progress',
    description:
      'Current working papers on AI advisors, emergent LLM behaviors, and market frictions.',
  },
  media: {
    title: 'Media + Videos',
    subtitle: 'Talks and Press',
    description: 'Talks, interviews, and press coverage on AI, markets, and research.',
  },
  'the-collision': {
    title: 'The Collision',
    subtitle: 'Forthcoming Book',
    description:
      'What AI Does to Us — a book on AI, human judgment, and decision-making.',
  },
  data: {
    title: 'Resources',
    subtitle: 'Reading + Datasets',
    description:
      'Writing on AI in education and research datasets shared for teaching and reference.',
  },
  accessibility: {
    title: 'Accessibility',
    subtitle: 'Statement',
    description:
      'Accessibility commitments and WCAG 2.1 AA practices for this website.',
  },
};

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.subtitle
      ? `${page.subtitle}\n\n${page.description}`
      : page.description,
    bgGradient: [
      [8, 8, 12],
      [24, 24, 32],
    ],
    border: {
      color: [163, 31, 52], // MIT red
      width: 6,
      side: 'inline-start',
    },
    padding: 72,
    font: {
      title: {
        families: ['Inter'],
        weight: 'ExtraBold',
        size: 72,
        color: [255, 255, 255],
        lineHeight: 1.1,
      },
      description: {
        families: ['Inter'],
        weight: 'Normal',
        size: 26,
        color: [180, 180, 185],
        lineHeight: 1.5,
      },
    },
    fonts: [
      'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.ttf',
      'https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-800-normal.ttf',
    ],
  }),
});
