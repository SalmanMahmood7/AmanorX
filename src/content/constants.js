// Controlled vocabulary for sector/entity status. Never render a status as a
// free-text string anywhere in the app -- always go through this lookup so
// the set of valid values stays closed and every status renders with
// consistent styling via <StatusPill>.

export const SECTOR_STATUS = Object.freeze({
  LIVE: "LIVE",
  PIPELINE: "PIPELINE",
  PLANNED: "PLANNED",
});

export const SECTOR_STATUS_LIST = Object.freeze(Object.values(SECTOR_STATUS));

export const SECTOR_STATUS_LABEL = Object.freeze({
  [SECTOR_STATUS.LIVE]: "Live",
  [SECTOR_STATUS.PIPELINE]: "Pipeline",
  [SECTOR_STATUS.PLANNED]: "Planned",
});

export const SECTOR_STATUS_DESCRIPTION = Object.freeze({
  [SECTOR_STATUS.LIVE]: "Operating today with an active sector platform.",
  [SECTOR_STATUS.PIPELINE]:
    "In active build-out toward full sector operations.",
  [SECTOR_STATUS.PLANNED]:
    "Scoped within the group's sector roadmap; build-out has not started.",
});

export function isValidSectorStatus(value) {
  return SECTOR_STATUS_LIST.includes(value);
}
