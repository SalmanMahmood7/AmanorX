// Insights page copy. Optional at launch -- structured now so press
// mentions, milestone updates, and sector go-lives can be dropped into
// `items` per category later without a page-structure change.

export const insightsContent = {
  en: {
    heading: "Insights",
    intro:
      "Credibility over time. A running record of press mentions, milestones, and sector go-lives as they happen -- not a static claim about them.",
    categories: [
      {
        id: "press",
        label: "Press mentions",
        emptyState: "No press mentions yet. Check back as sector platforms launch publicly.",
        items: [],
      },
      {
        id: "milestones",
        label: "Milestone updates",
        emptyState: "No milestones published yet.",
        items: [],
      },
      {
        id: "sector-go-lives",
        label: "Sector go-lives",
        emptyState: "No new sector go-lives to report yet -- see the Sectors page for what's live today.",
        items: [],
      },
    ],
  },
};
