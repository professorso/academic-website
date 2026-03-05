# Eric So — Academic Website: Build Specification

> **Purpose**: Complete handoff document for Claude Code to build Eric So's personal academic website from scratch.
> **Date**: March 3, 2026
> **Owner**: Eric So (eso@mit.edu)

---

## 1. PROJECT OVERVIEW

Build a bold, visually distinctive academic website for Eric So, Sloan Distinguished Professor of Global Economics and Behavioral Science at MIT. The site replaces the current MIT Sloan faculty page with a custom design that reflects personality and modern web aesthetics — not the typical dry academic template.

**Design DNA**: High-contrast black-and-white palette, heavy condensed typography, scroll-triggered color inversions, and animated dynamic backgrounds. Inspired by creative-agency sites (see `/Inspiration/` folder) but adapted for an academic audience.

**Key Constraint**: Eric is not a web designer. The site must be easy to update over time with Claude Code's help — content changes should require editing simple, clearly-organized files, not digging through complex code.

---

## 2. SITE ARCHITECTURE

### Navigation (persistent top bar)

| Nav Label         | Route               | Description                              |
|-------------------|----------------------|------------------------------------------|
| **HOME**          | `/`                  | Landing page + bio/about                 |
| **RESEARCH**      | `/research/`         | Published papers (separate from working) |
| *(sub-link)*      | `/working-papers/`   | Works in progress                        |
| **MEDIA + VIDEOS**| `/media/`            | Videos, press, talks                     |
| **THE COLLISION** | `/the-collision/`    | Book page + link to blog                 |
| **DATA + ARTIFACTS** | `/data/`          | Datasets and code resources              |

A **contact button/icon** in the nav (or floating) opens a dedicated contact section/modal.

### Navigation Design Notes
- Minimal top nav bar: logo/monogram on the left, nav links spread across, contact icon on the right
- Style reference: the inspiration site uses a black bar with spaced-out uppercase labels
- On mobile: hamburger menu

---

## 3. PAGE-BY-PAGE SPECIFICATION

### 3.1 HOME (`/`)

The homepage IS the bio/about page. It serves as both the bold first impression and the substantive introduction.

**Hero Section (above the fold)**:
- Large, bold headline text: **"ERIC SO"** in heavy condensed font
- Subtitle: **"MIT PROFESSOR OF GLOBAL ECONOMICS AND BEHAVIORAL SCIENCE"**
- One of the action photos as a hero image (left-side or background)
- Layout reference: Slide 1 of MockUpNotes.pptx — photo on the left, big text on the right
- Photos available in `/Photos/` folder (Action1-7.jpg, headshots)

**Bio Section (scroll down)**:
- Brief professional bio (2-3 paragraphs, adapted from current site content):
  - Combines economics and behavioral science
  - Studies interactions between human nature, incentive systems, and technology
  - Tenured full professor, Global Economics and Management group + Behavioral and Policy Sciences area
- Education: PhD Stanford GSB, Master's in Economics Cornell, joined MIT 2012

**Roles & Affiliations Section**:
- Faculty Co-Director, AI Executive Academy
- Lead Faculty, MIT Sloan Generative AI Hub for Teaching and Learning
- Faculty Chair, MIT Sloan PhD Program

**News / Recent Updates Section**:
- A lightweight feed showing 3-5 recent items: new papers, talks, press hits, course announcements
- Each item is a single markdown file with frontmatter (date, title, category, link) — dead simple to add
- Displayed as a compact, date-ordered list with category tags (e.g., "Paper", "Talk", "Press")
- Auto-sorted by date; oldest items roll off as new ones are added
- This is how the homepage stays fresh without any design changes

**Featured Research (pinned highlights)**:
- 2-3 hand-picked papers or projects with links (separate from the news feed)
- Acts as a teaser drawing visitors to the Research page

**External Links**:
- SSRN profile: http://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=1431328
- Google Scholar: https://scholar.google.com/citations?user=HuqQLucAAAAJ&hl=en
- MIT Sloan faculty page: http://mitsloan.mit.edu/faculty-and-research/faculty-directory/detail/?id=53475

**Teaching Section**:
- Current courses on AI applications in business and investment decisions
- Brief description of each course, semester offered, and link to syllabus (if public)
- Content to be provided by Eric — placeholder section in initial build

