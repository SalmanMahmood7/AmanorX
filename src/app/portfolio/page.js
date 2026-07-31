import StatusPill from "@/components/shared/StatusPill";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
import DeckRule from "@/components/shared/DeckRule";
import DeckSectionTitle from "@/components/shared/DeckSectionTitle";
import { portfolioContent } from "@/content/portfolio";
import { pick } from "@/lib/i18n";
import { getAllSectors } from "@/lib/data/sectors";
import {
  getDirectlyHeldPortfolioCompanies,
  getPortfolioCompaniesBySubHolding,
  AKHEE_SUB_HOLDING,
} from "@/lib/data/portfolioCompanies";

const content = pick(portfolioContent);
const directCompanies = getDirectlyHeldPortfolioCompanies();
const akheeCompanies = getPortfolioCompaniesBySubHolding(AKHEE_SUB_HOLDING);

// Sector code -> full sector name, for the company card kickers.
const sectorNameByCode = Object.fromEntries(
  getAllSectors().map((sector) => [sector.code, sector.name])
);

export const metadata = {
  title: "Portfolio",
};

// Homepage-style card for a directly held company: gold-bordered white
// tile with a sector kicker, serif wordmark-style name, category, proof
// point, and status pill. `id` keeps the per-company deep-link anchors.
function CompanyCard({ company }) {
  return (
    <div
      id={company.slug}
      className="flex h-full scroll-mt-28 flex-col rounded-lg border border-gold-500/40 bg-white p-6 text-center shadow-card transition-colors duration-300 hover:border-gold-500 sm:p-7"
    >
      {company.sectorTag ? (
        <p className="text-[10px] font-bold tracking-[0.2em] text-gold-600 uppercase">
          {company.sectorTag}
          {sectorNameByCode[company.sectorTag]
            ? ` · ${sectorNameByCode[company.sectorTag]}`
            : ""}
        </p>
      ) : null}
      <h3 className="font-display mt-3 text-xl leading-tight font-semibold text-navy-900">
        {company.name}
      </h3>
      {company.category ? (
        <p className="mt-1.5 text-[10px] font-semibold tracking-[0.2em] text-gold-600 uppercase">
          {company.category}
        </p>
      ) : null}
      <p className="mt-3 text-sm leading-relaxed text-navy-700">{company.proofPoint}</p>
      <div className="mt-auto flex justify-center pt-5">
        <StatusPill status={company.status} />
      </div>
    </div>
  );
}

// Bespoke full-width layout -- deliberately not <PageShell> (no sticky
// reference/"on this page" rail, same call as /architecture and
// /who-we-are). The directly held companies are a homepage-style card
// grid, and the Akhee (Pvt) Ltd product suite keeps its distinct dark band
// so the sub holding reads as a different kind of ownership.
export default function PortfolioPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        {/* Homepage hero backdrop: HQ night shot under a navy wash. */}
        <img
          src="/images/hero-hq-night.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/50"
        />
        <Container size="xl" className="py-16 sm:py-20">
          <AnimatedHeading
            text={content.heading}
            className="max-w-3xl text-display font-semibold text-white"
          />
          {/* Deck signature rule, as on the homepage headings. */}
          <FadeIn delay={400} duration={800}>
            <DeckRule className="mt-6" />
          </FadeIn>
          <FadeIn delay={500} duration={1000}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{content.intro}</p>
          </FadeIn>

        </Container>
      </section>

      <section id="companies" className="scroll-mt-28 bg-navy-50 py-16 sm:py-20">
        <Container size="xl">
          <DeckSectionTitle title={content.directHeading} />
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-navy-700">
              {content.directDescription}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {directCompanies.map((company, i) => (
              <Reveal key={company.slug} delay={(i % 3) * 90}>
                <CompanyCard company={company} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="akhee" className="scroll-mt-28 bg-navy-950 py-16 text-white sm:py-20">
        <Container size="xl">
          <DeckSectionTitle dark title={content.akheeHeading} />
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
              {content.akheeDescription}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {akheeCompanies.map((company, i) => (
              <Reveal
                key={company.slug}
                id={company.slug}
                delay={(i % 3) * 90}
                className="scroll-mt-28 rounded-lg border border-gold-500/40 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-gold-500"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-white">{company.name}</h3>
                  <StatusPill status={company.status} />
                </div>
                <p className="mt-1 font-mono text-xs tracking-wide text-gold-400 uppercase">
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
