// "About" hero for the Who We Are page, recreated from a supplied design
// spec. Per explicit instruction, the text (badge label, heading,
// paragraph, CTA label) is kept exactly as given in the spec -- not
// AmanorX's own copy -- see src/content/whoWeAre.js's `hero` block.
//
// What did change, and why (none of this is "text content"):
//   - The spec's orange (#F26522) accent is swapped for AmanorX's brand
//     green, consistent with every other off-brand color swap this
//     session (the pillar-line gradient, the benefits-card blob, etc.).
//   - The two images are sourced from our own stock photography rather
//     than the spec's hotlinked CDN URLs, which belong to an unrelated
//     account -- same reasoning as the homepage's About/stat-card images.
//   - No `lucide-react` dependency: ArrowRight is a small inline SVG,
//     matching the rest of the site's hand-rolled icon convention.
//   - The CTA needs a real destination on an actual page (the spec didn't
//     give one) -- pointed at /architecture as a sensible "next step" from
//     Who We Are, without touching the button's label text.

import Image from "next/image";
import Link from "next/link";

function ArrowRightIcon(props) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CtaButton({ label, href }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-green-500 py-2 pr-2 pl-5 text-[13px] font-medium text-white transition-colors hover:bg-green-600 sm:pl-6 sm:text-[14px]"
    >
      <span className="h-[20px] overflow-hidden">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="flex h-[20px] items-center">{label}</span>
          <span className="flex h-[20px] items-center">{label}</span>
        </span>
      </span>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
        <ArrowRightIcon className="-rotate-45 text-green-600 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-0" />
      </span>
    </Link>
  );
}

export default function AboutHero({
  badgeNumber,
  badgeLabel,
  headingLine1,
  headingLine2,
  paragraph,
  paragraphLines,
  cta,
}) {
  return (
    <section className="overflow-hidden bg-white pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 flex items-center gap-3 px-5 sm:mb-8 sm:px-8 lg:px-12">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-[11px] font-semibold text-white sm:h-7 sm:w-7 sm:text-[12px]">
            {badgeNumber}
          </span>
          <span className="rounded-full px-3 py-1 text-[12px] font-medium text-navy-900 sm:px-4 sm:py-1.5 sm:text-[13px]">
            {badgeLabel}
          </span>
        </div>

        <h2 className="mb-12 px-5 text-[clamp(1.5rem,4vw,3.2rem)] leading-[1.12] font-medium tracking-[-0.02em] text-navy-900 sm:mb-16 sm:px-8 lg:mb-28 lg:px-12">
          {headingLine1}
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          {headingLine2}
        </h2>

        {/* Mobile / tablet layout */}
        <div className="px-5 sm:px-8 lg:hidden">
          <p className="mb-6 text-[15px] leading-[1.6] font-medium text-navy-900 sm:text-[17px]">
            {paragraph}
          </p>
          <div className="mb-8">
            <CtaButton label={cta.label} href={cta.href} />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
            <div className="relative aspect-[438/346] w-full overflow-hidden rounded-xl sm:w-[45%] sm:rounded-2xl">
              <Image
                src="/images/who-we-are-1.jpg"
                alt="Modern office workspace"
                fill
                sizes="(min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[900/600] w-full overflow-hidden rounded-xl sm:w-[55%] sm:rounded-2xl">
              <Image
                src="/images/who-we-are-2.jpg"
                alt="Modern glass-walled interior corridor"
                fill
                sizes="(min-width: 640px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden grid-cols-[26%_1fr_48%] items-end gap-6 px-5 sm:px-8 lg:grid lg:px-12 xl:gap-8">
          <div className="relative aspect-[438/346] w-full self-end overflow-hidden rounded-2xl">
            <Image
              src="/images/who-we-are-1.jpg"
              alt="Modern office workspace"
              fill
              sizes="26vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-end self-start">
            <p className="mb-6 text-[16px] leading-[1.65] font-medium whitespace-nowrap text-navy-900 xl:text-[18px]">
              {paragraphLines.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < paragraphLines.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
            <CtaButton label={cta.label} href={cta.href} />
          </div>
          <div className="relative aspect-[3/2] w-full self-end overflow-hidden rounded-2xl">
            <Image
              src="/images/who-we-are-2.jpg"
              alt="Modern glass-walled interior corridor"
              fill
              sizes="48vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
