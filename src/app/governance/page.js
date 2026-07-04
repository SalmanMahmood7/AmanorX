import EntityCard from "@/components/shared/EntityCard";
import PageShell from "@/components/shared/PageShell";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { governanceContent } from "@/content/governance";
import { pick } from "@/lib/i18n";

const content = pick(governanceContent);

const SECTIONS = [
  { id: "principals", label: content.principalsHeading },
  { id: "foundation", label: content.foundation.heading },
];

export const metadata = {
  title: "Governance",
};

export default function GovernancePage() {
  return (
    <PageShell
      heading={content.heading}
      description={content.intro}
      reference="AMX / 05"
      sections={SECTIONS}
    >
      <section id="principals" className="scroll-mt-28">
        <SectionHeading>{content.principalsHeading}</SectionHeading>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {content.principals.map((principal, i) => (
            <Reveal key={principal.id} delay={i * 80}>
              <EntityCard
                eyebrow={principal.role}
                title={principal.name}
                description={principal.bio}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Group-level only, per the ring-fencing rule -- see
          src/content/governance.js for the full note. */}
      <section
        id="foundation"
        className="scroll-mt-28 border-l-4 border-green-500 bg-navy-900 p-8 text-white sm:p-10"
      >
        <p className="text-sm font-medium tracking-wide text-green-400 uppercase">
          {content.foundation.subtitle}
        </p>
        <h2 className="mt-2 text-h2 font-semibold">{content.foundation.heading}</h2>
        <p className="mt-3 max-w-2xl text-lg text-white/80">
          {content.foundation.body}
        </p>
        <p className="mt-4 max-w-2xl text-sm text-white/50">{content.foundation.note}</p>
      </section>
    </PageShell>
  );
}
