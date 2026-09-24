# Issues & Session Log

Track problems, fixes, and session notes for the Academic Webpage project.

---

## Session Log

### 2026-09-23 — Companion workbook hosting

- Added `/workbook/` as the permanent destination for Norton’s business-card QR code and hosted the user-specified September 3 PDF under a date-free filename.
- Future revisions replace the hosted PDF and require a deployment; edits to the ABB source do not automatically publish. Download links include a content hash to avoid stale cached revisions.
- Added the book-page link, site search entry, social image, and update instructions. Email collection is optional and not enabled.
- The initial sandboxed build could not resolve the existing font CDN; the build passed with network access. Local preview required permission to bind the development port.


### Session 2 — 2026-03-03 (recovery + fixes + content expansion)

**Changes made:**
- Recovered site files from `/Users/eso/Academic Webpage/site/` to Dropbox project folder
- Photo strip: Removed Action5.jpg, added Action4.JPG (was missing/not rendering), removed clickable hover effects
- Subpage headers: Switched from action photos to backdrop images
- The Collision page: Added subtitle "What AI Does to Us", replaced "Visit thecollision.ai" with "Order on Amazon" linking to Amazon listing, book cover image now clickable (links to Amazon), increased book cover size (3fr/2fr grid, 520px max)
- Navbar: Replaced "ERIC SO" logo with menu icon + dropdown, added CV button and LinkedIn "Follow" button to top-right. Mobile: all right-side buttons are icon-only, no borders
- Bio section: Added "Download CV" link below education details
- Data page: Replaced "Code Resources" section with "AI & Education" section (4 links in 2-column square card grid). Moved disclaimer under datasets, removed "or code" from text. Fixed text alignment (flex-start, flex:1 on data-info)
- Media page: Expanded press section from 2 to 15 articles. Redesigned from stacked list to 3-column card grid (2 on tablet, 1 on mobile). Sources include Washington Post, Fortune, Forbes, MarketWatch, GMAC, MIT Sloan, MIT IDE, Institutional Investor, Index Fund Advisors, Brookings, Financial Times
- Created CLAUDE.md, README.md, ISSUES.md

**Known placeholder:** Financial Times article title needs to be updated (currently "Financial Times Feature")

---

## Issue #1: Claude Code session froze — site files not saved to Dropbox

- **Date**: 2026-03-03
- **Status**: Resolved
- **Severity**: High

### What happened
A Claude Code session was used to build the initial site from `EricSo_Website_Spec.md`. The session became unresponsive (locked up) while the dev server was still running at `http://localhost:4321`. The built site was functional in the browser but the source files were saved to `/Users/eso/Academic Webpage/site/` (outside the Dropbox project folder) and not visible in the project directory.

### Root cause
The previous Claude Code instance created the project at `/Users/eso/Academic Webpage/site/` rather than inside the Dropbox-synced folder at `/Users/eso/MIT Dropbox/Eric So/Documents/Academic Webpage/site/`. This appears to be because the working directory was not explicitly set to the Dropbox path, or the instance defaulted to a shorter path.

### Resolution
- Located the running node process (PID 12025) serving on port 4321
- Traced its working directory to `/Users/eso/Academic Webpage/site/`
- Copied the full project (source, public assets, node_modules, dist) to the Dropbox project folder
- Verified all source files are intact

### Prevention
- Always `cd` to the full Dropbox path before starting work: `cd '/Users/eso/MIT Dropbox/Eric So/Documents/Academic Webpage'`
- Verify the working directory at the start of each session
- `CLAUDE.md` now exists in the project folder with this instruction

---

## Issue #2: Photo strip — Action5.jpg unwanted, Action4.JPG missing

- **Date**: 2026-03-03
- **Status**: Resolved
- **Severity**: Medium

### What happened
The homepage photo strip included Action5.jpg (which Eric did not want) and was missing Action4.JPG. The missing photo was not rendering because it was never added to the photo list. Additionally, the hover effects (grayscale removal, opacity change, animation pause) made photos appear clickable when they were purely decorative.

