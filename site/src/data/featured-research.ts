// Single source of truth for the featured-papers list.
// Rendered two ways:
//   1. Homepage — auto-scrolling marquee in FeaturedResearch.astro
//   2. Research page — sticky-intro reveal cards at the top of research.astro
// Edit this file to update both places at once.

export interface FeaturedPaper {
  title: string;
  authors: string;
  meta: string;
  link: string;
}

export const featuredPapers: FeaturedPaper[] = [
  {
    title: 'AI Advisors and the Competence-Judgment Tradeoff in Information Disclosure',
    authors: 'Abigail B. Sussman, Eric C. So, Yujin Yang',
    meta: 'Working Paper · January 2026',
    link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6077326',
  },
  {
    title: 'Breaking Bad Financial Habits: How LLM Conversations Correct Financial Misconceptions',
    authors: 'Jillian Ross, Eric So, Andrew W. Lo',
    meta: 'Working Paper · April 2026',
    link: 'https://arxiv.org/abs/2604.27022',
  },
  {
    title: 'The Fiscal Frontier: Projecting AI’s Long-term Impact on the US Fiscal Outlook',
    authors: 'Ben Harris, Neil R. Mehrotra, Eric So',
    meta: 'Brookings Institution · February 2025',
    link: 'https://www.brookings.edu/articles/the-fiscal-frontier-projecting-ais-long-term-impact-on-the-us-fiscal-outlook/',
  },
];
