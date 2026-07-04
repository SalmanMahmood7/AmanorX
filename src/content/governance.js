// Governance page copy. Placeholder/lorem-adjacent per Phase 1 scope.
//
// TODO(AmanorX): principal names below are intentionally left as "Pending
// confirmation" -- this build will not invent real names/bios for a real
// company's Chairman, Patron-in-Chief, or Group CEO/CBO. Fill in once
// confirmed by the group.
//
// Ring-fencing rule: As-Sa'adah Foundation is the group's mission/
// philanthropic arm and is shown at Tier 1 (group level) ONLY -- do not
// surface it on any sector (Tier 2) or portfolio company (Tier 3) page.

export const governanceContent = {
  en: {
    heading: "Governance",
    intro:
      "The principals, board discipline, and mission arm behind AmanorX -- governance treated as a first-class function, not an afterthought.",
    principalsHeading: "Principals",
    principals: [
      {
        id: "chairman",
        role: "Chairman",
        name: "Pending confirmation",
        bio: "Placeholder copy: sets direction at board level and holds ultimate governance accountability for the group.",
      },
      {
        id: "patron-in-chief",
        role: "Patron in Chief",
        name: "Pending confirmation",
        bio: "Placeholder copy: provides institutional patronage and long horizon stewardship for the group's mission.",
      },
      {
        id: "group-ceo-cbo",
        role: "Group CEO / CBO",
        name: "Pending confirmation",
        bio: "Placeholder copy: runs daily group operations and owns the business strategy across all sector platforms.",
      },
    ],
    foundation: {
      heading: "As-Sa'adah Foundation",
      subtitle: "The group's mission arm",
      body: "Placeholder copy: As-Sa'adah Foundation is AmanorX's philanthropic and mission-driven arm, operating at the group level to direct part of the institution's long-term impact independently of any single sector.",
      note: "Shown at group level only -- not affiliated with, or disclosed on, any individual sector or portfolio company page.",
    },
  },
};
