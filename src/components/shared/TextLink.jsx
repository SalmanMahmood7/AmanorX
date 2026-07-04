import Link from "next/link";

/**
 * Inline "See all sectors &rarr;" style link -- the lighter-weight sibling
 * of <Button> for in-flow CTAs that shouldn't read as a pill button.
 */
export default function TextLink({ href, className = "", children }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-1.5 text-sm font-medium text-green-600 transition-colors hover:text-green-500 ${className}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        &rarr;
      </span>
    </Link>
  );
}
