// Small, hand-rolled line-icon set shared across the homepage's card-heavy
// sections (snapshot, EMMIC framework, "Why AmanorX", contact). Kept as
// plain inline SVG -- consistent with the rest of the site (Header's
// hamburger/search glyphs) -- rather than pulling in an icon library for a
// couple dozen glyphs.

const BASE_PROPS = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": true,
};

export function GridIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function PulseIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path
        d="M3 12h4l2.5 7L13 5l2 7h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LayersIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path
        d="M12 3l8.5 4.5L12 12 3.5 7.5 12 3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12L12 16.5 20.5 12M3.5 16.5L12 21l8.5-4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CompassIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14.8 9.2l-2 5.6-5.6 2 2-5.6 5.6-2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path
        d="M12 3l7 3v5.5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5V6l7-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.2l2 2 4-4.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScaleIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path d="M12 3v17M8 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M12 6l-5 0-2.5 5.5a3.2 3.2 0 0 0 5 0L7 6zM12 6l5 0 2.5 5.5a3.2 3.2 0 0 1-5 0L17 6z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SparkIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path
        d="M12 3.5l1.8 5.4 5.4 1.8-5.4 1.8-1.8 5.4-1.8-5.4-5.4-1.8 5.4-1.8L12 3.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlobeIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M3.5 12h17M12 3.5c2.4 2.3 3.7 5.3 3.7 8.5s-1.3 6.2-3.7 8.5c-2.4-2.3-3.7-5.3-3.7-8.5S9.6 5.8 12 3.5z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function UsersIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <circle cx="9" cy="8.5" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M15.5 6a3 3 0 0 1 0 5.8M18.5 19.5c0-2.6-2-4.6-4.5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function HandshakeIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path
        d="M2.5 11.5l4-3 3 1.5M21.5 11.5l-4-3-3 1.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 10l4.2 4a1.8 1.8 0 0 0 2.6 0 1.8 1.8 0 0 0 0-2.6l-2-2M17.5 10l-4.2 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <path
        d="M5 4h3.2l1.3 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.3V17a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TargetIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function BuildingIcon(props) {
  return (
    <svg {...BASE_PROPS} {...props}>
      <rect x="4" y="3.5" width="10" height="17" stroke="currentColor" strokeWidth="2" />
      <rect x="14" y="9.5" width="6" height="11" stroke="currentColor" strokeWidth="2" />
      <path
        d="M7 7h1M10 7h1M7 10.5h1M10 10.5h1M7 14h1M10 14h1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
