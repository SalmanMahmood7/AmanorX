// Three-tier structure content, used by the homepage snapshot and the
// interactive diagram on The Architecture page.
//
// TODO(AmanorX): tier naming/scope below is this build's best-judgment
// interpretation of "the three-tier structure" (Group -> Sector Platform ->
// Operating Company). Confirm wording against the group's own framing before
// this ships publicly.

export const tiers = {
  en: [
    {
      id: "tier-1",
      tier: 1,
      name: "AmanorX Holdings",
      subtitle: "Parent Holding Company",
      description:
        "The institutional parent. Sets capital allocation, governance, brand standards, and long horizon strategy across every sector the group operates in.",
      examples: [
        "Parent Holding Company",
        "Strategic Leadership",
        "Corporate Governance",
      ],
    },
    {
      id: "tier-2",
      tier: 2,
      name: "EMMIC Sector Companies",
      subtitle: "The Sector Platforms",
      description:
        "Each live sector (REMMIC, TEMMIC, and others) runs its own EMMIC cycle of Evaluation, Management, Marketplace, Investment, and Company, a complete ecosystem for that vertical.",
      examples: [
        "Sixteen Business Sectors",
        "Sector Management",
        "Growth Strategy",
      ],
    },
    {
      id: "tier-3",
      tier: 3,
      name: "Operating Companies",
      subtitle: "The Ventures",
      description:
        "The individual businesses, assets, and portfolio companies operating inside each sector platform, where evaluation and investment become real operations.",
      examples: [
        "Active Businesses",
        "Products & Services",
        "Market Execution",
      ],
    },
  ],
};
