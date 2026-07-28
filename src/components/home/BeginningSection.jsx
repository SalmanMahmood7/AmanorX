import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import ProfileIcon from "./ProfileIcons";

/**
 * "The Beginning" -- deck slide 02. Light editorial half (serif two-tone
 * "The Beginning" heading with the "Not just another company." kicker
 * beneath it, two paragraphs, large gold quote) followed by the slide's
 * dark pillar band: four gold line icons with title/text, separated by
 * hairlines.
 */
export default function BeginningSection({ content }) {
  return (
    <section className="bg-navy-50">
      <Container size="xl" className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-h1 font-semibold">
              <span className="text-navy-900">{content.headingPlain}</span>{" "}
              <span className="text-gold-600">{content.headingAccent}</span>
            </h2>
            <p className="mt-4 text-sm font-semibold tracking-[0.2em] text-gold-600 uppercase">
              {content.kicker}
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-navy-700 sm:text-lg">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150} className="flex items-center">
            <figure className="relative rounded-lg border border-gold-500/30 bg-white p-8 shadow-card sm:p-10">
              <span
                aria-hidden="true"
                className="font-display text-6xl leading-none text-gold-500"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 font-display text-2xl leading-snug font-medium sm:text-3xl">
                <p className="text-navy-900">{content.quoteLine1}</p>
                <p className="mt-1 text-gold-600">{content.quoteLine2}</p>
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </Container>

      {/* Pillar band -- the slide's dark footer strip. */}
      <div className="bg-navy-950 text-white">
        <Container size="xl" className="py-10">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {content.pillars.map((pillar, i) => (
              <Reveal
                as="li"
                key={pillar.title}
                delay={i * 100}
                className="text-center lg:border-l lg:border-white/10 lg:first:border-l-0"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 text-gold-400">
                  <ProfileIcon name={pillar.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-3 text-sm font-semibold tracking-[0.12em] uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-white/60">
                  {pillar.text}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
