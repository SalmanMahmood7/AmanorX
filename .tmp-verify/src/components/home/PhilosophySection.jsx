import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";

/**
 * "Operating Philosophy" -- the mountain-sunrise quote slide, placed after
 * the Beginning section. Warm golden-sky stage, large gold opening quote
 * mark, three serif quote lines, then the OPERATING PHILOSOPHY /
 * INITIATIVE-WISE SELF RELIANCE small-caps footer.
 *
 * The full-bleed backdrop (public/images/philosophy-mountain.jpg, sunrise
 * peaks over a sea of clouds -- Unsplash, free license) sits under a warm
 * cream wash that strengthens toward the left so the live-rendered quote
 * keeps AA contrast over the darker peaks.
 *
 * Quote lines support one bit of markup: a *word* wrapped in asterisks
 * renders in gold, matching the slide's highlighted word.
 */
function QuoteLine({ line }) {
  const parts = line.split("*");
  return (
    <p>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="text-gold-600">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </p>
  );
}

export default function PhilosophySection({ content }) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Full-bleed sunrise mountains. */}
      <img
        src="/images/philosophy-mountain.jpg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      {/* Warm cream wash, strongest over the quote, clearing toward the
          peaks on the right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#faf4e4] via-[#faf4e4]/85 to-[#faf4e4]/15"
      />

      <Container size="xl" className="py-20 sm:py-28">
        <Reveal className="max-w-2xl">
          <span
            aria-hidden="true"
            className="font-display block text-7xl leading-none text-gold-500"
          >
            &ldquo;
          </span>
          <blockquote className="font-display -mt-4 text-2xl leading-snug font-medium text-navy-900 sm:text-3xl lg:text-4xl">
            {content.quoteLines.map((line) => (
              <QuoteLine key={line} line={line} />
            ))}
          </blockquote>
          <p className="mt-10 text-sm font-semibold tracking-[0.35em] text-gold-600 uppercase">
            {content.label}
          </p>
          <p className="mt-3 text-xs font-semibold tracking-[0.3em] text-navy-700 uppercase">
            {content.sublabel}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
