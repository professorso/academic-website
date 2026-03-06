import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages (temporary) — remove base and switch site when eso.mit.edu DNS is ready
  site: 'https://professorso.github.io',
  base: '/academic-website',
  // Custom domain (uncomment when DNS is connected):
  // site: 'https://eso.mit.edu',
});
