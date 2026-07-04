// Tier-3 portfolio company registry -- Phase 1 placeholder data.
//
// TODO(AmanorX): This entire file is a placeholder. Real inputs pending:
//   - Confirmed roster of Tier-3 operating companies (this is a partial,
//     illustrative list, not the full portfolio)
//   - Confirmed sector tag, status, and a real proof point per company
//
// Read only through src/lib/data/portfolioCompanies.js -- never import this
// file directly from a page or component, for the same reason as
// src/content/sectors.js (keeps a future CMS swap call-site-free).

import { SECTOR_STATUS } from "./constants";

export const portfolioCompanies = [
  {
    slug: "prepreneurship",
    name: "Prepreneurship",
    sectorTag: "Education & Human Capital",
    status: SECTOR_STATUS.LIVE,
    proofPoint:
      "Placeholder copy: an active talent and entrepreneurship pipeline already placing and training people today.",
    keyAchievement: "Placeholder copy: group's primary talent pipeline, live and placing candidates today.",
  },
  {
    slug: "serenade",
    name: "Serenade",
    sectorTag: "Healthcare & Life Sciences",
    status: SECTOR_STATUS.LIVE,
    proofPoint:
      "Placeholder copy: an operating care/wellness venture with a live customer base.",
    keyAchievement: "Placeholder copy: operating with a live customer base under the group's HEMMIC sector.",
  },
  {
    slug: "akhee-suite",
    name: "Akhee Suite",
    sectorTag: "Technology & Digital Platforms",
    status: SECTOR_STATUS.LIVE,
    proofPoint:
      "Placeholder copy: a live suite of digital products in daily use by real customers.",
    keyAchievement: "Placeholder copy: a live digital product suite in daily use under the group's TEMMIC sector.",
  },
  {
    slug: "tpwits",
    name: "Tpwits",
    sectorTag: "Exchange & Trade",
    status: SECTOR_STATUS.LIVE,
    proofPoint:
      "Placeholder copy: an operating trade/marketplace venture with transacting participants today.",
    keyAchievement: "Placeholder copy: an operating marketplace with transacting participants under the group's XEMMIC sector.",
  },
];
