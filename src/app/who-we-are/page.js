import MissionHighlight from "@/components/whoWeAre/MissionHighlight";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
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
      <section className="border-b-2 border-green-500 bg-navy-900 text-white">
        <Container size="xl" className="py-16 sm:py-20">
          <AnimatedHeading
            text={content.heading}
            className="max-w-3xl text-display font-semibold text-white"
          />
          <FadeIn delay={600} duration={1000}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{content.intro}</p>
          </FadeIn>
        </Container>
      </section>

      {/* Core belief as a single centered statement -- one sentence carries
          the whole section, so it's staged like one rather than boxed into
          a small card. */}
      <section id="core-belief" className="scroll-mt-28 bg-white py-16 sm:py-24">
        <Container size="lg">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-xs font-medium tracking-[0.2em] text-green-600 uppercase">
              {content.coreBelief.heading}
            </p>
            <p className="mt-6 text-2xl leading-snug font-medium text-navy-900 sm:text-3xl">
              {content.coreBelief.body}
            </p>
          </Reveal>
        </Container>
      </section>

      <section id="self-reliance" className="scroll-mt-28 bg-navy-900 py-16 text-white sm:py-20">
        <Container size="xl">
          <Reveal className="border-l-4 border-green-500 pl-6 sm:pl-10">
            <AnimatedHeading
              startOnView
              as="h2"
              text={content.selfReliance.heading}
              className="text-h2 font-semibold"
            />
            <p className="mt-3 max-w-2xl text-lg text-white/80">{content.selfReliance.body}</p>
          </Reveal>
        </Container>
      </section>

      <section id="operating-philosophy" className="scroll-mt-28 bg-navy-50 py-16 sm:py-20">
        <Container size="xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <AnimatedHeading
              startOnView
              as="h2"
              text={content.operatingPhilosophy.heading}
              className="text-h2 font-semibold text-navy-900"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {content.operatingPhilosophy.principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-navy-900/10 bg-white p-6 transition-colors duration-300 hover:border-green-500/40">
                  <span className="font-mono text-sm font-semibold text-green-600">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-semibold text-navy-900">{principle.title}</h3>
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
