import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import DeckHeading from "./DeckHeading";
import ProfileIcon from "./ProfileIcons";

/**
 * "Live Sectors" -- deck slide 09. Dark navy stage, six gold-bordered navy
 * cards in a 3x2 grid: large gold sector icon on the left, name and the
 * deck's two-line tagline on the right. Sector list comes from the live
 * registry; taglines/icons are joined by slug from src/content/profile.js.
 */
export default function LiveSectorsShowcase({ content, sectors, taglines, icons }) {
  return (
    <section className="bg-navy-950 text-white">
      <Container size="xl" className="py-16 sm:py-24">
        <DeckHeading
          dark
          plain={content.headingPlain}
          accent={content.headingAccent}
          sub={`${sectors.length} ${content.subheadingTemplate}`}
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <Reveal
              as="li"
              key={sector.slug}
              delay={i * 100}
              className="group relative overflow-hidden rounded-lg border border-gold-500/40 bg-navy-950 transition-colors duration-200 hover:border-gold-400"
            >
              {/* Topical photo behind each card (public/images/sectors/,
                  keyed by slug), dimmed under a navy wash so the gold
                  icon/text keep contrast; brightens slightly on hover. */}
              <img
                src={`/images/sectors/${sector.slug}.jpg`}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-25 transition-[opacity,transform] duration-500 group-hover:scale-105 group-hover:opacity-40"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/65 to-navy-950/30"
              />
              <a
                href={sector.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-5 p-6 sm:p-7"
              >
                <span className="flex h-16 w-16 shrink-0 items-center justify-center text-gold-400">
                  <ProfileIcon name={icons[sector.slug]} className="h-12 w-12" />
                </span>
                <span>
                  <h3 className="text-base font-bold tracking-[0.1em] uppercase">
                    {sector.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-white/60">
                    {(taglines[sector.slug] ?? [sector.tagline]).map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
