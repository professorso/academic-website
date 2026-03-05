# Issues & Session Log

Track problems, fixes, and session notes for the Academic Webpage project.

---

## Session Log

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
