import PageShell from "@/components/shared/PageShell";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata = {
  title: "Terms & Conditions",
};

// Placeholder page: this build will not invent binding legal text for a
// real company's terms of use -- content here is a structural placeholder
// pending legal review, not terms anyone should rely on.
export default function TermsAndConditionsPage() {
  return (
    <PageShell
      heading="Terms & Conditions"
      description="This page is a placeholder pending legal review -- it is not yet AmanorX's binding terms of use."
    >
      <Reveal as="section">
        <SectionHeading>Status</SectionHeading>
        <p className="mt-4 max-w-2xl text-navy-700">
          AmanorX Holdings has not yet published legally reviewed terms and conditions for
          this website. When finalised, they will cover acceptable use of the site,
          intellectual property, and the disclaimers that already appear on the{" "}
          <a href="/valuation-and-investors" className="font-medium text-green-600 hover:text-green-500">
            Valuation &amp; Investors
          </a>{" "}
          page.
        </p>
        <p className="mt-4 max-w-2xl text-navy-700">
          In the meantime, for any question about using this site, please use the{" "}
          <a href="/contact" className="font-medium text-green-600 hover:text-green-500">
            Contact
          </a>{" "}
          page.
        </p>
      </Reveal>
    </PageShell>
  );
}
