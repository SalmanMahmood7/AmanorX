// EMMIC sector registry -- Phase 1 placeholder data.
//
// TODO(AmanorX): This entire file is a placeholder. Real inputs pending:
//   - Confirmed list of which sectors are actually live and their real URLs
//     (all `url` values below use the `.example` TLD, which is reserved by
//     RFC 2606 and will never resolve -- swap for real Tier 2 domains later)
//   - Confirmed sector codes/names and which of the 16 are truly LIVE today
//     vs PIPELINE/PLANNED (this file guesses a plausible 6/5/5 split)
//   - Real descriptive copy per sector (current copy is deliberately generic)
//
// This array is the "source of truth" content layer for Phase 1. It is only
// ever read through src/lib/data/sectors.js -- never import this file
// directly from a page or component. That indirection is what lets this
// become a Sanity/Contentful fetch later without touching call sites.
//
// IMPORTANT CONTENT REMINDER: DEMMIC (Defence & Strategic Industries) and
// AVEMMIC (Aviation & Aerospace) copy must stay conservative. Do not imply
// government access, defence influence, or any preferential mandate for
// AmanorX, its board, advisors, or these entities. Keep descriptions
// generic and capability-focused, not contract- or access-focused.

import { SECTOR_STATUS } from "./constants";

export const sectors = [
  {
    slug: "remmic",
    code: "REMMIC",
    name: "Real Estate & Infrastructure",
    status: SECTOR_STATUS.LIVE,
    tagline: "Land, development, and long-horizon infrastructure assets.",
    description:
      "Placeholder copy: covers evaluation, development, and management of real estate and infrastructure assets across the group's target markets.",
    url: "https://remmic.amanorx.example",
  },
  {
    slug: "temmic",
    code: "TEMMIC",
    name: "Technology & Digital Platforms",
    status: SECTOR_STATUS.LIVE,
    tagline: "Software, platforms, and digital infrastructure ventures.",
    description:
      "Placeholder copy: technology ventures evaluated, built, and scaled under the group's operating model.",
    url: "https://temmic.amanorx.example",
  },
  {
    slug: "xemmic",
    code: "XEMMIC",
    name: "Exchange & Trade",
    status: SECTOR_STATUS.LIVE,
    tagline: "Cross-border trade, marketplaces, and exchange infrastructure.",
    description:
      "Placeholder copy: marketplace and trade-facilitation ventures connecting buyers, sellers, and capital across sectors.",
    url: "https://xemmic.amanorx.example",
  },
  {
    slug: "femmic",
    code: "FEMMIC",
    name: "Financial Services",
    status: SECTOR_STATUS.LIVE,
    tagline: "Fintech, capital access, and financial infrastructure.",
    description:
      "Placeholder copy: financial services ventures spanning payments, lending, and capital-markets infrastructure.",
    url: "https://femmic.amanorx.example",
  },
  {
    slug: "aemmic",
    code: "AEMMIC",
    name: "Agriculture & Agri Processing",
    status: SECTOR_STATUS.LIVE,
    tagline: "Primary agriculture through to processed agri-output.",
    description:
      "Placeholder copy: agricultural production and processing ventures aimed at yield and supply-chain resilience.",
    url: "https://aemmic.amanorx.example",
  },
  {
    slug: "hemmic",
    code: "HEMMIC",
    name: "Healthcare & Life Sciences",
    status: SECTOR_STATUS.LIVE,
    tagline: "Care delivery, diagnostics, and life-sciences ventures.",
    description:
      "Placeholder copy: healthcare and life-sciences ventures across care delivery and supporting infrastructure.",
    url: "https://hemmic.amanorx.example",
  },
  {
    slug: "eemmic",
    code: "EEMMIC",
    name: "Energy & Power",
    status: SECTOR_STATUS.PIPELINE,
    tagline: "Generation, distribution, and energy transition ventures.",
    description:
      "Placeholder copy: energy sector platform in active build-out; not yet public.",
    url: null,
  },
  {
    slug: "lemmic",
    code: "LEMMIC",
    name: "Logistics & Supply Chain",
    status: SECTOR_STATUS.PIPELINE,
    tagline: "Freight, warehousing, and supply-chain infrastructure.",
    description:
      "Placeholder copy: logistics sector platform in active build-out; not yet public.",
    url: null,
  },
  {
    slug: "memmic",
    code: "MEMMIC",
    name: "Manufacturing & Industrial",
    status: SECTOR_STATUS.PIPELINE,
    tagline: "Industrial production and manufacturing capability.",
    description:
      "Placeholder copy: manufacturing sector platform in active build-out; not yet public.",
    url: null,
  },
  {
    slug: "cemmic",
    code: "CEMMIC",
    name: "Construction & Infrastructure Development",
    status: SECTOR_STATUS.PIPELINE,
    tagline: "Contracting, materials, and infrastructure delivery.",
    description:
      "Placeholder copy: construction sector platform in active build-out; not yet public.",
    url: null,
  },
  {
    slug: "demmic",
    code: "DEMMIC",
    name: "Strategic & Advanced Industries",
    status: SECTOR_STATUS.PIPELINE,
    tagline: "Advanced and dual-use industrial capability.",
    // Conservative by design -- see file-level reminder above. Do not
    // reference government contracts, defence procurement, or access.
    description:
      "Placeholder copy: an advanced-industrial capability sector platform in active build-out; not yet public.",
    url: null,
  },
  {
    slug: "avemmic",
    code: "AVEMMIC",
    name: "Aviation & Aerospace",
    status: SECTOR_STATUS.PLANNED,
    tagline: "Aviation services and aerospace-adjacent ventures.",
    // Conservative by design -- see file-level reminder above. Do not
    // reference government contracts, defence procurement, or access.
    description:
      "Placeholder copy: an aviation and aerospace sector platform on the group's roadmap; work has not started.",
    url: null,
  },
  {
    slug: "edemmic",
    code: "EDEMMIC",
    name: "Education & Human Capital",
    status: SECTOR_STATUS.PLANNED,
    tagline: "Learning, training, and workforce-development ventures.",
    description:
      "Placeholder copy: an education sector platform on the group's roadmap; work has not started.",
    url: null,
  },
  {
    slug: "mdemmic",
    code: "MDEMMIC",
    name: "Media & Entertainment",
    status: SECTOR_STATUS.PLANNED,
    tagline: "Content, distribution, and entertainment platforms.",
    description:
      "Placeholder copy: a media sector platform on the group's roadmap; work has not started.",
    url: null,
  },
  {
    slug: "mnemmic",
    code: "MNEMMIC",
    name: "Mining & Minerals",
    status: SECTOR_STATUS.PLANNED,
    tagline: "Resource extraction and minerals processing.",
    description:
      "Placeholder copy: a mining sector platform on the group's roadmap; work has not started.",
    url: null,
  },
  {
    slug: "txemmic",
    code: "TXEMMIC",
    name: "Textiles & Apparel",
    status: SECTOR_STATUS.PLANNED,
    tagline: "Textile manufacturing and apparel value chains.",
    description:
      "Placeholder copy: a textiles sector platform on the group's roadmap; work has not started.",
    url: null,
  },
];
