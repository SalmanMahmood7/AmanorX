// Data-access layer for the sector registry.
//
// Every page/component reads sector data through these functions, never by
// importing src/content/sectors.js directly. When this becomes a Sanity or
// Contentful fetch, only this file changes -- call sites stay the same.

import { sectors } from "@/content/sectors";
import { SECTOR_STATUS, isValidSectorStatus } from "@/content/constants";

export function getAllSectors() {
  return sectors;
}

export function getSectorBySlug(slug) {
  return sectors.find((sector) => sector.slug === slug) ?? null;
}

export function getSectorsByStatus(status) {
  if (!isValidSectorStatus(status)) {
    throw new Error(`Unknown sector status: ${status}`);
  }
  return sectors.filter((sector) => sector.status === status);
}

export function getLiveSectors() {
  return getSectorsByStatus(SECTOR_STATUS.LIVE);
}

export function countSectorsByStatus() {
  return {
    [SECTOR_STATUS.LIVE]: getSectorsByStatus(SECTOR_STATUS.LIVE).length,
    [SECTOR_STATUS.PIPELINE]: getSectorsByStatus(SECTOR_STATUS.PIPELINE).length,
    [SECTOR_STATUS.PLANNED]: getSectorsByStatus(SECTOR_STATUS.PLANNED).length,
  };
}
