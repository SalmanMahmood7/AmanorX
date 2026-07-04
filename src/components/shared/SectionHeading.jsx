/**
 * Section-level heading: a short green tick rule above the text, echoing
 * the rule motif in the site's heroes. Purely a visual marker -- no
 * invented eyebrow copy, just the same brand signature at a smaller scale.
 */
export default function SectionHeading({ as: Tag = "h2", className = "", children }) {
  return (
    <div className={className}>
      <span className="block h-px w-10 bg-green-500" aria-hidden="true" />
      <Tag className="mt-4 text-h2 font-semibold text-navy-900">{children}</Tag>
    </div>
  );
}
