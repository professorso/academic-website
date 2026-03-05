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

## Version Control
This project uses git for local version control (initialized 2026-03-05). The repo lives inside Dropbox so history syncs across machines.
- **Always commit** at the end of a session — lost work is unrecoverable without it
- Use `git log --oneline` to see history
- Use `git diff` to review uncommitted changes
- If something breaks, roll back with `git checkout <commit> -- <file>`

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

## Build Status (as of 2026-03-03)
- **Phase 1 (Core + Homepage)**: Complete — nav, hero, bio, contact modal, scroll inversions, responsive, CV links, LinkedIn link
- **Phase 2 (Content Pages)**: Complete — research (21 papers), working papers (6), media (6 videos + 15 press articles), data (4 datasets + 4 AI/education links)
- **Phase 3 (Polish)**: ~95% — book page with subtitle and Amazon link, particle animation on hero, backdrop headers on subpages
- **Awaiting Eric's input**: Book description, teaching details, research group members, additional news items, FT article title (currently placeholder)

## Change Log
| Date | Changes |
|------|---------|
| 2026-03-03 | Initial build recovered from frozen session. Photo strip fixed (removed Action5, added Action4.JPG then removed Action4 due to dark rendering, removed clickable hover effects). Subpage headers switched to backdrop images. The Collision page: added subtitle "What AI Does to Us", replaced thecollision.ai link with Amazon order link, book cover links to Amazon, increased book cover size. Navbar: replaced "ERIC SO" logo with menu dropdown, added CV button and LinkedIn "Follow" button. CV link added to bio section. Data page: replaced code resources with AI & Education card grid (4 links), moved disclaimer under datasets, fixed text alignment. Media page: expanded press from 2 to 15 articles, redesigned as 3-column card grid. Created CLAUDE.md, README.md, ISSUES.md. |
| 2026-03-04 | Contact modal: added scheduling note for Sumaiya Rahman Haddad. Bio section: added Contact button next to Download CV. Navbar visibility fix: added `:global(.navbar--on-light)` styles in Navbar.astro for proper light-mode button colors, excluded hero from scroll-inversion observer so navbar stays dark at page top. Right-side buttons set to `flex-shrink: 0` to prevent overflow hiding. |

## Known Issues
See `ISSUES.md` for the full log. Key items:
- `prefers-reduced-motion` not yet implemented for CSS/canvas animations
- News feed only has 2 seed items (spec suggests 3-5)
- FT article title is a placeholder ("Financial Times Feature") on Media page — needs real title from Eric
- Action4.JPG removed from photo strip (too dark when grayscale filter applied)

## Important Notes
- The site deploys as static HTML to MIT servers — no server-side runtime
- Configured for `https://eso.mit.edu` in `astro.config.mjs`
- Always log problems and fixes in `ISSUES.md`
- Always update this file's Build Status and Change Log after making changes
