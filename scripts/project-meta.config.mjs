// Metadata inputs for this repository - unique to roam-rental-dashboard.
//
// Everything here is curated by hand. Derived facts (stack, metrics, git,
// screenshots) are computed by scripts/generate-project-meta.mjs, which writes
// project.meta.json. Run it with:
//   npm run meta          regenerate project.meta.json
//   npm run meta:check    fail if project.meta.json is stale

import path from 'node:path';

// Screenshots are captured by the portfolio (npm run capture there). Point
// PORTFOLIO_ROOT elsewhere, or drop images in ./project-media, to override.
const portfolioRoot = process.env.PORTFOLIO_ROOT ?? String.raw`C:\Users\Gaming PC\Desktop\Repos\portfolio`;

export default {
  slug: "roam-rental-dashboard",
  classification: "web-app",
  // The runnable web app lives in this subdirectory.
  appDir: "roam-rental-dashboard-app",

  curated: {
    "title": "Roam Rental Dashboard",
    "subtitle": "Legacy rental search dashboard",
    "description": "A preserved Next.js portfolio demo for typed rental search, listing previews, reusable hooks, styled components, and local mock data.",
    "tags": [
      "Next.js",
      "TypeScript",
      "Styled Components",
      "Jest"
    ],
    "accent": "#22c55e",
    "deploymentUrl": "https://roam-rental-dashboard-git.pages.dev/dashboard",
    "localUrl": "http://127.0.0.1:4106/dashboard",
    "buildCommand": "npm run build",
    "buildOutput": "roam-rental-dashboard-app/.next",
    "buildCwd": "roam-rental-dashboard-app",
    "fallbackCommand": "npm run start -- -p 4106",
    "fallbackCwd": "roam-rental-dashboard-app",
    "runCommand": "cd roam-rental-dashboard-app && npm run dev -- -p 4106",
    "devPort": 4106,
    "showcaseTier": "more"
  },

  // How the portfolio screenshot pipeline photographs this project.
  capture: {
    "route": "/dashboard"
  },

  scores: {
    "priorityScore": 74,
    "demoabilityScore": 78,
    "depthScore": 72,
    "polishScore": 76,
    "uniquenessScore": 70,
    "maintenanceScore": 72
  },

  analysisNotes:
    "Preserved Next.js dashboard demo with typed rental UI and mock data; strong supporting project but not as distinctive as the top showcase.",

  // This project renders its head from code, so the tags live in
  // roam-rental-dashboard-app/src/components/SocialPreviewHead.tsx and the image
  // is published from the Next public directory.
  social: {
    "renderedFrom": "roam-rental-dashboard-app/src/components/SocialPreviewHead.tsx",
    "staticDir": "roam-rental-dashboard-app/public",
    "imageName": "og-image.jpg",
    "imageUrlPath": "/og-image.jpg"
  },

  media: {
    sourceDir: path.join(portfolioRoot, "public", "project-shots", "roam-rental-dashboard", "latest"),
    publicPathPrefix: "/project-shots/roam-rental-dashboard/latest",
    primaryProfile: "card"
  }
};
