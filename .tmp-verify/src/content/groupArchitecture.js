// Content for the Group Architecture diagram on /architecture. Sourced from
// AmanorX's real group architecture chart -- the sector and company data it
// visualizes lives in src/content/sectors.js and
// src/content/portfolioCompanies.js; this file only holds the diagram's own
// framing copy (the governance band, the foundation callout, and the two
// section intros).

export const groupArchitectureContent = {
  en: {
    heading: "Group Architecture",
    intro:
      "AmanorX Holdings sits at the top of a three tier structure: the group itself, sixteen EMMIC sector platforms beneath it, and the operating companies inside them, some held directly and some through a sub holding.",
    tier1Tagline: "Strategy, capital, governance, guidelines.",
    governanceBand: {
      heading: "Governance & Stewardship",
      tagline: "Cross cutting across every tier.",
      roles: [
        "Chairman",
        "Board",
        "Strategic Partners",
        "Advisory Council",
        "Investors",
        "Sector CEOs",
      ],
    },
    foundationNote: "Separate from the commercial tiers, shown at group level only.",
    tier2: {
      heading: "Tier 2: Sector Architecture",
      intro: "Sixteen EMMIC sectors, each at a different stage of build out.",
    },
    tier3: {
      heading: "Tier 3: Companies Already Created",
      intro: "Operating companies live today, held directly by AmanorX, or via the Akhee sub holding.",
      directHeading: "Held Directly",
      subHoldingIntro:
        "Akhee (Pvt) Ltd is the custodian of the group's product suite, a majority owned chain at 51 percent ownership or more.",
    },
    // The bidding model explainer the developer brief (§5) asks for on this
    // page. This is a high level paraphrase built from the EMMIC stages --
    // swap in the Group Profile's own verbatim bidding model copy once
    // supplied; do not add specifics (percentages, terms) before then.
    joining: {
      heading: "How Ventures Join the Federation",
      intro:
        "New ventures do not join AmanorX on a pitch alone. Every candidate passes through the owning sector's EMMIC cycle, so entry into the federation is a repeatable discipline rather than a one off deal.",
      steps: [
        {
          title: "Identify",
          body: "A candidate venture or asset is identified within one of the sixteen sectors, or approaches the sector platform directly.",
        },
        {
          title: "Evaluate",
          body: "The sector platform screens the candidate against its evaluation criteria, market evidence, and the group's risk framework.",
        },
        {
          title: "Bid & Structure",
          body: "Qualified candidates enter the sector's marketplace, where participation and capital are structured through the platform's bidding model.",
        },
        {
          title: "Operate",
          body: "The venture joins the federation as an operating company, with group governance and reporting applied from day one.",
        },
      ],
    },
  },
};
