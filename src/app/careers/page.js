import PageShell from "@/components/shared/PageShell";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import { careersContent } from "@/content/careers";
import { pick } from "@/lib/i18n";

const content = pick(careersContent);

const SECTIONS = [
  { id: "group-roles", label: content.groupRolesHeading },
  { id: "pipeline", label: content.pipeline.heading },
];

export const metadata = {
  title: "Careers",
};

export default function CareersPage() {
  return (
    <PageShell
      heading={content.heading}
      description={content.intro}
      reference="AMX / 08"
      sections={SECTIONS}
    >
      <section id="group-roles" className="scroll-mt-28">
        <SectionHeading>{content.groupRolesHeading}</SectionHeading>
        <div className="mt-4 border border-dashed border-navy-900/20 bg-navy-50/60 p-6 sm:p-7">
          <p className="text-sm text-silver-ink">{content.groupRolesEmptyState}</p>
        </div>
      </section>

      <section
        id="pipeline"
        className="scroll-mt-28 border-l-4 border-green-500 bg-navy-900 p-8 text-white sm:p-10"
      >
        <h2 className="text-h2 font-semibold">{content.pipeline.heading}</h2>
        <p className="mt-3 max-w-2xl text-lg text-white/80">{content.pipeline.body}</p>
        <Button
          href={content.pipeline.cta.href}
          variant="primary"
          arrow
          external
          className="mt-6"
        >
          {content.pipeline.cta.label}
        </Button>
      </section>
    </PageShell>
  );
}
