import StatusPill from "./StatusPill";
import { SECTOR_STATUS } from "@/content/constants";

/**
 * Card for a single sector from the registry (src/lib/data/sectors.js).
 * LIVE sectors with a url link out to that Tier 2 site; anything else
 * renders a non-interactive "coming soon" state.
 */
export default function SectorCard({ sector }) {
  const isLive = sector.status === SECTOR_STATUS.LIVE && sector.url;

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <span className="font-mono text-xs font-medium tracking-wide text-green-600 uppercase">
          {sector.code}
        </span>
        <StatusPill status={sector.status} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy-900">
        {sector.name}
      </h3>
      <p className="mt-1 text-sm text-silver-ink">{sector.tagline}</p>
      <p className="mt-3 text-sm leading-relaxed text-navy-700">
        {sector.description}
      </p>
    </>
  );

  if (isLive) {
    return (
      <a
        href={sector.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border border-t-2 border-navy-900/15 border-t-green-500 bg-white p-6 transition-colors duration-300 hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 sm:p-7"
      >
        {body}
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-green-600">
          Visit sector site
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-0.5"
          >
            &rarr;
          </span>
        </span>
      </a>
    );
  }

  return (
    <div className="border border-t-2 border-dashed border-navy-900/15 border-t-navy-900/25 bg-navy-50/60 p-6 sm:p-7">
      {body}
      <span className="mt-5 inline-block text-sm font-medium text-silver-ink">
        Coming soon
      </span>
    </div>
  );
}
