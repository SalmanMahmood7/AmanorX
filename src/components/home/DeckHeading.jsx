import Reveal from "@/components/shared/Reveal";

/**
 * Centered two-tone display heading used by every deck-styled homepage
 * section: a serif headline with one segment in gold, a diamond-tipped gold
 * rule beneath, and an optional letter-spaced subheading -- the recurring
 * title treatment of the company-profile deck.
 *
 * `accentFirst` puts the gold segment before the plain one ("PIPELINE
 * Sectors" vs "Live SECTORS"); `plainAfter` appends a second plain segment
 * after the accent for mid-headline gold ("Vision · MISSION · Purpose").
 * `dark` flips the plain text to white for navy sections.
 */
export default function DeckHeading({
  plain,
  accent,
  plainAfter,
  accentFirst = false,
  sub,
  dark = false,
  className = "",
}) {
  const plainClass = dark ? "text-white" : "text-navy-900";
  const accentClass = dark ? "text-gold-400" : "text-gold-600";

  return (
    <Reveal className={`text-center ${className}`}>
      <h2 className="font-display text-h1 font-semibold tracking-wide">
        {(accentFirst
          ? [
              [accent, accentClass],
              [plain, plainClass],
            ]
          : [
              [plain, plainClass],
              [accent, accentClass],
              [plainAfter, plainClass],
            ]
        )
          .filter(([text]) => text)
          .map(([text, colorClass], i) => (
            <span key={`${i}-${text}`}>
              {i > 0 ? " " : ""}
              <span className={colorClass}>{text}</span>
            </span>
          ))}
      </h2>

      <span
        aria-hidden="true"
        className="mx-auto mt-4 flex max-w-xs items-center gap-2"
      >
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
      </span>

      {sub ? (
        <p
          className={`mt-4 text-sm font-medium tracking-[0.18em] uppercase ${
            dark ? "text-white/80" : "text-navy-700"
          }`}
        >
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
