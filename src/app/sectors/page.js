import SectorsFilterGrid from "@/components/sectors/SectorsFilterGrid";
import TodayVsVisionToggle from "@/components/shared/TodayVsVisionToggle";
import PageShell from "@/components/shared/PageShell";
import SectionHeading from "@/components/shared/SectionHeading";
import { countSectorsByStatus } from "@/lib/data/sectors";
import { SECTOR_STATUS_LABEL } from "@/content/constants";

const statusCounts = countSectorsByStatus();

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "directory", label: "Sector directory" },
];

export const metadata = {
  title: "Sectors",
};

export default function SectorsPage() {
  return (
    <PageShell
      heading="Sectors"
      description="AmanorX operates across the EMMIC architecture's 16 sectors, each at a different stage of build-out."
      reference="AMX / 03"
      sections={SECTIONS}
    >
      <section id="overview" className="scroll-mt-28">
        <SectionHeading>Overview</SectionHeading>
        <div className="mt-8">
          <TodayVsVisionToggle
            todayLabel="Live today"
            visionLabel="Full 2030s footprint"
            todayContent={
              <p className="max-w-2xl text-navy-700">
                {statusCounts.LIVE} sector platforms are{" "}
                {SECTOR_STATUS_LABEL.LIVE.toLowerCase()} today, each running its
                own Evaluation-Management-Marketplace-Investment-Company cycle.
              </p>
            }
            visionContent={
              <p className="max-w-2xl text-navy-700">
                Toward the 2030s, AmanorX intends to operate across all 16
                sectors: {statusCounts.LIVE}{" "}
                {SECTOR_STATUS_LABEL.LIVE.toLowerCase()},{" "}
                {statusCounts.PIPELINE} in{" "}
                {SECTOR_STATUS_LABEL.PIPELINE.toLowerCase()}, and{" "}
                {statusCounts.PLANNED} {SECTOR_STATUS_LABEL.PLANNED.toLowerCase()}.
              </p>
            }
          />
        </div>
      </section>

      <section id="directory" className="scroll-mt-28">
        <SectionHeading>Sector directory</SectionHeading>
        <div className="mt-8">
          <SectorsFilterGrid />
        </div>
      </section>
    </PageShell>
  );
}
