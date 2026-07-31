import Link from "next/link";
import FadeIn from "@/components/home/FadeIn";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import HeroSectorRing from "@/components/home/HeroSectorRing";
import BeginningSection from "@/components/home/BeginningSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import VisionMissionSection from "@/components/home/VisionMissionSection";
import LeadershipSection from "@/components/home/LeadershipSection";
import ArchitectureGlance from "@/components/home/ArchitectureGlance";
import EmmicFramework from "@/components/home/EmmicFramework";
import GrowthVision from "@/components/home/GrowthVision";
import LiveSectorsShowcase from "@/components/home/LiveSectorsShowcase";
import PipelineSectorsShowcase from "@/components/home/PipelineSectorsShowcase";
import FutureSectorsShowcase from "@/components/home/FutureSectorsShowcase";
import PortfolioWall from "@/components/home/PortfolioWall";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import {
  profileContent,
  sectorDeckTaglines,
  pipelineProgress,
  sectorIcons,
} from "@/content/profile";
import { contactContent } from "@/content/contact";
import { pick } from "@/lib/i18n";
import {
  getAllSectors,
  getLiveSectors,
  getSectorsByStatus,
  countSectorsByStatus,
} from "@/lib/data/sectors";
import { getHomepageWallCompanies } from "@/lib/data/portfolioCompanies";
import { SECTOR_STATUS } from "@/content/constants";

const profile = pick(profileContent);
const contact = pick(contactContent);

const statusCounts = countSectorsByStatus();
const totalSectors = statusCounts.LIVE + statusCounts.PIPELINE + statusCounts.PLANNED;
const liveSectors = getLiveSectors();
const pipelineSectors = getSectorsByStatus(SECTOR_STATUS.PIPELINE);
const plannedSectors = getSectorsByStatus(SECTOR_STATUS.PLANNED);
// Registry companies flagged for the wall, plus homepage-only extra tiles
// (Akhee, As Sa Aadah) that aren't Tier-3 registry entries.
const wallCompanies = [
  ...getHomepageWallCompanies(),
  ...(profile.portfolio.wallExtras ?? []),
];

// Client component props must stay serializable -- pass only the fields the
// hero wheel renders, not the full registry entries.
const heroSectors = getAllSectors().map(({ code, name, status, url }) => ({
  code,
  name,
  status,
  url,
}));

// "Our 2030 Target" stat box (deck slide 08), computed from the registry so
// the figures can never drift from the real sector counts.
const targetStats = [
  { value: totalSectors, label: "Strategic Sectors" },
  { value: statusCounts.LIVE, label: "Live" },
  { value: statusCounts.PIPELINE, label: "Pipeline" },
  { value: statusCounts.PLANNED, label: "Planned" },
];

export default function HomePage() {
  return (
    <>
      {/* Homepage recreates the July 2026 navy/gold company-profile deck as
          a scrolling page, slide by slide, wired to the real sector and
          portfolio registries. */}

      {/* Cover -- full-bleed night shot of the AmanorX headquarters (gold X
          on the facade) under the deck's gold serif motto ("Building
          Ecosystems. Empowering Generations."), gold kicker, gold primary
          CTA, and the sector ring on the right. */}
      <section className="relative isolate flex min-h-[100svh] w-full flex-col overflow-x-hidden bg-navy-950 text-white">
        <img
          src="/images/hero-hq-night.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30"
        />

        <div className="flex flex-1 items-center px-6 pb-10 pt-24 md:px-12 lg:px-16 lg:pb-12">
          <div className="grid w-full min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="min-w-0">
              <FadeIn delay={100} duration={800}>
                <p className="mb-4 flex items-center gap-3 text-xs font-bold tracking-[0.35em] text-gold-400 uppercase sm:text-sm">
                  <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
                  {profile.hero.eyebrow}
                </p>
              </FadeIn>

              <AnimatedHeading
                text={profile.hero.heading}
                className="mb-4 text-4xl font-medium md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl"
                style={{ letterSpacing: "-0.01em" }}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="mb-5 max-w-xl text-base text-gray-300 md:text-lg">
                  {profile.hero.tagline}
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={profile.hero.cta.href}
                    className="btn-gold-shimmer rounded-lg px-8 py-3 font-medium text-navy-950"
                  >
                    {profile.hero.cta.label}
                  </Link>
                  <Link
                    href={profile.hero.ctaSecondary.href}
                    className="liquid-glass liquid-glass-button rounded-lg border border-white/20 px-8 py-3 font-medium text-white"
                  >
                    {profile.hero.ctaSecondary.label}
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* The ring needs real radius to read; below lg it would crowd
                the copy, so it stays desktop-only. */}
            <FadeIn
              delay={600}
              duration={1000}
              className="hidden justify-center lg:flex"
            >
              <HeroSectorRing sectors={heroSectors} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Slide 02 -- The Beginning + purpose pillars band. */}
      <BeginningSection content={profile.beginning} />

      {/* Operating Philosophy -- mountain-sunrise quote band. */}
      <PhilosophySection content={profile.philosophy} />

      {/* Slide 03 -- Vision / Mission / Purpose cards + Core Values band. */}
      <VisionMissionSection content={profile.visionMission} />

      {/* Slide 04 -- Leadership. */}
      <LeadershipSection content={profile.leadership} />

      {/* Slide 05 -- The Architecture at a Glance (three tier cards). */}
      <ArchitectureGlance content={profile.architectureGlance} />

      {/* Slide 07 -- The EMMIC Growth Framework + founders quote band. */}
      <EmmicFramework content={profile.emmicFramework} />

      {/* Slide 08 -- 2030 Growth Vision: target stat box + roadmap rail. */}
      <GrowthVision content={profile.growthVision} stats={targetStats} />

      {/* Slides 09-11 -- Live / Pipeline / Future sector showcases, all
          reading from the sector registry. */}
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

      {/* Slide 12 -- portfolio logo wall. */}
      <PortfolioWall content={profile.portfolio} companies={wallCompanies} />

      {/* Closing CTA band -- reuses the Contact page's real heading/intro
          and inquiry paths (src/content/contact.js). */}
      <section className="bg-navy-950 py-20 text-white sm:py-28">
        <Container size="lg">
          <Reveal className="mx-auto max-w-2xl text-center">
            <AnimatedHeading
              startOnView
              as="h2"
              text={contact.heading}
              className="text-h2 font-semibold sm:text-4xl lg:text-5xl"
            />
            <p className="mt-4 text-lg text-white/70">{contact.intro}</p>

            <div className="mt-8 flex justify-center">
              <Button href="/contact" variant="primary">
                Contact Us
              </Button>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-3 border-t border-white/10 pt-8">
              {contact.paths.map((path, i) => (
                <Reveal
                  as="li"
                  effect="scale"
                  key={path.id}
                  delay={i * 80}
                  className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 uppercase"
                >
                  {path.heading}
                </Reveal>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
