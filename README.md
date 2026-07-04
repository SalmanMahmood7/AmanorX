# AmanorX Group Website

Tier 1 group hub for AmanorX Holdings (Pvt) Ltd. Next.js (App Router), plain
JavaScript, Tailwind CSS. See `AGENTS.md` for the full brief and `CLAUDE.md`
for agent instructions.

## Phase 1 scope

Home, Who We Are, The Architecture, Sectors, Portfolio, Governance,
Valuation & Investors, Insights, Careers, and Contact. Insights and Careers
are structured for future content but ship with an empty state at launch.
Valuation & Investors explains the group's valuation structure but keeps
the two anchored figures gated behind a Contact-page NDA request rather
than publishing them.

## Getting started

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_FORM_ENDPOINT to enable the contact form
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content & data layer

- `src/content/*.js` -- placeholder content, authored as `{ en: {...} }` so
  Urdu copy can be added later without touching components (see
  `src/lib/i18n.js`).
- `src/lib/data/sectors.js` -- the only sanctioned way to read sector data.
  When a headless CMS (Sanity/Contentful) replaces `src/content/sectors.js`,
  only this file needs to change.
- `src/content/constants.js` -- the controlled `SECTOR_STATUS` vocabulary
  (`LIVE | PIPELINE | PLANNED`). Never render status as free text; always go
  through `<StatusPill>`.

## Known placeholders (see inline `TODO(AmanorX)` comments)

- No vector logo file yet -- `<Wordmark>` is a text placeholder.
- No light-background logo lockup yet -- `<Header>` defaults to a dark
  Navy/Green surface; a `variant` prop is scaffolded for a future light mode.
- The sector registry (`src/content/sectors.js`) is entirely invented:
  names, live/pipeline/planned split, and all `.example` URLs are
  placeholders pending confirmation of the real list.
- The portfolio company registry (`src/content/portfolioCompanies.js`) is
  a partial, invented list (Prepreneurship, Serenade, Akhee Suite, Tpwits)
  pending confirmation of the real Tier-3 roster.
- Governance principal names (`src/content/governance.js`) are left as
  "Pending confirmation" -- real names were not invented for Chairman,
  Patron-in-Chief, or Group CEO/CBO.
- The two anchored valuation figures on Valuation & Investors are
  unpublished placeholders ("Available under NDA"); no dollar figures were
  invented. The Brand Guideline §10 disclaimer text is this build's
  best-judgment placeholder, not a verbatim quote.
- Target decade phrasing stays generic ("toward the 2030s") since 2030 vs
  2036 is unconfirmed.

## Deploy

Vercel-compatible out of the box; no native dependencies were introduced.
