// Metadata inputs for this repository - unique to roam-rental-dashboard.
//
// Everything here is curated by hand: identity, commands, the screenshot recipe
// (capture), the recorded trailer (trailers.items, kind: capture) and where the
// card, icons and trailers are published. scripts/generate-project-meta.mjs
// derives the rest into project.meta.json; scripts/project-media.test.mjs
// checks that everything here was actually produced.
//   npm run meta:refresh   trailers -> shots -> social -> icons -> meta
//   npm run test:media     the media contract

import path from 'node:path';

const portfolioRoot = process.env.PORTFOLIO_ROOT ?? String.raw`C:\Users\Gaming PC\Desktop\Repos\portfolio`;

export default {
  "slug": "roam-rental-dashboard",
  "classification": "web-app",
  "appDir": "roam-rental-dashboard-app",
  "curated": {
    "title": "Roam Rental Dashboard",
    "subtitle": "Search and preview rentals from a typed Next.js dashboard",
    "description": "A Next.js rental dashboard: type a search, watch the listings filter in, and open a preview card for each place. Typed listing models, a reusable data-fetching hook, styled-components and Jest tests, all running on local mock data.",
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
  "capture": {
    "route": "/",
    "actions": [
      {
        "type": "waitFor",
        "target": {
          "selector": "input"
        },
        "state": "visible",
        "label": "wait for the search box",
        "timeoutMs": 60000
      },
      {
        "type": "type",
        "target": {
          "selector": "input"
        },
        "value": "trail",
        "label": "search for a trail rig"
      },
      {
        "type": "wait",
        "ms": 800
      }
    ],
    "waitAfterReadyMs": 600,
    "quality": {
      "maxLight": 0.99
    }
  },
  "scores": {
    "priorityScore": 74,
    "demoabilityScore": 78,
    "depthScore": 72,
    "polishScore": 76,
    "uniquenessScore": 70,
    "maintenanceScore": 72
  },
  "analysisNotes": "Preserved Next.js dashboard demo with typed rental UI and mock data; strong supporting project but not as distinctive as the top showcase.",
  "social": {
    "renderedFrom": "roam-rental-dashboard-app/src/components/SocialPreviewHead.tsx",
    "pageTitle": "Roam Rental Dashboard",
    "staticDir": "roam-rental-dashboard-app/public",
    "imageName": "og-image.jpg",
    "imageUrlPath": "/og-image.jpg"
  },
  "icons": {
    "background": "#052e16",
    "themeColor": "#052e16",
    "shortName": "Roam"
  },
  "media": {
    "sourceDir": path.join(portfolioRoot, "public", "project-shots", "roam-rental-dashboard", "latest"),
    "publicPathPrefix": "/project-shots/roam-rental-dashboard/latest",
    "primaryProfile": "card"
  },
  "trailers": {
    "items": [
      {
        "id": "tour",
        "title": "Roam Rental Dashboard: search the listings",
        "kind": "capture",
        "inputs": [
          "roam-rental-dashboard-app/src",
          "roam-rental-dashboard-app/public"
        ],
        "source": "deployment",
        "music": "project-media/music/tour.m4a",
        "posterAt": 0.5,
        "recipe": {
          "route": "/",
          "viewport": {
            "width": 1280,
            "height": 720
          },
          "durationMs": 20000,
          "setup": {
            "actions": [
              {
                "type": "waitFor",
                "target": {
                  "selector": "input"
                },
                "state": "visible",
                "label": "wait for the search box",
                "timeoutMs": 60000
              }
            ],
            "waitAfterReadyMs": 1200
          },
          "timeline": [
            {
              "type": "mouse",
              "to": [
                0.3,
                0.5
              ],
              "steps": 40
            },
            {
              "type": "type",
              "target": {
                "selector": "input"
              },
              "value": "trail",
              "eachMs": 120,
              "label": "type trail"
            },
            {
              "type": "wait",
              "ms": 2500
            },
            {
              "type": "fill",
              "target": {
                "selector": "input"
              },
              "value": "",
              "label": "clear"
            },
            {
              "type": "type",
              "target": {
                "selector": "input"
              },
              "value": "lake",
              "eachMs": 120,
              "label": "type lake"
            },
            {
              "type": "wait",
              "ms": 2500
            },
            {
              "type": "hover",
              "target": {
                "text": "Lakeside"
              },
              "label": "hover the lakeside rig",
              "optional": true
            },
            {
              "type": "wait",
              "ms": 2000
            },
            {
              "type": "fill",
              "target": {
                "selector": "input"
              },
              "value": "",
              "label": "clear"
            },
            {
              "type": "type",
              "target": {
                "selector": "input"
              },
              "value": "family",
              "eachMs": 120,
              "label": "type family"
            },
            {
              "type": "wait",
              "ms": 2500
            },
            {
              "type": "scroll",
              "deltaY": 300,
              "steps": 2
            }
          ]
        }
      }
    ]
  }
};
