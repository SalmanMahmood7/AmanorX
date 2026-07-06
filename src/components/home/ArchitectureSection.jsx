import { Fragment } from "react";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";

// Three-tier architecture as a cascade diagram rather than three equal
// cards: each tier row widens as you descend (one parent -> sector
// platforms -> operating companies), joined by connector nodes, on a dark
// navy band that separates the two light sections around it. Uses the tier
// `description` copy from src/content/tiers.js (the old card grid only
// showed the examples list) plus real group counts passed in from the
// homepage -- no new facts invented here.

// Tailwind can't build class names from props, so the downward-widening
// cascade is a static per-row lookup.
const ROW_WIDTHS = ["lg:w-[76%]", "lg:w-[88%]", "lg:w-full"];

function TierConnector() {
  return (
    <div aria-hidden="true" className="flex flex-col items-center">
      <span className="h-4 w-px bg-green-500/60 sm:h-5" />
      <span className="h-1.5 w-1.5 rotate-45 border border-green-400 bg-navy-950" />
      <span className="h-4 w-px bg-green-500/60 sm:h-5" />
    </div>
  );
}

function TierRow({ tier, scale }) {
  return (
    <div className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-green-500/40 hover:bg-white/[0.06] sm:p-8">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-3 right-4 font-mono text-[64px] leading-none font-bold text-white/[0.06] select-none sm:text-[80px]"
      >
        {String(tier.tier).padStart(2, "0")}
      </span>
      <div className="relative lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-medium tracking-wide text-green-400 uppercase">
              Tier {tier.tier}
            </span>
            <span className="h-px flex-1 bg-white/10" aria-hidden="true" />
            <span className="font-mono text-xs text-white/60">{scale}</span>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-white">{tier.name}</h3>
          <p className="mt-1 text-sm text-white/60">{tier.subtitle}</p>
        </div>
        <div className="mt-5 lg:mt-0">
          <p className="text-sm leading-relaxed text-white/75">{tier.description}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {tier.examples.map((example) => (
              <li
                key={example}
                className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75"
              >
                {example}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ArchitectureSection({ heading, intro, cta, tiers, scales }) {
  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <Container size="xl">
        <Reveal>
          <AnimatedHeading
            startOnView
            as="h2"
            text={heading}
            className="text-h2 font-semibold text-white"
          />
          <p className="mt-3 max-w-2xl text-white/70">{intro}</p>
        </Reveal>

        <div className="mt-12 flex flex-col items-center">
          {tiers.map((tier, i) => (
            <Fragment key={tier.id}>
              {i > 0 ? (
                <Reveal effect="scale">
                  <TierConnector />
                </Reveal>
              ) : null}
              <Reveal delay={i * 80} className={`w-full ${ROW_WIDTHS[i] ?? ""}`}>
                <TierRow tier={tier} scale={scales[i]} />
              </Reveal>
            </Fragment>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Button href={cta.href} variant="primary" arrow>
            {cta.label}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
