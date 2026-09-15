import Head from 'next/head'
import React from 'react'

// Open Graph / Twitter tags, so pasting the deployment link into a chat unfurls
// into a card with the dashboard's own screenshot.
//
// This project renders its head from code, so the values live here rather than
// in an index.html. Keep them in step with scripts/project-meta.config.mjs at
// the repository root (npm run social prints what the tags should say).
const SITE_URL = 'https://roam-rental-dashboard-git.pages.dev'
const PAGE_URL = `${SITE_URL}/dashboard`
const IMAGE_URL = `${SITE_URL}/og-image.jpg`
const TITLE = 'Roam Rental Dashboard'
const DESCRIPTION =
  'A Next.js rental dashboard: type a search, watch the listings filter in, and open a preview card for each place. Typed listing models, a reusable data-fetching hook, styled-components and Jest tests, all running on local mock data.'

export default function SocialPreviewHead() {
  return (
    <Head>
      <title>{TITLE}</title>
      <meta name="description" content={DESCRIPTION} />
      {/* Icon set rendered by scripts/generate-app-icons.mjs into public/ */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#052e16" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:image" content={IMAGE_URL} />
      <meta property="og:image:secure_url" content={IMAGE_URL} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${TITLE} - ${DESCRIPTION}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={IMAGE_URL} />
      <meta name="twitter:image:alt" content={`${TITLE} - ${DESCRIPTION}`} />
    </Head>
  )
}
