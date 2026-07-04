import EntityCard from "@/components/shared/EntityCard";
import PageShell from "@/components/shared/PageShell";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import { portfolioContent } from "@/content/portfolio";
import { pick } from "@/lib/i18n";
import { getAllPortfolioCompanies } from "@/lib/data/portfolioCompanies";

const content = pick(portfolioContent);
const companies = getAllPortfolioCompanies();

const SECTIONS = [{ id: "companies", label: content.listHeading }];

export const metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <PageShell
      heading={content.heading}
      description={content.intro}
      reference="AMX / 04"
      sections={SECTIONS}
    >
      <section id="companies" className="scroll-mt-28">
        <SectionHeading>{content.listHeading}</SectionHeading>
        <p className="mt-3 max-w-2xl text-navy-700">{content.listDescription}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {companies.map((company, i) => (
            <Reveal
              key={company.slug}
              id={company.slug}
              delay={(i % 6) * 70}
              className="scroll-mt-28"
            >
              <EntityCard
                eyebrow={company.sectorTag}
                title={company.name}
                status={company.status}
                description={company.proofPoint}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
