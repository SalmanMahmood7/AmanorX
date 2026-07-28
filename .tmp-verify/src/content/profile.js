// Company-profile copy for the deck-styled homepage sections, transcribed
// from the July 2026 "Company Profile" design deck (navy/gold). Sector
// two-line taglines are keyed by sector slug so the showcase sections can
// join them onto the registry in src/content/sectors.js.
//
// NOTE: the deck's Defense line ("Securing our nation...") is intentionally
// NOT used -- DEMMIC copy must stay conservative per the content reminder in
// src/content/sectors.js (no implied government access or mandate).

export const profileContent = {
  en: {
    hero: {
      eyebrow: "AmanorX Holding (Pvt) Ltd.",
      heading: "Building Ecosystems.\nEmpowering Generations.",
      tagline: "A group of companies united by purpose.",
      cta: { label: "Explore the Sectors", href: "/sectors" },
      ctaSecondary: { label: "The Architecture", href: "/architecture" },
    },

    beginning: {
      headingPlain: "The",
      headingAccent: "Beginning",
      kicker: "Not just another company.",
      paragraphs: [
        "AmanorX Holdings is a strategic holding company established to build, acquire, and scale businesses that solve real-world challenges across industries.",
        "Rather than operating as a single enterprise, AmanorX connects companies, technologies, people, and capital into one integrated ecosystem designed for long-term growth.",
      ],
      quoteLine1: "We don't build businesses.",
      quoteLine2: "We build ecosystems that make businesses stronger.",
      pillars: [
        {
          icon: "target",
          title: "Purpose Driven",
          text: "Creating lasting economic, social & national impact.",
        },
        {
          icon: "chart",
          title: "Future Focused",
          text: "Building sectors that define the future.",
        },
        {
          icon: "handshake",
          title: "Strategic Ecosystem",
          text: "Connecting ventures, capital & opportunities.",
        },
        {
          icon: "shield",
          title: "Built on Principles",
          text: "Integrity, responsibility & excellence in everything.",
        },
      ],
    },

    // "Operating Philosophy" quote band (mountain-sunrise deck slide).
    // Words wrapped in *asterisks* render in gold (see <PhilosophySection>).
    philosophy: {
      quoteLines: [
        "Every venture stands on its own feet.",
        "Strong businesses never carry weak ones.",
        "That is *what* keeps an ecosystem honest.”",
      ],
      label: "Operating Philosophy",
      sublabel: "Initiative-wise Self Reliance",
    },

    visionMission: {
      heading: "Vision · Mission · Purpose",
      cards: [
        {
          icon: "target",
          label: "Our Purpose",
          text: "Create sustainable businesses that generate economic, technological, and social value.",
        },
        {
          icon: "telescope",
          label: "Our Vision",
          text: "To become Pakistan's most respected holding company by developing integrated ecosystems across the industries that shape the future.",
        },
        {
          icon: "summit",
          label: "Our Mission",
          text: "Identify, invest in, and scale high-impact ventures that create lasting value for society, shareholders, and future generations.",
        },
      ],
      coreValuesLabel: "Core Values",
      coreValues: [
        { icon: "diamond", title: "Business", text: "Creates Value" },
        { icon: "bulb", title: "Innovation", text: "Solves Problems" },
        { icon: "gradcap", title: "Education", text: "Develops People" },
        { icon: "globe", title: "Trade", text: "Creates Prosperity" },
        { icon: "shieldcheck", title: "Ethics", text: "Guide Every Decision" },
      ],
    },

    leadership: {
      heading: "Leadership",
      subheading: "The hands on the wheel.",
      people: [
        {
          name: "Muhammad Uzair Karghatra",
          role: "Founder & Group Chairman",
          bio: "Founder and apex authority of AmanorX Holdings. Sets the group's strategic direction, governance standards, and capital-allocation discipline across all sectors and entities.",
          image: "/images/leadership/uzair.jpg",
        },
        {
          name: "Syed Wajahat Ali",
          role: "Group CEO",
          bio: "Carries day-to-day executive authority across the AmanorX group — responsible for consolidated strategy execution, organisational architecture, and the group's operating discipline.",
          image: "/images/leadership/wajahat.jpg",
        },
      ],
    },

    architectureGlance: {
      headingPlain: "The Architecture",
      headingAccent: "at a Glance",
      subheading: "Three tiers. One discipline.",
      tiers: [
        {
          icon: "bank",
          tier: "Tier 1",
          name: "Group Level",
          text: "The holding company, the principals, group standards, capital-allocation discipline, and brand.",
        },
        {
          icon: "orgchart",
          tier: "Tier 2",
          name: "Sector Architecture",
          text: "The sixteen-sector EMMIC map — the target architecture for 2030. Direction.",
        },
        {
          icon: "buildings",
          tier: "Tier 3",
          name: "Live Companies",
          text: "The real businesses operating today — held directly, through Akhee, or as defined exceptions.",
        },
      ],
      cta: { label: "Explore the Full Architecture", href: "/architecture" },
    },

    emmicFramework: {
      headingPlain: "The EMMIC",
      headingAccent: "Growth Framework",
      steps: [
        {
          icon: "checklist",
          number: "01",
          name: "Evaluation",
          text: "We identify and evaluate high-potential opportunities.",
        },
        {
          icon: "gears",
          number: "02",
          name: "Management",
          text: "We build, manage, and scale businesses with excellence.",
        },
        {
          icon: "cartglobe",
          number: "03",
          name: "Marketplace",
          text: "We create access, distribution, and growth opportunities.",
        },
        {
          icon: "chartdollar",
          number: "04",
          name: "Investment",
          text: "We invest capital and resources for long-term impact.",
        },
      ],
      quoteLine1: "Founders keep building,",
      quoteLine2: "AmanorX builds the ecosystem around them.",
    },

    growthVision: {
      headingAccent: "2030",
      headingPlain: "Growth Vision",
      intro:
        "Our roadmap to 2030 is built on strategic expansion, disciplined capital allocation, and long-term value creation across key industries that shape the future.",
      targetLabel: "Our 2030 Target",
      roadmapLabel: "Our Roadmap to 2030",
      roadmap: [
        {
          icon: "buildings",
          period: "2024",
          name: "Foundation",
          text: "Building core capabilities and launching key businesses.",
        },
        {
          icon: "chart",
          period: "2025–2026",
          name: "Expansion",
          text: "Scaling operations and expanding into high-growth sectors.",
        },
        {
          icon: "network",
          period: "2027–2028",
          name: "Integration",
          text: "Strengthening our ecosystem through partnerships, innovation, and technology.",
        },
        {
          icon: "trophy",
          period: "2029–2030",
          name: "Leadership",
          text: "Becoming Pakistan's most respected holding company with global relevance.",
        },
      ],
    },

    liveSectors: {
      headingPlain: "Live",
      headingAccent: "Sectors",
      subheadingTemplate: "core sectors. Driving impact today.",
    },

    pipelineSectors: {
      headingAccent: "Pipeline",
      headingPlain: "Sectors",
      subheading: "Building today. Shaping tomorrow.",
      statusLabel: "Development Status",
    },

    futureSectors: {
      headingAccent: "Future",
      headingPlain: "Sectors",
      subheading: "Exploring new horizons. Creating tomorrow.",
    },

    portfolio: {
      eyebrow: "Introducing",
      heading: "Our Portfolio",
      subheading: "Companies creating impact today",
      intro: "A portfolio of operating businesses serving industries across Pakistan and beyond.",
      band: "One Ecosystem. Endless Possibilities.",
      cta: { label: "View the Full Portfolio", href: "/portfolio" },
      // Extra homepage-wall tiles that aren't Tier-3 registry companies
      // (appended to the wall in src/app/page.js, homepage only).
      wallExtras: [
        {
          slug: "akhee",
          name: "Akhee (Pvt) Ltd",
          category: "Product Suite Sub-Holding",
        },
        { slug: "as-sa-aadah", name: "As Sa Aadah" },
      ],
    },
  },
};

