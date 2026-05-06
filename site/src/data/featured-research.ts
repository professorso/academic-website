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
    slug: 'lost-in-context',
    title: 'Lost in Context: Discovering Context Anxiety in Large Language Models',
    authors: 'Anonymous Authors (under double-blind review)',
    meta: 'Working Paper · April 2026',
    tldr:
      'Frontier reasoning models often fail not because they lack capability but because they prematurely self-doubt — a phenomenon we call "context anxiety," driven by miscalibrated token-budget estimates and substantially reducible through lightweight fine-tuning rather than further scaling.',
    abstract:
      'Conventional wisdom suggests that reasoning models fail when problems exceed their capabilities. However, we find that frontier reasoning models sometimes possess the necessary capabilities to solve problems but fail due to premature self-doubt — a phenomenon informally known as context anxiety. We provide the first systematic study of context anxiety, demonstrating that it arises, in part, from a model\'s inability to accurately estimate the tokens required to complete a task. We also show that context anxiety leads to material efficiency losses when models operate under perceived constraints. Building on this analysis, we further show that models can learn alternative strategies for solving long-horizon problems without exhibiting context anxiety, suggesting that performance improvements may be achievable not through scaling model capabilities, but by improving models\' ability to accurately assess and adapt to their own limitations.',
  },
  {
    slug: 'ai-advisors-competence-judgment',
    title: 'AI Advisors and the Competence-Judgment Tradeoff in Information Disclosure',
    authors: 'Eric So, Abigail Sussman, Fiona Y. Yang',
    meta: 'Working Paper · January 2026',
    tldr:
      'People prefer human advisors for their expertise — until disclosure becomes embarrassing, at which point AI\'s lack of social judgment flips the preference, revealing a competence–judgment tradeoff that will shape AI adoption across professional services.',
    abstract:
      'This paper finds that people rely on a competence-judgment tradeoff to choose between human and AI advisors, evaluating whether the benefit of expertise outweighs the cost of social judgment. AI advisors unbundle competence from judgment, offering psychological safety at the cost of expertise. Across three experiments, people preferred human advisors and shared more information with them, reflecting a competence premium that reversed when disclosure required revealing embarrassing information. Experimentally increasing AI competence produced the same reversal, providing evidence that competence and judgment are distinct but complementary inputs into the same tradeoff. People also feel less need to justify their actions to AI when those actions are embarrassing, suggesting they manage anticipated judgment from humans in ways that are unnecessary with AI. These findings reveal that AI adoption in professional services will depend not only on closing the capability gap but on how domains differ in the social costs of disclosure.',
    link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6077326',
  },
  {
    slug: 'breaking-bad-financial-habits',
    title: 'Breaking Bad Financial Habits: How LLM Conversations Correct Financial Misconceptions',
    authors: 'Jillian Ross, Eric So, Andrew W. Lo',
    meta: 'Working Paper · April 2026',
    tldr:
      'Across three pre-registered studies, LLMs durably correct financial misconceptions only when prompted with corrective intent and calibrated to the user\'s financial sophistication — without both, the same conversations can actively entrench the misconceptions they are meant to fix.',
    abstract:
      'Financial misconceptions carry direct economic costs, from panic selling to equity market avoidance, yet they are notoriously resistant to correction. Traditional financial literacy interventions are constrained by cost, reach, and a persistent gap between knowledge and behavioral change. We find across three pre-registered studies that purposefully designed LLMs can durably correct financial misconceptions. Critically, two factors are necessary for this effect. First, corrective intent: LLMs prompted only to discuss a misconception produce corrections no better than unassisted self-reflection, and undirected LLM conversations can actively entrench misconceptions. Second, recipient receptivity: financial concepts are often foreign to the investors who misapply them, and LLM responses pitched below a participant\'s financial sophistication are judged as less credible and produce substantially weaker corrections. LLMs thus offer a scalable alternative to traditional financial literacy intervention, but only when designed with both factors in mind.',
    link: 'https://arxiv.org/abs/2604.27022',
  },
  {
    slug: 'fiscal-frontier',
    title: 'The Fiscal Frontier: Projecting AI’s Long-term Impact on the US Fiscal Outlook',
    authors: 'Benjamin H. Harris, Neil Mehrotra, Eric So',
    meta: 'Brookings Institution · February 2025',
    tldr:
      'AI\'s effects on mortality, healthcare prices, and healthcare demand could shift annual U.S. budget deficits in 2044 by anywhere from a 1.63% of GDP increase to a 0.82% of GDP decrease, making the channel through which AI lands as fiscally consequential as the size of the shock itself.',
    abstract:
      'We simulate the impact of artificial intelligence (AI) on the long-term outlook for federal spending on old-age entitlement programs. This paper introduces a framework for how AI will affect these outlays through three primary channels: mortality rates and the size of the population, the price of health care services, and demands for health care services. Using this framework, we show that the nature of the AI shock is critical, as the impact of the shock on annual budget deficits could range from an increase of 1.63% of GDP to a decrease of 0.82% of GDP by 2044, with the latter reducing annual budget deficits in 2044 by roughly one ninth.',
    link: 'https://www.brookings.edu/articles/the-fiscal-frontier-projecting-ais-long-term-impact-on-the-us-fiscal-outlook/',
  },
];
