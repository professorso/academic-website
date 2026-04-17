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
  { title: 'Data + Artifacts', description: 'Public datasets and AI in education resources', url: `${base}/data/`, kind: 'page' },
  { title: 'Now', description: 'What I am currently working on', url: `${base}/now/`, kind: 'page' },
  { title: 'Accessibility', description: 'WCAG 2.1 AA accessibility statement', url: `${base}/accessibility/`, kind: 'page' },

  // Book
  { title: 'The Collision: What AI Does to Us', description: 'Forthcoming book on AI and human judgment', url: `${base}/the-collision/`, kind: 'book' },

  // Research group
  { title: 'AI in Financial Markets and Decision-Making', description: 'Research group at the MIT Initiative on the Digital Economy', url: 'https://ide.mit.edu/research-group/ai-finance-decisions/', kind: 'group', external: true },

  // Working papers
  { title: 'Judgment-Free AI Advisors', description: 'Sussman, Yang, So — comparative advantage of artificial advisors for information disclosure', url: 'https://osf.io/preprints/psyarxiv/sejdg_v1', kind: 'working', external: true },
  { title: 'When AI Speaks, Do We Listen?', description: 'Lo, Ross, So — factors in the uptake of LLM advice', url: `${base}/working-papers/`, kind: 'working' },
  { title: 'Box Jumping: Portfolio Recompositions to Achieve Higher Morningstar Ratings', description: 'Cohen, Kim, So', url: 'https://doi.org/10.2139/ssrn.4971228', kind: 'working', external: true },
  { title: 'Fee the People', description: 'Even-Tov, George, Kogan, So', url: `${base}/working-papers/`, kind: 'working' },

  // Published — behavioral and financial economics
  { title: 'Bad News Bearers: The Negative Tilt of the Financial Press', description: 'Liu, Niessner, So — Management Science (forthcoming)', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3219831', kind: 'paper', external: true },
  { title: 'Losing is Optional', description: 'de Silva, Smith, So — Review of Finance (forthcoming)', url: 'https://academic.oup.com/rof/advance-article-abstract/doi/10.1093/rof/rfaf052/8301159?redirectedFrom=fulltext', kind: 'paper', external: true },
  { title: 'Investor Corporate Visits and Predictable Returns', description: 'Zhang, Wang, So — JFQA 2025', url: 'https://www.cambridge.org/core/services/aop-cambridge-core/content/view/77C958598BB1DC92C46EA32BF252A4B9/S0022109024000528a.pdf/investor_corporate_visits_and_predictable_returns.pdf', kind: 'paper', external: true },
  { title: 'The Fiscal Frontier: Projecting AI\'s Long-term Impact on the US Fiscal Outlook', description: 'Harris, Mehrotra, So — Brookings 2025', url: 'https://www.brookings.edu/articles/the-fiscal-frontier/', kind: 'paper', external: true },
  { title: 'Flight to Earnings: The Role of Earnings in Periods of Capital Scarcity', description: 'Guest, Kothari, So — Management Science 2023', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2929704', kind: 'paper', external: true },
  { title: 'Core Earnings: New Data and Evidence', description: 'Rouen, Wang, So — JFE 2021', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3467814', kind: 'paper', external: true },
  { title: 'Calendar Rotations', description: 'Noh, Verdi, So — JFE 2021', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3473873', kind: 'paper', external: true },
  { title: 'Evaluating Firm-Level Expected Return Proxies', description: 'Lee, Wang, So — RFS 2021', url: 'https://academic.oup.com/rfs/advance-article-abstract/doi/10.1093/rfs/hhaa066/5855684', kind: 'paper', external: true },
  { title: 'Expectations Management and Stock Returns', description: 'Johnson, Kim, So — RFS 2020', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2866522', kind: 'paper', external: true },
  { title: 'A Simple Multimarket Measure of Information Asymmetry', description: 'Johnson, So — Management Science 2018', url: 'https://doi.org/10.1287/mnsc.2016.2608', kind: 'paper', external: true },
  { title: 'Time Will Tell: Information in the Timing of Scheduled Earnings News', description: 'Johnson, So — JFQA 2018', url: 'https://depts.washington.edu/jfqa/2017/06/30/time-will-tell-information-in-the-timing-of-scheduled-earnings-news/', kind: 'paper', external: true },
  { title: 'News-Driven Return Reversals: Liquidity Provision Ahead of Earnings Announcements', description: 'Wang, So — JFE 2014', url: 'https://doi.org/10.1016/j.jfineco.2014.06.009', kind: 'paper', external: true },
  { title: 'A New Approach to Predicting Analyst Forecast Errors', description: 'So — JFE 2013', url: 'http://dx.doi.org/10.1016/j.jfineco.2013.02.002', kind: 'paper', external: true },
  { title: 'Identifying Expectation Errors in Value/Glamour Strategies', description: 'Piotroski, So — RFS 2012', url: 'http://rfs.oxfordjournals.org/content/25/9/2841', kind: 'paper', external: true },
  { title: 'The Option to Stock Volume Ratio and Future Returns', description: 'Johnson, So — JFE 2012', url: 'https://doi.org/10.1016/j.jfineco.2012.05.008', kind: 'paper', external: true },

  // Published — measurement, regulation, disclosure
  { title: 'Financial Reporting and Consumer Behavior', description: 'Noh, So, Zhu — Accounting Review 2025', url: 'https://publications.aaahq.org/accounting-review/article-abstract/100/1/407/12932/Financial-Reporting-and-Consumer-Behavior?redirectedFrom=fulltext', kind: 'paper', external: true },
  { title: 'Conflicts of Interest in Subscriber-Paid Credit Ratings', description: 'Bonsall, Gillette, Pundrich, So — JAE 2022', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3132741', kind: 'paper', external: true },
  { title: 'Measuring Risk Information', description: 'Smith, So — JAR 2022', url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/1475-679X.12413', kind: 'paper', external: true },
  { title: 'Switching from Voluntary and Mandatory Disclosure', description: 'Noh, Weber, So — JAE 2019', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0165410119300382', kind: 'paper', external: true },
  { title: 'Asymmetric Trading Costs Prior to Earnings Announcements', description: 'Johnson, So — JAR 2018', url: 'http://doi.org/10.1111/1475-679X.12189', kind: 'paper', external: true },
  { title: 'Non-Diversifiable Volatility Risk and Risk Premiums at Earnings Announcements', description: 'Barth, So — Accounting Review 2014', url: 'https://doi.org/10.2308/accr-50758', kind: 'paper', external: true },
  { title: 'Boardroom Centrality and Firm Performance', description: 'Larcker, Wang, So — JAE 2013', url: 'https://doi.org/10.1016/j.jacceco.2013.01.006', kind: 'paper', external: true },
  { title: 'Analyst Initiations of Coverage and Stock Return Synchronicity', description: 'Roulstone, Crawford, So — Accounting Review 2012', url: 'http://aaajournals.org/doi/abs/10.2308/accr-50186', kind: 'paper', external: true },

  // Published — surveys
  { title: 'Analysts\' Forecasts and Asset Pricing: A Survey', description: 'Kothari, Verdi, So — Annual Review of Financial Economics 2016', url: 'https://doi.org/10.1146/annurev-financial-121415-032930', kind: 'paper', external: true },
  { title: 'Alphanomics: The Informational Underpinning of Market Efficiency', description: 'Lee, So — Foundations and Trends in Accounting 2015', url: 'http://dx.doi.org/10.1561/1400000022', kind: 'paper', external: true },

  // Published — labor economics
  { title: 'Inside the Black Box of Doctoral Education', description: 'Ehrenberg et al. — Educational Evaluation and Policy Analysis 2007', url: 'https://www.jstor.org/stable/30128037', kind: 'paper', external: true },
];
