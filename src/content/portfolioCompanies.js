// Tier-3 portfolio company registry -- reflects AmanorX's real group
// architecture chart: companies held directly by AmanorX, and companies
// held via Akhee (Pvt) Ltd, a majority owned sub-holding that sits between
// AmanorX and its own product suite. `subHolding` is null for a directly
// held company, or the sub-holding's name when one sits in between.
//
// Company names, sector tags, and categories below are sourced directly
// from that chart; `proofPoint` is still this build's own placeholder
// wording pending confirmed per-company copy.
//
// Read only through src/lib/data/portfolioCompanies.js -- never import this
// file directly from a page or component, for the same reason as
// src/content/sectors.js (keeps a future CMS swap call-site-free).

import { SECTOR_STATUS } from "./constants";

export const AKHEE_SUB_HOLDING = "Akhee (Pvt) Ltd";

export const portfolioCompanies = [
  // Held directly by AmanorX.
  {
    slug: "prepreneurship",
    name: "Prepreneurship Pvt Ltd",
    sectorTag: "ACEMMIC",
    category: "EdTech",
    subHolding: null,
    status: SECTOR_STATUS.LIVE,
    proofPoint:
      "The group's own talent and entrepreneurship pipeline, already training and placing people today.",
  },
  {
    slug: "serenade-bhurban",
    name: "Serenade Bhurban",
    sectorTag: "THEMMIC",
    category: "Hospitality",
    subHolding: null,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "An operating hospitality venture with a live guest base.",
  },
  {
    slug: "17-hills-ppship-tower",
    name: "17 Hills / Pp'ship Tower",
    sectorTag: "REMMIC",
    subHolding: null,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "An operating real estate development under the group's REMMIC sector.",
  },
  {
    slug: "tpwits",
    name: "Tpwits Pvt Ltd",
    sectorTag: "TEMMIC",
    category: "Software house",
    subHolding: null,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "An operating software house delivering technology products today.",
  },
  {
    slug: "its-travelick-jolidays",
    name: "Its Travelick Pvt Ltd x Jolidays Pvt Ltd (An AWT Collab)",
    sectorTag: "THEMMIC",
    category: "Travel & tourism",
    subHolding: null,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "A joint travel and tourism venture operating under the group's THEMMIC sector.",
  },
  {
    slug: "ilham-creatives",
    name: "Ilham Creatives Pvt Ltd",
    sectorTag: "MEMMIC",
    category: "Marketing & Media",
    subHolding: null,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "An operating marketing and media venture under the group's MEMMIC sector.",
  },
  {
    slug: "serenade-virtual-hub",
    name: "Serenade Virtual Hub Pvt Ltd",
    sectorTag: "TEMMIC",
    category: "Serenade World",
    subHolding: null,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "A live digital hub for the Serenade World product line.",
  },
  {
    slug: "universal-services",
    name: "Universal Services",
    sectorTag: "REMMIC",
    category: "Construction & Allied Services",
    subHolding: null,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "An operating construction and allied services venture under REMMIC.",
  },
  {
    slug: "helder",
    name: "Helder",
    sectorTag: "REMMIC",
    category: "Construction & Allied Services",
    subHolding: null,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "An operating construction and allied services venture under REMMIC.",
  },

  // Held via Akhee (Pvt) Ltd -- custodian of the group's product suite,
  // a majority owned chain (51% or more).
  {
    slug: "gul-plaza-virtual-bazar",
    name: "Gul Plaza Virtual Bazar",
    category: "Immersive",
    subHolding: AKHEE_SUB_HOLDING,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "A live immersive virtual marketplace under Akhee's product suite.",
  },
  {
    slug: "virtulee",
    name: "Virtulee",
    category: "AR/VR/XR",
    subHolding: AKHEE_SUB_HOLDING,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "A live AR/VR/XR product under Akhee's product suite.",
  },
  {
    slug: "al-ukaz",
    name: "Al-Ukaz",
    category: "Commerce",
    subHolding: AKHEE_SUB_HOLDING,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "A live commerce product under Akhee's product suite.",
  },
  {
    slug: "beyoparee",
    name: "Beyoparee",
    category: "Commerce",
    subHolding: AKHEE_SUB_HOLDING,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "A live commerce product under Akhee's product suite.",
  },
  {
    slug: "studee",
    name: "Studee",
    category: "Education",
    subHolding: AKHEE_SUB_HOLDING,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "A live education product under Akhee's product suite.",
  },
  {
    slug: "quranee",
    name: "Quranee",
    category: "Faith & education",
    subHolding: AKHEE_SUB_HOLDING,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "A live faith and education product under Akhee's product suite.",
  },
  {
    slug: "real-estate-brokerage-portal",
    name: "Real Estate Brokerage Portal",
    category: "Real estate",
    subHolding: AKHEE_SUB_HOLDING,
    status: SECTOR_STATUS.LIVE,
    proofPoint: "A live real estate brokerage product under Akhee's product suite.",
  },
];
