import Container from "./Container";
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
      <section className="border-b-2 border-green-500 bg-navy-900 text-white">
        <Container size="xl" className="py-16 sm:py-20">
          {eyebrow ? (
            <FadeIn delay={100} duration={800} className="flex items-center gap-3">
              <span className="h-px w-8 bg-green-400" aria-hidden="true" />
              <p className="text-sm font-medium tracking-[0.15em] text-green-400 uppercase">
                {eyebrow}
              </p>
            </FadeIn>
          ) : null}
          <AnimatedHeading
            text={heading}
            className={`${eyebrow ? "mt-5" : ""} max-w-3xl text-display font-semibold text-white`}
          />
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
