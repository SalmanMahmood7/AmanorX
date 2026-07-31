import MissionHighlight from "@/components/whoWeAre/MissionHighlight";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
import DeckRule from "@/components/shared/DeckRule";
import DeckSectionTitle from "@/components/shared/DeckSectionTitle";
import { whoWeAreContent } from "@/content/whoWeAre";
import { pick } from "@/lib/i18n";

const content = pick(whoWeAreContent);

export const metadata = {
  title: "Who We Are",
};

// Bespoke full-width layout -- deliberately not <PageShell>, whose sticky
// reference/"on this page" rail was removed from this page per explicit
// instruction (same call as /architecture). Purpose, Vision, and Mission
// all live in the closing <MissionHighlight> section, so the old
// "foundations" grid is gone rather than repeating the same three
// statements twice on one page.
export default function WhoWeArePage() {
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
          <FadeIn delay={600} duration={1000}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{content.intro}</p>
          </FadeIn>
        </Container>
      </section>

      {/* Core belief as a single centered statement -- one sentence carries
          the whole section, so it's staged like one rather than boxed into
          a small card. */}
      <section id="core-belief" className="scroll-mt-28 bg-navy-50 py-16 sm:py-24">
        <Container size="lg">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-gold-600 uppercase">
              {content.coreBelief.heading}
            </p>
            <p className="mt-6 text-2xl leading-snug font-medium text-navy-900 sm:text-3xl">
              {content.coreBelief.body}
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="self-reliance" className="scroll-mt-28 bg-navy-950 py-16 text-white sm:py-24">
        <Container size="xl">
          <DeckSectionTitle dark title={content.selfReliance.heading} />
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-white/80">
              {content.selfReliance.body}
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="operating-philosophy" className="scroll-mt-28 bg-navy-50 py-16 sm:py-24">
        <Container size="xl">
          <DeckSectionTitle title={content.operatingPhilosophy.heading} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {content.operatingPhilosophy.principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-gold-500/40 bg-white p-6 text-center shadow-card transition-colors duration-300 hover:border-gold-500">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 font-display text-sm font-bold text-gold-400">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-semibold text-navy-900">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700">{principle.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Full-bleed closing section: Purpose as the intro block, then
          Mission and Vision as matching photo cards. */}
      <MissionHighlight
        eyebrow="AmanorX in Practice"
        heading={content.purpose.heading}
        intro={content.purpose.body}
        cards={[
          {
            heading: content.mission.heading,
            body: content.mission.body,
            image: "/images/hero-bg-2.jpg",
            imageAlt: "Low angle view of dark glass office towers rising against the sky",
            cta: { label: "Know more", href: "/architecture" },
          },
          {
            heading: content.vision.heading,
            body: content.vision.body,
            image: "/images/hero-bg.jpg",
            imageAlt: "Aerial view of a large highway interchange and city infrastructure",
            cta: { label: "Explore the Sectors", href: "/sectors" },
          },
        ]}
      />
    </>
  );
}
