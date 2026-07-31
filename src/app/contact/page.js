import ContactPathTabs from "@/components/forms/ContactPathTabs";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
import DeckRule from "@/components/shared/DeckRule";
import { contactContent } from "@/content/contact";
import { pick } from "@/lib/i18n";

const content = pick(contactContent);

export const metadata = {
  title: "Contact",
};

// Bespoke full-width layout -- deliberately not <PageShell> (no sticky
// reference/"on this page" rail, same call as the other redesigned pages).
// One contact path shown at a time, selected by button, per explicit
// instruction -- see <ContactPathTabs>.
export default function ContactPage() {
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

      <section className="bg-navy-50 py-16 sm:py-20">
        <Container size="xl">
          <Reveal>
            <ContactPathTabs paths={content.paths} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
