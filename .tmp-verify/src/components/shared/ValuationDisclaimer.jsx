// Wrap any bare valuation/equity figure in this component -- never render
// such a figure without it. Not used on any Phase 1 page (the Valuation &
// Investors page is Phase 3, per AGENTS.md), but the component ships now so
// it exists the moment a figure is needed anywhere else.
export default function ValuationDisclaimer({ children, className = "" }) {
  return (
    <div className={`inline-block ${className}`}>
      <div>{children}</div>
      <p className="mt-1.5 max-w-prose text-xs leading-relaxed text-silver-ink">
        This figure is an internal, unaudited estimate pending independent
        valuation. It is not a guarantee of value, an offer, or investment
        advice.
      </p>
    </div>
  );
}
