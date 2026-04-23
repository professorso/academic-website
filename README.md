# Eric So — Academic Website

Personal academic website for Eric So, Sloan Distinguished Professor of Global Economics and Behavioral Science at MIT.

## Quick Start

```bash
cd site/
npm install        # install dependencies (first time only)
npm run dev        # start dev server at http://localhost:4321
npm run build      # build static site to dist/
```

## Working from Any Computer

This project lives in Dropbox and can be edited from any machine with Claude Code installed. To start a session:

1. Open a terminal and run `claude` (or open Claude Code in your IDE)
2. Tell Claude Code to change to the project directory:
   ```
   cd '/Users/eso/MIT Dropbox/Eric So/Documents/Academic Webpage'
   ```
3. Claude Code will automatically read the `CLAUDE.md` file in this folder, which contains all project context, design decisions, and editing instructions.
4. Ask Claude Code to make your changes (e.g., "add a new news item about my latest paper", "update my CV", "change the hero photo").
5. Preview locally with `cd site && npm run dev`, then build with `npm run build` when ready to deploy.

**Important**: Always verify Claude Code is working in this Dropbox folder, not a different path. See `ISSUES.md` for past problems caused by wrong working directories.

## What Each File Does

| File / Folder | Purpose |
|---|---|
| `CLAUDE.md` | Instructions automatically loaded by Claude Code — project context, design rules, editing patterns |
| `EricSo_Website_Spec.md` | Full design and content specification (original build doc) |
| `ISSUES.md` | Issue log and session notes — log all problems and fixes here |
| `README.md` | This file — project overview and how to work on the site |
| `site/` | Astro project (the actual website) |
| `site/src/pages/` | Page files: index, research, working-papers, media, the-collision, data |
| `site/src/components/` | Reusable UI components (Hero, Navbar, BioSection, etc.) |
| `site/src/layouts/` | Base page layout template |
| `site/src/styles/global.css` | Global stylesheet |
| `site/src/content/news/` | Markdown news items for the homepage feed |
| `site/public/` | Static assets (images, PDFs, scripts) |
| `site/dist/` | Built output — deploy this folder to MIT servers |

## Folder Structure

```
Academic Webpage/
├── CLAUDE.md                  ← Auto-loaded instructions for Claude Code
├── README.md                  ← You are here
├── EricSo_Website_Spec.md     ← Full build specification
├── ISSUES.md                  ← Issue log and session notes
├── site/                      ← Astro project
│   ├── src/
│   │   ├── pages/             ← Route pages (.astro files)
│   │   ├── components/        ← UI components
│   │   ├── layouts/           ← Page templates
│   │   ├── styles/            ← CSS
│   │   └── content/news/      ← News feed items (markdown)
│   ├── public/                ← Static assets
│   │   ├── images/            ← Photos, logos, backdrops
│   │   ├── files/             ← CV PDF
│   │   └── scripts/           ← Animation JS
│   └── dist/                  ← Built static site (deploy this)
├── Photos/                    ← Source photo assets
├── Logos/                     ← MIT/Sloan logos
├── Backdrops/                 ← Background images
├── Book/                      ← Book cover image
├── Files/                     ← CV and downloadable resources
├── Inspiration/               ← Design reference screenshots
└── Notes/                     ← MockUp notes, content summary
```

## Tech Stack

- **Astro** — static site generator (outputs plain HTML/CSS/JS)
- **No framework** — vanilla components, zero client JS by default
- Content lives in `.astro` components and markdown files

## How to Update Content

### Add a news item
Create a new `.md` file in `site/src/content/news/` with frontmatter:
```markdown
---
title: "Your news headline"
date: 2026-03-01
category: "Paper"   # Paper, Talk, Press, Course, Award
link: "https://..."
---
```

### Update research papers
Edit `site/src/pages/research.astro` or `site/src/pages/working-papers.astro` directly.

### Update contact info
Edit `site/src/components/ContactModal.astro`.

### Update bio or roles
Edit `site/src/components/BioSection.astro` and `site/src/components/RolesSection.astro`.

### Update CV
Replace the PDF at `site/public/files/CV_EricSo.pdf`. The navbar CV button and bio section link will automatically point to the new file.

### Update LinkedIn or social links
Edit the navbar right-side buttons in `site/src/components/Navbar.astro`.

### Add a press article
Add an entry to the `press` array in `site/src/pages/media.astro`:
```js
{
  title: 'Article Title Here',
  source: 'Publication Name',
  link: 'https://...',
},
```

### Add an AI & Education link
Add an entry to the `edTechResources` array in `site/src/pages/resources.astro`:
```js
{
  name: 'Resource Title Here',
  source: 'Source Name',
  link: 'https://...',
},
```

## Deployment

The site auto-deploys to **GitHub Pages** on every push to `main`:
- **Live URL**: https://professorso.github.io/academic-website/
- **Workflow**: `.github/workflows/deploy.yml` builds and deploys automatically
- The site runs on GitHub's servers — no need to keep your computer on

### Custom MIT domain (in progress)
- `eso.mit.edu` was denied per MIT's domain name policy (no personal websites)
- Next step: request `solab.mit.edu` or `sogroup.mit.edu` (policy allows faculty lab/group sites)
- Contact: Bara Blender (bblender@mit.edu, MIT Office of Communications)
- When approved: update `astro.config.mjs` (change `site`, remove `base`), add CNAME file to `site/public/`

## Build Status (as of 2026-03-13)

### Complete
- Homepage: Hero with particle animation, bio, roles, photo strip, selected work (auto-scrolling marquee), LinkedIn posts (2x2 grid), areas of interest, external links
- Navigation: Menu dropdown (top-left), inline nav links, CV/LinkedIn/Contact buttons (top-right, always visible), hamburger on mobile
- CV links in navbar and bio section, Contact button in bio section
- LinkedIn "Follow" link in navbar
- Navbar stays dark over hero, adapts colors on scroll for light/dark sections
- Scroll-triggered color inversions (light/dark sections)
- Research page: Featured papers marquee + all 21 published papers in 4 categories
- Working Papers page: All 6 working papers
- Media + Videos page: 6 YouTube embeds, 15 press articles (3-column card grid)
- Data + Artifacts page: 4 datasets with disclaimer, 4 AI & Education links (2-column card grid)
- The Collision page: Book cover (clickable, links to Amazon), subtitle "What AI Does to Us", Amazon order button
- Subpage headers using backdrop images (not action photos)
- Responsive design across all pages
- Accessibility page with WCAG 2.1 AA statement, footer link on all pages
- Version control: git + GitHub remote (professorso/academic-website, public)
- Auto-deploy to GitHub Pages via GitHub Actions

### Awaiting Content from Eric
- Book description (The Collision page — currently placeholder)
- Teaching section: Course names, descriptions, syllabi links
- Financial Times article title (currently placeholder on Media page)

### Minor Polish Remaining
- Structured data (JSON-LD) for SEO/Google Scholar

## Key Design Features

- Black-and-white high-contrast palette with scroll-triggered color inversions
- Heavy condensed typography (bold, uppercase headlines)
- Animated particle backgrounds on hero
- Responsive with hamburger menu on mobile
- `prefers-reduced-motion` support for accessibility (planned)
