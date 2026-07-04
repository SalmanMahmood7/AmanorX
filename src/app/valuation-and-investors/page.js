import EntityCard from "@/components/shared/EntityCard";
import ValuationDisclaimer from "@/components/shared/ValuationDisclaimer";
import PageShell from "@/components/shared/PageShell";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import { valuationInvestorsContent } from "@/content/valuationInvestors";
import { pick } from "@/lib/i18n";

const content = pick(valuationInvestorsContent);

const SECTIONS = [
  { id: "structure", label: "How valuation is structured" },
  { id: "figures", label: content.figures.heading },
  { id: "gate", label: content.gate.heading },
];

export const metadata = {
  title: "Valuation & Investors",
};

export default function ValuationAndInvestorsPage() {
  return (
    <PageShell
      heading={content.heading}
      description={content.intro}
      reference="AMX / 06"
      sections={SECTIONS}
    >
      <section id="structure" className="scroll-mt-28">
        <SectionHeading>How valuation is structured</SectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {content.layers.map((layer, i) => (
            <Reveal key={layer.id} delay={i * 80}>
              <EntityCard
                eyebrow={layer.label}
                title={layer.name}
                description={layer.body}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="figures" className="scroll-mt-28">
        <SectionHeading>{content.figures.heading}</SectionHeading>
        <p className="mt-3 max-w-2xl text-navy-700">{content.figures.description}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {content.figures.items.map((figure, i) => (
            <Reveal key={figure.id} delay={i * 80}>
              <div className="border border-t-2 border-navy-900/10 border-t-green-500 bg-white p-6 sm:p-7">
                <span className="font-mono text-xs font-medium tracking-wide text-green-600 uppercase">
                  {figure.label}
                </span>
                <ValuationDisclaimer className="mt-3">
                  <p className="flex items-center gap-2 text-xl font-semibold text-navy-900">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="5"
                        y="11"
                        width="14"
                        height="9"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M8 11V8a4 4 0 0 1 8 0v3"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    Available under NDA
                  </p>
                </ValuationDisclaimer>
                <p className="mt-3 text-sm text-navy-700">{figure.anchor}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="gate" className="scroll-mt-28">
        <div className="border-l-4 border-green-500 bg-navy-900 p-8 text-white sm:p-10">
          <h2 className="text-h2 font-semibold">{content.gate.heading}</h2>
          <p className="mt-3 max-w-2xl text-lg text-white/80">{content.gate.body}</p>
          <Button href={content.gate.cta.href} variant="primary" arrow className="mt-6">
            {content.gate.cta.label}
          </Button>
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-silver-ink">
          {content.disclaimer}
        </p>
      </section>
    </PageShell>
  );
}
