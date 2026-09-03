// search-index.ts — Static search index for the Command-K palette.
// If you add or change a paper in research.astro / working-papers.astro, add
// or edit the matching entry here so it stays searchable.

export type SearchEntry = {
  title: string;
  description?: string;
  url: string;
  kind: 'page' | 'paper' | 'working' | 'book' | 'group';
  external?: boolean;
};

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const searchIndex: SearchEntry[] = [
  // Pages
  { title: 'Home', description: 'Overview, bio, featured research', url: `${base}/`, kind: 'page' },
  { title: 'Research', description: 'Published papers across behavioral finance, measurement, and AI', url: `${base}/research/`, kind: 'page' },
  { title: 'Working Papers', description: 'Current working papers and research in progress', url: `${base}/working-papers/`, kind: 'page' },
  { title: 'Media + Videos', description: 'Talks, interviews, and press coverage', url: `${base}/media/`, kind: 'page' },
  { title: 'The Collision', description: 'Forthcoming book: What AI Does to Us', url: `${base}/the-collision/`, kind: 'page' },
  { title: 'Resources', description: 'Recommended books, research datasets, and AI in education reading', url: `${base}/resources/`, kind: 'page' },
  { title: 'Accessibility', description: 'WCAG 2.1 AA accessibility statement', url: `${base}/accessibility/`, kind: 'page' },

  // Book
  { title: 'The Collision: What AI Does to Us', description: 'Forthcoming book on AI and human judgment', url: `${base}/the-collision/`, kind: 'book' },

  // Research group
  { title: 'AI in Financial Markets and Decision-Making', description: 'Research group at the MIT Initiative on the Digital Economy', url: 'https://ide.mit.edu/research-group/ai-finance-decisions/', kind: 'group', external: true },

  // Working papers
  { title: 'Emergent Negligence: How Profit Mandates Induce Alignment Failures in LLMs', description: 'So — COLM 2026 (accepted): how profit-maximization mandates induce emergent alignment failures in LLMs', url: `${base}/research/`, kind: 'working' },
  { title: 'Lost in Context: Addressing Context Anxiety in Large Language Models', description: 'Igbinedion, Ross, Ricardez, Karaman, So — ICML 2026 (accepted): context anxiety in frontier reasoning models', url: 'https://arxiv.org/abs/2607.21616', kind: 'working', external: true },
  { title: 'Breaking Bad Financial Habits: How LLM Conversations Correct Financial Misconceptions', description: 'Ross, So, Lo — pre-registered studies on LLMs durably correcting financial misconceptions', url: 'https://arxiv.org/abs/2604.27022', kind: 'working', external: true },
  { title: 'AI Advisors and the Competence-Judgment Tradeoff in Information Disclosure', description: 'Sussman, So, Yang — competence, judgment, and disclosure to human versus AI advisors', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6077326', kind: 'working', external: true },
  { title: 'When AI Speaks, Do We Listen?', description: 'Lo, Ross, So — factors in the uptake of LLM advice', url: `${base}/working-papers/`, kind: 'working' },
  { title: 'Box Jumping: Portfolio Recompositions to Achieve Higher Morningstar Ratings', description: 'Cohen, Kim, So', url: 'https://doi.org/10.2139/ssrn.4971228', kind: 'working', external: true },
  { title: 'Fee the People', description: 'Even-Tov, George, Kogan, So', url: `${base}/working-papers/`, kind: 'working' },

  // Published — behavioral and financial economics
  { title: 'Bad News Bearers: The Negative Tilt of the Financial Press', description: 'Liu, Niessner, So — Management Science (accepted)', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3219831', kind: 'paper', external: true },
  { title: 'Losing Is Optional: Retail Option Trading and Expected Announcement Volatility', description: 'de Silva, So, Smith — Review of Finance 2026', url: 'https://doi.org/10.1093/rof/rfaf052', kind: 'paper', external: true },
  { title: 'Investor Corporate Visits and Predictable Returns', description: 'Zhang, So, Wang — JFQA 2025', url: 'https://doi.org/10.1017/S0022109024000528', kind: 'paper', external: true },
  { title: 'The Fiscal Frontier: Projecting AI\'s Long-term Impact on the US Fiscal Outlook', description: 'Harris, Mehrotra, So — Brookings 2025', url: 'https://www.brookings.edu/articles/the-fiscal-frontier/', kind: 'paper', external: true },
  { title: 'Flight to Earnings: The Role of Earnings in Periods of Capital Scarcity', description: 'Guest, Kothari, So — Management Science 2023', url: 'https://doi.org/10.1287/mnsc.2022.4538', kind: 'paper', external: true },
  { title: 'Core Earnings: New Data and Evidence', description: 'Rouen, So, Wang — JFE 2021', url: 'https://doi.org/10.1016/j.jfineco.2021.04.025', kind: 'paper', external: true },
  { title: 'Calendar Rotations: A New Approach for Studying the Impact of Timing Using Earnings Announcements', description: 'Noh, So, Verdi — JFE 2021', url: 'https://doi.org/10.1016/j.jfineco.2021.01.009', kind: 'paper', external: true },
  { title: 'Evaluating Firm-Level Expected-Return Proxies: Implications for Estimating Treatment Effects', description: 'Lee, So, Wang — RFS 2021', url: 'https://doi.org/10.1093/rfs/hhaa066', kind: 'paper', external: true },
  { title: 'Expectations Management and Stock Returns', description: 'Johnson, Kim, So — RFS 2020', url: 'https://doi.org/10.1093/rfs/hhz141', kind: 'paper', external: true },
  { title: 'A Simple Multimarket Measure of Information Asymmetry', description: 'Johnson, So — Management Science 2018', url: 'https://doi.org/10.1287/mnsc.2016.2608', kind: 'paper', external: true },
  { title: 'Time Will Tell: Information in the Timing of Scheduled Earnings News', description: 'Johnson, So — JFQA 2018', url: 'https://doi.org/10.1017/S0022109018000492', kind: 'paper', external: true },
  { title: 'News-Driven Return Reversals: Liquidity Provision Ahead of Earnings Announcements', description: 'So, Wang — JFE 2014', url: 'https://doi.org/10.1016/j.jfineco.2014.06.009', kind: 'paper', external: true },
  { title: 'A New Approach to Predicting Analyst Forecast Errors: Do Investors Overweight Analyst Forecasts?', description: 'So — JFE 2013', url: 'https://doi.org/10.1016/j.jfineco.2013.02.002', kind: 'paper', external: true },
  { title: 'Identifying Expectation Errors in Value/Glamour Strategies: A Fundamental Analysis Approach', description: 'Piotroski, So — RFS 2012', url: 'https://doi.org/10.1093/rfs/hhs061', kind: 'paper', external: true },
  { title: 'The Option to Stock Volume Ratio and Future Returns', description: 'Johnson, So — JFE 2012', url: 'https://doi.org/10.1016/j.jfineco.2012.05.008', kind: 'paper', external: true },

  // Published — measurement, regulation, disclosure
  { title: 'Financial Reporting and Consumer Behavior', description: 'Noh, So, Zhu — Accounting Review 2025', url: 'https://doi.org/10.2308/TAR-2023-0293', kind: 'paper', external: true },
  { title: 'Conflicts of Interest in Subscriber-Paid Credit Ratings', description: 'Bonsall, Gillette, Pundrich, So — JAE 2024', url: 'https://doi.org/10.1016/j.jacceco.2023.101614', kind: 'paper', external: true },
  { title: 'Measuring Risk Information', description: 'Smith, So — JAR 2022', url: 'https://doi.org/10.1111/1475-679X.12413', kind: 'paper', external: true },
  { title: 'Voluntary and Mandatory Disclosures: Do Managers View Them as Substitutes?', description: 'Noh, So, Weber — JAE 2019', url: 'https://doi.org/10.1016/j.jacceco.2019.101243', kind: 'paper', external: true },
  { title: 'Asymmetric Trading Costs Prior to Earnings Announcements: Implications for Price Discovery and Returns', description: 'Johnson, So — JAR 2018', url: 'https://doi.org/10.1111/1475-679X.12189', kind: 'paper', external: true },
  { title: 'Non-Diversifiable Volatility Risk and Risk Premiums at Earnings Announcements', description: 'Barth, So — Accounting Review 2014', url: 'https://doi.org/10.2308/accr-50758', kind: 'paper', external: true },
  { title: 'Boardroom Centrality and Firm Performance', description: 'Larcker, So, Wang — JAE 2013', url: 'https://doi.org/10.1016/j.jacceco.2013.01.006', kind: 'paper', external: true },
  { title: 'Analyst Initiations of Coverage and Stock Return Synchronicity', description: 'Crawford, Roulstone, So — Accounting Review 2012', url: 'https://doi.org/10.2308/accr-50186', kind: 'paper', external: true },

  // Published — surveys
  { title: 'Teaching and Learning Economics with AI: A Guide', description: 'So — The Ultimate Guide to Teaching Economics 2025', url: 'https://seagull.wwnorton.com/essentialeconomics', kind: 'paper', external: true },
  { title: 'Analysts\' Forecasts and Asset Pricing: A Survey', description: 'Kothari, So, Verdi — Annual Review of Financial Economics 2016', url: 'https://doi.org/10.1146/annurev-financial-121415-032930', kind: 'paper', external: true },
  { title: 'Alphanomics: The Informational Underpinnings of Market Efficiency', description: 'Lee, So — Foundations and Trends in Accounting 2015', url: 'https://doi.org/10.1561/1400000022', kind: 'paper', external: true },

  // Published — labor economics
  { title: 'Inside the Black Box of Doctoral Education: What Program Characteristics Influence Doctoral Students\' Attrition and Graduation Probabilities?', description: 'Ehrenberg, Jakubson, Groen, So, Price — Educational Evaluation and Policy Analysis 2007', url: 'https://doi.org/10.3102/0162373707301707', kind: 'paper', external: true },
];
