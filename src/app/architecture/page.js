import GroupArchitectureDiagram from "@/components/architecture/GroupArchitectureDiagram";
import EmmicWalkthrough from "@/components/architecture/EmmicWalkthrough";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
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
      <section className="border-b-2 border-green-500 bg-navy-900 text-white">
        <Container size="xl" className="py-16 sm:py-20">
          <AnimatedHeading
            text="The Architecture"
            className="max-w-3xl text-display font-semibold text-white"
          />
          <FadeIn delay={600} duration={1000}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              AmanorX is organized as a three tier structure, and every sector platform inside
              it runs the same five part EMMIC discipline: Evaluation, Management, Marketplace,
              Investment, and Company.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section id="group-architecture" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <Container size="xl">
          {/* Plain h2s on this page -- the shared <SectionHeading>'s green
              tick rule was removed here per explicit instruction; other
              pages keep it. */}
          <Reveal>
            <AnimatedHeading
              startOnView
              as="h2"
              text={content.heading}
              className="text-h2 font-semibold text-navy-900"
            />
            <p className="mt-3 max-w-2xl text-navy-700">{content.intro}</p>
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
      <section id="joining" className="scroll-mt-28 bg-navy-900 py-16 text-white sm:py-20">
        <Container size="xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-h2 font-semibold">{content.joining.heading}</h2>
            <p className="mt-3 text-white/75">{content.joining.intro}</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {content.joining.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-green-500/40">
                  <span className="font-mono text-sm font-semibold text-green-400">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="emmic-model" className="scroll-mt-28 bg-navy-50 py-16 sm:py-20">
        <Container size="xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <AnimatedHeading
              startOnView
              as="h2"
              text="The EMMIC Model"
              className="text-h2 font-semibold text-navy-900"
            />
            <p className="mt-3 text-navy-700">
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
