import Container from "./Container";
import DeckRule from "./DeckRule";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import FadeIn from "@/components/home/FadeIn";

/**
 * Standard institutional-page frame: navy hero band (eyebrow/heading/
 * description) over a single full-width content column. The old sticky
 * left rail (reference tag + "on this page" jump nav) was removed
 * site-wide per explicit instruction -- `reference`/`sections` props are
 * still accepted and ignored so older call sites don't break, but new
 * pages shouldn't pass them.
 *
 * `bleed` renders children full-width with no Container/padding, for pages
 * whose body sections manage their own gutters and backgrounds.
 */
export default function PageShell({
  eyebrow,
  heading,
  description,
  bleed = false,
  children,
}) {
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
        {/* Extra top padding clears the fixed full-width navbar floating
            over this band. */}
        <Container size="xl" className="pt-32 pb-16 sm:pt-36 sm:pb-20">
          {eyebrow ? (
            <FadeIn delay={100} duration={800} className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
              <p className="text-xs font-bold tracking-[0.35em] text-gold-400 uppercase sm:text-sm">
                {eyebrow}
              </p>
            </FadeIn>
          ) : null}
          <AnimatedHeading
            text={heading}
            className={`${eyebrow ? "mt-5" : ""} max-w-3xl text-display font-semibold text-white`}
          />
          {/* Deck signature rule, as under the homepage section headings. */}
          <FadeIn delay={400} duration={800}>
            <DeckRule className="mt-6" />
          </FadeIn>
          {description ? (
            <FadeIn delay={600} duration={1000}>
              <p className="mt-6 max-w-2xl text-lg text-white/75">{description}</p>
            </FadeIn>
          ) : null}
        </Container>
      </section>

      {bleed ? (
        children
      ) : (
        <Container size="xl" className="py-14 sm:py-16 lg:py-20">
          <div className="min-w-0 space-y-16">{children}</div>
        </Container>
      )}
    </>
  );
}
