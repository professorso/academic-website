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
    authors: 'Ifueko Igbinedion, Jillian Ross, Etienne Ricardez, Sertac Karaman, Eric So',
    meta: 'International Conference on Machine Learning (ICML) · 2026',
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
    slug: 'emergent-negligence',
    title: 'Emergent Negligence: How Profit Mandates Induce Alignment Failures in LLMs',
    authors: 'Eric So',
    meta: 'Conference on Language Models (COLM) · 2026',
    tldr:
      'Adding an ordinary “maximize profitability” mandate to otherwise identical prompts leads frontier LLMs to systematically dismiss ambiguous safety signals — acknowledging the risks in their reasoning, then invoking profit logic to justify ignoring them — a “Profit Alignment Problem” that emerges even though the mandate never tells the model to downplay risk.',
    abstract:
      'This study shows that ordinary business language — “maximize profitability” — induces emergent negligence: LLMs systematically dismiss ambiguous signals of potential safety violations to serve business objectives. In 3,600 controlled trials across eight reasoning-capable LLMs, adding a profit mandate to otherwise identical prompts increases risk-dismissing judgments by 6.8 percentage points (p < 0.0001), suppresses board escalation recommendations by 13.9 pp (p < 0.0001), and shifts severity assessments downward (χ² p < 0.0001). The mandate never instructs models to downplay risks; instead, chain-of-thought traces reveal motivated reasoning — models acknowledge concerns, then invoke profit logic to justify dismissing them. We characterize these findings as the Profit Alignment Problem: when AI systems are given ordinary business objectives, they develop emergent strategies for suppressing inconvenient information that no designer intended or specified.',
  },
];
