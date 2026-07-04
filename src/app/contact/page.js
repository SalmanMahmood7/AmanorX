import ContactForm from "@/components/forms/ContactForm";
import PageShell from "@/components/shared/PageShell";
import Reveal from "@/components/shared/Reveal";
import { contactContent } from "@/content/contact";
import { pick } from "@/lib/i18n";

const content = pick(contactContent);

const SECTIONS = content.paths.map((path) => ({ id: path.id, label: path.heading }));

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageShell
      heading={content.heading}
      description={content.intro}
      reference="AMX / 09"
      sections={SECTIONS}
    >
      {content.paths.map((path) => (
        <Reveal key={path.id} as="section" id={path.id} className="scroll-mt-28">
          <div className="grid gap-8 border-l-4 border-green-500 bg-navy-900 p-8 text-white sm:grid-cols-2 sm:p-10">
            <div>
              <h2 className="text-h2 font-semibold">{path.heading}</h2>
              <p className="mt-3 max-w-sm text-white/80">{path.body}</p>
            </div>
            <ContactForm presetReason={path.reason} lockReason />
          </div>
        </Reveal>
      ))}
    </PageShell>
  );
}
