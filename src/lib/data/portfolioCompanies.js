// Data-access layer for the Tier-3 portfolio company registry.
//
// Mirrors src/lib/data/sectors.js -- every page/component reads portfolio
// company data through these functions, never by importing
// src/content/portfolioCompanies.js directly.

import { portfolioCompanies, AKHEE_SUB_HOLDING } from "@/content/portfolioCompanies";
import { SECTOR_STATUS, isValidSectorStatus } from "@/content/constants";

export { AKHEE_SUB_HOLDING };

export function getAllPortfolioCompanies() {
  return portfolioCompanies;
}

export function getPortfolioCompanyBySlug(slug) {
  return portfolioCompanies.find((company) => company.slug === slug) ?? null;
}

export function getPortfolioCompaniesByStatus(status) {
  if (!isValidSectorStatus(status)) {
    throw new Error(`Unknown sector status: ${status}`);
  }
  return portfolioCompanies.filter((company) => company.status === status);
}

export function getLivePortfolioCompanies() {
  return getPortfolioCompaniesByStatus(SECTOR_STATUS.LIVE);
}

export function getDirectlyHeldPortfolioCompanies() {
  return portfolioCompanies.filter((company) => !company.subHolding);
}

export function getPortfolioCompaniesBySubHolding(subHolding) {
  return portfolioCompanies.filter((company) => company.subHolding === subHolding);
}
