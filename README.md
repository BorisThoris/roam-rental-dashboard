# Roam Rental Dashboard

A legacy Next.js + TypeScript portfolio demo for searching and previewing rental listings. The app focuses on typed data fetching, componentized search UI, and test coverage around the listing preview and search controls.

## Project location

The application lives in:

```text
roam-rental-dashboard-app/
```

## What it shows

- Next.js page routing with a dashboard-oriented screen.
- TypeScript shared listing types.
- A reusable data-fetching hook.
- Search bar and rental preview components.
- Jest component tests.
- Styled Components UI styling.

## Tech stack

- Next.js 9
- React 16
- TypeScript
- Styled Components
- Jest

## Run locally

```bash
cd roam-rental-dashboard-app
npm install
npm run dev
```

## Demo run

```bash
cd roam-rental-dashboard-app
npm install
npm run build
npm run dev -- -p 4106
```

Open `http://127.0.0.1:4106/dashboard`. The app uses local/mock listing data suitable for an offline portfolio demo.

## Legacy note

This is an older demo project that has been preserved and reframed as a personal portfolio sample. It is not intended to represent a current production stack.

## Cloudflare Pages

Deploy the nested Next.js app as a static export for portfolio embedding.

- Pages project name: `roam-rental-dashboard`
- GitHub repository: `BorisThoris/roam-rental-dashboard`
- Production branch: `main`
- Root directory: `roam-rental-dashboard-app`
- Build command: `npm run build && npx next export`
- Build output directory: `out`
- Environment variable: `NODE_OPTIONS=--openssl-legacy-provider`
- Public URL target: `https://roam-rental-dashboard.pages.dev/dashboard`

Do not enable Cloudflare Access for the demo deployment. Leave frame-blocking headers unset so the portfolio can iframe the public build.
