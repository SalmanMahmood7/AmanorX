import DeckHeading from "@/components/home/DeckHeading";

/**
 * Centered deck-style section title for inner pages -- delegates to the
 * homepage's <DeckHeading> (serif two-tone headline, gold diamond-tipped
 * rule, optional letter-spaced subheading) and auto-splits the title's
 * final word into the gold accent, so "Operating Philosophy" renders like
 * the homepage's "Live Sectors"-style two-tone headings. Single-word
 * titles render entirely in gold.
 */
export default function DeckSectionTitle({ title, sub, dark = false, className = "" }) {
  const words = title.trim().split(" ");
  const accent = words.pop();
  return (
    <DeckHeading
      plain={words.join(" ")}
      accent={accent}
      sub={sub}
      dark={dark}
      className={className}
    />
  );
}
