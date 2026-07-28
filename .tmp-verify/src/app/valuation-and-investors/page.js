import ValuationDisclaimer from "@/components/shared/ValuationDisclaimer";
import PageShell from "@/components/shared/PageShell";
import Container from "@/components/shared/Container";
import DeckSectionTitle from "@/components/shared/DeckSectionTitle";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import { valuationInvestorsContent } from "@/content/valuationInvestors";
import { pick } from "@/lib/i18n";

const content = pick(valuationInvestorsContent);

// How firmly each valuation layer's figure is anchored (developer brief §6),
// shown as the card kickers alongside the layer label.
const ANCHOR_LABELS = ["Solid", "Range", "Narrative only"];

export const metadata = {
  title: "Valuation & Investors",
};

// Homepage-style deck layout: hero band (PageShell), then full-width
// alternating stages -- light structure cards, navy-50 figures band, and a
// closing navy CTA band -- instead of the old single-column document flow.
export default function ValuationAndInvestorsPage() {
  return (
    <PageShell heading={content.heading} description={content.intro} bleed>
      {/* Layer anchoring per the developer brief (§6): the Solid / Range /
          Narrative-only labels carry how firmly each layer's figure is
          anchored. Staged like the homepage's "Architecture at a Glance":
          dark stage, stacked light cards led by gold-ringed numbered
          medallions. */}
      <section id="structure" className="scroll-mt-28 bg-navy-950 py-16 text-white sm:py-24">
        <Container size="xl">
          <DeckSectionTitle dark title="How valuation is structured" />
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {content.layers.map((layer, i) => (
              <Reveal key={layer.name} delay={i * 120}>
                <div className="flex items-center gap-6 rounded-lg bg-navy-50 p-6 text-navy-900 shadow-card sm:p-8">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 font-display text-2xl font-bold text-gold-400">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-gold-600 uppercase">
                      {layer.label} &middot; {ANCHOR_LABELS[i]}
                    </p>
                    <h3 className="font-display mt-1 text-2xl font-semibold text-navy-900">
                      {layer.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700">{layer.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="figures" className="scroll-mt-28 bg-navy-50 py-16 sm:py-24">
        <Container size="xl">
          <DeckSectionTitle title={content.figures.heading} />
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-navy-700">
              {content.figures.description}
            </p>
          </Reveal>

          {/* Staged like the homepage's Leadership cards: gold-ringed
              medallion, diamond divider, gold serif label. */}
          <div className="mx-auto mt-14 grid max-w-4xl gap-12 sm:grid-cols-2">
            {content.figures.items.map((figure, i) => (
              <Reveal key={figure.id} delay={i * 150} className="text-center">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 text-gold-400">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
                <span
                  aria-hidden="true"
                  className="mx-auto mt-6 flex max-w-[10rem] items-center gap-2"
                >
                  <span className="h-px flex-1 bg-gold-500/60" />
                  <span className="h-1 w-1 rotate-45 bg-gold-500" />
                  <span className="h-px flex-1 bg-gold-500/60" />
                </span>
                <h3 className="font-display mt-4 text-xl font-semibold tracking-wide text-gold-600 uppercase">
                  {figure.label}
                </h3>
                <ValuationDisclaimer className="mt-3">
                  <p className="text-sm font-semibold tracking-[0.2em] text-navy-900 uppercase">
                    Available under NDA
                  </p>
                </ValuationDisclaimer>
                <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-navy-700">
                  {figure.anchor}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA band, staged like the homepage's navy CTA section. */}
      <section id="gate" className="scroll-mt-28 bg-navy-950 py-16 text-white sm:py-24">
        <Container size="xl" className="text-center">
          <DeckSectionTitle dark title={content.gate.heading} />
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">{content.gate.body}</p>
            <div className="mt-8">
              <Button href={content.gate.cta.href} variant="primary" arrow>
                {content.gate.cta.label}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-10 max-w-2xl text-xs leading-relaxed text-white/40">
              {content.disclaimer}
            </p>
          </Reveal>
        </Container>
      </section>
    </PageShell>
  );
}
