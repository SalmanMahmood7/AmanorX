// Site-wide configuration: name, navigation, footer, and contact channels.
//
// TODO(AmanorX): no vector logo file exists yet. `wordmark` below drives the
// text-based placeholder in <Wordmark> -- swap that component's internals
// for a real SVG import later, no call-site changes needed.

export const site = {
  en: {
    name: "AmanorX Holdings (Pvt) Ltd",
    shortName: "AmanorX",
    wordmark: "AmanorX",
    tagline: "A multi-sector holding group, built for the long horizon.",
    description:
      "AmanorX Holdings is a Pakistan-based multi-sector holding company operating across the EMMIC architecture -- Evaluation, Management, Marketplace, Investment, and Company -- across 16 sectors.",
  },
};

export const primaryNav = {
  en: [
    // `children` renders as a hover/focus dropdown in <Header> (desktop) and
    // is flattened into the plain link list on mobile.
    {
      label: "Who We Are",
      href: "/who-we-are",
      children: [
        { label: "Who We Are", href: "/who-we-are" },
        { label: "Our Portfolio", href: "/portfolio" },
      ],
    },
    { label: "The Architecture", href: "/architecture" },
    { label: "Sectors", href: "/sectors" },
    { label: "Governance", href: "/governance" },
    { label: "Valuation & Investors", href: "/valuation-and-investors" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

// Multi-path contact reasons for the footer contact form. Values are sent to
// the configured form endpoint as-is; keep this list a controlled set so the
// receiving system can route on it reliably.
export const contactReasons = {
  en: [
    { value: "general", label: "General Inquiry" },
    { value: "investor", label: "Investor Relations" },
    { value: "media", label: "Media & Press" },
    { value: "partnership", label: "Partnership" },
    { value: "careers", label: "Careers" },
  ],
};

export const footerContent = {
  en: {
    copyrightHolder: "AmanorX Holdings (Pvt) Ltd",
    quickLinksHeading: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Who We Are", href: "/who-we-are" },
      { label: "The Architecture", href: "/architecture" },
      { label: "Sectors", href: "/sectors" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Governance", href: "/governance" },
      { label: "Valuation & Investors", href: "/valuation-and-investors" },
      { label: "Insights", href: "/insights" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    // TODO(AmanorX): office address and phone are intentionally left as
    // "Pending confirmation" -- same reasoning as the governance principal
    // names (src/content/governance.js): this build will not invent a real
    // company's street address or phone number. Email uses the `.example`
    // reserved TLD placeholder convention already used across
    // src/content/sectors.js and src/content/careers.js.
    contactInfo: {
      heading: "Contact Information",
      address: "Islamabad, Pakistan (registered office address pending confirmation)",
      email: "info@amanorx.example",
      phone: "Pending confirmation",
    },
    socialHeading: "Follow Us",
    socialLinks: [
      { label: "LinkedIn", href: "#", disabled: true },
      { label: "X (Twitter)", href: "#", disabled: true },
      { label: "Instagram", href: "#", disabled: true },
    ],
    legalLinks: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
};
