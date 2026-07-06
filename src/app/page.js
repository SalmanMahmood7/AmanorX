import Link from "next/link";
import FadeIn from "@/components/home/FadeIn";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import AboutSection from "@/components/home/AboutSection";
import ArchitectureSection from "@/components/home/ArchitectureSection";
import EmmicSection from "@/components/home/EmmicSection";
import WhyAmanorXBenefits from "@/components/home/WhyAmanorXBenefits";
import TodayTomorrowSection from "@/components/home/TodayTomorrowSection";
import NewsCarousel from "@/components/home/NewsCarousel";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import { tiers } from "@/content/tiers";
import { homeContent } from "@/content/home";
import { emmicSteps } from "@/content/emmic";
import { contactContent } from "@/content/contact";
import { pick } from "@/lib/i18n";
import { getLiveSectors, getSectorsByStatus, countSectorsByStatus } from "@/lib/data/sectors";
import { getAllPortfolioCompanies } from "@/lib/data/portfolioCompanies";
import { SECTOR_STATUS } from "@/content/constants";

const content = pick(homeContent);
const tierList = pick(tiers);
const steps = pick(emmicSteps);
const contact = pick(contactContent);

const statusCounts = countSectorsByStatus();
const totalSectors = statusCounts.LIVE + statusCounts.PIPELINE + statusCounts.PLANNED;
const liveSectors = getLiveSectors();
const pipelineSectors = getSectorsByStatus(SECTOR_STATUS.PIPELINE);
const plannedSectors = getSectorsByStatus(SECTOR_STATUS.PLANNED);
const portfolioCompanies = getAllPortfolioCompanies();

export default function HomePage() {
  const [coreTier, ...otherTiers] = tierList;

  return (
    <>
      {/* Homepage keeps its own bespoke marketing layout, distinct from the
          sidebar-shell layout every other page uses via <PageShell>. */}

      {/* Hero: full-bleed short skyline timelapse (night skyscrapers in the
          site's dark navy tones; Pexels video 8064305, re-encoded to ~2MB,
          audio stripped). Poster is the video's own first frame so the
          pre-play paint matches seamlessly; earlier stills are kept at
          /images/hero-bg.jpg and hero-bg-2.jpg. Content pinned to the
          bottom of the viewport, character-staggered heading entrance.
          Glass ("liquid-glass") chrome throughout, matching <Header>'s
          treatment. */}
      {/* `isolate` scopes the -z-20 image / -z-10 gradient to this section's
          own stacking context -- without it they paint underneath the
          section's opaque navy background and the photo never shows. */}
      <section className="relative isolate flex h-screen w-full flex-col overflow-hidden bg-navy-950 text-white">
        <video
          src="/videos/hero-skyline.mp4"
          poster="/images/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
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
        pipelineSectors={pipelineSectors}
        plannedSectors={plannedSectors}
        ctaSectors={content.todayTomorrow.ctaSectors}
        ctaPortfolio={content.todayTomorrow.ctaPortfolio}
      />

      {/* 8. Why AmanorX -- same 6 cards, staircase-pillar presentation. */}
      <WhyAmanorXBenefits heading={content.whyAmanorX.heading} cards={content.whyAmanorX.cards} />

      {/* 11. News & Insights -- carousel-card layout recreated from a
          supplied stories-carousel spec, adapted to the site's honest
          empty-at-launch state (see NewsCarousel). */}
      <NewsCarousel
        heading={content.newsInsights.heading}
        description={content.newsInsights.description}
        cta={content.newsInsights.cta}
      />

      {/* 12. Contact, the homepage's closing CTA band -- reuses the
          Contact page's own real heading/intro and its three real inquiry
          paths (src/content/contact.js) in place of the group counts that
          used to sit here, rather than inventing new contact copy. */}
      <section className="border-t-2 border-green-500 bg-navy-900 py-20 text-white sm:py-28">
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
