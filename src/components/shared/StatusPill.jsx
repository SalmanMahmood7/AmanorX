import {
  SECTOR_STATUS,
  SECTOR_STATUS_LABEL,
  isValidSectorStatus,
} from "@/content/constants";

const STYLES = {
  [SECTOR_STATUS.LIVE]:
    "bg-green-50 text-green-600 ring-1 ring-inset ring-green-500/25",
  [SECTOR_STATUS.PIPELINE]:
    "bg-silver-300/40 text-silver-ink ring-1 ring-inset ring-silver-ink/25",
  [SECTOR_STATUS.PLANNED]:
    "bg-navy-100 text-navy-700 ring-1 ring-inset ring-navy-900/15",
};

/**
 * Renders a sector/entity status. Only ever accepts one of the controlled
 * SECTOR_STATUS values -- never pass free text here.
 */
export default function StatusPill({ status, className = "" }) {
  if (!isValidSectorStatus(status)) {
    // Fail loudly in development rather than silently rendering free text.
    if (process.env.NODE_ENV !== "production") {
      throw new Error(
        `StatusPill received an invalid status: "${status}". Use SECTOR_STATUS.`
      );
    }
    return null;
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium tracking-wide uppercase ${STYLES[status]} ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {SECTOR_STATUS_LABEL[status]}
    </span>
  );
}
