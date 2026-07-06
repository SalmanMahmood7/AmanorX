import ContactPathTabs from "@/components/forms/ContactPathTabs";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
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

      <section className="bg-white py-16 sm:py-20">
        <Container size="xl">
          <Reveal>
            <ContactPathTabs paths={content.paths} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
