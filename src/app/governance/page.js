import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";
import { governanceContent } from "@/content/governance";
import { groupArchitectureContent } from "@/content/groupArchitecture";
import { pick } from "@/lib/i18n";

const content = pick(governanceContent);
// The same cross-cutting governance roles shown on the Architecture page's
// diagram band -- reused here so the two pages describe one structure.
const governanceRoles = pick(groupArchitectureContent).governanceBand.roles;

const [chairman, ...otherPrincipals] = content.principals;

export const metadata = {
  title: "Governance",
};

function PersonGlyph({ className = "", size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="8.5" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M5 20c.8-3.4 3.6-5.5 7-5.5s6.2 2.1 7 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Bespoke full-width layout -- deliberately not <PageShell> (no sticky
// reference/"on this page" rail, same call as the other redesigned pages).
// Hierarchy is the design: the Chairman leads as a featured dark card, the
// other principals follow, the standing rules get their own dark band, and
// the foundation sits in a literally ring-fenced (dashed) panel.
export default function GovernancePage() {
  return (
    <>
      <section className="border-b-2 border-green-500 bg-navy-900 text-white">
        <Container size="xl" className="py-16 sm:py-20">
          <AnimatedHeading
            text={content.heading}
            className="max-w-3xl text-display font-semibold text-white"
          />
          <FadeIn delay={500} duration={1000}>
            <p className="mt-6 max-w-2xl text-lg text-white/75">{content.intro}</p>
          </FadeIn>
          <FadeIn
            delay={900}
            duration={1000}
            as="ul"
            className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-8"
          >
            {governanceRoles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium tracking-wide text-white/70 uppercase"
              >
                {role}
              </li>
            ))}
          </FadeIn>
        </Container>
      </section>

      <section id="principals" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <Container size="xl">
          <Reveal>
            <AnimatedHeading
              startOnView
              as="h2"
              text={content.principalsHeading}
              className="text-h2 font-semibold text-navy-900"
            />
          </Reveal>

          {/* Chairman leads -- featured, full width, dark. */}
          <Reveal delay={60} className="mt-10">
            <div className="rounded-lg border-t-2 border-green-500 bg-navy-900 p-6 text-white shadow-[0_10px_30px_rgba(13,26,46,0.2)] sm:p-8 md:flex md:items-center md:gap-8">
              <Reveal
                as="span"
                effect="scale"
                delay={150}
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/10"
              >
                <PersonGlyph className="text-green-400" size={34} />
              </Reveal>
              <div className="mt-5 md:mt-0">
                <p className="font-mono text-xs font-medium tracking-[0.2em] text-green-400 uppercase">
                  {chairman.role}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">{chairman.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75">
                  {chairman.bio}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {otherPrincipals.map((principal, i) => (
              <Reveal key={principal.id} delay={120 + i * 60}>
                <div className="flex h-full flex-col rounded-lg border border-navy-900/10 bg-white p-6 transition-colors duration-300 hover:border-green-500/40 sm:p-7">
                  <Reveal
                    as="span"
                    effect="scale"
                    delay={200 + i * 60}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-900"
                  >
                    <PersonGlyph className="text-green-400" />
                  </Reveal>
                  <p className="mt-5 font-mono text-xs font-medium tracking-wide text-green-600 uppercase">
                    {principal.role}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-navy-900">{principal.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-700">{principal.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* The group's own governance office, per the developer brief
              (§15) -- a function, not a person, so it sits apart from the
              principal cards. */}
          <Reveal delay={240} className="mt-5">
            <div className="rounded-lg border border-green-500/25 bg-green-50/60 p-6 sm:p-7">
              <p className="font-mono text-xs font-medium tracking-wide text-green-600 uppercase">
                {content.command.eyebrow}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-navy-900">
                {content.command.heading}
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-navy-700">
                {content.command.body}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Standing governance rules, per the developer brief (§7) --
          published as the discipline the group holds itself to, phrased
          for a public audience. */}
      <section id="disciplines" className="scroll-mt-28 bg-navy-950 py-16 text-white sm:py-20">
        <Container size="xl">
          <Reveal>
            <AnimatedHeading
              startOnView
              as="h2"
              text={content.disciplines.heading}
              className="text-h2 font-semibold"
            />
            <p className="mt-3 max-w-2xl text-white/70">{content.disciplines.intro}</p>
          </Reveal>
          <div className="mt-10 divide-y divide-white/10 rounded-lg border border-white/10 bg-white/[0.04]">
            {content.disciplines.items.map((rule, i) => (
              <Reveal
                key={rule.title}
                delay={i * 70}
                className="grid gap-2 p-6 sm:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.8fr)] sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-sm font-semibold text-green-400">0{i + 1}</span>
                <h3 className="font-semibold text-white">{rule.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{rule.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Group-level only, per the ring-fencing rule -- the dashed border
          is the ring fence, drawn. See src/content/governance.js. */}
      <section id="foundation" className="scroll-mt-28 bg-white py-16 sm:py-20">
        <Container size="xl">
          <Reveal>
            <div className="rounded-lg border-2 border-dashed border-green-500/40 bg-navy-50/60 p-8 sm:p-10">
              <p className="font-mono text-xs font-medium tracking-[0.2em] text-green-600 uppercase">
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
