// Hero sector marquee -- the "One Vision. 16 Sectors. Endless
// Possibilities." brand line as an infinite logo-style slideshow, per a
// supplied logo-marquee reference: each of the 16 EMMIC sectors rendered as
// a minimal line icon + name, scrolling in a seamless loop along the bottom
// of the hero. (Earlier passes -- node ring, segmented wheel, tile mosaic
// -- were all rejected as designs; this marquee is the accepted direction.)
//
// The strip is rendered twice inside a w-max flex row and the
// `.marquee-sectors` animation (globals.css) translates it -50%, so the
// second copy wraps exactly where the first began. The global
// prefers-reduced-motion guard freezes it as a static strip.
//
// No "use client": this is pure markup + CSS animation, so it stays a
// server component and ships no JS.
//
// Purely decorative (aria-hidden): every sector name shown here also
// exists as real, readable content further down the page.

// Minimal 24x24 line icons, one per sector code, drawn in the same
// 1.5-stroke style so the strip reads as one family (currentColor lets the
// item set the tone).
const SECTOR_ICONS = {
  // Building facade
  REMMIC: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
    </>
  ),
  // Chip
  TEMMIC: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1" />
      <path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3" />
    </>
  ),
  // Play
  MEMMIC: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 8.5l6 3.5-6 3.5z" />
    </>
  ),
  // Graduation cap
  ACEMMIC: (
    <>
      <path d="M3 9.5L12 5l9 4.5-9 4.5z" />
      <path d="M7 12v4.5c0 1 2.2 2.5 5 2.5s5-1.5 5-2.5V12M21 9.5V15" />
    </>
  ),
  // Sun over waves
  THEMMIC: (
    <>
      <circle cx="12" cy="9" r="3.5" />
      <path d="M12 2.5V4M5.5 9H4M20 9h-1.5M7.4 4.4l1 1M16.6 4.4l-1 1" />
      <path d="M3 16c1.5 1.4 3 1.4 4.5 0s3-1.4 4.5 0 3 1.4 4.5 0 3-1.4 4.5 0M5 20c1.5 1.4 3 1.4 4.5 0s3-1.4 4.5 0 3 1.4 4.5 0" />
    </>
  ),
  // Shopping bag
  CEMMIC: (
    <>
      <path d="M5 8h14l-1.2 12.2a1 1 0 01-1 .8H7.2a1 1 0 01-1-.8z" />
      <path d="M9 11V6a3 3 0 016 0v5" />
    </>
  ),
  // Bolt
  EEMMIC: <path d="M13 2L5 13.5h5.5L10 22l8-11.5h-5.5z" />,
  // Rising chart
  FEMMIC: (
    <>
      <path d="M4 4v16h16" />
      <path d="M7 15l4-4 3 2.5L19 8" />
      <path d="M15.5 8H19v3.5" />
    </>
  ),
  // Truck
  LEMMIC: (
    <>
      <rect x="2" y="7" width="12" height="9" rx="1" />
      <path d="M14 10h4l3 3.5V16h-3" />
      <circle cx="6.5" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
      <path d="M8.3 18H14v-2" />
    </>
  ),
  // Sparkle
  LSEMMIC: (
    <>
      <path d="M12 3c.6 4.5 2.5 6.4 7 7-4.5.6-6.4 2.5-7 7-.6-4.5-2.5-6.4-7-7 4.5-.6 6.4-2.5 7-7z" />
      <path d="M19 15.5c.3 1.9 1 2.7 3 3-2 .3-2.7 1.1-3 3-.3-1.9-1-2.7-3-3 2-.3 2.7-1.1 3-3z" />
    </>
  ),
  // Medical cross in shield-ish circle
  HEMMIC: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
  // Plane
  AVEMMIC: (
    <path d="M10.5 13.5L3 11l1.5-1.5 6.5 1 5-5.5c.7-.7 2-.9 2.6-.3.6.6.4 1.9-.3 2.6l-5.5 5 1 6.5L12.5 20l-2.5-7.5-4 3V18l-1.5 1.5-1-3.5-3.5-1L1.5 13.5H4z" />
  ),
  // Shield
  DEMMIC: (
    <>
      <path d="M12 3l7 2.8v5.4c0 4.6-3 8-7 9.8-4-1.8-7-5.2-7-9.8V5.8z" />
      <path d="M9 12l2 2 4-4.5" />
    </>
  ),
  // Cloche / dish
  FOEMMIC: (
    <>
      <path d="M4 16a8 8 0 0116 0z" />
      <path d="M12 8V6M2.5 19.5h19" />
    </>
  ),
  // Sprout
  AGEMMIC: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13C12 8.5 9.5 6 5 6c0 4.5 2.5 7 7 7zM12 10c0-3.6 2-5.6 5.6-5.6 0 3.6-2 5.6-5.6 5.6z" />
    </>
  ),
  // Compass
  XEMMIC: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
};

// Each item pairs the EMMIC brand code with what it actually is (TEMMIC ->
// Technology, HEMMIC -> Healthcare, ...), so the codes aren't left
// unexplained for first-time visitors.
function MarqueeItem({ sector }) {
  return (
    <div className="flex shrink-0 items-center gap-3 px-8">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-white/60"
      >
        {SECTOR_ICONS[sector.code]}
      </svg>
      <span className="flex flex-col">
        <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-white/90">
          {sector.code}
        </span>
        <span className="whitespace-nowrap text-[11px] text-white/55">
          {sector.name}
        </span>
      </span>
    </div>
  );
}

export default function HeroSectorMarquee({ sectors }) {
  return (
    <div aria-hidden="true" className="border-t border-white/10">
      {/* Two copies of the strip; the animation wraps at -50%. The mask
          fades the strip out at both edges instead of hard clipping. */}
      <div className="overflow-hidden py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-sectors flex w-max">
          {sectors.map((sector) => (
            <MarqueeItem key={sector.code} sector={sector} />
          ))}
          {sectors.map((sector) => (
            <MarqueeItem key={`${sector.code}-dup`} sector={sector} />
          ))}
        </div>
      </div>
    </div>
  );
}
