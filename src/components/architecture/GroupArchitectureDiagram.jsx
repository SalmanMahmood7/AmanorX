// Full group architecture diagram for /architecture, recreated from
// AmanorX's own real group architecture chart (group -> cross cutting
// governance -> mission foundation -> 16 EMMIC sectors -> Tier 3
// companies, split between directly held and held via the Akhee (Pvt) Ltd
// sub holding). Sector/company data comes from src/content/sectors.js and
// src/content/portfolioCompanies.js via their data access layers; this
// component only supplies the visual structure and the framing copy in
// src/content/groupArchitecture.js.
//
// Colour coding is adapted to the site's own navy/green/silver palette
// (green = live, silver = pipeline, navy tint = planned) rather than the
// source chart's teal/yellow/grey, matching every other status indicator
// on this site (see <StatusPill>) -- the legend above the sector grid maps
// each colour to its status with real counts. Tier blocks are joined by
// the same line-and-diamond connectors as the homepage's three tier
// cascade so both diagrams read as one system.

import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import StatusPill from "@/components/shared/StatusPill";
import { SECTOR_STATUS, SECTOR_STATUS_LIST } from "@/content/constants";

const SECTOR_BOX_STYLES = {
  [SECTOR_STATUS.LIVE]: "border-green-500/30 bg-green-50 hover:border-green-500/60",
  [SECTOR_STATUS.PIPELINE]: "border-silver-400/50 bg-silver-300/25 hover:border-silver-400",
  [SECTOR_STATUS.PLANNED]: "border-navy-900/10 bg-navy-100/70 hover:border-navy-900/25",
};

function TierConnector() {
  return (
    <div aria-hidden="true" className="flex flex-col items-center">
      <span className="h-5 w-px bg-green-500/60" />
      <span className="h-1.5 w-1.5 rotate-45 border border-green-500 bg-white" />
      <span className="h-5 w-px bg-green-500/60" />
    </div>
  );
}

function TierLabel({ tier, label }) {
  return (
    <p className="text-center font-mono text-xs font-medium tracking-[0.2em] text-green-600 uppercase">
      Tier {tier} &middot; {label}
    </p>
  );
}

function SectorBox({ sector }) {
  return (
    <Link
      href="/sectors#directory"
      className={`group flex flex-col gap-1 rounded-lg border p-4 text-center transition-colors duration-200 ${SECTOR_BOX_STYLES[sector.status]}`}
    >
      <span className="font-mono text-sm font-bold text-navy-900">{sector.code}</span>
      <span className="text-xs text-navy-700">{sector.name}</span>
    </Link>
  );
}

function CompanyBox({ company }) {
  return (
    <Link
      href={`/portfolio#${company.slug}`}
      className="group flex flex-col gap-1 rounded-lg border border-navy-900/10 border-t-2 border-t-green-500 bg-white p-4 transition-colors duration-200 hover:bg-navy-50"
    >
      <span className="text-sm font-semibold text-navy-900 transition-colors group-hover:text-green-600">
        {company.name}
      </span>
      {company.sectorTag || company.category ? (
        <span className="text-xs text-silver-ink">
          {[company.sectorTag, company.category].filter(Boolean).join(" · ")}
        </span>
      ) : null}
    </Link>
  );
}

export default function GroupArchitectureDiagram({
  content,
  tier1Name,
  foundation,
  sectors,
  statusCounts,
  directCompanies,
  akheeCompanies,
  akheeName,
}) {
  return (
    <div className="flex flex-col">
      {/* Tier 1 */}
      <Reveal className="flex flex-col gap-4">
        <TierLabel tier={1} label="Group" />
        <div className="mx-auto w-full max-w-xl rounded-lg border-t-2 border-green-500 bg-navy-900 p-6 text-center text-white shadow-[0_10px_30px_rgba(13,26,46,0.2)]">
          <p className="text-lg font-semibold">{tier1Name}</p>
          <p className="mt-1 text-sm text-white/70">{content.tier1Tagline}</p>
        </div>
      </Reveal>

      <TierConnector />

      {/* Cross-cutting governance band */}
      <Reveal
        delay={60}
        className="rounded-lg border border-green-500/30 bg-green-50 px-6 py-6 text-center"
      >
        <p className="font-semibold text-navy-900">{content.governanceBand.heading}</p>
        <p className="mt-1 text-xs tracking-wide text-green-700 uppercase">
          {content.governanceBand.tagline}
        </p>
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {content.governanceBand.roles.map((role) => (
            <li
              key={role}
              className="rounded-full border border-green-500/25 bg-white px-3 py-1 text-xs font-medium text-navy-700"
            >
              {role}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Foundation callout -- ring-fenced at group level only, per
          src/content/governance.js's ring-fencing rule; never shown on a
          sector or portfolio company page. */}
      <Reveal
        delay={100}
        className="mt-6 flex flex-col items-start gap-3 rounded-lg border border-dashed border-navy-900/20 bg-navy-50/60 p-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <p className="font-semibold text-navy-900">
            {foundation.heading}{" "}
            <span className="font-normal text-silver-ink">(mission arm)</span>
          </p>
          <p className="mt-1 text-xs tracking-wide text-green-600 uppercase">
            Ring fenced &middot; Non profit
          </p>
        </div>
        <p className="max-w-sm text-sm text-silver-ink italic">{content.foundationNote}</p>
      </Reveal>

      <TierConnector />

      {/* Tier 2: sector architecture */}
      <Reveal className="flex flex-col gap-4">
        <TierLabel tier={2} label="Sector Architecture" />
        <div className="rounded-lg border border-navy-900/10 bg-navy-50/40 p-5 sm:p-6">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-navy-700">{content.tier2.intro}</p>
            <ul className="flex shrink-0 flex-wrap gap-x-4 gap-y-2">
              {SECTOR_STATUS_LIST.map((status) => (
                <li key={status} className="inline-flex items-center gap-1.5">
                  <StatusPill status={status} />
                  <span className="font-mono text-xs text-silver-ink">
                    &times;{statusCounts[status]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {sectors.map((sector) => (
              <SectorBox key={sector.slug} sector={sector} />
            ))}
          </div>
        </div>
      </Reveal>

      <TierConnector />

      {/* Tier 3: companies already created (live today) */}
      <Reveal className="flex flex-col gap-4">
        <TierLabel tier={3} label="Operating Companies" />
        <div className="rounded-lg border border-navy-900/10 bg-navy-50/40 p-5 sm:p-6">
          <p className="text-sm text-navy-700">{content.tier3.intro}</p>

          <p className="mt-6 text-xs font-semibold tracking-wide text-navy-900 uppercase">
            {content.tier3.directHeading}
          </p>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {directCompanies.map((company) => (
              <CompanyBox key={company.slug} company={company} />
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-green-500/25 bg-green-50/70 p-5">
            <p className="text-xs font-semibold tracking-wide text-navy-900 uppercase">
              Held via {akheeName}
            </p>
            <p className="mt-2 text-sm text-navy-700">{content.tier3.subHoldingIntro}</p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {akheeCompanies.map((company) => (
                <CompanyBox key={company.slug} company={company} />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
