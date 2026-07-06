import PageShell from "@/components/shared/PageShell";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata = {
  title: "Privacy Policy",
};

// Placeholder page: this build will not invent binding legal text for a
// real company's privacy policy (same reasoning as governance.js not
// inventing principal names, or valuationInvestors.js not inventing
// figures) -- content here is a structural placeholder pending legal
// review, not a policy anyone should rely on.
export default function PrivacyPolicyPage() {
  return (
    <PageShell
      heading="Privacy Policy"
      description="This page is a placeholder pending legal review -- it is not yet AmanorX's binding privacy policy."
    >
      <Reveal as="section">
        <SectionHeading>Status</SectionHeading>
        <p className="mt-4 max-w-2xl text-navy-700">
          AmanorX Holdings has not yet published a legally reviewed privacy policy. When one
          is finalised, it will explain what personal data the group collects (for example,
          through the contact form on this site), how it is used, how long it is retained,
          and how to request access to or deletion of it.
        </p>
        <p className="mt-4 max-w-2xl text-navy-700">
          In the meantime, for any question about how information you submit through this
          site is handled, please use the{" "}
          <a href="/contact" className="font-medium text-green-600 hover:text-green-500">
            Contact
          </a>{" "}
          page.
        </p>
      </Reveal>
    </PageShell>
  );
}