// Deck two-line taglines joined onto the sector registry by slug. Defense
// deliberately conservative (see file-level note).
export const sectorDeckTaglines = {
  remmic: ["Building spaces.", "Creating communities."],
  temmic: ["Innovating today.", "Transforming tomorrow."],
  memmic: ["Telling stories.", "Creating impact."],
  acemmic: ["Empowering minds.", "Shaping the future."],
  themmic: ["Experiences that inspire.", "Destinations that last."],
  cemmic: ["Enabling trade.", "Driving prosperity."],
  eemmic: ["Powering progress.", "Sustainably."],
  femmic: ["Building trust.", "Creating value."],
  lemmic: ["Moving potential.", "Delivering growth."],
  lsemmic: ["Enhancing lives.", "Every day."],
  hemmic: ["Caring for today.", "Healthier tomorrow."],
  agemmic: ["Cultivating growth.", "Sustaining life."],
  foemmic: ["Nourishing communities.", "Building futures."],
  demmic: ["Advanced capability.", "Built responsibly."],
  avemmic: ["Connecting places.", "Expanding horizons."],
  xemmic: ["Discovering opportunities.", "Beyond boundaries."],
};

// Deck development-status figures for the four pipeline sectors.
export const pipelineProgress = {
  eemmic: 70,
  femmic: 60,
  lemmic: 65,
  lsemmic: 55,
};

// Sector icon keys by slug (icons live in ProfileIcons.jsx).
export const sectorIcons = {
  remmic: "buildings",
  temmic: "chip",
  memmic: "film",
  acemmic: "gradcap",
  themmic: "palm",
  cemmic: "cart",
  eemmic: "bolt",
  femmic: "bank",
  lemmic: "truck",
  lsemmic: "bag",
  hemmic: "heartplus",
  agemmic: "plant",
  foemmic: "plate",
  demmic: "shield",
  avemmic: "plane",
  xemmic: "globesearch",
};
