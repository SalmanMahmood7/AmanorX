import PageShell from "@/components/shared/PageShell";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import DeckSectionTitle from "@/components/shared/DeckSectionTitle";
import Button from "@/components/shared/Button";
import { careersContent } from "@/content/careers";
import { pick } from "@/lib/i18n";

const content = pick(careersContent);

export const metadata = {
  title: "Careers",
};

// Homepage-style deck layout: hero band (PageShell), a light group-roles
// stage, and a full-width navy CTA band for the Prepreneurship pipeline --
// staged like the homepage's closing CTA section.
export default function CareersPage() {
  return (
    <PageShell heading={content.heading} description={content.intro} bleed>
      <section id="group-roles" className="scroll-mt-28 bg-navy-50 py-16 sm:py-24">
        <Container size="xl">
          <DeckSectionTitle title={content.groupRolesHeading} />
          <Reveal delay={120}>
            <div className="mx-auto mt-8 max-w-2xl rounded-lg border border-dashed border-gold-500/50 bg-navy-50/60 p-8 text-center">
              <p className="text-sm text-silver-ink">{content.groupRolesEmptyState}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="pipeline" className="scroll-mt-28 bg-navy-950 py-16 text-white sm:py-24">
        <Container size="xl" className="text-center">
          <DeckSectionTitle dark title={content.pipeline.heading} />
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              {content.pipeline.body}
            </p>
            <div className="mt-8">
              <Button href={content.pipeline.cta.href} variant="primary" arrow external>
                {content.pipeline.cta.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </PageShell>
  );
}
