/**
 * Gold diamond-tipped rule -- the company-profile deck's heading signature
 * (the same motif <DeckHeading> draws under the homepage section titles),
 * shared so page headers and section headings across the site carry the
 * homepage's look.
 *
 * `center` fades the rule in from both sides (homepage style, for centered
 * headings); the default left variant anchors a solid line on the left and
 * fades out rightward, matching left-aligned page headers.
 */
export default function DeckRule({ center = false, className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`flex items-center gap-2 ${center ? "mx-auto max-w-xs" : "max-w-[11rem]"} ${className}`}
    >
      {center ? (
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500" />
      ) : (
        <span className="h-px w-10 bg-gold-500" />
      )}
      <span className="h-1.5 w-1.5 rotate-45 bg-gold-500" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
    </span>
  );
}
