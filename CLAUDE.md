# Academic Webpage — Claude Code Instructions

## Working Directory
**CRITICAL**: Always work from the Dropbox-synced path:
```
cd '/Users/eso/MIT Dropbox/Eric So/Documents/Academic Webpage'
```
Do NOT use `/Users/eso/Academic Webpage/` — that path is outside Dropbox and files saved there will not be synced or visible in the project folder.

## Session Workflow
Every Claude Code session on this project must follow these steps:

1. **Verify working directory** — Confirm you are in the Dropbox path above before making any changes
2. **Read this file** — It is auto-loaded, but review it if making significant changes
3. **Read `EricSo_Website_Spec.md`** — Before any major design or content changes, review the original spec
4. **Make changes** — Edit files in `site/src/`
5. **Test** — Run `cd site && npm run dev` and verify in the browser
6. **Update documentation** — After every session that changes the site:
   - Update the **Build Status** section below with what changed
   - Log any bugs or issues in `ISSUES.md`
   - Update `README.md` if new features, pages, or workflows were added
7. **Git commit** — ALWAYS commit changes at the end of each session (or after each logical chunk of work). Use a descriptive commit message summarizing what changed. Never leave uncommitted work.
8. **Build** — Run `npm run build` when ready to deploy

## Version Control & Deployment
This project uses git with a GitHub remote: `professorso/academic-website` (public).
- The repo lives inside Dropbox so history syncs across machines
- **Always commit** at the end of a session — lost work is unrecoverable without it
- Use `git log --oneline` to see history
- Use `git diff` to review uncommitted changes
- If something breaks, roll back with `git checkout <commit> -- <file>`

### GitHub Pages (live site)
- **Live URL**: https://professorso.github.io/academic-website/
- **Auto-deploys** on every push to `main` via GitHub Actions (`.github/workflows/deploy.yml`)
- The site builds on GitHub's servers — works even when your computer is off
- All internal paths use `import.meta.env.BASE_URL` to handle the `/academic-website` base path

### Custom domain (eso.mit.edu) — IN PROGRESS
- MIT denied `eso.mit.edu` per their domain name policy (no personal websites, no `name.mit.edu`)
- The policy allows faculty lab/group sites with format `namelab.mit.edu` or `namegroup.mit.edu`
- **Next step**: Reply to Bara Blender (bblender@mit.edu) requesting `solab.mit.edu` or `sogroup.mit.edu` instead, framing the site as a faculty research site (not personal)
- Alternatively, go through MIT Sloan's communications team to sponsor as a DLC site
- When a custom domain is approved, update `astro.config.mjs`: uncomment the `site: 'https://DOMAIN'` line, remove the `base` path, and add a CNAME file to `site/public/`

## Project Overview
Academic website for Eric So, MIT Sloan professor. Built with Astro (static site generator). The full design spec is in `EricSo_Website_Spec.md` — read it before making significant changes.

## Key Commands
```bash
cd site && npm run dev    # Dev server at http://localhost:4321
cd site && npm run build  # Build static output to dist/
```

## Project Structure
- `site/src/pages/` — Route pages (.astro files)
- `site/src/components/` — Reusable UI components
- `site/src/layouts/` — Base page layout
- `site/src/styles/global.css` — Global CSS
- `site/src/content/news/` — Markdown news items (homepage feed)
- `site/public/` — Static assets (images, PDFs, scripts)
- `site/dist/` — Built output for deployment

## Content Editing Patterns
- **News items**: Add `.md` files to `site/src/content/news/` with frontmatter (title, date, category, link)
- **Research papers**: Edit `site/src/pages/research.astro` directly (papers are inline, not markdown files)
- **Working papers**: Edit `site/src/pages/working-papers.astro`
- **Press articles**: Edit the `press` array in `site/src/pages/media.astro` (displayed as 3-column card grid)
- **AI & Education links**: Edit the `edTechResources` array in `site/src/pages/data.astro` (displayed as 2-column square card grid)
- **Contact info**: Edit `site/src/components/ContactModal.astro`
- **Bio/Roles**: Edit `BioSection.astro` and `RolesSection.astro`
- **CV**: Replace the PDF at `site/public/files/CV_EricSo.pdf` (navbar and bio links auto-update)
- **LinkedIn/Social**: Edit the navbar right-side buttons in `site/src/components/Navbar.astro`

