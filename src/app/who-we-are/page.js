import PageShell from "@/components/shared/PageShell";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import AboutHero from "@/components/whoWeAre/AboutHero";
import { whoWeAreContent } from "@/content/whoWeAre";
import { pick } from "@/lib/i18n";

const content = pick(whoWeAreContent);

const SECTIONS = [
  { id: "foundations", label: "Purpose, vision, mission" },
  { id: "core-belief", label: "Core belief" },
  { id: "self-reliance", label: "Self-reliance" },
  { id: "operating-philosophy", label: "Operating philosophy" },
];

export const metadata = {
  title: "Who We Are",
};

export default function WhoWeArePage() {
  return (
    <>
      <AboutHero
        badgeNumber={content.hero.badgeNumber}
        badgeLabel={content.hero.badgeLabel}
        headingLine1={content.hero.headingLine1}
        headingLine2={content.hero.headingLine2}
        paragraph={content.hero.paragraph}
        paragraphLines={content.hero.paragraphLines}
        cta={content.hero.cta}
      />
      <PageShell
      heading={content.heading}
      description={content.intro}
      reference="AMX / 01"
      sections={SECTIONS}
    >
      <section id="foundations" className="scroll-mt-28">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h2 className="text-lg font-semibold text-navy-900">
              {content.purpose.heading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-700">
              {content.purpose.body}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy-900">
              {content.vision.heading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-700">
              {content.vision.body}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-navy-900">
              {content.mission.heading}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-navy-700">
              {content.mission.body}
            </p>
          </div>
        </div>
      </section>

      <section id="core-belief" className="scroll-mt-28 border border-t-2 border-navy-900/10 border-t-green-500 bg-navy-50 p-7 sm:p-8">
        <h2 className="text-lg font-semibold text-navy-900">
          {content.coreBelief.heading}
        </h2>
        <p className="mt-2 leading-relaxed text-navy-700">{content.coreBelief.body}</p>
      </section>

      {/* Self-reliance is called out as a visually prominent principle
          per the brief -- distinct treatment from the sections above. */}
      <section
        id="self-reliance"
        className="scroll-mt-28 border-l-4 border-green-500 bg-navy-900 p-8 text-white sm:p-10"
      >
        <h2 className="text-h2 font-semibold">{content.selfReliance.heading}</h2>
        <p className="mt-3 max-w-2xl text-lg text-white/80">
          {content.selfReliance.body}
        </p>
      </section>

      <section id="operating-philosophy" className="scroll-mt-28">
        <SectionHeading>{content.operatingPhilosophy.heading}</SectionHeading>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {content.operatingPhilosophy.principles.map((principle, i) => (
            <Reveal key={principle.title} delay={i * 80}>
              <div className="border border-t-2 border-navy-900/10 border-t-green-500 bg-white p-6 transition-colors duration-300 hover:bg-navy-50">
                <h3 className="font-semibold text-navy-900">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      </PageShell>
    </>
  );
}
