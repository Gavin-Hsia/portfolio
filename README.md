# Portfolio

A personal portfolio built with [Astro](https://astro.build) — the in-depth home for my
internship and personal work. It complements my resume: the resume stays concise and current,
while this site holds the detailed write-ups.

## Tech

- **Astro** (static output) + Markdown content collections
- Vanilla CSS design system (dark-default, light/dark toggle), no CSS framework
- Self-hosted fonts via Fontsource (JetBrains Mono + Inter)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to ./dist
npm run preview  # serve the built ./dist locally
```

## How it's organized

Pages: **Home** (scrolling dark→light sections) · **Portfolio** (image grid of projects) ·
**Resume** (experience + education + skills, with PDF download) · **Contact**.

```
src/
├── config.ts                 # ← edit name, role, bio, socials, skills, education, resume path
├── content/
│   ├── config.ts             # frontmatter schemas (rarely need to touch)
│   ├── work/                 # one Markdown file per project (internship OR personal)
│   └── experience/           # one Markdown file per role → shown on the Resume page
├── components/ · layouts/ · pages/ · styles/
public/
├── resume.pdf                # ← drop your real resume here (replace the placeholder note)
└── images/
    ├── circuit-bg.svg        # ← placeholder hero background; swap for a real photo if you like
    └── …                     # ← drop headshot (headshot.jpg), screenshots, project covers here
```

### The look

Bold condensed display type (Anton) + clean sans (Inter), with a dark cinematic hero and
light content sections that reveal as you scroll. The hero/banner backgrounds use
`public/images/circuit-bg.svg` — replace it with a real image to make it yours. Accent color
and palette live as CSS variables at the top of `src/styles/global.css`.

## Adding a project

Create a new file in `src/content/work/`, e.g. `my-project.md`:

```md
---
title: 'My Project'
summary: 'One-line description shown on cards.'
date: 2025-09-01
context: 'internship'   # or 'personal'
company: 'Company Name'  # shown when context is internship
tech: ['TypeScript', 'React']
featured: true           # show in the "Featured Projects" row on the home page
status: 'shipped'        # shipped | wip | archived
repo: 'https://github.com/...'   # optional
demo: 'https://...'              # optional live demo / video
cover: '/images/my-project/cover.png'  # optional hero image
---

## Context
...the in-depth write-up (Markdown) goes here...
```

That's it — no code changes. The Portfolio thumbnail, detail page, filtering, and sorting all
pick it up automatically. The `cover` image becomes the grid thumbnail; without one, a generated
placeholder tile is used. See the `example-*.md` files for a full template, including where to add
screenshots and demos.

### Adding images

1. Put the file in `public/images/<project>/…`
2. Reference it with an absolute path: `![alt](/images/my-project/shot.png)`

Set `draft: true` in frontmatter to hide an entry from the production build (it still shows in
`npm run dev`).

## Adding a role to the Resume page

Create a file in `src/content/experience/` (see `example-internship.md`). Use the `related`
field to link the role to the matching `work` write-ups by their filename slug. Education and
skills for the Resume page live in `src/config.ts`.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. In the [Vercel dashboard](https://vercel.com/new), import the repo.
3. Vercel auto-detects Astro — build command `npm run build`, output `dist/`. No extra config.
4. Every push to the branch redeploys.

To deploy under a custom domain or subpath, set `site` (and `base`) in `astro.config.mjs`.

## First-time checklist

- [ ] Edit `src/config.ts` (name, role, tagline, bio, email, socials, skills, education)
- [ ] Replace `public/resume.pdf` with your real resume (delete `resume.pdf.README.txt`)
- [ ] Add a headshot at `public/images/headshot.jpg` and wire it into the home intro section
- [ ] (Optional) Replace `public/images/circuit-bg.svg` with a real hero photo
- [ ] Replace the `example-*.md` files in `src/content/work/` with real projects
- [ ] Replace `example-internship.md` in `src/content/experience/`
- [ ] Add screenshots/covers to `public/images/`
- [ ] Deploy to Vercel
