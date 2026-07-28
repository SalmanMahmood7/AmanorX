import AnimatedHeading from "@/components/home/AnimatedHeading";
import DeckRule from "./DeckRule";

/**
 * Section-level heading: the deck's gold diamond-tipped rule above the
 * text -- the same signature the homepage's <DeckHeading> draws -- at a
 * smaller, left-aligned scale. String children get the site-wide
 * character-stagger entrance when the heading scrolls into view;
 * non-string children render as-is.
 */
export default function SectionHeading({ as: Tag = "h2", className = "", children }) {
  return (
    <div className={className}>
      <DeckRule className="w-24" />
      {typeof children === "string" ? (
        <AnimatedHeading
          startOnView
          text={children}
          as={Tag}
          className="mt-4 text-h2 font-semibold text-navy-900"
        />
      ) : (
        <Tag className="mt-4 font-display text-h2 font-semibold text-navy-900">{children}</Tag>
      )}
    </div>
  );
}
