# Rajesh Alda — Portfolio v2

Dark, cinematic portfolio built with Vite + React 18 + TypeScript + Tailwind CSS 3, framer-motion animations, and lucide-react icons.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

- `src/components/Hero.tsx` — full-screen video hero with giant "Rajesh" heading, navbar pill, CTA
- `src/components/About.tsx` — dark card with mixed-font heading and scroll-linked text reveal
- `src/components/Features.tsx` — 4-card grid (video + Azure Cloud / Networking / SAP MM skills)
- `src/components/animations.tsx` — WordsPullUp, WordsPullUpMultiStyle, ScrollRevealText

## Deploying to GitHub Pages

`vite.config.ts` uses `base: './'` so the build works from any subpath.

Option A — GitHub Actions (recommended): use the official Vite → Pages workflow and point Pages at the action.

Option B — manual: `npm run build`, then push the `dist/` folder to a `gh-pages` branch.

The previous single-file portfolio is preserved as `index-old.html`.
