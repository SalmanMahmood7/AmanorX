import SectorIndex from "@/components/sectors/SectorIndex";
import TodayVsVisionToggle from "@/components/shared/TodayVsVisionToggle";
import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
import { getAllSectors, countSectorsByStatus } from "@/lib/data/sectors";
import { SECTOR_STATUS_LABEL } from "@/content/constants";

const statusCounts = countSectorsByStatus();
const totalSectors = getAllSectors().length;

export const metadata = {
  title: "Sectors",
};

// Bespoke full-width layout -- deliberately not <PageShell>, same call as
// the other redesigned pages. The directory is a grouped, ledger-style
// index (<SectorIndex>) rather than a filterable card grid; the grouping by
// status replaces the old filter pills, and #directory stays as the anchor
// other pages deep-link to. The today/vision framing keeps the sanctioned
// <TodayVsVisionToggle> separator.
export default function SectorsPage() {
  return (
    <>
      <section className="border-b-2 border-green-500 bg-navy-950 text-white">
        <Container size="xl" className="py-20 sm:py-24">
          <AnimatedHeading
            text={"One model.\nSixteen sectors."}
            className="max-w-3xl text-display font-semibold text-white"
          />
          <FadeIn delay={700} duration={1000}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Every AmanorX sector runs the same EMMIC cycle -- Evaluation,
              Management, Marketplace, Investment, Company -- on its own
              dedicated platform. Each one links out to its own site below.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section id="overview" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <Container size="xl">
          {/* text-center centers the toggle pill row; the prose statements
              reset to text-left inside their own blocks. */}
          <Reveal className="text-center">
            <TodayVsVisionToggle
              todayLabel="Live today"
              visionLabel="Full 2030s footprint"
              todayContent={
                <p className="mx-auto max-w-2xl text-navy-700">
                  {statusCounts.LIVE} sector platforms are{" "}
                  {SECTOR_STATUS_LABEL.LIVE.toLowerCase()} today, each running its own EMMIC
                  cycle of Evaluation, Management, Marketplace, Investment, and Company.
                </p>
              }
              visionContent={
                <p className="mx-auto max-w-2xl text-navy-700">
                  Toward the 2030s, AmanorX intends to operate across all {totalSectors}{" "}
                  sectors: {statusCounts.LIVE} {SECTOR_STATUS_LABEL.LIVE.toLowerCase()},{" "}
                  {statusCounts.PIPELINE} in {SECTOR_STATUS_LABEL.PIPELINE.toLowerCase()}, and{" "}
                  {statusCounts.PLANNED} {SECTOR_STATUS_LABEL.PLANNED.toLowerCase()}.
                </p>
              }
            />
          </Reveal>
        </Container>
      </section>

      <section id="directory" className="scroll-mt-28 bg-navy-50 py-16 sm:py-20">
        <Container size="xl">
          <Reveal>
            <AnimatedHeading
              startOnView
              as="h2"
              text="Sector Index"
              className="text-h2 font-semibold text-navy-900"
            />
            <p className="mt-3 max-w-2xl text-navy-700">
              All {totalSectors} sectors of the EMMIC architecture, grouped by
              stage of build out. Every sector links out to its own platform
              site.
            </p>
          </Reveal>
          <div className="mt-12">
            <SectorIndex />
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-16 text-white sm:py-20">
        <Container size="xl" className="text-center">
          <Reveal>
            <AnimatedHeading
              startOnView
              as="h2"
              text="See how the sixteen fit together"
              className="mx-auto max-w-2xl text-h2 font-semibold text-white"
            />
            <p className="mx-auto mt-4 max-w-2xl text-white/75">
              The group architecture connects every sector platform to the same
              holding structure, governance, and capital model.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/architecture" arrow>
                Explore the architecture
              </Button>
              <Button href="/contact" variant="outlineOnDark">
                Talk to the group
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
