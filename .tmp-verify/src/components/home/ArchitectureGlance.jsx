import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import ProfileIcon from "./ProfileIcons";

/**
 * "The Architecture at a Glance" -- deck slide 05. Dark navy stage split
 * into a left title column (serif two-tone heading, gold rule, letter-spaced
 * "Three tiers. One discipline.") and a right stack of three light tier
 * cards, each led by a gold-ringed dark icon medallion.
 *
 * `showTitle={false}` drops the title column (used on /architecture, where
 * the page already introduces itself and the CTA would link to itself) and
 * centers the tier cards on the stage.
 */
export default function ArchitectureGlance({ content, showTitle = true }) {
  return (
    <section className="bg-navy-950 text-white">
      <Container size="xl" className="py-16 sm:py-24">
        <div
          className={
            showTitle ? "grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16" : "mx-auto max-w-3xl"
          }
        >
          {showTitle ? (
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-display text-h1 font-semibold">
                <span className="block text-white">{content.headingPlain}</span>
                <span className="block text-gold-400">{content.headingAccent}</span>
              </h2>
              <span className="mt-5 block h-px w-14 bg-gold-500" aria-hidden="true" />
              <p className="mt-5 text-sm font-medium tracking-[0.25em] text-white/80 uppercase">
                {content.subheading}
              </p>
              <div className="mt-8">
                <Button href={content.cta.href} variant="outlineOnDark" arrow>
                  {content.cta.label}
                </Button>
              </div>
            </Reveal>
          ) : null}

          <div className="space-y-6">
            {content.tiers.map((tier, i) => (
              <Reveal
                as="article"
                key={tier.tier}
                delay={i * 120}
                className="flex items-center gap-6 rounded-lg bg-navy-50 p-6 text-navy-900 shadow-card sm:p-8"
              >
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 text-gold-400">
                  <ProfileIcon name={tier.icon} className="h-9 w-9" />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-gold-600 uppercase">
                    {tier.tier}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-navy-900">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-700">
                    {tier.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
