# Roam Rental Dashboard

This folder contains the runnable Next.js application for the rental search dashboard demo.

## Features

- Dashboard page for rental search and listing preview.
- Typed rental model shared across hooks and components.
- Data-fetching hook for rental results.
- Component tests for search and preview behavior.
- Styled Components for scoped UI styling.

## Commands

```bash
npm install
npm run dev
npm test
npm run build
```

## Demo run

```bash
npm install
npm run build
npm run dev -- -p 4106
```

Open `http://127.0.0.1:4106/dashboard`. The dashboard is self-contained with local/mock listing data for demo use.

## Notes

This is a legacy portfolio demo. It is intentionally left on its original framework versions so the historical implementation can be reviewed without a modernization rewrite.

## Cloudflare Pages

Use this nested app directory as the Cloudflare Pages root.

- Pages project name: `roam-rental-dashboard`
- GitHub repository: `BorisThoris/roam-rental-dashboard`
- Production branch: `main`
- Root directory: `roam-rental-dashboard-app`
- Build command: `npm run build && npx next export`
- Build output directory: `out`
- Environment variable: `NODE_OPTIONS=--openssl-legacy-provider`
- Public URL target: `https://roam-rental-dashboard.pages.dev/dashboard`

Do not enable Cloudflare Access for the demo deployment. Leave frame-blocking headers unset so the portfolio can iframe the public build.