### Root cause
Original build included Action5.jpg by default and omitted Action4.JPG. The `.JPG` uppercase extension may have contributed to it being overlooked. Hover effects were added for visual flair without considering that they imply interactivity.

### Resolution
- Removed Action5.jpg from photo list
- Added Action4.JPG (with correct uppercase extension)
- Removed hover effects and added `pointer-events: none` to make strip clearly decorative

### Prevention
- `CLAUDE.md` now documents: "Do NOT use Action5.jpg anywhere" and "Photo strip is decorative only"

---

### Session 3 — 2026-03-04 (navbar fix + contact additions)

**Changes made:**
- Contact modal: Updated admin section header to "Scheduling & Administrative Support", added note to contact Sumaiya for scheduling
- Bio section: Added "Contact →" button next to "Download CV →" that opens contact modal
- Photo strip: Removed Action4.JPG (appeared blacked out due to dark source image + grayscale filter)
- Navbar visibility fix: Buttons (LinkedIn, CV, Contact) were invisible at top of homepage because hero's `data-theme="light"` triggered `navbar--on-light` immediately, making white buttons on white background
- Fix: Excluded hero from scroll-inversion observer so navbar stays dark at page top; added `:global(.navbar--on-light)` styles in Navbar.astro to properly override scoped styles; set `flex-shrink: 0` on right-side button group

---

## Issue #3: Navbar buttons invisible at top of homepage

- **Date**: 2026-03-04
- **Status**: Resolved
- **Severity**: High

### What happened
The LinkedIn, CV, and Contact buttons in the navbar were invisible when first loading the homepage. They only became visible after scrolling down.

### Root cause
Two compounding issues:
1. The hero section had `data-theme="light"`, which immediately triggered `navbar--on-light` via the Intersection Observer, switching the navbar to a white background
2. The light-mode button styles were in `global.css` but couldn't override the component-scoped styles in `Navbar.astro` due to Astro's scoped CSS specificity (data attribute selectors)

Result: white buttons on white background = invisible.

### Resolution
1. Excluded the hero from the scroll-inversion observer (`.section[data-theme]:not(.hero)`) so the navbar stays dark at page load
2. Moved light-mode navbar styles into `Navbar.astro` using `:global(.navbar--on-light)` to match scoped specificity
3. Added `flex-shrink: 0` on `.navbar-right` to prevent buttons from being pushed off-screen

### Prevention
- Always use `:global()` in Astro component styles when targeting parent-level class changes
- Test navbar visibility at page load, not just after scrolling
- Documented in `CLAUDE.md` design decisions

---

### Session 4 — 2026-03-05 (version control + homepage overhaul)

**Changes made:**
- Initialized git repo + created `.gitignore` (excludes node_modules, dist)
- Connected to GitHub remote: `professorso/academic-website` (private)
- Added git commit step to CLAUDE.md session workflow
- FeaturedResearch: rebuilt with 4 papers (AI Advisors, Losing is Optional, Box Jumping, Fiscal Frontier) as auto-scrolling horizontal marquee (pauses on hover, respects prefers-reduced-motion). Fixed global `.card` class conflict by using scoped `featured-card` class names. Added to research page header.
- NewsFeed: replaced markdown news items with 2x2 grid of 4 recent LinkedIn posts (stock screener, Prism, ChatGPT vs Google, Your Brain on AI)
- AreasOfInterest: reordered (AI first, Asset Pricing middle), removed Behavioral Finance, Limits to Arbitrage, Market Microstructure, Earnings Announcements. Added Behavioral Science, Learning + Education, Technological Dependence.
- Removed Research Group section from homepage
- Removed MIT Sloan faculty page link from Elsewhere section
- Elsewhere switched to dark theme for alternating background pattern

---

### Session 5 — 2026-03-06 (GitHub Pages deployment)

