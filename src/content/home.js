// Homepage copy. Placeholder/lorem-adjacent per Phase 1 scope -- tone should
// read as institutional (restraint, evidence density), not startup-pitch.
//
// Most sections deliberately reuse the same content already authored for
// each page's own file (whoWeAre.js, governance.js, valuationInvestors.js,
// contact.js, careers.js, emmic.js, tiers.js) rather than inventing new
// facts here -- the homepage summarises, it doesn't originate. The one
// section that stays intentionally empty is News & Insights: the project
// ships Insights with no items at launch (see src/content/insights.js and
// README's "Known placeholders"), so the homepage teaser respects that
// rather than inventing headlines.

export const homeContent = {
  en: {
    // Hero heading/tagline/CTAs are AmanorX's own content -- the
    // character-stagger animation, glass buttons, and background-image
    // treatment were recreated from a supplied hero-section spec, but the
    // text and destinations are the group's real copy and real pages.
    hero: {
      heading: "Institutions built\nto compound.",
      tagline:
        "A holding group across multiple sectors, evaluating and building enduring companies for the long horizon.",
      cta: { label: "Explore the Sectors", href: "/sectors" },
      ctaSecondary: { label: "The Architecture", href: "/architecture" },
    },

    about: {
      eyebrow: "About AmanorX",
      heading: "Institutions built for the long horizon",
      cta: { label: "Learn More", href: "/who-we-are" },
    },

    architecture: {
      heading: "The Three Tier Business Architecture",
      intro:
        "AmanorX is organised as a group holding company, a set of EMMIC sector companies, and the operating companies inside them. Each layer has a distinct role, and none of it depends on a single bet paying off.",
      cta: { label: "Explore the Full Architecture", href: "/architecture" },
    },

    emmicFramework: {
      heading: "How the EMMIC Model Works",
      intro:
        "Every sector platform runs the same discipline: Evaluation, Management, Marketplace, Investment, and Company. Growth is repeatable rather than opportunistic.",
    },

    todayTomorrow: {
      heading: "Today and Tomorrow",
      description:
        "What AmanorX is running now, kept visually separate from where the group intends to go, so neither gets mistaken for the other.",
      todayHeading: "Current Operations",
      tomorrowHeading: "Future Direction",
      tomorrowIntro:
        "Toward the 2030s, AmanorX intends to operate across all 16 EMMIC sectors. The sectors below are scoped on the group's roadmap but not yet live.",
      ctaSectors: { label: "Explore All Sectors", href: "/sectors" },
      ctaPortfolio: { label: "Our Initiatives & Portfolio", href: "/portfolio" },
    },

    // Condensed to 3 cards (2 topics folded per card) to fit a supplied
    // 3-card benefits layout, per explicit instruction to shorten content
    // to fit the design -- see WhyAmanorXBenefits.
    whyAmanorX: {
      heading: "Why AmanorX",
      cards: [
        {
          line1: "Institutional Governance,",
          line2: "Long Term Strategy",
          description:
            "Board oversight and risk management as a core function, built for a horizon of decades, not a single funding cycle.",
        },
        {
          line1: "Multi Sector Ecosystem,",
          line2: "Innovation & Technology",
        },
        {
          line1: "Sustainable Growth,",
          line2: "National Development",
          description:
            "Sector depth over breadth, focused on the sectors structurally important to Pakistan's long term development.",
        },
      ],
    },

    newsInsights: {
      heading: "News & Insights",
      description:
        "A running record of press mentions, milestones, and sector launches as they happen, not a static claim about them.",
      cta: { label: "View All News", href: "/insights" },
    },
  },
};
