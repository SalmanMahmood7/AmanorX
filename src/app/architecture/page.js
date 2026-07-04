import ThreeTierDiagram from "@/components/architecture/ThreeTierDiagram";
import EmmicWalkthrough from "@/components/architecture/EmmicWalkthrough";
import PageShell from "@/components/shared/PageShell";
import SectionHeading from "@/components/shared/SectionHeading";

const SECTIONS = [
  { id: "three-tier-structure", label: "The three-tier structure" },
  { id: "emmic-model", label: "The EMMIC model" },
];

export const metadata = {
  title: "The Architecture",
};

export default function ArchitecturePage() {
  return (
    <PageShell
      heading="The Architecture"
      description="AmanorX is organised as a three-tier structure, and every sector platform inside it runs the same five-part EMMIC discipline: Evaluation, Management, Marketplace, Investment, and Company."
      reference="AMX / 02"
      sections={SECTIONS}
    >
      <section id="three-tier-structure" className="scroll-mt-28">
        <SectionHeading>The Three-Tier Structure</SectionHeading>
        <p className="mt-3 max-w-2xl text-navy-700">
          Hover, focus, or tap a tier to see what sits inside it.
        </p>
        <div className="mt-10">
          <ThreeTierDiagram headingLevel={3} />
        </div>
      </section>

      <section id="emmic-model" className="scroll-mt-28">
        <SectionHeading>The EMMIC Model</SectionHeading>
        <p className="mt-3 max-w-2xl text-navy-700">
          Every sector platform runs this cycle. Step through it below.
        </p>
        <div className="mt-10">
          <EmmicWalkthrough headingLevel={3} />
        </div>
      </section>
    </PageShell>
  );
}
