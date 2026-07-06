import SectorsFilterGrid from "@/components/sectors/SectorsFilterGrid";
import TodayVsVisionToggle from "@/components/shared/TodayVsVisionToggle";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
import { countSectorsByStatus } from "@/lib/data/sectors";
import { SECTOR_STATUS_LIST, SECTOR_STATUS_LABEL } from "@/content/constants";

const statusCounts = countSectorsByStatus();
const totalSectors = SECTOR_STATUS_LIST.reduce((sum, status) => sum + statusCounts[status], 0);

export const metadata = {
  title: "Sectors",
};

// Bespoke full-width layout -- deliberately not <PageShell>, same call as
// the other redesigned pages. The today/vision framing keeps the
// sanctioned <TodayVsVisionToggle> separator; the hero stats are plain
// counts, not narrative, so they don't mix the two axes.
export default function SectorsPage() {
  return (
    <>
      <section className="border-b-2 border-green-500 bg-navy-900 text-white">
        <Container size="xl" className="py-16 sm:py-20">
          <AnimatedHeading
            text="Sectors"
            className="max-w-3xl text-display font-semibold text-white"
          />
          <FadeIn delay={500} duration={1000}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              AmanorX operates across the EMMIC architecture&apos;s {totalSectors} sectors,
              each at a different stage of build out.
            </p>
          </FadeIn>

          <FadeIn
            delay={900}
            duration={1000}
            as="dl"
            className="mt-10 flex flex-wrap gap-x-12 gap-y-5 border-t border-white/10 pt-8"
          >
            <div>
              <dt className="font-mono text-3xl font-semibold text-green-400">{totalSectors}</dt>
              <dd className="mt-1 text-xs tracking-wide text-white/60 uppercase">
                EMMIC Sectors
              </dd>
            </div>
            {SECTOR_STATUS_LIST.map((status) => (
              <div key={status}>
                <dt className="font-mono text-3xl font-semibold text-green-400">
                  {statusCounts[status]}
                </dt>
                <dd className="mt-1 text-xs tracking-wide text-white/60 uppercase">
                  {SECTOR_STATUS_LABEL[status]}
                </dd>
              </div>
            ))}
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
              text="Sector Directory"
              className="text-h2 font-semibold text-navy-900"
            />
            <p className="mt-3 max-w-2xl text-navy-700">
              Filter by status. Live sectors link out to their own platform sites as they
              launch publicly.
            </p>
          </Reveal>
          <div className="mt-10">
            <SectorsFilterGrid />
          </div>
        </Container>
      </section>
    </>
  );
}
