import Reveal from "@/components/shared/Reveal";
import StatusPill from "@/components/shared/StatusPill";
import { getSectorsByStatus } from "@/lib/data/sectors";
import {
  SECTOR_STATUS_LIST,
  SECTOR_STATUS_LABEL,
  SECTOR_STATUS_DESCRIPTION,
} from "@/content/constants";

/**
 * Ledger-style directory of all EMMIC sectors, grouped by status with a
 * continuous 01-16 numbering across groups. Replaced the old
 * SectorCard/SectorsFilterGrid filterable card grid in the sectors page
 * redesign. Every sector row links out to that sector's own platform site.
 */
export default function SectorIndex() {
  let offset = 0;
  const groups = SECTOR_STATUS_LIST.map((status) => {
    const group = { status, sectors: getSectorsByStatus(status), offset };
    offset += group.sectors.length;
    return group;
  });

  return (
    <div className="space-y-16">
      {groups.map((group) => (
        <section
          key={group.status}
          id={group.status.toLowerCase()}
          className="scroll-mt-28"
        >
          <Reveal className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h3 className="text-h2 font-semibold text-navy-900">
              {SECTOR_STATUS_LABEL[group.status]}
            </h3>
            <span className="font-mono text-sm font-medium text-green-600">
              {String(group.sectors.length).padStart(2, "0")}{" "}
              {group.sectors.length === 1 ? "sector" : "sectors"}
            </span>
            <p className="w-full text-sm text-silver-ink sm:ml-auto sm:w-auto sm:max-w-xs sm:text-right">
              {SECTOR_STATUS_DESCRIPTION[group.status]}
            </p>
          </Reveal>

          <Reveal
            delay={120}
            className="mt-6 overflow-hidden rounded-lg border border-navy-900/10 bg-white"
          >
            <ul className="divide-y divide-navy-900/10">
              {group.sectors.map((sector, i) => (
                <li key={sector.slug}>
                  <SectorRow sector={sector} index={group.offset + i + 1} />
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      ))}
    </div>
  );
}

function SectorRow({ sector, index }) {
  const body = (
    <>
      <div className="flex items-baseline gap-4 md:flex-col md:gap-1.5">
        <span className="font-mono text-sm text-silver-ink">
          {String(index).padStart(2, "0")}
        </span>
        <span className="font-mono text-sm font-bold tracking-wide text-green-600 uppercase">
          {sector.code}
        </span>
      </div>

      <div className="min-w-0">
        <h4 className="text-lg font-semibold text-navy-900 transition-colors duration-200 group-hover:text-green-600">
          {sector.name}
        </h4>
        <p className="mt-1 text-sm text-navy-700">{sector.tagline}</p>
        <p className="mt-1 text-sm leading-relaxed text-silver-ink">
          {sector.description}
        </p>
        {sector.disclaimer ? (
          <p className="mt-2 text-xs leading-relaxed text-silver-ink italic">
            {sector.disclaimer}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 md:flex-col md:items-end md:gap-3">
        <StatusPill status={sector.status} />
        {sector.url ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium whitespace-nowrap text-green-600">
            Visit sector site
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              &rarr;
            </span>
          </span>
        ) : (
          <span className="text-sm font-medium whitespace-nowrap text-silver-ink">
            Coming soon
          </span>
        )}
      </div>
    </>
  );

  const layout =
    "grid gap-x-8 gap-y-4 p-5 sm:p-6 md:grid-cols-[6rem_minmax(0,1fr)_auto] md:items-center";

  // Defensive: the registry currently gives every sector a url, but a
  // future sector without one degrades to a non-interactive row.
  if (!sector.url) {
    return <div className={layout}>{body}</div>;
  }

  return (
    <a
      href={sector.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${layout} transition-colors duration-200 hover:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-green-500`}
    >
      {body}
    </a>
  );
}
