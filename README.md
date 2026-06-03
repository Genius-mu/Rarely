# Rarely — Calm Work, One Surface

A React + Vite single-page application (SPA) for a multi-page marketing site.

## Tech stack

- **React** (v19)
- **Vite** (build/dev tooling)
- **React Router** (`react-router-dom`) for client-side routing
- **Tailwind CSS** (via `@tailwindcss/vite`)
- **Lucide / React Icons** for UI icons

## Routes / pages

The app is wired in `src/App.jsx`:

- `/` → Home (landing)
- `/home` → Home
- `/pricing` → Pricing
- `/aboutus` → About
- `/resources` → Resources
- `/casestudies` → Case Studies
- `/*` → Not Found

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Preview production build

```bash
npm run preview
```

## Deployment (Vercel)

This project includes `vercel.json` with a catch-all rewrite so SPA routes work correctly:

- `rewrites`: `/(.*)` → `/`

That means paths like `/pricing` and `/resources` are served by the SPA entry (`index.html`) and handled by `react-router-dom`.

## Project structure

- `src/pages/`: page-level route components (`Home.jsx`, `PricingPage.jsx`, `ResourcesPage.jsx`, `CaseStudiesPage.jsx`, `AboutPage.jsx`, `NotFoundPage.jsx`)
- `src/components/`: shared layout components (`Header.jsx`, `Footer.jsx`)
- `src/App.jsx`: route definitions
- `src/main.jsx`: app bootstrap (router + header/footer)