**Research Group Section**:
- Eric leads the **AI, Finance & Decisions** research group at MIT IDE (https://ide.mit.edu/research-group/ai-finance-decisions/)
- List current PhD students, postdocs, and research assistants (names + brief descriptions or links)
- Content to be provided by Eric — placeholder section in initial build
- Link to the IDE group page

**Areas of Interest** (displayed as tags or a minimal list):
- Asset Pricing and Valuation
- Behavioral Finance
- Limits to Arbitrage
- Market Microstructure
- Earnings Announcements
- Artificial Intelligence
- Human-Computer Interactions
- Regulatory Policy

---

### 3.2 RESEARCH — Published (`/research/`)

A single-page listing of all published and accepted papers.

**Organization**: Group by topic area (matching current site structure):

1. **Behavioral and Financial Economics** (11 papers)
2. **Measurement, Regulation, and Disclosure** (7 papers)
3. **Labor Economics** (1 paper)
4. **Surveys and Monographs** (2 papers)

**Per paper, display**:
- Title (as a link to the paper/DOI)
- Authors
- Journal name, volume, date
- SSRN or DOI link

**Design**: Clean, scannable list. Bold paper titles, muted metadata. Each topic section has a visible header. Consider a subtle hover effect on paper rows.

**Full paper list**: See `eric_so_site_content_summary.md` in `/Notes/` for the complete list of 21 publications with all links and metadata.

---

### 3.3 RESEARCH — Working Papers (`/working-papers/`)

Separate page for works in progress. Linked as a sub-navigation item under Research.

**Current working papers**:
1. "Box Jumping: Portfolio Recompositions to Achieve Higher Morningstar Ratings" — with Lauren Cohen and David S. Kim
2. "The Fiscal Frontier: Projecting AI's Long-term Impact on the US Fiscal Outlook" — with Ben Harris and Neil R. Mehrotra
3. "Losing is Optional" — with Kevin Smith and Tim de Silva
4. "Fee the People" — with Omri Even-Tov, Kimberlyn George, and Shimon Kogan
5. "Financial Reporting and Consumer Behavior" — with Suzie Noh and Christina Zhu
6. "Bad News Bearers: The Negative Tilt of the Financial Press" — with Marina Niessner

**Per paper**: Title, co-authors, and link (where available, e.g., SSRN or Brookings).

---

### 3.4 MEDIA + VIDEOS (`/media/`)

A page showcasing talks, press coverage, and video appearances.

**Video Embeds** (YouTube):
- https://www.youtube.com/watch?v=--VyDPtDdMo
- https://www.youtube.com/watch?v=cf7Uu2SRPUU
- https://www.youtube.com/watch?v=4sohouIxyPc
- https://www.youtube.com/watch?v=vvGFr-qADY4
- https://www.youtube.com/watch?v=rVGlZx7C29s (MIT Sloan "New Thinkers")
- https://www.youtube.com/watch?v=FOwmBfjrdJ8

**Press Section**:
- Link to IDE press feature: https://ide.mit.edu/insights/new-researcher-examines-whether-ai-will-leads-to-better-finance-decisions/
- Space for additional press links to be added over time

**Design**: Video thumbnails in a grid or staggered layout. Bold section headers. Dark background sections work well here (video thumbnails pop on dark).

---

### 3.5 THE COLLISION (`/the-collision/`)

Page dedicated to Eric's book, published by Norton.

**Content**:
- Book cover image: `/Book/NORTON_BookShot_Collision_06.jpg`
- Book title and description (to be provided — placeholder for now)
- Purchase links (Amazon, bookshop.org, Norton, etc. — to be added)
- Link to the blog/newsletter at **thecollision.ai** (not yet live; include as a prominent link/button)
- Related media appearances about the book (if any)

**Design**: Hero treatment for the book cover — large image, bold title, clean description. This page should feel like a book launch page.

---

### 3.6 DATA + ARTIFACTS (`/data/`)

Downloadable datasets and code resources for researchers.

**Datasets**:

| Dataset | Paper | Link | Fields |
|---------|-------|------|--------|
| Implied Cost of Capital & Expected Return Data | Lee, Wang, So — *Review of Financial Studies* | https://leesowang2021.github.io/data/ | See link |
| Expectations Management Incentive (EMI) | Johnson, Kim, So — *Review of Financial Studies* | Dropbox link | Permno, Expected_ann_date, EMI (1985–2015) |
| Daily Information Asymmetry Proxy (MIA) | Johnson, So — *Management Science* | Dropbox link | Permno, Date, MIA (2006–2018) |
| Annual Earnings Forecasts | So — *Journal of Financial Economics* | Dropbox link | GVKEY, CUSIP, FYEAR, FYR, ForecastDate, WF1/2/3, Shares (1978–2016) |

**Code Resources**:

| Resource | Type | Link |
|----------|------|------|
| A Brief Introduction to SAS: A Primer | PDF | Dropbox |
| SAS Macro to Winsorize Data | SAS | Dropbox |
| SAS Macro to Create Dummy Variables | SAS | Dropbox |
| SAS Macro for Fama/MacBeth Regressions | SAS | Dropbox |
| Matlab Code: Implied Cost of Capital (solve) | Matlab | Dropbox |
| Matlab Code: Implied Cost of Capital (structure) | Matlab | Dropbox |

**Disclaimer** (display at bottom): *"I do not guarantee the accuracy of this data or code. These files are intended as references that require updating and corrections. Use at your own risk."*

**Design**: Clean table or card layout. Each dataset/resource gets a title, brief description, associated paper reference, and a download/link button.

See `eric_so_site_content_summary.md` for all Dropbox links.

---

### 3.7 CONTACT (Modal or Dedicated Section)

Accessible from a nav button/icon. Not a full page — a slide-out panel, modal, or footer section.

**Information to display**:
- **Name**: Eric So
- **Title**: Sloan Distinguished Professor of Global Economics and Behavioral Science
- **Secondary Title**: Professor, Global Economics and Management
- **Role**: Chair, MIT Sloan PhD Program
- **Institution**: MIT Sloan School of Management
- **Address**: 100 Main St, Cambridge, MA 02142
- **Office**: E62-460
- **Email**: eso@mit.edu
- **Phone**: (617) 253-6470
- **CV Download**: Link to PDF (current file at `/Files/CV_EricSo.pdf`)
- **MIT Sloan Page**: http://mitsloan.mit.edu/faculty-and-research/faculty-directory/detail/?id=53475

**Support Staff**:
- Sumaiya Rahman Haddad — sumaiyar@mit.edu — (617) 253-6679

---

## 4. VISUAL DESIGN SPECIFICATION

### 4.1 Overall Aesthetic

**Bold, high-contrast, modern.** Not a typical academic site. Think creative agency meets MIT professor.

**Color Palette**:
- Primary: `#000000` (black) and `#FFFFFF` (white)
- The site uses a black-and-white core with scroll-triggered inversions (sections alternate or transition between light and dark backgrounds)
- Accent color: Consider MIT red (`#A31F34`) sparingly for links, hover states, or subtle highlights — but the dominant feel should be monochrome

**Reference images**: See `/Inspiration/` folder for the exact aesthetic being targeted.

### 4.2 Typography

- **Headlines**: Heavy, condensed, bold sans-serif — similar to the inspiration site's dramatic uppercase headlines. Consider fonts like:
  - Anton
  - Oswald (bold/extra-bold)
  - Bebas Neue
  - Barlow Condensed (bold)
  - Or a custom web font that gives that punchy, compressed feel
- **Body text**: Clean, readable sans-serif — Inter, Outfit, or similar
- **Sizing**: Headlines should be large (60–120px on desktop for hero text); body text 16–18px
- **Case**: Headlines in ALL CAPS; body text in sentence case

### 4.3 Layout Principles

- **Full-width sections** that alternate between light and dark backgrounds
- **Generous whitespace** — let the typography breathe
- **Photo treatment**: High-contrast, possibly desaturated or black-and-white filtered action shots
- **Asymmetric layouts** on some sections (text heavy on one side, image bleeding off the other)
- **No sidebar** — the new design is full-width, single-column with sections

### 4.4 Scroll-Triggered Color Inversion

**This is a core design feature.** As the user scrolls, sections should transition between white-background-with-black-text and black-background-with-white-text. Reference: Inspiration screenshots showing the same page in both states — the inversion happens as you scroll into new sections.

Implementation approach:
- Each major section has a defined color scheme (light or dark)
- Use CSS `scroll-snap` or Intersection Observer API to trigger smooth transitions
- The nav bar should also adapt (white bar on light sections, black bar on dark sections, or stay fixed as a dark bar)

### 4.5 Dynamic/Animated Backgrounds on Subpages

**Per the mockup notes**: Subpages should have a dynamic background that moves and changes colors behind the text.

Implementation options:
- Subtle particle/noise animation (canvas or WebGL)
- Slowly shifting gradient mesh
- Floating geometric shapes with gentle parallax
- Reference: Slide 2 of MockUpNotes — the Google Antigravity-style floating dots/particles

**Important**: Keep animations performant. Use `requestAnimationFrame`, GPU-accelerated transforms, and consider `prefers-reduced-motion` for accessibility.

### 4.6 Responsive Design

- Mobile-first approach
- Hamburger menu on mobile
- Hero text scales down but stays bold and impactful
- Video embeds stack vertically on mobile
- Animations simplified or disabled on mobile for performance

---

## 5. ASSETS PROVIDED

All assets are in the workspace folder (`/Academic Webpage/`):

| Folder | Contents |
|--------|----------|
| `/Photos/` | 10 images — headshots (EricSo_HeadShot_2024.jpg, Headshot1, Headshot2) and action shots (Action1-7) |
| `/Logos/` | MIT-lockup-3line-red.png, Sloan_logo.jpg, Sloan_logo2.jpg |
| `/Backdrops/` | BlurredBackground.jpg, Sloan2.jpeg, blurred-abstract-background.jpg |
| `/Book/` | NORTON_BookShot_Collision_06.jpg |
| `/Files/` | CV_EricSo.pdf, empty folders for New Works in Progress and Published papers |
| `/Inspiration/` | 5 screenshots of the target aesthetic (agency site with bold B&W design) |
| `/Notes/` | MockUpNotes.pptx, ResourcesLinks.txt, eric_so_site_content_summary.md |

---

## 6. TECHNICAL SPECIFICATION

### 6.1 Recommended Stack

Given the requirements (easy to maintain with Claude Code, hosted on MIT servers, bold animations):

**Astro** (static site generator) — recommended because:
- Outputs plain HTML/CSS/JS (deploys anywhere, including MIT servers)
- Content lives in Markdown files (easy to edit)
- Supports component-based development (reusable layouts)
- Can include interactive JS only where needed (animations) — "islands architecture"
- Zero JS shipped by default for content pages = fast loading

**Alternative if Astro feels too heavy**: Plain HTML/CSS/JS with a clear folder structure and template partials. Claude Code can manage this directly.

### 6.2 File/Content Organization (for easy updates)

```
site/
├── content/
│   ├── papers/              # One .md file per published paper
│   ├── working-papers/      # One .md file per working paper
│   ├── news/                # One .md file per news/update item (homepage feed)
│   ├── datasets/            # One .md file per dataset
│   ├── code-resources/      # One .md file per code resource
│   ├── videos/              # One .md file per video
│   └── press/               # One .md file per press item
├── assets/
│   ├── images/              # All photos, logos, book cover
│   └── files/               # CV PDF, downloadable resources
├── layouts/                 # Page templates
├── components/              # Reusable UI components (nav, footer, contact modal)
├── styles/                  # CSS/SCSS files
└── scripts/                 # Animation JS, scroll behavior
```

**Why this matters for maintainability**: To add a new paper, Eric (or Claude Code) just creates a new `.md` file in `content/papers/` with frontmatter (title, authors, journal, link, topic). The site rebuilds automatically. No HTML editing required.

### 6.3 Hosting on MIT Servers

- Output is static HTML/CSS/JS — compatible with any web server
- Deployment: Upload the `dist/` (or `build/`) folder to MIT web hosting
- No server-side runtime required
- Eric or IT staff can set up a simple deployment script or manual upload

### 6.4 Performance & Accessibility

- Target Lighthouse score: 90+ on Performance, Accessibility, SEO
- `prefers-reduced-motion` media query to disable/simplify animations
- Semantic HTML throughout
- Alt text on all images
- Keyboard-navigable contact modal
- Font loading: Use `font-display: swap` to avoid FOIT

### 6.5 Browser Support

- Modern browsers: Chrome, Firefox, Safari, Edge (latest 2 versions)
- Graceful degradation for animations (site is fully usable without JS)

---

## 7. CONTENT TO BE PROVIDED LATER

The following items are referenced but not yet available:

1. **Book description** for The Collision page (placeholder for now)
2. **Purchase links** for the book (Amazon, bookshop.org, Norton, etc.)
3. **thecollision.ai** blog — link to be included once live
4. **Updated CV** — current version is in `/Files/CV_EricSo.pdf`
5. **Any additional press links** beyond the IDE feature
6. **Preferred hero photo** — multiple options available in `/Photos/`; Eric to choose or let designer pick
7. **Any tagline or one-liner** for the homepage hero (e.g., a research mission statement)
8. **Teaching details** — course names, descriptions, semesters, syllabi links
9. **Research group members** — current PhD students, postdocs, and RAs with brief bios or links
10. **Initial news items** — 3-5 recent updates to seed the homepage feed

---

## 8. DESIGN REFERENCE SUMMARY

| Element | Reference |
|---------|-----------|
| Homepage layout | MockUpNotes.pptx Slide 1 — photo left, big text right, black nav bar |
| Color inversion on scroll | Inspiration screenshots 1 & 2 — same page transitioning from white to black |
| Nav bar style | Inspiration screenshot 3 — black bar, spaced uppercase labels |
| Subpage content layout | Inspiration screenshots 4 & 5 — alternating dark/light sections, action photos |
| Dynamic background (subpages) | MockUpNotes.pptx Slide 2 — floating particles/dots behind text |
| Scroll color change | MockUpNotes.pptx Slide 3 — white-to-black section transition with arrow |

---

## 9. BUILD PRIORITIES

**Phase 1 — Core structure & homepage**:
- Nav bar, homepage hero, bio section, contact modal
- Scroll-triggered color inversion
- Responsive layout

**Phase 2 — Content pages**:
- Research (published) page
- Working Papers page
- Data + Artifacts page
- Media + Videos page

**Phase 3 — The Collision & polish**:
- The Collision book page
- Dynamic animated backgrounds on subpages
- Performance optimization
- Final visual polish and QA

---

## 10. SAMPLE MARKDOWN CONTENT FILE

Example of how a paper would be stored for easy maintenance:

```markdown
---
title: "Core Earnings: New Data and Evidence"
authors: ["Rouen", "Wang", "So"]
journal: "Journal of Financial Economics"
volume: "142(3)"
date: "2021-12"
pages: "1068-1091"
topic: "behavioral-financial-economics"
ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3467814"
featured: false
---
```

No body content needed — the template renders everything from frontmatter. To add a new paper, copy this file, update the fields, and rebuild.

### Example: News/Update Item (`content/news/2026-03-fiscal-frontier.md`)

```markdown
---
title: "New working paper on AI's impact on US fiscal outlook"
date: 2026-03-01
category: "Paper"        # Options: Paper, Talk, Press, Course, Award
link: "https://www.brookings.edu/articles/the-fiscal-frontier..."
---
```

To post a news item: create a file, add 3-4 lines of frontmatter. The homepage feed updates automatically.

---

## 11. ADDITIONAL DESIGN CONSIDERATIONS

### Academic Usability vs. Bold Aesthetics

The site should be visually striking, but academic visitors (hiring committees, PhD applicants, journalists, collaborators) need to find specific information fast. Guidelines for balancing both:

- **Navigation must be immediately clear** — even on dark backgrounds or during animation transitions, nav labels should be legible and clickable at all times
- **Paper titles and links must be easy to scan** — the Research page prioritizes readability over dramatic layouts. Clean typography, generous line spacing, and obvious clickable links.
- **Animations should never block content** — dynamic backgrounds sit behind text, not in front of it. Text must have sufficient contrast in all animation states.
- **Load time matters** — the homepage hero should be visible within 1-2 seconds. Animations can load progressively after the core content is painted.
- **Google Scholar and SEO** — include structured data (JSON-LD) for the Person schema and each publication. This helps search engines and academic indexers surface the site correctly.

### Accessibility Baseline

- WCAG 2.1 AA compliance as a target
- All text meets 4.5:1 contrast ratio against its background (including during animation transitions)
- `prefers-reduced-motion` fully supported — users who disable motion get a static but equally polished experience
- Skip-to-content link for keyboard users
- Semantic heading hierarchy (h1 → h2 → h3) on every page

---

*End of specification.*
