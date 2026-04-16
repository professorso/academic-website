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

### Custom domain: ericso.pro
- Registered 2026-04-16 after MIT denied `eso.mit.edu` (policy prohibits personal `name.mit.edu` sites).
- `site/public/CNAME` contains `ericso.pro` — GitHub Pages reads this on deploy to auto-configure the custom domain.
- `astro.config.mjs` uses `site: 'https://ericso.pro'` with no `base` path.
- DNS at registrar:
  - Apex A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - Optional AAAA → `2606:50c0:8000::153`, `...8001::153`, `...8002::153`, `...8003::153`
  - CNAME `www` → `professorso.github.io`
- After first deploy, enable "Enforce HTTPS" in GitHub repo Settings → Pages (may take a few hours for cert provisioning).

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
- **Research papers**: Edit `site/src/pages/research.astro` directly (papers are inline, not markdown files). **Also add matching entry to `site/src/data/search-index.ts`** so it shows up in Cmd+K search.
- **Working papers**: Edit `site/src/pages/working-papers.astro`. Also update `search-index.ts`.
- **Press articles**: Edit the `press` array in `site/src/pages/media.astro` (displayed as 3-column card grid)
- **AI & Education links**: Edit the `edTechResources` array in `site/src/pages/data.astro` (displayed as 2-column square card grid)
- **Contact info**: Edit `site/src/components/ContactModal.astro`
- **Bio/Roles**: Edit `BioSection.astro` and `RolesSection.astro`
- **CV**: Replace the PDF at `site/public/files/CV_EricSo.pdf` (navbar and bio links auto-update). See cv_workflow memory for the full recompile-from-LaTeX flow.
- **LinkedIn/Social**: Edit the navbar right-side buttons in `site/src/components/Navbar.astro`
- **Now page**: Edit `site/src/pages/now.astro` — update the `lastUpdated` string in the frontmatter + the content lists. Should reflect what Eric is currently working on at the top of his mind.
- **New top-level pages**: Add the route file under `site/src/pages/`. To be fully integrated, also (1) add the route key to `pages` in `site/src/pages/og/[...route].ts` so an OG image is generated, and (2) add an entry to `search-index.ts` so it's discoverable in Cmd+K.

## Design Decisions
- **Photos**: Homepage photo strip currently uses Action1-3, Action6-7 plus IDE1 + IDE2 (MIT IDE Conference, April 2026). Photos are color as of 2026-04-16 (grayscale filter removed). Subpage headers use backdrop images from `public/images/backdrops/`. Do NOT use Action5.jpg anywhere. Action4 is also omitted (too dark).
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

## Build Status (as of 2026-04-16)
- **Phase 1 (Core + Homepage)**: Complete — nav, hero, bio, contact modal, scroll inversions, responsive, CV links, LinkedIn link
- **Phase 2 (Content Pages)**: Complete — research (21 papers), working papers (6), media (6 videos + 15 press articles), data (4 datasets + 4 AI/education links)
- **Phase 3 (Polish)**: ~95% — book page with subtitle and Amazon link, particle animation on hero, backdrop headers on subpages
- **Phase 4 (Deployment)**: Custom domain `ericso.pro` registered. CNAME file + Astro config updated. Awaiting DNS propagation + GitHub Pages HTTPS cert.
- **SEO**: Person JSON-LD schema, canonical URL, and Open Graph tags added to BaseLayout for Google Knowledge Graph eligibility.
- **Awaiting Eric's input**: Book description, teaching details, FT article title (currently placeholder), MIT Sloan faculty page URL + SSRN author URL (for Person schema `sameAs` in `BaseLayout.astro`)

