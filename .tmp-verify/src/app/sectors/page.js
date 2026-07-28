import Container from "@/components/shared/Container";
import Button from "@/components/shared/Button";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
import DeckRule from "@/components/shared/DeckRule";
import DeckSectionTitle from "@/components/shared/DeckSectionTitle";
import LiveSectorsShowcase from "@/components/home/LiveSectorsShowcase";
import PipelineSectorsShowcase from "@/components/home/PipelineSectorsShowcase";
import FutureSectorsShowcase from "@/components/home/FutureSectorsShowcase";
import {
  profileContent,
  sectorDeckTaglines,
  pipelineProgress,
  sectorIcons,
} from "@/content/profile";
import { pick } from "@/lib/i18n";
import { getLiveSectors, getSectorsByStatus } from "@/lib/data/sectors";
import { SECTOR_STATUS } from "@/content/constants";

const profile = pick(profileContent);
const liveSectors = getLiveSectors();
const pipelineSectors = getSectorsByStatus(SECTOR_STATUS.PIPELINE);
const plannedSectors = getSectorsByStatus(SECTOR_STATUS.PLANNED);

export const metadata = {
  title: "Sectors",
};

// Bespoke full-width layout -- deliberately not <PageShell>, same call as
// the other redesigned pages. Hero, then the homepage's three sector
// showcases, then the closing CTA band. The today/vision toggle and the
// Sector Index directory were removed per explicit instruction
// (2026-07-14); links that pointed at /sectors#directory now target
// /sectors.
export default function SectorsPage() {
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
        <Container size="xl" className="py-20 sm:py-24">
          <AnimatedHeading
            text={"One model.\nSixteen sectors."}
            className="max-w-3xl text-display font-semibold text-white"
          />
          {/* Deck signature rule, as on the homepage headings. */}
          <FadeIn delay={400} duration={800}>
            <DeckRule className="mt-6" />
          </FadeIn>
          <FadeIn delay={700} duration={1000}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">
              Every AmanorX sector runs the same EMMIC cycle -- Evaluation,
              Management, Marketplace, Investment, Company -- on its own
              dedicated platform. Each one links out to its own site below.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* The homepage's three sector showcases, reused verbatim -- photo
          cards for live sectors, progress cards for the pipeline, and the
          future roadmap band. */}
      <LiveSectorsShowcase
        content={profile.liveSectors}
        sectors={liveSectors}
        taglines={sectorDeckTaglines}
        icons={sectorIcons}
      />
      <PipelineSectorsShowcase
        content={profile.pipelineSectors}
        sectors={pipelineSectors}
        taglines={sectorDeckTaglines}
        icons={sectorIcons}
        progress={pipelineProgress}
      />
      <FutureSectorsShowcase
        content={profile.futureSectors}
        sectors={plannedSectors}
        taglines={sectorDeckTaglines}
        icons={sectorIcons}
      />

      <section className="bg-navy-950 py-16 text-white sm:py-20">
        <Container size="xl" className="text-center">
          <Reveal>
            <DeckSectionTitle dark title="See how the sixteen fit together" />
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