## Design Decisions
- **Photos**: Action photos (Action1-4, Action6-7) are for the homepage photo strip only. Subpage headers use backdrop images from `public/images/backdrops/`. Do NOT use Action5.jpg anywhere.
- **Photo strip**: Decorative only — no hover effects, no click behavior, images have `pointer-events: none`
- **Subpage header images**: Research → `Sloan2.jpeg`, Working Papers → `blurred-abstract-background...jpg`, Media → `BlurredBackground.jpg`, Data → `Sloan2.jpeg`
- **Color scheme**: Black-and-white high-contrast with scroll-triggered inversions. MIT red (#A31F34) used sparingly.
- **Typography**: Bebas Neue for headlines (uppercase), Inter for body text.
- **Animations**: Particle canvas on hero, CSS scroll animations. Must respect `prefers-reduced-motion`.
- **Navbar layout**: Menu dropdown (top-left), inline nav links (center), LinkedIn + CV + Contact buttons (top-right). On mobile: icons only, no labels, no borders. Navbar stays dark (black) over the hero, adapts to light/dark on scroll via Intersection Observer. The hero is excluded from the observer so the navbar doesn't flash white at page load.
- **Navbar light mode**: Uses `:global(.navbar--on-light)` in Navbar.astro (not global.css) to override scoped styles. All buttons switch to black text/borders on light sections.
- **The Collision page**: Title + subtitle "What AI Does to Us" in medium dark blue (#4a7cbf). "Order on Amazon" button links to Amazon listing. Book cover image also links to Amazon.
- **Data page**: Datasets section (list layout) with disclaimer underneath. AI & Education section (2-column square card grid). No code resources section.
- **Media page**: Videos section (responsive grid of YouTube embeds). Press section (3-column card grid, 2 on tablet, 1 on mobile).

## Build Status (as of 2026-03-13)
- **Phase 1 (Core + Homepage)**: Complete — nav, hero, bio, contact modal, scroll inversions, responsive, CV links, LinkedIn link
- **Phase 2 (Content Pages)**: Complete — research (21 papers), working papers (6), media (6 videos + 15 press articles), data (4 datasets + 4 AI/education links)
- **Phase 3 (Polish)**: ~95% — book page with subtitle and Amazon link, particle animation on hero, backdrop headers on subpages
- **Phase 4 (Deployment)**: Site live on GitHub Pages. Custom MIT domain pending (see Version Control & Deployment section above).
- **Awaiting Eric's input**: Book description, teaching details, FT article title (currently placeholder)

## Change Log
| Date | Changes |
|------|---------|
| 2026-03-03 | Initial build recovered from frozen session. Photo strip fixed (removed Action5, added Action4.JPG then removed Action4 due to dark rendering, removed clickable hover effects). Subpage headers switched to backdrop images. The Collision page: added subtitle "What AI Does to Us", replaced thecollision.ai link with Amazon order link, book cover links to Amazon, increased book cover size. Navbar: replaced "ERIC SO" logo with menu dropdown, added CV button and LinkedIn "Follow" button. CV link added to bio section. Data page: replaced code resources with AI & Education card grid (4 links), moved disclaimer under datasets, fixed text alignment. Media page: expanded press from 2 to 15 articles, redesigned as 3-column card grid. Created CLAUDE.md, README.md, ISSUES.md. |
| 2026-03-04 | Contact modal: added scheduling note for Sumaiya Rahman Haddad. Bio section: added Contact button next to Download CV. Navbar visibility fix: added `:global(.navbar--on-light)` styles in Navbar.astro for proper light-mode button colors, excluded hero from scroll-inversion observer so navbar stays dark at page top. Right-side buttons set to `flex-shrink: 0` to prevent overflow hiding. |
| 2026-03-05 | Git version control initialized + GitHub remote (professorso/academic-website, private). FeaturedResearch: rebuilt as auto-scrolling marquee with 4 papers (AI Advisors, Losing is Optional, Box Jumping, Fiscal Frontier), added to research page. NewsFeed: replaced with 2x2 grid of 4 LinkedIn posts. AreasOfInterest: reordered (AI first), removed 4 old topics, added Behavioral Science, Learning + Education, Technological Dependence. Removed Research Group section and MIT Sloan faculty link from Elsewhere. Elsewhere switched to dark theme for alternating pattern. |
| 2026-03-06 | GitHub Pages deployment: added `.github/workflows/deploy.yml` for auto-deploy on push to main. Updated `astro.config.mjs` to use GitHub Pages base path (`/academic-website`). Prefixed all internal paths (nav links, images, CV, scripts) with `import.meta.env.BASE_URL` across 9 files. Made repo public to enable GitHub Pages on free plan. Site live at `professorso.github.io/academic-website/`. |
| 2026-03-09 | Added accessibility page (`site/src/pages/accessibility.astro`) and footer link. Required by MIT IS&T for DNS approval. Includes WCAG 2.1 AA commitment, site features list, feedback contact, link to MIT accessibility resources. |
| 2026-03-12 | MIT denied `eso.mit.edu` — domain name policy prohibits personal websites and `name.mit.edu` format. Policy allows faculty lab/group sites (`namelab.mit.edu`). Next step: request `solab.mit.edu` or `sogroup.mit.edu`, or sponsor through MIT Sloan DLC. |

## Known Issues
See `ISSUES.md` for the full log. Key items:
- FT article title is a placeholder ("Financial Times Feature") on Media page — needs real title from Eric
- Action4.JPG removed from photo strip (too dark when grayscale filter applied)
- Custom MIT domain pending — `eso.mit.edu` denied, need to request alternative (see Deployment section)

## Important Notes
- The site auto-deploys to GitHub Pages on every push to `main`
- Currently configured for GitHub Pages (`professorso.github.io/academic-website/`) in `astro.config.mjs`
- When custom domain is approved: update `site` and remove `base` in `astro.config.mjs`, add CNAME file
- Always log problems and fixes in `ISSUES.md`
- Always update this file's Build Status and Change Log after making changes
