// Single source of truth for the featured-papers list.
// Rendered three ways:
//   1. Homepage — responsive card grid in FeaturedResearch.astro
//   2. Research page — sticky-intro cards at the top of research.astro
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
    title: 'Lost in Context: Addressing Context Anxiety in Large Language Models',
    authors: 'Ifueko Igbinedion, Jillian Ross, Etienne Ricardez, Sertac Karaman, Eric So',
    meta: 'Proceedings of the 43rd International Conference on Machine Learning, Seoul, South Korea. PMLR 306, 2026.',
    tldr:
      'Frontier reasoning models often fail not because they lack capability but because they prematurely self-doubt — a phenomenon we call "context anxiety," driven by miscalibrated token-budget estimates and substantially reducible through lightweight fine-tuning rather than further scaling.',
    abstract:
      'Conventional wisdom suggests that reasoning models fail when problems exceed their capabilities. However, we find that frontier reasoning models sometimes possess the necessary capabilities to solve problems but fail due to premature self-doubt — a phenomenon informally known as context anxiety. We provide the first systematic study of context anxiety, demonstrating that it arises, in part, from a model\'s inability to accurately estimate the tokens required to complete a task. We also show that context anxiety leads to material efficiency losses when models operate under perceived constraints. Building on this analysis, we further show that models can learn alternative strategies for solving long-horizon problems without exhibiting context anxiety, suggesting that performance improvements may be achievable not through scaling model capabilities, but by improving models\' ability to accurately assess and adapt to their own limitations.',
    link: 'https://arxiv.org/abs/2607.21616',
  },
  {
    slug: 'loyalty-capture',
    title: 'Loyalty Capture: Reporting Relationships and Structural Sycophancy in Frontier AI Models',
    authors: 'Eric So, Alex Imas',
    meta: 'NeurIPS 2026 · Main Track · Accepted',
    tldr: 'Shows how reporting to a manager with misaligned incentives can bias AI recommendations toward that manager, even without explicit instructions to do so.',
  },
  {
    slug: 'emergent-negligence',
    title: 'The Profit Alignment Problem: How Profit Mandates Induce Alignment Failures in LLMs',
    authors: 'Eric So',
    meta: 'Conference on Language Models (COLM) · 2026 · Accepted',
    tldr:
      'Adding an ordinary “maximize profitability” mandate to otherwise identical prompts leads frontier LLMs to systematically dismiss ambiguous safety signals — acknowledging the risks in their reasoning, then invoking profit logic to justify ignoring them — a “Profit Alignment Problem” that emerges even though the mandate never tells the model to downplay risk.',
    abstract:
      'This study shows that ordinary business language — “maximize profitability” — induces emergent negligence: LLMs systematically dismiss ambiguous signals of potential safety violations to serve business objectives. In 3,600 controlled trials across eight reasoning-capable LLMs, adding a profit mandate to otherwise identical prompts increases risk-dismissing judgments by 6.8 percentage points (p < 0.0001), suppresses board escalation recommendations by 13.9 pp (p < 0.0001), and shifts severity assessments downward (χ² p < 0.0001). The mandate never instructs models to downplay risks; instead, chain-of-thought traces reveal motivated reasoning — models acknowledge concerns, then invoke profit logic to justify dismissing them. We characterize these findings as the Profit Alignment Problem: when AI systems are given ordinary business objectives, they develop emergent strategies for suppressing inconvenient information that no designer intended or specified.',
    link: 'https://arxiv.org/abs/2609.07731',
  },
  {
    slug: 'jacobian-workspace-self-supervision',
    title: 'Mitigating Agentic Misalignment via Jacobian Workspace Self-Supervision',
    authors: 'Ifueko Igbinedion, Etienne Ricardez, Sertac Karaman, Eric So',
    meta: 'Working Paper · 2026',
    tldr:
      "Monitoring an AI agent's internal states can catch reasoning that is heading toward a harmful action and prompt the same model to correct itself, cutting agentic misalignment from roughly 45% to as low as 6% without retraining.",
    abstract:
      "We show that using an AI agent's Jacobian workspace can mitigate agentic misalignment even after the agent begins rationalizing harmful behavior, substantially reducing harmful actions without retraining the underlying model. The Jacobian lens measures how changes in internal states propagate toward output representations, providing a basis for detecting when reasoning is heading toward a harmful action. We combine measurements derived from this lens with ordinary internal states in a small trained detector that monitors the agent as it reasons. When the detector's score crosses a calibrated threshold, we interrupt generation, discard the current reasoning, and ask the same model to write a brief corrective reminder. The agent then restarts from the task and reminder. An optional intervention steers the advisor's internal states while it writes the reminder. On a held-out i.i.d. evaluation set, our best interventions reduce agentic misalignment from 47.0% to 5.9% on Qwen3-32B and from 45.2% to 11.1% on Qwen3-14B. These results establish internal monitoring and guided self-correction as a promising complement to training-time safety interventions.",
  },
  {
    slug: 'ai-advice-overtrading',
    title: 'Adding AI Advice to Trading Interfaces Induces Overtrading and Reduces Investor Welfare',
    authors: 'Zoe De Simone, Etienne Ricárdez, Eric So, Andrew W. Lo',
    meta: 'Working Paper · 2026',
    tldr:
      'Adding AI forecasts to a prediction-market interface makes users worse off: they move toward AI predictions that are weaker than market prices, forecast less accurately, and trade more often instead of abstaining.',
    abstract:
      'Adding AI advice to a prediction-market interface can make users worse off: participants move toward AI predictions, forecast less accurately, and trade more often. We built Prediction Market Arena, an interactive trading dashboard, and conducted two incentivized experiments (N = 331) comparing market information alone with individual or aggregated AI forecasts. Participants shifted toward AI advice when it disagreed with the market, worsening accuracy; in Study 1, AI access also worsened portfolio outcomes. When abstention was available, it fell from 15.1% without AI to 6.7% with a single forecast and 2.2% with an AI panel. Across 144 resolved contracts, AI forecasts were weaker than market prices, yet participants moved toward them. Interventions failed to recover no-AI performance. These findings show that users can treat AI advice as an informational edge even when it is weaker than the market benchmark, raising a design question: whether AI advice provides enough value to warrant inclusion.',
  },
];
