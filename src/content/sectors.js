// EMMIC sector registry -- reflects AmanorX's real group architecture chart
// (16 sectors, three-way status split) rather than earlier Phase 1 guesses.
// Sector code/name/status assignments below are sourced directly from that
// chart; taglines and the longer per-sector descriptions are still this
// build's own placeholder wording pending confirmed marketing copy per
// sector -- swap the `.example` TLD for real Tier 2 domains once each live
// sector's site exists.
//
// This array is the "source of truth" content layer. It is only ever read
// through src/lib/data/sectors.js -- never import this file directly from a
// page or component. That indirection is what lets this become a
// Sanity/Contentful fetch later without touching call sites.
//
// IMPORTANT CONTENT REMINDER: DEMMIC (Defense) copy must stay conservative.
// Do not imply government access, defense influence, or any preferential
// mandate for AmanorX, its board, advisors, or this entity. Keep
// descriptions generic and capability-focused, not contract- or
// access-focused, even though the sector is named plainly per the real
// chart.

import { SECTOR_STATUS } from "./constants";

export const sectors = [
  {
    slug: "remmic",
    code: "REMMIC",
    name: "Real Estate",
    status: SECTOR_STATUS.LIVE,
    tagline: "Real estate development and property ventures.",
    description:
      "Covers evaluation, development, and management of real estate assets across the group's target markets.",
    url: "https://remmic.amanorx.example",
  },
  {
    slug: "temmic",
    code: "TEMMIC",
    name: "Technology",
    status: SECTOR_STATUS.LIVE,
    tagline: "Software, platforms, and digital infrastructure ventures.",
    description:
      "Technology ventures evaluated, built, and scaled under the group's operating model.",
    url: "https://temmic.amanorx.example",
  },
  {
    slug: "memmic",
    code: "MEMMIC",
    name: "Media",
    status: SECTOR_STATUS.LIVE,
    tagline: "Media, content, and creative production ventures.",
    description:
      "Media and creative ventures spanning content production, marketing, and distribution.",
    url: "https://memmic.amanorx.example",
  },
  {
    slug: "acemmic",
    code: "ACEMMIC",
    name: "Academic & Education",
    status: SECTOR_STATUS.LIVE,
    tagline: "Academic institutions and education technology ventures.",
    description:
      "Education and EdTech ventures spanning training, placement, and academic delivery.",
    url: "https://acemmic.amanorx.example",
  },
  {
    slug: "themmic",
    code: "THEMMIC",
    name: "Tourism",
    status: SECTOR_STATUS.LIVE,
    tagline: "Tourism, hospitality, and travel ventures.",
    description:
      "Hospitality and travel ventures spanning accommodation, tourism services, and travel booking.",
    url: "https://themmic.amanorx.example",
  },
  {
    slug: "cemmic",
    code: "CEMMIC",
    name: "Commerce",
    status: SECTOR_STATUS.LIVE,
    tagline: "Commerce and marketplace ventures.",
    description:
      "Marketplace and commerce ventures connecting buyers, sellers, and capital across sectors.",
    url: "https://cemmic.amanorx.example",
  },
  {
    slug: "eemmic",
    code: "EEMMIC",
    name: "Energy",
    status: SECTOR_STATUS.PIPELINE,
    tagline: "Energy generation, distribution, and transition ventures.",
    description:
      "Energy sector platform in active build out; not yet public.",
    url: null,
  },
  {
    slug: "femmic",
    code: "FEMMIC",
    name: "Financial",
    status: SECTOR_STATUS.PIPELINE,
    tagline: "Fintech, capital access, and financial infrastructure.",
    description:
      "Financial services sector platform in active build out; not yet public.",
    url: null,
  },
  {
    slug: "lemmic",
    code: "LEMMIC",
    name: "Logistics",
    status: SECTOR_STATUS.PIPELINE,
    tagline: "Freight, warehousing, and supply chain ventures.",
    description:
      "Logistics sector platform in active build out; not yet public.",
    url: null,
  },
  {
    slug: "lsemmic",
    code: "LSEMMIC",
    name: "Lifestyle",
    status: SECTOR_STATUS.PIPELINE,
    tagline: "Lifestyle, retail, and consumer ventures.",
    description:
      "Lifestyle and consumer sector platform in active build out; not yet public.",
    url: null,
  },
  {
    slug: "hemmic",
    code: "HEMMIC",
    name: "Healthcare",
    status: SECTOR_STATUS.PLANNED,
    tagline: "Healthcare and life sciences ventures.",
    description:
      "A healthcare and life sciences sector platform on the group's roadmap; work has not started.",
    url: null,
  },
  {
    slug: "avemmic",
    code: "AVEMMIC",
    name: "Aviation",
    status: SECTOR_STATUS.PLANNED,
    tagline: "Aviation services and aerospace adjacent ventures.",
    description:
      "An aviation and aerospace sector platform on the group's roadmap; work has not started.",
    // Displayed disclaimer required by the developer brief (§7) for
    // AVEMMIC and DEMMIC -- rendered wherever this sector's description
    // appears, not just kept as an internal note.
    disclaimer:
      "No claim of government access, influence, or preferential mandate is made or implied.",
    url: null,
  },
  {
    slug: "demmic",
    code: "DEMMIC",
    name: "Defense",
    status: SECTOR_STATUS.PLANNED,
    tagline: "Advanced and strategic industrial capability.",
    // Conservative by design -- see file-level reminder above. Do not
    // reference government contracts, defense procurement, or access.
    description:
      "An advanced industrial capability sector platform on the group's roadmap; work has not started.",
    disclaimer:
      "No claim of government access, influence, or preferential mandate is made or implied.",
    url: null,
  },
  {
    slug: "foemmic",
    code: "FOEMMIC",
    name: "Food",
    status: SECTOR_STATUS.PLANNED,
    tagline: "Food production and processing ventures.",
    description:
      "A food production sector platform on the group's roadmap; work has not started.",
    url: null,
  },
  {
    slug: "agemmic",
    code: "AGEMMIC",
    name: "Agriculture",
    status: SECTOR_STATUS.PLANNED,
    tagline: "Agricultural production and processing ventures.",
    description:
      "An agriculture sector platform on the group's roadmap; work has not started.",
    url: null,
  },
  {
    slug: "xemmic",
    code: "XEMMIC",
    name: "Exploration",
    status: SECTOR_STATUS.PLANNED,
    tagline: "Resource exploration and discovery ventures.",
    description:
      "An exploration sector platform on the group's roadmap; work has not started.",
    url: null,
  },
];
