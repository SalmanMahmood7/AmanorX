import PageShell from "@/components/shared/PageShell";
import ProjectsCaseStudies from "@/components/insights/ProjectsCaseStudies";
import { insightsContent } from "@/content/insights";
import { pick } from "@/lib/i18n";

const content = pick(insightsContent);

export const metadata = {
  title: "Insights",
};

export default function InsightsPage() {
  return (
    <PageShell heading={content.heading} description={content.intro} bleed>
      <ProjectsCaseStudies />
    </PageShell>
  );
}
