// @ts-check
import { defineConfig } from 'astro/config';

// Static output by default — Vercel auto-detects Astro and serves the built `dist/`.
// If you deploy under a subpath or custom domain, set `site` (and `base`) below.
export default defineConfig({
  // Production URL — used for canonical links and absolute Open Graph image URLs.
  // Update this if you move to a custom domain (e.g. https://gavinhsia.com).
  site: 'https://gavinhsia.vercel.app',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