**Changes made:**
- Added `.github/workflows/deploy.yml` — GitHub Actions workflow that auto-builds and deploys on push to `main`
- Updated `astro.config.mjs` to use GitHub Pages base path (`/academic-website`) instead of `https://eso.mit.edu`
- Prefixed all hardcoded internal paths with `import.meta.env.BASE_URL` across 9 files: BaseLayout, Navbar, Hero, BioSection, ContactModal, PhotoStrip, PageHeader, the-collision, astro.config
- Made repo public (required for GitHub Pages on free plan)
- Enabled GitHub Pages via API with workflow build source
- Refreshed `gh` CLI auth to add `workflow` scope (needed to push workflow files)
- Site live at: https://professorso.github.io/academic-website/

---

### Session 6 — 2026-03-09 (accessibility page)

**Changes made:**
- Created `site/src/pages/accessibility.astro` — WCAG 2.1 AA commitment, site features list, feedback contact (eso@mit.edu), link to MIT accessibility resources
- Added "Accessibility" link to footer in BaseLayout.astro (styled as underlined small text)
- Required by MIT IS&T for DNS namespace approval

---

### Session 7 — 2026-03-12 (MIT domain denied + documentation)

**What happened:**
- Submitted DNS request for `eso.mit.edu` → `professorso.github.io`
- Bara Blender (MIT Office of Communications) denied the request per MIT domain name policy
- Policy prohibits: personal websites, `name.mit.edu` format, redirects to personal sites
- Policy allows: faculty lab/group sites with format `namelab.mit.edu` or `namegroup.mit.edu`

**Next steps (for Eric):**
1. **Option A (recommended)**: Reply to Bara requesting `solab.mit.edu` or `sogroup.mit.edu`, framing as a faculty research site (publications, datasets, MIT initiative info) rather than a personal website
2. **Option B**: Ask MIT Sloan communications team to sponsor as a DLC site
3. **Option C**: Register a third-party domain (e.g., `ericso.com`) and skip MIT namespace entirely

**Contact:** Bara Blender, bblender@mit.edu, Senior Communications Strategist, MIT Institute Office of Communications

---

### Session 8 — 2026-08-31 (administrative contact update)

**Changes made:**
- Replaced Sumaiya Rahman Haddad with Cindy Pham (`phamcl@mit.edu`) in the contact modal's Scheduling & Administrative Support section
- Replaced the former contact's phone number with Cindy's, `(617) 253-6621`
- Updated the scheduling note to direct requests to Cindy

---

### Session 9 — 2026-08-31 (landing-page book link)

**Changes made:**
- Added a smaller blue "Author of THE COLLISION: What AI Does to Us" line directly below the landing-page professor title
- Linked the full line to the book's Amazon page and styled it without an underline
- Added hover and keyboard-focus treatments to preserve clear interaction feedback and accessibility

---

### Session 10 — 2026-09-03 (site-wide design-system refinement)

**Changes made:**
- Formalized a responsive typography scale and missing neutral-color tokens in `global.css`; reserved Bebas Neue for display headings and Inter for content typography
- Added shared interaction patterns for cards, rows, arrows, text links, and keyboard focus; removed vertical hover jumps from major cards and lists
- Replaced the automatic featured-research marquee with a responsive grid and made the photo strip manually scrollable
- Removed generic section entrance fades; retained the hero particles, book chapter reveals, and Resources streaming intro as page-specific signature motion
- Created `PaperList.astro` and used it for Research and Working Papers, with status badges, venue, authors, one-sentence takeaways, publication details, and explicit read/pending states
- Expanded the global footer with Explore and Connect navigation, MIT Sloan profile, CV, LinkedIn, Contact, address, copyright, and Accessibility
- Unified navbar, bio, and footer Contact controls through the contact modal's trigger and focus-return logic

**Verification:**
- Astro production build completed successfully
- In-app and local headless-browser screenshot tooling was unavailable in the managed environment, so responsive structure was verified through generated HTML/CSS inspection in addition to the build

---

### Session 11 — 2026-09-03 (abstract-grounded research descriptions)

