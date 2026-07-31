import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
import LeadershipSection from "@/components/home/LeadershipSection";
import DeckRule from "@/components/shared/DeckRule";
import DeckSectionTitle from "@/components/shared/DeckSectionTitle";
import { governanceContent } from "@/content/governance";
import { profileContent } from "@/content/profile";
import { pick } from "@/lib/i18n";

const content = pick(governanceContent);
// The homepage's Leadership block (portraits, roles, bios) -- shown here
// too so governance opens with the people who hold the authority it
// describes.
const leadership = pick(profileContent).leadership;

export const metadata = {
  title: "Governance",
};

// Bespoke full-width layout -- deliberately not <PageShell> (no sticky
// reference/"on this page" rail, same call as the other redesigned pages).
// Hierarchy is the design: the Chairman leads as a featured dark card, the
// other principals follow, the standing rules get their own dark band, and
// the foundation sits in a literally ring-fenced (dashed) panel.
export default function GovernancePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        {/* Homepage hero backdrop: HQ night shot under a navy wash. */}
        <img
          src="/images/hero-hq-night.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/50"
        />
        <Container size="xl" className="py-16 sm:py-20">
          <AnimatedHeading
            text={content.heading}
            className="max-w-3xl text-display font-semibold text-white"
          />
          {/* Deck signature rule, as on the homepage headings. */}
          <FadeIn delay={400} duration={800}>
            <DeckRule className="mt-6" />
          </FadeIn>
          <FadeIn delay={500} duration={1000}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{content.intro}</p>
          </FadeIn>
        </Container>
      </section>

      {/* Slide 04 from the homepage, reused verbatim -- Leadership with
          portraits. */}
      <LeadershipSection content={leadership} />

      {/* Standing governance rules, per the developer brief (§7) --
          published as the discipline the group holds itself to, phrased
          for a public audience. */}
      <section id="disciplines" className="scroll-mt-28 bg-navy-950 py-16 text-white sm:py-20">
        <Container size="xl">
          <DeckSectionTitle dark title={content.disciplines.heading} />
          <Reveal delay={120}>
            <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
              {content.disciplines.intro}
            </p>
          </Reveal>
          <div className="mt-10 divide-y divide-white/10 rounded-lg border border-white/10 bg-white/[0.04]">
            {content.disciplines.items.map((rule, i) => (
              <Reveal
                key={rule.title}
                delay={i * 70}
                className="grid gap-2 p-6 sm:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.8fr)] sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-sm font-semibold text-gold-400">0{i + 1}</span>
                <h3 className="font-semibold text-white">{rule.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{rule.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Group-level only, per the ring-fencing rule -- the dashed border
          is the ring fence, drawn. See src/content/governance.js. */}
      <section id="foundation" className="scroll-mt-28 bg-navy-50 py-16 sm:py-20">
        <Container size="xl">
          <Reveal>
            <div className="rounded-lg border-2 border-dashed border-gold-500/40 bg-navy-50/60 p-8 sm:p-10">
              <p className="font-mono text-xs font-medium tracking-[0.2em] text-gold-600 uppercase">
                {content.foundation.subtitle} &middot; Ring fenced &middot; Non profit
              </p>
              <AnimatedHeading
                startOnView
                as="h2"
                text={content.foundation.heading}
                className="mt-3 text-h2 font-semibold text-navy-900"
              />
              <p className="mt-3 max-w-2xl text-lg text-navy-700">{content.foundation.body}</p>
              <p className="mt-4 max-w-2xl text-sm text-silver-ink">{content.foundation.note}</p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
