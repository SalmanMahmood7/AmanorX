import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import DeckHeading from "./DeckHeading";
import ProfileIcon from "./ProfileIcons";

/**
 * "Future Sectors" -- deck slide 11. Light stage, 3x2 grid of dark
 * gold-ringed icon medallions with name and two-line caption, cells
 * separated by hairline rules in the deck (approximated here with a plain
 * open grid). Defense keeps its mandatory conservative wording and
 * disclaimer.
 */
export default function FutureSectorsShowcase({ content, sectors, taglines, icons }) {
  const disclaimers = [
    ...new Set(sectors.map((sector) => sector.disclaimer).filter(Boolean)),
  ];

  return (
    <section className="bg-navy-50">
      <Container size="xl" className="py-16 sm:py-24">
        <DeckHeading
          accentFirst
          accent={content.headingAccent}
          plain={content.headingPlain}
          sub={content.subheading}
        />

        <ul className="mt-12 grid grid-cols-2 gap-y-12 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <Reveal
              as="li"
              key={sector.slug}
              delay={i * 80}
              className="px-4 text-center"
            >
              <a
                href={sector.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block"
              >
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 text-gold-400 shadow-card transition-colors duration-200 group-hover:border-gold-400">
                  <ProfileIcon name={icons[sector.slug]} className="h-9 w-9" />
                </span>
                <h3 className="mt-4 text-sm font-bold tracking-[0.12em] text-navy-900 uppercase">
                  {sector.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-navy-700">
                  {(taglines[sector.slug] ?? [sector.tagline]).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </a>
            </Reveal>
          ))}
        </ul>

        {disclaimers.map((disclaimer) => (
          <p
            key={disclaimer}
            className="mx-auto mt-10 max-w-2xl text-center text-xs text-silver-ink"
          >
            {disclaimer}
          </p>
        ))}
      </Container>
    </section>
  );
}
