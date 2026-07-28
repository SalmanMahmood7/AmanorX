// Line-icon registry for the deck-styled homepage sections. All icons are
// 24x24 stroke glyphs drawn in currentColor so each section colours them via
// text-gold-400 / text-gold-500. Keyed by the icon names used in
// src/content/profile.js.

const PATHS = {
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M7 20v-6M12 20V9M17 20V4" />
      <path d="M14 4h3v3" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 11l4-4 5 1 5-1 4 4" />
      <path d="M7 7v7l4 4 2-2M17 7v7l-3 3" />
      <path d="M11 14l2 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
    </>
  ),
  shieldcheck: (
    <>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  telescope: (
    <>
      <path d="M4 10l14-6 2 5-14 6-2-5z" />
      <path d="M10 14l-3 7M14 12l3 9" />
      <circle cx="12" cy="13" r="1" />
    </>
  ),
  summit: (
    <>
      <path d="M3 20l7-12 4 7 3-4 4 9H3z" />
      <path d="M14 4v4M14 4h4l-1.5 1.5L18 7h-4" />
    </>
  ),
  diamond: (
    <>
      <path d="M6 4h12l4 6-10 10L2 10l4-6z" />
      <path d="M2 10h20M9 4l3 6 3-6M12 10v10" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 1 4 10.5c-.8.7-1 1.5-1 2.5h-6c0-1-.2-1.8-1-2.5A6 6 0 0 1 12 3z" />
    </>
  ),
  gradcap: (
    <>
      <path d="M2 9l10-5 10 5-10 5L2 9z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M22 9v6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  bank: (
    <>
      <path d="M3 10l9-6 9 6H3z" />
      <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 18h18M2 21h20" />
    </>
  ),
  orgchart: (
    <>
      <rect x="9" y="3" width="6" height="5" rx="1" />
      <rect x="3" y="16" width="5" height="5" rx="1" />
      <rect x="16" y="16" width="5" height="5" rx="1" />
      <path d="M12 8v4M5.5 16v-2.5h13V16M12 12v2" />
    </>
  ),
  buildings: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V7l6-3v17M11 21V11l8-3v13" />
      <path d="M7.5 9v.01M7.5 12v.01M7.5 15v.01M14.5 13v.01M14.5 16v.01M17.5 13v.01M17.5 16v.01" />
    </>
  ),
  checklist: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8l1.5 1.5L12 7M8 14l1.5 1.5L12 13M14.5 9H17M14.5 15H17" />
    </>
  ),
  gears: (
    <>
      <circle cx="9" cy="8" r="2" />
      <circle cx="16" cy="15" r="2" />
      <path d="M9 3v2M9 11v2M4 8h2M12 8h2M16 10v2M16 18v2M11 15h2M19 15h2" />
      <path d="M4 20c1.5-2 3-3 5-3" />
    </>
  ),
  cartglobe: (
    <>
      <circle cx="12" cy="8" r="4.5" />
      <path d="M7.5 8h9M12 3.5a7.5 7.5 0 0 1 0 9M12 3.5a7.5 7.5 0 0 0 0 9" />
      <path d="M4 15h13l-1.5 4h-9L4 13H2" />
      <circle cx="8" cy="21" r="1" />
      <circle cx="14" cy="21" r="1" />
    </>
  ),
  chartdollar: (
    <>
      <path d="M3 21h18" />
      <path d="M6 21v-6M10.5 21v-9M15 21v-5M19 21V9" />
      <path d="M5 9l5-4 4 3 5-5" />
      <path d="M17 3h2v2" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="12" r="2" />
      <circle cx="5" cy="5" r="1.5" />
      <circle cx="19" cy="5" r="1.5" />
      <circle cx="5" cy="19" r="1.5" />
      <circle cx="19" cy="19" r="1.5" />
      <path d="M10.6 10.6L6 6M13.4 10.6L18 6M10.6 13.4L6 18M13.4 13.4L18 18" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 4h8v6a4 4 0 0 1-8 0V4z" />
      <path d="M8 5H5a3 3 0 0 0 3 4M16 5h3a3 3 0 0 1-3 4" />
      <path d="M12 14v3M9 20h6M10 17h4v3h-4z" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3" />
    </>
  ),
  film: (
    <>
      <circle cx="8" cy="8" r="4" />
      <circle cx="16" cy="8" r="4" />
      <path d="M4 15h16v5H4z" />
      <path d="M8 8v.01M16 8v.01" />
    </>
  ),
  palm: (
    <>
      <path d="M12 9c-1 4-1.5 8-1 12" />
      <path d="M12 9C10 6 7 5 4 6c2 1.5 4.5 2.5 8 3zM12 9c0-3.5 2-6 5-6-.5 2.5-2 5-5 6zM12 9c3-2 6-2 8 1-2.5.5-5.5 0-8-1z" />
      <path d="M6 21c4-1 8-1 12 0" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2.5 12h11L21 8H6" />
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="17" cy="20" r="1.5" />
    </>
  ),
  bolt: (
    <>
      <path d="M13 2L5 13h6l-1 9 8-11h-6l1-9z" />
    </>
  ),
  truck: (
    <>
      <rect x="2" y="6" width="13" height="10" rx="1" />
      <path d="M15 10h4l3 3v3h-7v-6z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 13H6L5 8z" />
      <path d="M9 10V6a3 3 0 0 1 6 0v4" />
    </>
  ),
  heartplus: (
    <>
      <path d="M12 20S4 14.5 4 9a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 5.5-8 11-8 11z" />
      <path d="M12 8v5M9.5 10.5h5" />
    </>
  ),
  plant: (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13c0-4-2.5-6.5-7-6.5C5.5 10.5 8 13 12 13zM12 10c0-3.5 2-6 6.5-6C18 7.5 16 10 12 10z" />
      <path d="M7 21h10" />
    </>
  ),
  plate: (
    <>
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 8.5v0M20.5 8.5v0" />
    </>
  ),
  plane: (
    <>
      <path d="M10.5 13.5L3 11l1.5-1.5L11 10l5-5a1.6 1.6 0 0 1 2.3 2.3l-5 5 .5 6.5L12.3 20l-2.5-7.5z" />
      <path d="M6 18l-2 2" />
    </>
  ),
  globesearch: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="M3 10h14M10 3a10.5 10.5 0 0 1 0 14M10 3a10.5 10.5 0 0 0 0 14" />
      <path d="M15.5 15.5L21 21" />
    </>
  ),
};

/**
 * <ProfileIcon name="target" className="h-6 w-6" /> -- renders one of the
 * deck's line icons in currentColor. Unknown names render the target glyph
 * so a content typo never crashes the page.
 */
export default function ProfileIcon({ name, className = "h-6 w-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {PATHS[name] ?? PATHS.target}
    </svg>
  );
}
