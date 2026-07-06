// "Today and Tomorrow" redesigned around <TodayVsVisionToggle> -- the
// site's own sanctioned pattern for mixing "today" (live) and "vision"
// (2030s) content ("never interleave them without this toggle" -- see that
// component). The previous version put both lists side by side, which
// technically violated that rule; this version puts live sectors and
// future sectors behind the Today / Toward the 2030s tabs instead of
// showing all 16 rows at once. Content (heading, description, both
// sub-headings, the intro line, and every sector name/code/status) is
// unchanged from src/content/home.js and the live sector registry -- only
// the presentation changed.
//
// Deliberate deviations from an earlier supplied design spec, carried
// forward from the prior version of this file, and why:
//   - No hls.js / streamed video: a spec once given for this section played
//     another product's actual hosted video (a Mux stream) with generic
//     marketing copy ("Stop absorbing the chaos...") that isn't AmanorX's.
//     The hub circle instead shows a real AmanorX number (total EMMIC
//     sector count), on-brand and meaningful.
//   - No foreign cross/check icons or "Control" badge/gradient headline --
//     same reasoning as the video. Status is still shown the one
//     sanctioned way on this site, <StatusPill>, per constants.js's rule.
//   - No third-party "Mazzard H" font-face (unlicensed hosting domain,
//     same call made elsewhere in this project).

import Link from "next/link";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import StatusPill from "@/components/shared/StatusPill";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import TodayVsVisionToggle from "@/components/shared/TodayVsVisionToggle";
import { SECTOR_STATUS_LABEL } from "@/content/constants";

// Live rows double as sector highlights: they carry the sector tagline and
// link through to the Sectors directory. Future rows stay compact -- the
// dashed treatment already marks them as not-yet-live.
function SectorRow({ sector, dashed }) {
  return (
    <Link
      href="/sectors#directory"
      className={`group flex items-start justify-between gap-3 rounded-2xl p-4 shadow-[0_3px_9px_rgba(63,74,126,0.05),0_1px_20px_rgba(63,74,126,0.08)] transition-colors duration-200 ${
        dashed
          ? "border border-dashed border-navy-900/15 bg-navy-50/60 hover:border-green-500/50"
          : "bg-white hover:bg-navy-50"
      }`}
    >
      <div>
        <p className="text-sm font-medium text-navy-900 transition-colors group-hover:text-green-600">
          {sector.name}
        </p>
        <p className="text-xs text-silver-ink">{sector.code}</p>
        {!dashed && sector.tagline ? (
          <p className="mt-1.5 text-xs leading-relaxed text-navy-700">{sector.tagline}</p>
        ) : null}
      </div>
      <StatusPill status={sector.status} />
    </Link>
  );
}

export default function TodayTomorrowSection({
  heading,
  description,
  todayHeading,
  tomorrowHeading,
  tomorrowIntro,
  liveSectors,
  pipelineSectors,
  plannedSectors,
  ctaSectors,
  ctaPortfolio,
}) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container size="xl">
        {/* Bespoke centered heading for this section only -- skips the
            shared <SectionHeading>'s green tick rule and left alignment,
            per explicit instruction; every other homepage section keeps
            that brand signature unchanged. */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <AnimatedHeading
            startOnView
            as="h2"
            text={heading}
            className="text-h2 font-semibold text-navy-900"
          />
          <p className="mt-3 text-navy-700">{description}</p>
        </Reveal>

        {/* text-center here only to center the toggle's inline-flex tab
            pill row -- the card grids below reset back to text-left so
            sector names/taglines don't inherit the centering. */}
        <Reveal delay={120} className="mt-8 text-center">
          <TodayVsVisionToggle
            autoAdvance
            todayLabel={todayHeading}
            visionLabel={tomorrowHeading}
            todayContent={
              <div className="grid gap-3 text-left sm:grid-cols-2">
                {liveSectors.map((sector) => (
                  <SectorRow key={sector.slug} sector={sector} />
                ))}
              </div>
            }
            visionContent={
              <div className="flex flex-col gap-4 text-left">
                <p className="max-w-2xl text-sm text-navy-700">{tomorrowIntro}</p>
                {/* Pipeline and Planned are different stages on the
                    roadmap, not one undifferentiated "future" pile -- kept
                    as two separate columns rather than one mixed grid. */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xs font-semibold tracking-wide text-silver-ink uppercase">
                      {SECTOR_STATUS_LABEL.PIPELINE}
                    </h4>
                    <div className="flex flex-col gap-3">
                      {pipelineSectors.map((sector) => (
                        <SectorRow key={sector.slug} sector={sector} dashed />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xs font-semibold tracking-wide text-silver-ink uppercase">
                      {SECTOR_STATUS_LABEL.PLANNED}
                    </h4>
                    <div className="flex flex-col gap-3">
                      {plannedSectors.map((sector) => (
                        <SectorRow key={sector.slug} sector={sector} dashed />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </Reveal>

        {ctaSectors || ctaPortfolio ? (
          <Reveal className="mt-12 flex flex-wrap justify-center gap-4">
            {ctaSectors ? (
              <Button href={ctaSectors.href} variant="primary" arrow>
                {ctaSectors.label}
              </Button>
            ) : null}
            {ctaPortfolio ? (
              <Button href={ctaPortfolio.href} variant="outlineOnLight">
                {ctaPortfolio.label}
              </Button>
            ) : null}
          </Reveal>
        ) : null}
      </Container>
    </section>
  );
}
