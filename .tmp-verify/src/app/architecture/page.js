import GroupArchitectureDiagram from "@/components/architecture/GroupArchitectureDiagram";
import EmmicWalkthrough from "@/components/architecture/EmmicWalkthrough";
import ArchitectureGlance from "@/components/home/ArchitectureGlance";
import EmmicFramework from "@/components/home/EmmicFramework";
import { profileContent } from "@/content/profile";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
import DeckRule from "@/components/shared/DeckRule";
import DeckSectionTitle from "@/components/shared/DeckSectionTitle";
import { groupArchitectureContent } from "@/content/groupArchitecture";
import { governanceContent } from "@/content/governance";
import { site } from "@/content/site";
import { pick } from "@/lib/i18n";
import { getAllSectors, countSectorsByStatus } from "@/lib/data/sectors";
import {
  getDirectlyHeldPortfolioCompanies,
  getPortfolioCompaniesBySubHolding,
  AKHEE_SUB_HOLDING,
} from "@/lib/data/portfolioCompanies";

const content = pick(groupArchitectureContent);
const governance = pick(governanceContent);
const profile = pick(profileContent);
const siteContent = pick(site);
const sectors = getAllSectors();
const statusCounts = countSectorsByStatus();
const directCompanies = getDirectlyHeldPortfolioCompanies();
const akheeCompanies = getPortfolioCompaniesBySubHolding(AKHEE_SUB_HOLDING);

export const metadata = {
  title: "The Architecture",
};

// Bespoke full-width layout -- deliberately not <PageShell>, whose sticky
// reference/"on this page" rail was removed from this page per explicit
// instruction; the org diagram also reads far better at full content width
// than squeezed beside a sidebar.
export default function ArchitecturePage() {
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
            text="The Architecture"
            className="max-w-3xl text-display font-semibold text-white"
          />
          {/* Deck signature rule, as on the homepage headings. */}
          <FadeIn delay={400} duration={800}>
            <DeckRule className="mt-6" />
          </FadeIn>
          <FadeIn delay={600} duration={1000}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              AmanorX is organized as a three tier structure, and every sector platform inside
              it runs the same five part EMMIC discipline: Evaluation, Management, Marketplace,
              Investment, and Company.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Slide 05 from the homepage -- the three tier cards on the dark
          stage, without the title column (the page introduces itself). */}
      <ArchitectureGlance content={profile.architectureGlance} showTitle={false} />

      <section id="group-architecture" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <Container size="xl">
          <DeckSectionTitle title={content.heading} />
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-navy-700">{content.intro}</p>
          </Reveal>
          <div className="mt-12">
            <GroupArchitectureDiagram
              content={content}
              tier1Name={siteContent.name}
              foundation={governance.foundation}
              sectors={sectors}
              statusCounts={statusCounts}
              directCompanies={directCompanies}
              akheeCompanies={akheeCompanies}
              akheeName={AKHEE_SUB_HOLDING}
            />
          </div>
        </Container>
      </section>

      {/* The bidding model explainer the developer brief (§5) calls for --
          see the `joining` block in src/content/groupArchitecture.js for
          the copy-source caveat. */}
      <section id="joining" className="scroll-mt-28 bg-navy-950 py-16 text-white sm:py-20">
        <Container size="xl">
          <DeckSectionTitle dark title={content.joining.heading} />
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-white/75">
              {content.joining.intro}
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {content.joining.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-gold-500/40 bg-white/[0.04] p-6 text-center transition-colors duration-300 hover:border-gold-500">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 font-display text-sm font-bold text-gold-400">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Slide 07 from the homepage, reused verbatim -- the five EMMIC
          medallions and founders quote. */}
      <EmmicFramework content={profile.emmicFramework} />

      <section id="emmic-model" className="scroll-mt-28 bg-navy-50 py-16 sm:py-20">
        <Container size="xl">
          <DeckSectionTitle title="The EMMIC Model" />
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-navy-700">
              Every sector platform runs this cycle. Step through it below.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-10">
            <EmmicWalkthrough headingLevel={3} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
