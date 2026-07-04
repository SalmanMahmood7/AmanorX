import Container from "./Container";

/**
 * Sidebar/content layout for every institutional page except the homepage
 * (which keeps its own bespoke marketing layout). Structurally different
 * from a stack of full-width bands: a sticky left rail (reference tag +
 * "on this page" jump nav) sits beside a single content column, closer to
 * how Stripe/Vercel structure their docs-adjacent pages than a marketing
 * site. `sections` drives the rail nav -- pass the same ids used on each
 * <section> inside `children`.
 */
export default function PageShell({
  eyebrow,
  heading,
  description,
  reference,
  sections = [],
  children,
}) {
  return (
    <>
      <section className="border-b-2 border-green-500 bg-navy-900 text-white">
        <Container size="xl" className="py-16 sm:py-20">
          {eyebrow ? (
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-green-400" aria-hidden="true" />
              <p className="text-sm font-medium tracking-[0.15em] text-green-400 uppercase">
                {eyebrow}
              </p>
            </div>
          ) : null}
          <h1
            className={`${eyebrow ? "mt-5" : ""} max-w-3xl text-display font-semibold text-white`}
          >
            {heading}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-lg text-white/75">{description}</p>
          ) : null}
        </Container>
      </section>

      <Container
        size="xl"
        className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[200px_minmax(0,1fr)] lg:items-start lg:gap-16 lg:py-20"
      >
        <aside className="lg:sticky lg:top-24">
          {reference ? (
            <div className="mb-8 border border-navy-900/15 px-4 py-3 font-mono text-xs tracking-[0.15em] text-silver-ink">
              {reference}
            </div>
          ) : null}
          {sections.length > 0 ? (
            <nav aria-label="On this page">
              <p className="text-xs font-semibold tracking-wide text-silver-ink uppercase">
                On this page
              </p>
              <ul className="mt-3 space-y-2.5 text-sm">
                {sections.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="-ml-px block border-l-2 border-transparent py-0.5 pl-4 text-navy-700 transition-colors hover:border-green-500 hover:text-green-600"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </aside>

        <div className="min-w-0 space-y-16">{children}</div>
      </Container>
    </>
  );
}
