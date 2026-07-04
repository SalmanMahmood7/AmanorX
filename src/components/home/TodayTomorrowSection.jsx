// "Today and Tomorrow" recreated as a three-column (list | hub | list)
// layout from a supplied design spec -- content (heading, description, both
// sub-headings, the intro line, and every sector name/code/status) is
// unchanged from src/content/home.js and the live sector registry; only
// the presentation changed.
//
// Deliberate deviations from the supplied spec, and why:
//   - No hls.js / streamed video: the spec's center circle plays another
//     product's actual hosted video (a Mux stream) with generic marketing
//     copy ("Stop absorbing the chaos...") that isn't AmanorX's -- pulling
//     that in would both add a real dependency for someone else's content
//     and misattribute it as ours. The circle here instead shows a real
//     AmanorX number (total EMMIC sector count), on-brand and meaningful.
//   - No foreign cross/check icons or "Control" badge/gradient headline --
//     same reasoning as the video: those are another product's specific
//     assets and copy, not AmanorX's. Status is still shown the one
//     sanctioned way on this site, <StatusPill>, per constants.js's rule.
//   - The Current/Future visual distinction (solid vs. dashed/tinted
//     cards) is kept, since the section's own unchanged copy explicitly
//     says the two must stay "visually separate."
//   - No third-party "Mazzard H" font-face (unlicensed hosting domain,
//     same call as the previous two redesigns).

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import StatusPill from "@/components/shared/StatusPill";
import Reveal from "@/components/shared/Reveal";

function SectorRow({ sector, dashed }) {
  return (
    <div
      className={`flex items-start justify-between gap-3 rounded-2xl p-4 shadow-[0_3px_9px_rgba(63,74,126,0.05),0_1px_20px_rgba(63,74,126,0.08)] ${
        dashed ? "border border-dashed border-navy-900/15 bg-navy-50/60" : "bg-white"
      }`}
    >
      <div>
        <p className="text-sm font-medium text-navy-900">{sector.name}</p>
        <p className="text-xs text-silver-ink">{sector.code}</p>
      </div>
      <StatusPill status={sector.status} />
    </div>
  );
}

export default function TodayTomorrowSection({
  heading,
  description,
  todayHeading,
  tomorrowHeading,
  tomorrowIntro,
  liveSectors,
  futureSectors,
  totalSectors,
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container size="xl">
        <Reveal>
          <SectionHeading>{heading}</SectionHeading>
          <p className="mt-3 max-w-2xl text-navy-700">{description}</p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 lg:grid lg:grid-cols-[26vw_1fr_26vw] lg:items-start lg:gap-9">
          <Reveal className="order-2 flex flex-col gap-3 lg:order-none">
            <h3 className="text-lg font-semibold text-navy-900">{todayHeading}</h3>
            <div className="mt-2 flex flex-col gap-3">
              {liveSectors.map((sector) => (
                <SectorRow key={sector.slug} sector={sector} />
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={80}
            className="order-1 flex items-center justify-center lg:order-none lg:self-center"
          >
            <div className="flex h-40 w-40 shrink-0 flex-col items-center justify-center rounded-full bg-linear-to-br from-navy-900 via-navy-800 to-green-600 text-center text-white shadow-[0_10px_30px_rgba(13,26,46,0.25)] sm:h-48 sm:w-48">
              <span className="font-mono text-4xl font-semibold sm:text-5xl">{totalSectors}</span>
              <span className="mt-1 text-xs tracking-wide text-white/70 uppercase">EMMIC Sectors</span>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-3 flex flex-col gap-3 lg:order-none">
            <h3 className="text-lg font-semibold text-navy-900">{tomorrowHeading}</h3>
            <p className="text-sm text-navy-700">{tomorrowIntro}</p>
            <div className="mt-2 flex flex-col gap-3">
              {futureSectors.map((sector) => (
                <SectorRow key={sector.slug} sector={sector} dashed />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
