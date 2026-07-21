// @ts-check
import { defineConfig } from 'astro/config';

// Static output by default — Vercel auto-detects Astro and serves the built `dist/`.
// If you deploy under a subpath or custom domain, set `site` (and `base`) below.
export default defineConfig({
  // site: 'https://your-domain.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
