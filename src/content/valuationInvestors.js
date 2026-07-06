// Valuation & Investors page copy. Placeholder/lorem-adjacent per Phase 1
// scope.
//
// TODO(AmanorX): the two anchored figures below are deliberately left
// unpublished (no invented dollar amounts) pending: (1) confirmation that
// group-level valuation figures are ready for any disclosure at all, and
// (2) the actual independent anchoring methodology per sector figure. The
// exact Brand Guideline §10 disclaimer wording also needs to be dropped in
// verbatim once that guideline is available -- the text below is this
// build's best-judgment placeholder, not a quote from the real guideline.

export const valuationInvestorsContent = {
  en: {
    heading: "Valuation & Investors",
    intro:
      "Diligence ready transparency, gated where appropriate. This page explains how AmanorX structures valuation across the group. The figures themselves are shared under request, not published here.",
    layers: [
      {
        id: "layer-1",
        label: "Layer 1",
        name: "Group",
        body: "The consolidated view across AmanorX Holdings: how the group's sector platforms and operating companies roll up into a single institutional valuation.",
      },
      {
        id: "layer-2",
        label: "Layer 2",
        name: "Sector Platforms",
        body: "Each live sector platform is assessed on its own EMMIC cycle performance before it contributes to the group figure.",
      },
      {
        id: "layer-3",
        label: "Layer 3",
        name: "Operating Companies",
        body: "The underlying Tier 3 companies, the operating businesses whose performance ultimately anchors every figure above them.",
      },
    ],
    figures: {
      heading: "The two anchored figures",
      description:
        "AmanorX maintains two independently anchored valuation figures. Neither is published on this page; both are available on request, under NDA, to qualified investors.",
      items: [
        {
          id: "figure-group",
          label: "Group level figure",
          anchor:
            "Anchored at the Layer 1 (Group) consolidation, independently reviewed.",
        },
        {
          id: "figure-sector",
          label: "Sector level figure",
          anchor:
            "Anchored at the Layer 2 (Sector Platform) level for the group's live sectors, independently reviewed.",
        },
      ],
    },
    gate: {
      heading: "Request access",
      body: "Detailed valuation materials, methodology, and supporting diligence are available on request, under NDA, to qualified investors.",
      cta: { label: "Request investor access", href: "/contact#investor" },
    },
    disclaimer:
      "Per Brand Guideline §10: all valuation and equity figures referenced by AmanorX are internal, unaudited estimates pending independent valuation. They are not a guarantee of value, an offer, or investment advice, and are shared only under the access terms described above.",
  },
};
