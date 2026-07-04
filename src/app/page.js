import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/home/FadeIn";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import AboutSection from "@/components/home/AboutSection";
import ArchitectureSection from "@/components/home/ArchitectureSection";
import EmmicSection from "@/components/home/EmmicSection";
import WhyAmanorXBenefits from "@/components/home/WhyAmanorXBenefits";
import TodayTomorrowSection from "@/components/home/TodayTomorrowSection";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import TextLink from "@/components/shared/TextLink";
import Reveal from "@/components/shared/Reveal";
import {
  GridIcon,
  BuildingIcon,
  LayersIcon,
  CompassIcon,
  ShieldIcon,
  PulseIcon,
  SparkIcon,
  GlobeIcon,
  UsersIcon,
  TargetIcon,
} from "@/components/shared/icons";
import { tiers } from "@/content/tiers";
import { homeContent } from "@/content/home";
import { emmicSteps } from "@/content/emmic";
import { pick } from "@/lib/i18n";
import { getLiveSectors, getSectorsByStatus, countSectorsByStatus } from "@/lib/data/sectors";
import { getAllPortfolioCompanies } from "@/lib/data/portfolioCompanies";
import { SECTOR_STATUS } from "@/content/constants";

const content = pick(homeContent);
const tierList = pick(tiers);
const steps = pick(emmicSteps);

const statusCounts = countSectorsByStatus();
const totalSectors = statusCounts.LIVE + statusCounts.PIPELINE + statusCounts.PLANNED;
const liveSectors = getLiveSectors();
const pipelineSectors = getSectorsByStatus(SECTOR_STATUS.PIPELINE);
const plannedSectors = getSectorsByStatus(SECTOR_STATUS.PLANNED);
const portfolioCompanies = getAllPortfolioCompanies();

const ICONS = {
  grid: GridIcon,
  building: BuildingIcon,
  layers: LayersIcon,
  compass: CompassIcon,
  shield: ShieldIcon,
  pulse: PulseIcon,
  spark: SparkIcon,
  globe: GlobeIcon,
  users: UsersIcon,
  target: TargetIcon,
};

function SnapshotCard({ icon, title, description }) {
  const Icon = ICONS[icon] ?? GridIcon;
  return (
    <div className="border border-t-2 border-navy-900/10 border-t-green-500 bg-white p-6 sm:p-7">
      <Icon className="text-green-600" width={28} height={28} />
      <h3 className="mt-4 text-base font-semibold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-700">{description}</p>
    </div>
  );
}