**Changes made:**
- Reviewed the abstracts or publisher records for all 23 published papers and two forthcoming papers listed outside the Artificial Intelligence section
- Replaced generic or inferred takeaways with one-sentence descriptions centered on each paper's actual result, mechanism, and reported magnitude where available
- Added `Notes/research_abstract_sources_20260903.md` as a paper-by-paper source audit
- Corrected bibliographic inconsistencies found during the audit: author order for three papers, the official titles of the voluntary/mandatory disclosure article and *Alphanomics*, and publication details for the subscriber-paid ratings article and analyst-forecast survey
- Left the Artificial Intelligence entries and the teaching guide unchanged because they were outside the published-paper audit

**Verification:**
- Astro production build completed successfully

---

### Session 12 — 2026-09-03 (publication metadata and CV reconciliation)

**Changes made:**
- Audited all 31 Research-page works against primary publisher, DOI, conference, SSRN, arXiv, Brookings, or author records
- Reconciled official titles, author order, publication status, dates, volume/issues, pages or article numbers, and links across the Research page, featured research, working papers, search index, resource dataset credits, and CV
- Corrected notable stale records including *Losing Is Optional* (published in *Review of Finance*), *Bad News Bearers* (accepted at *Management Science*), *Investor Corporate Visits*, *Flight to Earnings*, and the current title of *Lost in Context*
- Renamed the active CV master to `main_20260903.tex`, updated its date, and compacted only inter-publication whitespace to preserve a readable five-page layout
- Expanded `Notes/research_abstract_sources_20260903.md` into the source record for both descriptions and bibliographic metadata
- Removed the duplicate `/data/` redirect declaration that produced an Astro route-collision warning; the canonical `/data` redirect continues to cover the legacy path

**Verification:**
- Recompiled the CV with `tectonic`, confirmed a five-page output with `pypdf`, and visually inspected a rendered contact sheet plus full-size pages
- Confirmed current records are present and superseded titles/statuses are absent from active source files
- Astro production build completed successfully without warnings

---

### Session 13 — 2026-09-24 (AI conference acceptances and CV)

**Changes made:**
- Added Loyalty Capture as accepted at NeurIPS 2026 Main Track (poster), with no paper link, to Research, featured research on the homepage and Research page, site search, and the CV.
- Updated the COLM paper's title to The Profit Alignment Problem and added its arXiv link to research, working papers, featured details, search, and CV. Verified the existing ICML arXiv link.
- Renamed the active CV master and PDF to `main_20260924`, synchronized the website download, and recorded source metadata in the existing research audit.
- The new CV entry initially produced a nearly empty sixth page and split publication entries across pages. Adjusted inter-entry spacing and text height while preserving 11-point type; grouped publication entries to keep titles and details together.
- Used the installed XeLaTeX compiler because `tectonic` was not available on the command path.

**Verification:**
- Recompiled the CV, checked PDF text and hyperlinks, and visually reviewed all five final pages.
- Verified the local Research page and the NeurIPS detail panel, including the accepted status and forthcoming-link display.
- Production build and live deployment checked as part of publishing.

---

### Session 14 — 2026-09-24 (conference citation correction)

**Changes made:**
- Removed the NeurIPS poster designation from research, featured research, site search, and CV, retaining accepted status and Main Track.
- Updated ICML to published and used Eric's supplied citation: Proceedings of the 43rd International Conference on Machine Learning, Seoul, South Korea. PMLR 306, 2026.
- Retained the arXiv links and rebuilt the synchronized five-page CV.

**Verification:**
- Visually reviewed all five PDF pages and checked the proceedings wording and embedded arXiv links.
- Checked the local website preview, production build, and public deployment as part of publishing.

---

### Session 15 — 2026-09-24 (featured-paper order)

- Reordered the shared featured-research list to ICML, NeurIPS, COLM, AI Advisors, and Breaking Bad Financial Habits.
- Research-page numbering and homepage cards follow the same order; paper content and links are unchanged.
- Verified the rendered order and production build before publishing.

---

## Issue Template

```markdown
## Issue #N: [Short description]

- **Date**: YYYY-MM-DD
- **Status**: Open / In Progress / Resolved
- **Severity**: Low / Medium / High

### What happened
[Description of the problem]

### Root cause
[Why it happened, if known]

### Resolution
[How it was fixed]

### Prevention
[How to avoid this in the future]
```
