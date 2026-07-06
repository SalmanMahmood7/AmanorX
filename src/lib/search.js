// Lightweight, in-memory site search for Phase 1 -- no external search
// service. Rebuilds its index from the same content/data layer every other
// page reads (src/content/*.js via src/lib/data/*.js), so nothing here
// needs to be kept in sync by hand as sectors/companies/copy change.

import { pick } from "@/lib/i18n";
import { site } from "@/content/site";
import { whoWeAreContent } from "@/content/whoWeAre";
import { governanceContent } from "@/content/governance";
import { valuationInvestorsContent } from "@/content/valuationInvestors";
import { careersContent } from "@/content/careers";
import { contactContent } from "@/content/contact";
import { insightsContent } from "@/content/insights";
import { portfolioContent } from "@/content/portfolio";
import { getAllSectors } from "@/lib/data/sectors";
import { getAllPortfolioCompanies } from "@/lib/data/portfolioCompanies";
import { SECTOR_STATUS } from "@/content/constants";

function pageEntries() {
  const siteContent = pick(site);
  return [
    { type: "Page", title: "Home", description: siteContent.description, href: "/" },
    {
      type: "Page",
      title: pick(whoWeAreContent).heading,
      description: pick(whoWeAreContent).intro,
      href: "/who-we-are",
    },
    {
      type: "Page",
      title: "The Architecture",
      description:
        "AmanorX is organized as a three tier structure, and every sector platform runs the same five part EMMIC discipline.",
      href: "/architecture",
    },
    {
      type: "Page",
      title: "Sectors",
      description:
        "AmanorX operates across the EMMIC architecture's 16 sectors, each at a different stage of build out.",
      href: "/sectors",
    },
    {
      type: "Page",
      title: pick(portfolioContent).heading,
      description: pick(portfolioContent).intro,
      href: "/portfolio",
    },
    {
      type: "Page",
      title: pick(governanceContent).heading,
      description: pick(governanceContent).intro,
      href: "/governance",
    },
    {
      type: "Page",
      title: pick(valuationInvestorsContent).heading,
      description: pick(valuationInvestorsContent).intro,
      href: "/valuation-and-investors",
    },
    {
      type: "Page",
      title: pick(insightsContent).heading,
      description: pick(insightsContent).intro,
      href: "/insights",
    },
    {
      type: "Page",
      title: pick(careersContent).heading,
      description: pick(careersContent).intro,
      href: "/careers",
    },
    {
      type: "Page",
      title: pick(contactContent).heading,
      description: pick(contactContent).intro,
      href: "/contact",
    },
  ];
}

function sectorEntries() {
  return getAllSectors().map((sector) => {
    const isLive = sector.status === SECTOR_STATUS.LIVE && Boolean(sector.url);
    return {
      type: "Sector",
      title: `${sector.name} (${sector.code})`,
      description: sector.tagline,
      href: isLive ? sector.url : "/sectors",
      external: isLive,
    };
  });
}

function portfolioEntries() {
  return getAllPortfolioCompanies().map((company) => ({
    type: "Portfolio company",
    title: company.name,
    description: `${company.sectorTag} -- ${company.proofPoint}`,
    href: "/portfolio",
  }));
}

/**
 * Case-insensitive substring match across title + description. Returns an
 * empty array for a blank query rather than the whole index.
 */
export function searchSite(query) {
  const term = query.trim().toLowerCase();
  if (!term) return [];

  const index = [...pageEntries(), ...sectorEntries(), ...portfolioEntries()];
  return index.filter((entry) =>
    `${entry.title} ${entry.description}`.toLowerCase().includes(term)
  );
}
