import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import ProfileIcon from "./ProfileIcons";

/**
 * "2030 Growth Vision" -- deck slides 08a/08b. Left column: serif two-tone
 * heading (gold "2030"), intro paragraph, "Our 2030 Target" label and the
 * slide's dark stat box (16 / 6 / 4 / 6 with gold figures and hairline
 * dividers). Right column: "Our Roadmap to 2030" -- a vertical gold rail of
 * four phases, each a dark gold-ringed icon medallion beside period/name/
 * text. Stats are computed from the live sector registry by the caller, so
 * the box can never drift from the real counts.
 */
export default function GrowthVision({ content, stats }) {
  return (
    <section className="bg-navy-50">
      <Container size="xl" className="py-16 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="font-display text-h1 font-semibold">
              <span className="text-gold-600">{content.headingAccent}</span>{" "}
              <span className="text-navy-900">{content.headingPlain}</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-700 sm:text-lg">
              {content.intro}
            </p>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
              <h3 className="text-sm font-bold tracking-[0.2em] text-navy-900 uppercase">
                {content.targetLabel}
              </h3>
              <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
            </div>

            <dl className="mt-5 grid max-w-lg grid-cols-4 rounded-lg border-2 border-gold-500/60 bg-navy-950 px-2 py-6 text-center text-white shadow-card">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-l border-white/15 px-2 first:border-l-0"
                >
                  <dd className="font-display text-4xl font-bold text-gold-400 sm:text-5xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-2 text-[10px] font-semibold tracking-[0.15em] uppercase sm:text-xs">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={150}>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
              <h3 className="text-sm font-bold tracking-[0.2em] text-navy-900 uppercase">
                {content.roadmapLabel}
              </h3>
            </div>

            <ol className="relative mt-8 space-y-10 border-l-2 border-gold-500/50 pl-8">
              {content.roadmap.map((phase, i) => (
                <Reveal as="li" key={phase.name} delay={i * 120} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-6 -left-[2.45rem] h-2 w-2 rounded-full border border-gold-500 bg-white"
                  />
                  <div className="flex items-start gap-5">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 text-gold-400">
                      <ProfileIcon name={phase.icon} className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="font-display text-xl font-semibold text-gold-600">
                        {phase.period}
                      </p>
                      <h4 className="mt-0.5 text-sm font-bold tracking-[0.15em] text-navy-900 uppercase">
                        {phase.name}
                      </h4>
                      <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-navy-700">
                        {phase.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
