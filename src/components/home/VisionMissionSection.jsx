import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import DeckHeading from "./DeckHeading";
import ProfileIcon from "./ProfileIcons";

/**
 * "Vision · Mission · Purpose" -- deck slide 03. Three cards, each with the
 * slide's dark chevron cap (gold-ringed icon medallion over a navy header
 * that tapers to a point) above a light body; then the "Core Values" navy
 * plaque: a gold-edged trapezoid holding five gold icons with two-line
 * captions, separated by gold hairlines.
 */

// Trapezoid with the top corners cut inward (wider at the base), per the
// slide's plaque. Shared by the gold wrapper and the navy inner layer so
// their offset produces the hairline edge. polygon() can't draw true arcs,
// so each top corner is five points sampled from a ~24px-radius quadratic
// curve between the slant and the top edge, which reads as a smooth
// rounded corner at this scale.
const CUT = "clamp(1.5rem, 5vw, 3.5rem)";
const CORE_VALUES_CLIP = `polygon(
  calc(${CUT} - 5px) 23px,
  calc(${CUT} - 1px) 13px,
  calc(${CUT} + 5px) 6px,
  calc(${CUT} + 13px) 1.5px,
  calc(${CUT} + 24px) 0,
  calc(100% - ${CUT} - 24px) 0,
  calc(100% - ${CUT} - 13px) 1.5px,
  calc(100% - ${CUT} - 5px) 6px,
  calc(100% - ${CUT} + 1px) 13px,
  calc(100% - ${CUT} + 5px) 23px,
  100% 100%,
  0 100%
)`;
export default function VisionMissionSection({ content }) {
  return (
    <section className="bg-navy-50">
      <Container size="xl" className="pt-16 pb-12 sm:pt-24 sm:pb-16">
        <DeckHeading
          plain="Vision ·"
          accent="Mission"
          plainAfter="· Purpose"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.cards.map((card, i) => (
            <Reveal
              as="article"
              key={card.label}
              delay={i * 120}
              className="overflow-hidden rounded-lg border border-gold-500/40 bg-white shadow-card"
            >
              {/* Dark cap tapering to a chevron point, per the slide. */}
              <div
                className="relative bg-navy-950 pt-8 pb-10 text-center"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 1.5rem), 50% 100%, 0 calc(100% - 1.5rem))",
                }}
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-500 text-gold-400">
                  <ProfileIcon name={card.icon} className="h-8 w-8" />
                </span>
              </div>

              <div className="px-6 pt-6 pb-8 text-center">
                <h3 className="font-display text-xl font-semibold tracking-wide text-navy-900 uppercase">
                  Our <span className="text-gold-600">{card.label.replace(/^Our\s+/i, "")}</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-navy-700">
                  {card.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Core Values band -- the slide's navy plaque: a trapezoid whose top
          corners are cut inward, edged with a gold hairline. The hairline is
          the two-layer clip-path trick: a gold-gradient wrapper and a navy
          inner box share the same polygon, and the wrapper's 1px padding
          leaves the gradient showing as the edge (a real border would be
          clipped away). */}
      {/* No bottom padding: the plaque sits flush on the section edge and
          merges into the navy-950 section that follows (per the slide, where
          the band closes the page). The gold wrapper skips bottom padding
          too, so no hairline separates the plaque from that section. */}
      <Container size="xl">
        <Reveal>
          <div
            className="bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700 px-px pt-px"
            style={{ clipPath: CORE_VALUES_CLIP }}
          >
            <div
              className="bg-navy-950 px-8 pt-7 pb-9 text-white sm:px-14"
              style={{ clipPath: CORE_VALUES_CLIP }}
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" aria-hidden="true" />
                <h3 className="text-sm font-semibold tracking-[0.35em] text-gold-400 uppercase">
                  {content.coreValuesLabel}
                </h3>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" aria-hidden="true" />
              </div>

              <ul className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
                {content.coreValues.map((value, i) => (
                  <Reveal
                    as="li"
                    key={value.title}
                    delay={i * 80}
                    className="px-2 text-center lg:border-l lg:border-gold-500/25 lg:first:border-l-0"
                  >
                    <span className="mx-auto flex h-11 w-11 items-center justify-center text-gold-400">
                      <ProfileIcon name={value.icon} className="h-8 w-8" />
                    </span>
                    <h4 className="mt-3 text-xs font-bold tracking-[0.12em] uppercase">
                      {value.title}
                    </h4>
                    <p className="mt-1 text-[11px] font-semibold tracking-wide text-gold-400 uppercase">
                      {value.text}
                    </p>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
