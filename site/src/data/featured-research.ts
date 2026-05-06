// Single source of truth for the featured-papers list.
// Rendered three ways:
//   1. Homepage — auto-scrolling marquee in FeaturedResearch.astro
//   2. Research page — sticky-intro reveal cards at the top of research.astro
//   3. Both — click-to-open detail modal in FeaturedResearchModal.astro
// Edit this file to update all three at once.
//
// To add a new featured paper, append a `FeaturedPaper` entry with:
//   - slug:    stable, URL-safe id used to wire trigger → modal panel
//   - title, authors, meta: shown on the card and in the modal
//   - tldr:    one short paragraph capturing the headline finding
//   - abstract: optional full abstract; modal renders an "Abstract" section
//               only when this is present
//   - link:    optional URL; if omitted the modal shows "Full paper coming soon"

export interface FeaturedPaper {
  slug: string;
  title: string;
  authors: string;
  meta: string;
  tldr: string;
  abstract?: string;
  link?: string;
}

export const featuredPapers: FeaturedPaper[] = [
  {
    slug: 'ai-advisors-competence-judgment',
    title: 'AI Advisors and the Competence-Judgment Tradeoff in Information Disclosure',
    authors: 'Abigail B. Sussman, Eric C. So, Yujin Yang',
    meta: 'Working Paper · January 2026',
    tldr:
      'When disclosing information to an advisor feels socially costly, AI advisors hold a comparative advantage over human advisors because they are perceived as competent without being judgmental. The paper develops a competence–judgment tradeoff framework that helps explain when AI is the more effective channel for eliciting honest disclosure and what that implies for how firms deploy AI in advisory roles.',
    link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6077326',
  },
  {
    slug: 'breaking-bad-financial-habits',
    title: 'Breaking Bad Financial Habits: How LLM Conversations Correct Financial Misconceptions',
    authors: 'Jillian Ross, Eric So, Andrew W. Lo',
    meta: 'Working Paper · April 2026',
    tldr:
      'Across three pre-registered studies, purposefully designed LLMs durably correct financial misconceptions — but only when prompted with corrective intent and pitched at the participant\'s level of financial sophistication. Naive LLM conversations can entrench misconceptions; the design of the prompt matters as much as the model itself.',
    abstract:
      'Financial misconceptions carry direct economic costs, from panic selling to equity market avoidance, yet they are notoriously resistant to correction. Traditional financial literacy interventions are constrained by cost, reach, and a persistent gap between knowledge and behavioral change. We find across three pre-registered studies that purposefully designed LLMs can durably correct financial misconceptions. Critically, two factors are necessary for this effect. First, corrective intent: LLMs prompted only to discuss a misconception produce corrections no better than unassisted self-reflection, and undirected LLM conversations can actively entrench misconceptions. Second, recipient receptivity: financial concepts are often foreign to the investors who misapply them, and LLM responses pitched below a participant\'s financial sophistication are judged as less credible and produce substantially weaker corrections. LLMs thus offer a scalable alternative to traditional financial literacy intervention, but only when designed with both factors in mind.',
    link: 'https://arxiv.org/abs/2604.27022',
  },
  {
    slug: 'fiscal-frontier',
    title: 'The Fiscal Frontier: Projecting AI’s Long-term Impact on the US Fiscal Outlook',
    authors: 'Ben Harris, Neil R. Mehrotra, Eric So',
    meta: 'Brookings Institution · February 2025',
    tldr:
      'AI’s effects on healthcare productivity, mortality, and costs could materially shift U.S. federal entitlement spending over the next two decades. Preliminary estimates range from a ~1.6% of GDP increase in annual deficits to a ~0.8% of GDP decrease by 2044, depending on whether AI primarily extends lifespans without cutting costs or also delivers comprehensive healthcare productivity gains.',
    abstract:
      'This Brookings Institution paper examines how artificial intelligence could reshape U.S. federal spending on Social Security and Medicare over the next twenty years. The authors model scenarios in which AI’s impact on healthcare delivery, costs, and mortality dramatically shifts entitlement program expenditures, drawing on AI capabilities such as protein-folding advances, diagnostic accuracy that exceeds human clinicians, and personalized treatment optimization. The fiscal consequences are paradoxical: AI-driven gains in healthcare effectiveness and longevity may simultaneously increase total entitlement spending — by expanding the elderly population receiving benefits — and lower spending per beneficiary through cost reductions. The authors advocate that policymakers proactively integrate AI’s healthcare implications into long-term fiscal planning rather than overlook this critical variable in budget projections.',
    link: 'https://www.brookings.edu/articles/the-fiscal-frontier-projecting-ais-long-term-impact-on-the-us-fiscal-outlook/',
  },
];
