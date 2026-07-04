// Contact page copy. Three distinct audience paths, each routed to its own
// contactReasons value (src/content/site.js) via ContactForm's
// presetReason/lockReason props -- deliberately not one generic form for
// investor, partnership, and general inquiries.

export const contactContent = {
  en: {
    heading: "Contact",
    intro:
      "Route your inquiry to the right team. Investor, partnership, and general inquiries go to different places -- pick the one that fits.",
    paths: [
      {
        id: "investor",
        reason: "investor",
        heading: "Investor Inquiries",
        body: "Placeholder copy: for diligence requests, valuation-access requests, or anything investor relations.",
      },
      {
        id: "partnership",
        reason: "partnership",
        heading: "Partnership Inquiries",
        body: "Placeholder copy: for sector partnerships, ventures, or commercial collaboration with AmanorX or a sector platform.",
      },
      {
        id: "general",
        reason: "general",
        heading: "General Contact",
        body: "Placeholder copy: for press, careers, or anything that doesn't fit the categories above.",
      },
    ],
  },
};
