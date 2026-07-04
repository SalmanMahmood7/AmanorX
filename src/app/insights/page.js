import PageShell from "@/components/shared/PageShell";
import Reveal from "@/components/shared/Reveal";
import { insightsContent } from "@/content/insights";
import { pick } from "@/lib/i18n";

const content = pick(insightsContent);

const SECTIONS = [{ id: "categories", label: "Categories" }];

export const metadata = {
  title: "Insights",
};

export default function InsightsPage() {
  return (
    <PageShell
      heading={content.heading}
      description={content.intro}
      reference="AMX / 07"
      sections={SECTIONS}
    >
      <section id="categories" className="scroll-mt-28 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {content.categories.map((category, i) => (
          <Reveal key={category.id} delay={i * 80}>
            <div className="border border-t-2 border-navy-900/10 border-t-green-500 bg-white p-6 sm:p-7">
              <h2 className="font-semibold text-navy-900">{category.label}</h2>
              {category.items.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {category.items.map((item) => (
                    <li key={item.id} className="text-sm text-navy-700">
                      {item.title}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm text-silver-ink">{category.emptyState}</p>
              )}
            </div>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
