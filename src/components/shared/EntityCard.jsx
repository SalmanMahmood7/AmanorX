import StatusPill from "./StatusPill";

/**
 * Generic card for any group entity that isn't a sector-registry sector --
 * e.g. a tier in the three-tier structure, a future board/portfolio entry.
 * Pass `status` only when it is one of SECTOR_STATUS; omit it otherwise.
 */
export default function EntityCard({
  eyebrow,
  title,
  subtitle,
  description,
  status,
  footer,
  className = "",
}) {
  return (
    <div
      className={`border border-t-2 border-navy-900/15 border-t-green-500 bg-white p-6 transition-colors duration-300 hover:bg-navy-50 sm:p-7 ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        {eyebrow ? (
          <span className="font-mono text-xs font-medium tracking-wide text-green-600 uppercase">
            {eyebrow}
          </span>
        ) : (
          <span />
        )}
        {status ? <StatusPill status={status} /> : null}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-navy-900">{title}</h3>
      {subtitle ? (
        <p className="mt-1 text-sm text-silver-ink">{subtitle}</p>
      ) : null}
      {description ? (
        <p className="mt-3 text-sm leading-relaxed text-navy-700">
          {description}
        </p>
      ) : null}
      {footer ? <div className="mt-5">{footer}</div> : null}
    </div>
  );
}