export default function HomePage() {
  const [coreTier, ...otherTiers] = tierList;

  return (
    <>
      {/* Homepage keeps its own bespoke marketing layout, distinct from the
          sidebar-shell layout every other page uses via <PageShell>. */}

      {/* Hero: full-bleed real photo (low-angle corporate glass towers in
          the site's dark navy tones, evoking the institutional holding
          identity; Unsplash, replaces the earlier highway aerial which is
          kept at /images/hero-bg.jpg), content pinned to the bottom of the
          viewport, character-staggered heading entrance.
          Glass ("liquid-glass") chrome throughout, matching <Header>'s
          treatment. */}
      {/* `isolate` scopes the -z-20 image / -z-10 gradient to this section's
          own stacking context -- without it they paint underneath the
          section's opaque navy background and the photo never shows. */}
      <section className="relative isolate flex h-screen w-full flex-col overflow-hidden bg-navy-950 text-white">
        <Image
          src="/images/hero-bg-2.jpg"
          alt="Low angle view of dark glass office towers rising against the sky"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30"
        />

        <div className="flex flex-1 flex-col justify-end px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
          <div>
            <AnimatedHeading
              text={content.hero.heading}
              className="mb-4 text-4xl font-normal md:text-5xl lg:text-6xl xl:text-7xl"
              style={{ letterSpacing: "-0.04em" }}
            />

            <FadeIn delay={800} duration={1000}>
              <p className="mb-5 max-w-xl text-base text-gray-300 md:text-lg">
                {content.hero.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={content.hero.cta.href}
                  className="rounded-lg bg-white px-8 py-3 font-medium text-black transition-colors hover:bg-gray-100"
                >
                  {content.hero.cta.label}
                </Link>
                <Link
                  href={content.hero.ctaSecondary.href}
                  className="liquid-glass liquid-glass-button rounded-lg border border-white/20 px-8 py-3 font-medium text-white"
                >
                  {content.hero.ctaSecondary.label}
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. About AmanorX -- same copy as before, restyled to a supplied
          chamfered-card visual spec. See AboutSection for the design. */}
      <AboutSection
        eyebrow={content.about.eyebrow}
        heading={content.about.heading}
        paragraphs={[
          {
            text: "AmanorX Holdings is built on a simple premise: that durable institutions, not single ventures, are what compound value across decades.",
          },
          {
            label: "Mission",
            text: "To apply a consistent EMMIC discipline to every sector we enter, so growth is repeatable rather than opportunistic.",
          },
          {
            label: "Vision",
            text: "Toward the 2030s, a group of sixteen operating sectors, each self sustaining, each contributing to a credible institutional whole.",
          },
        ]}
        cta={content.about.cta}
        stats={[
          {
            value: `${totalSectors} Sectors`,
            text: "make up the EMMIC architecture across the group's three tiers.",
            image: "/images/about-stat-1.jpg",
          },
          {
            value: `${statusCounts.LIVE} Live`,
            text: "sector platforms operating today, each running its own EMMIC cycle.",
            image: "/images/about-stat-2.jpg",
            offset: true,
          },
          {
            value: `${portfolioCompanies.length} Companies`,
            text: "operating live today under the group's EMMIC discipline.",
            image: "/images/about-stat-3.jpg",
          },
        ]}
      />

      {/* 3. The AmanorX Architecture -- cascade diagram on a dark band,
          widths widening tier by tier. See ArchitectureSection. */}
      <ArchitectureSection
        heading={content.architecture.heading}
        intro={content.architecture.intro}
        cta={content.architecture.cta}
        tiers={tierList}
        scales={[
          "1 group parent",
          `${totalSectors} sectors`,
          `${portfolioCompanies.length} companies live`,
        ]}
      />

      {/* 4. The EMMIC Framework -- sticky header + vertical process rail,
          no CTA. See EmmicSection. */}
      <EmmicSection
        heading={content.emmicFramework.heading}
        intro={content.emmicFramework.intro}
        steps={steps}
      />

      {/* 7. Today and Tomorrow -- same copy and sector data as before,
          list/hub/list presentation. See TodayTomorrowSection. */}
      <TodayTomorrowSection
        heading={content.todayTomorrow.heading}
        description={content.todayTomorrow.description}
        todayHeading={content.todayTomorrow.todayHeading}
        tomorrowHeading={content.todayTomorrow.tomorrowHeading}
        tomorrowIntro={content.todayTomorrow.tomorrowIntro}
        liveSectors={liveSectors}
        futureSectors={[...pipelineSectors, ...plannedSectors]}
        totalSectors={totalSectors}
      />

      {/* 8. Why AmanorX -- same 6 cards, staircase-pillar presentation. */}
      <WhyAmanorXBenefits heading={content.whyAmanorX.heading} cards={content.whyAmanorX.cards} />

      {/* 11. News & Insights -- respects Insights' documented empty-at-launch
          state (see src/content/insights.js); no invented headlines. */}
      <Section background="white">
        <SectionHeading>{content.newsInsights.heading}</SectionHeading>
        <p className="mt-3 max-w-2xl text-navy-700">{content.newsInsights.description}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {["Press mentions", "Milestone updates", "Sector launches"].map((label, i) => (
            <Reveal key={label} delay={i * 80}>
              <div className="h-full border border-dashed border-navy-900/15 bg-navy-50/60 p-6">
                <h3 className="text-sm font-semibold text-navy-900">{label}</h3>
                <p className="mt-3 text-sm text-silver-ink">
                  Nothing published yet. Check back as sector platforms launch publicly.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <TextLink href={content.newsInsights.cta.href} className="mt-10">
          {content.newsInsights.cta.label}
        </TextLink>
      </Section>

      {/* 12. Careers */}
      <Section background="tint">
        <SectionHeading>{content.careersSection.heading}</SectionHeading>
        <p className="mt-3 max-w-2xl text-navy-700">{content.careersSection.description}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {content.careersSection.highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <SnapshotCard {...item} />
            </Reveal>
          ))}
        </div>
        <Button href={content.careersSection.cta.href} variant="primary" arrow className="mt-8">
          {content.careersSection.cta.label}
        </Button>
      </Section>

    </>
  );
}