## Change Log
| Date | Changes |
|------|---------|
| 2026-03-03 | Initial build recovered from frozen session. Photo strip fixed (removed Action5, added Action4.JPG then removed Action4 due to dark rendering, removed clickable hover effects). Subpage headers switched to backdrop images. The Collision page: added subtitle "What AI Does to Us", replaced thecollision.ai link with Amazon order link, book cover links to Amazon, increased book cover size. Navbar: replaced "ERIC SO" logo with menu dropdown, added CV button and LinkedIn "Follow" button. CV link added to bio section. Data page: replaced code resources with AI & Education card grid (4 links), moved disclaimer under datasets, fixed text alignment. Media page: expanded press from 2 to 15 articles, redesigned as 3-column card grid. Created CLAUDE.md, README.md, ISSUES.md. |
| 2026-03-04 | Contact modal: added scheduling note for Sumaiya Rahman Haddad. Bio section: added Contact button next to Download CV. Navbar visibility fix: added `:global(.navbar--on-light)` styles in Navbar.astro for proper light-mode button colors, excluded hero from scroll-inversion observer so navbar stays dark at page top. Right-side buttons set to `flex-shrink: 0` to prevent overflow hiding. |
| 2026-03-05 | Git version control initialized + GitHub remote (professorso/academic-website, private). FeaturedResearch: rebuilt as auto-scrolling marquee with 4 papers (AI Advisors, Losing is Optional, Box Jumping, Fiscal Frontier), added to research page. NewsFeed: replaced with 2x2 grid of 4 LinkedIn posts. AreasOfInterest: reordered (AI first), removed 4 old topics, added Behavioral Science, Learning + Education, Technological Dependence. Removed Research Group section and MIT Sloan faculty link from Elsewhere. Elsewhere switched to dark theme for alternating pattern. |
| 2026-03-06 | GitHub Pages deployment: added `.github/workflows/deploy.yml` for auto-deploy on push to main. Updated `astro.config.mjs` to use GitHub Pages base path (`/academic-website`). Prefixed all internal paths (nav links, images, CV, scripts) with `import.meta.env.BASE_URL` across 9 files. Made repo public to enable GitHub Pages on free plan. Site live at `professorso.github.io/academic-website/`. |
| 2026-03-09 | Added accessibility page (`site/src/pages/accessibility.astro`) and footer link. Required by MIT IS&T for DNS approval. Includes WCAG 2.1 AA commitment, site features list, feedback contact, link to MIT accessibility resources. |
| 2026-03-12 | MIT denied `eso.mit.edu` — domain name policy prohibits personal websites and `name.mit.edu` format. Policy allows faculty lab/group sites (`namelab.mit.edu`). Next step: request `solab.mit.edu` or `sogroup.mit.edu`, or sponsor through MIT Sloan DLC. |
| 2026-04-16 | Registered `ericso.pro` at Cloudflare, DNS pointed to GitHub Pages (4 A records to 185.199.108-111.153 + CNAME www→professorso.github.io, proxy disabled). Added `site/public/CNAME`, switched `astro.config.mjs` to `site: 'https://ericso.pro'` with no base path. Site live at https://ericso.pro with HTTPS enforced. Added Person JSON-LD schema, canonical URL, and Open Graph meta tags to BaseLayout. Installed `@astrojs/sitemap`. Verified ownership in Google Search Console and submitted sitemap. |
| 2026-04-16 | Cleaned up `Files/CV/` — kept active master `main_20260416.tex` + three `\input{}` dependencies, removed historical snapshots, specialized CVs, and duplicates. Updated CV website URL to `ericso.pro`, recompiled, synced to `site/public/files/CV_EricSo.pdf`. |
| 2026-04-16 | Rewrote homepage bio (BioSection.astro) to emphasize applied AI, reference the forthcoming book, mention the MIT IDE AI in Financial Markets research group, and name the two separate courses (Applied AI, Quant Investing). Switched homepage photo strip to color and added two MIT IDE Conference photos (IDE1, IDE2). |
| 2026-04-16 | Added four polish features: ClientRouter view transitions, `/now` page (linked from footer), Command-K search palette (CommandPalette.astro + search-index.ts + navbar ⌘K button), and per-page OG images via `astro-og-canvas` (endpoint at `site/src/pages/og/[...route].ts`). Added Twitter card meta tags. |

## Known Issues
See `ISSUES.md` for the full log. Key items:
- FT article title is a placeholder ("Financial Times Feature") on Media page — needs real title from Eric
- Action4.JPG not used in photo strip (too dark historically; may be reevaluated now that photos are in color)
- `ericso.pro` DNS propagation + HTTPS cert pending after first deploy

## Important Notes
- The site auto-deploys to GitHub Pages on every push to `main`
- Configured for custom domain `ericso.pro` in `astro.config.mjs` (CNAME file in `site/public/`)
- Always log problems and fixes in `ISSUES.md`
- Always update this file's Build Status and Change Log after making changes
