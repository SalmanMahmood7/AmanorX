import StatusPill from "@/components/shared/StatusPill";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
import { portfolioContent } from "@/content/portfolio";
import { pick } from "@/lib/i18n";
import { getAllSectors } from "@/lib/data/sectors";
import {
  getAllPortfolioCompanies,
  getDirectlyHeldPortfolioCompanies,
  getPortfolioCompaniesBySubHolding,
  AKHEE_SUB_HOLDING,
} from "@/lib/data/portfolioCompanies";

const content = pick(portfolioContent);
const allCompanies = getAllPortfolioCompanies();
const directCompanies = getDirectlyHeldPortfolioCompanies();
const akheeCompanies = getPortfolioCompaniesBySubHolding(AKHEE_SUB_HOLDING);

// Sector code -> full sector name, for the group header rows.
const sectorNameByCode = Object.fromEntries(
  getAllSectors().map((sector) => [sector.code, sector.name])
);

// Directly held companies grouped by sector, preserving registry order --
// a register grouped by where each company sits, rather than a flat grid.
const directBySector = [];
for (const company of directCompanies) {
  const group = directBySector.find((g) => g.code === company.sectorTag);
  if (group) {
    group.companies.push(company);
  } else {
    directBySector.push({ code: company.sectorTag, companies: [company] });
  }
}

// All derived from the registry -- no hand-kept numbers to drift.
const sectorsRepresented = new Set(
  allCompanies.map((company) => company.sectorTag).filter(Boolean)
).size;

const STATS = [
  { value: allCompanies.length, label: content.stats.companies },
  { value: directCompanies.length, label: content.stats.direct },
  { value: akheeCompanies.length, label: content.stats.viaAkhee },
  { value: sectorsRepresented, label: content.stats.sectors },
];

export const metadata = {
  title: "Portfolio",
};

function CompanyRow({ company }) {
  return (
    <div
      id={company.slug}
      className="grid scroll-mt-28 gap-2 p-5 transition-colors duration-200 hover:bg-navy-50 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)_auto] sm:items-center sm:gap-6"
    >
      <div>
        <h3 className="font-semibold text-navy-900">{company.name}</h3>
        {company.category ? (
          <p className="mt-0.5 text-xs text-silver-ink">{company.category}</p>
        ) : null}
      </div>
      <p className="text-sm leading-relaxed text-navy-700">{company.proofPoint}</p>
      <div className="sm:justify-self-end">
        <StatusPill status={company.status} />
      </div>
    </div>
  );
}

// Bespoke full-width layout -- deliberately not <PageShell> (no sticky
// reference/"on this page" rail, same call as /architecture and
// /who-we-are). Presented as a sector-grouped register rather than a card
// grid: ledger rows for the directly held companies, and a distinct dark
// band for the Akhee (Pvt) Ltd product suite so the sub holding reads as a
// different kind of ownership, not just another section.
export default function PortfolioPage() {
  return (
    <>
      <section className="border-b-2 border-green-500 bg-navy-900 text-white">
        <Container size="xl" className="py-16 sm:py-20">
          <AnimatedHeading
            text={content.heading}
            className="max-w-3xl text-display font-semibold text-white"
          />
          <FadeIn delay={500} duration={1000}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{content.intro}</p>
          </FadeIn>

          <FadeIn
            delay={900}
            duration={1000}
            as="dl"
            className="mt-10 flex flex-wrap gap-x-12 gap-y-5 border-t border-white/10 pt-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-3xl font-semibold text-green-400">{stat.value}</dt>
                <dd className="mt-1 text-xs tracking-wide text-white/60 uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </FadeIn>
        </Container>
      </section>

      <section id="companies" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <Container size="xl">
          <Reveal>
            <AnimatedHeading
              startOnView
              as="h2"
              text={content.directHeading}
              className="text-h2 font-semibold text-navy-900"
            />
            <p className="mt-3 max-w-2xl text-navy-700">{content.directDescription}</p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-10">
            {directBySector.map((group, i) => (
              <Reveal key={group.code} delay={i * 60}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-medium tracking-[0.2em] text-green-600 uppercase">
                    {group.code}
                  </span>
                  <span className="text-xs text-silver-ink">
                    {sectorNameByCode[group.code]}
                  </span>
                  <span className="h-px flex-1 bg-navy-900/10" aria-hidden="true" />
                  <span className="font-mono text-xs text-silver-ink">
                    &times;{group.companies.length}
                  </span>
                </div>
                <div className="mt-3 divide-y divide-navy-900/10 rounded-lg border border-navy-900/10 bg-white">
                  {group.companies.map((company) => (
                    <CompanyRow key={company.slug} company={company} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="akhee" className="scroll-mt-28 bg-navy-900 py-16 text-white sm:py-20">
        <Container size="xl">
          <Reveal>
            <AnimatedHeading
              startOnView
              as="h2"
              text={content.akheeHeading}
              className="text-h2 font-semibold"
            />
            <p className="mt-3 max-w-2xl text-white/70">{content.akheeDescription}</p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {akheeCompanies.map((company, i) => (
              <Reveal
                key={company.slug}
                id={company.slug}
                delay={(i % 3) * 90}
                className="scroll-mt-28 rounded-lg border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-green-500/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-white">{company.name}</h3>
                  <StatusPill status={company.status} />
                </div>
                <p className="mt-1 font-mono text-xs tracking-wide text-green-400 uppercase">
                  {company.category}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{company.proofPoint}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Button href={content.cta.href} variant="outlineOnDark" arrow>
              {content.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
