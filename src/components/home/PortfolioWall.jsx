import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import ProfileIcon from "./ProfileIcons";

/**
 * "Introducing Our Portfolio" -- deck slide 12. Light stage: small gold
 * "INTRODUCING" kicker, serif "Our Portfolio", subheading and intro, then a
 * logo wall of white tiles. The deck shows real logo art; no logo assets
 * exist in the repo, so each tile renders the company name as a serif
 * wordmark with its category beneath -- swap tiles to <Image> when logo
 * files land. Closes with the slide's "One Ecosystem. Endless
 * Possibilities." navy pill band.
 */
export default function PortfolioWall({ content, companies }) {
  return (
    <section className="bg-background">
      <Container size="xl" className="py-16 sm:py-24">
        <Reveal className="text-center">
          <p className="flex items-center justify-center gap-3 text-xs font-bold tracking-[0.35em] text-gold-600 uppercase">
            <span className="h-px w-10 bg-gold-500/70" aria-hidden="true" />
            {content.eyebrow}
            <span className="h-px w-10 bg-gold-500/70" aria-hidden="true" />
          </p>
          <h2 className="mt-3 font-display text-h1 font-semibold text-navy-900">
            {content.heading}
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-4 flex max-w-xs items-center gap-2"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
            <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
          </span>
          <p className="mt-4 text-sm font-semibold tracking-[0.18em] text-navy-800 uppercase">
            {content.subheading}
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-navy-700">
            {content.intro}
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {companies.map((company, i) => (
            <Reveal
              as="li"
              key={company.slug}
              delay={i * 60}
              className="flex min-h-28 flex-col items-center justify-center rounded-lg border border-navy-100 bg-white px-4 py-6 text-center shadow-card transition-colors duration-200 hover:border-gold-500/60"
            >
              <span className="font-display text-lg leading-tight font-semibold text-navy-900">
                {company.name}
              </span>
              {company.category ? (
                <span className="mt-1.5 text-[10px] font-semibold tracking-[0.2em] text-gold-600 uppercase">
                  {company.category}
                </span>
              ) : null}
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <p className="inline-flex items-center gap-3 rounded-full border border-gold-500 bg-navy-950 px-8 py-3 text-xs font-bold tracking-[0.25em] text-gold-400 uppercase">
            <ProfileIcon name="diamond" className="h-3.5 w-3.5" />
            {content.band}
            <ProfileIcon name="diamond" className="h-3.5 w-3.5" />
          </p>
          <div className="mt-8">
            <Button href={content.cta.href} variant="outlineOnLight" arrow>
              {content.cta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
