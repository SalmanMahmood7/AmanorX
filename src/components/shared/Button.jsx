import Link from "next/link";

const VARIANTS = {
  primary: "btn-gold-shimmer text-navy-950 focus-visible:outline-gold-600",
  outlineOnDark:
    "border border-white/30 text-white hover:border-gold-400 hover:text-gold-400 focus-visible:outline-gold-400",
  outlineOnLight:
    "border border-navy-900/20 text-navy-900 hover:border-gold-500 hover:text-gold-600 focus-visible:outline-gold-500",
};

const BASE =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

/**
 * Single source of truth for every pill CTA on the site (internal Link or
 * external anchor). `arrow` appends the shared trailing arrow glyph so call
 * sites stop hand-rolling `<span aria-hidden>&rarr;</span>`.
 */
export default function Button({
  href,
  variant = "primary",
  external = false,
  arrow = false,
  className = "",
  children,
  ...rest
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow ? <span aria-hidden="true">&rarr;</span> : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
