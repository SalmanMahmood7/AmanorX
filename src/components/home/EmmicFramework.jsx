import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import DeckHeading from "./DeckHeading";
import ProfileIcon from "./ProfileIcons";

/**
 * "The EMMIC Growth Framework" -- deck slide 07. Four stations on a dotted
 * gold rail: numbered gold-ringed badge over a dark icon medallion, name,
 * one-liner. Closes with the slide's navy quote band ("Founders keep
 * building...") shaped by a top gold border and rounded corners.
 */
export default function EmmicFramework({ content }) {
  return (
    <section className="bg-background">
      <Container size="xl" className="py-16 sm:py-24">
        <DeckHeading
          plain={content.headingPlain}
          accent={content.headingAccent}
          className="mx-auto max-w-2xl"
        />

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Dotted connector rail behind the medallions (desktop only). */}
          <span
            aria-hidden="true"
            className="absolute top-14 right-[12%] left-[12%] hidden border-t-2 border-dotted border-gold-500/50 lg:block"
          />

          {content.steps.map((step, i) => (
            <Reveal as="li" key={step.name} delay={i * 120} className="text-center">
              <div className="relative mx-auto w-fit">
                <span className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-950 text-gold-400 shadow-card">
                  <ProfileIcon name={step.icon} className="h-12 w-12" />
                </span>
                <span className="absolute -top-3 left-1/2 z-20 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-gold-500 bg-white font-display text-sm font-bold text-navy-900">
                  {step.number}
                </span>
              </div>
              <h3 className="mt-5 text-base font-bold tracking-[0.12em] text-navy-900 uppercase">
                {step.name}
              </h3>
              <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-relaxed text-navy-700">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>

        {/* Quote band. */}
        <Reveal className="mt-16">
          <figure className="rounded-t-[2.5rem] rounded-b-lg border-t-2 border-gold-500 bg-navy-950 px-6 py-12 text-center text-white sm:px-12">
            <span
              aria-hidden="true"
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/60 font-display text-2xl leading-none text-gold-400"
            >
              &rdquo;
            </span>
            <blockquote className="mx-auto mt-5 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">
              <p className="text-gold-400">{content.quoteLine1}</p>
              <p className="mt-1 text-white">{content.quoteLine2}</p>
            </blockquote>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
