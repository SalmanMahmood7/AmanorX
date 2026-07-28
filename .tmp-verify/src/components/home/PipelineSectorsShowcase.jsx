import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import DeckHeading from "./DeckHeading";
import ProfileIcon from "./ProfileIcons";
import ProgressCounter from "./ProgressCounter";

/**
 * "Pipeline Sectors" -- deck slide 10. Light stage, four tall dark cards:
 * gold-ringed icon medallion, name, two-line tagline, then the slide's
 * "Development Status" footer with a gold progress bar and percentage.
 * Progress figures come from pipelineProgress in src/content/profile.js.
 */
export default function PipelineSectorsShowcase({
  content,
  sectors,
  taglines,
  icons,
  progress,
}) {
  return (
    <section className="bg-background">
      <Container size="xl" className="py-16 sm:py-24">
        <DeckHeading
          accentFirst
          accent={content.headingAccent}
          plain={content.headingPlain}
          sub={content.subheading}
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, i) => {
            const pct = progress[sector.slug] ?? 50;
            return (
              <Reveal
                as="li"
                key={sector.slug}
                delay={i * 100}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-gold-500/50 bg-navy-950 text-white shadow-card"
              >
                {/* Topical photo behind the card (public/images/sectors/,
                    keyed by slug); heavier navy wash than the live cards
                    because these carry more text plus the progress bar. */}
                <img
                  src={`/images/sectors/${sector.slug}.jpg`}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-25 transition-[opacity,transform] duration-500 group-hover:scale-105 group-hover:opacity-35"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/75 to-navy-950/40"
                />
                <a
                  href={sector.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-1 flex-col items-center px-5 pt-8 pb-6 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-500 text-gold-400">
                    <ProfileIcon name={icons[sector.slug]} className="h-8 w-8" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold tracking-[0.1em] uppercase">
                    {sector.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    {(taglines[sector.slug] ?? [sector.tagline]).map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </a>

                <div className="relative border-t border-gold-500/30 px-5 py-4">
                  <p className="text-[10px] font-bold tracking-[0.15em] text-gold-400 uppercase">
                    {content.statusLabel}
                  </p>
                  {/* Bar + number count up from 0 on first scroll into view. */}
                  <ProgressCounter
                    pct={pct}
                    label={`${sector.name} ${content.statusLabel}`}
                  />
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
