// Governance page copy. Sourced against the Web Developer Brief v1.2:
// principal roles, the Command & Governance function, and the standing
// governance rules below all trace to that document (§5, §7, §15).
//
// TODO(AmanorX): the Chairman is identified in the brief only as "Uzair"
// (§11, §15) -- full name, title styling, and bio still pending. The
// Patron in Chief and Group CEO/CBO names remain unconfirmed; this build
// will not invent real names/bios for a real company's principals.
//
// Ring-fencing rule: As-Sa'adah Foundation is the group's mission/
// philanthropic arm and is shown at Tier 1 (group level) ONLY -- do not
// surface it on any sector (Tier 2) or portfolio company (Tier 3) page.

export const governanceContent = {
  en: {
    heading: "Governance",
    intro:
      "The principals, board discipline, and mission arm behind AmanorX. Governance treated as a core function, not an afterthought.",
    principalsHeading: "Principals",
    principals: [
      {
        id: "chairman",
        role: "Chairman",
        name: "Uzair",
        bio: "Sets direction at board level, holds ultimate governance accountability for the group, and ratifies the group's brand and public materials.",
      },
      {
        id: "patron-in-chief",
        role: "Patron in Chief",
        name: "Pending confirmation",
        bio: "Provides institutional patronage and long horizon stewardship for the group's mission.",
      },
      {
        id: "group-ceo-cbo",
        role: "Group CEO / CBO",
        name: "Pending confirmation",
        bio: "Runs daily group operations and owns the business strategy across all sector platforms.",
      },
    ],
    command: {
      eyebrow: "Group Function",
      heading: "Command & Governance",
      body: "The group's own governance office. Command & Governance owns factual accuracy across everything AmanorX publishes: every entity, status, and figure must trace to the group's maintained fact base before it appears anywhere, and status changes are recorded there first.",
    },
    disciplines: {
      heading: "Standing Governance Rules",
      intro:
        "These are standing rules the group holds itself to in everything it publishes, on this site and beyond.",
      items: [
        {
          title: "Valuation discipline",
          body: "No equity figure or group valuation is published without the independent valuation caveat. Detailed figures are shared under request, not posted.",
        },
        {
          title: "Ring fencing",
          body: "As-Sa'adah Foundation, the group's mission arm, appears at group level only. It is never attached to any sector or operating company.",
        },
        {
          title: "Stewardship framing",
          body: "Board members, advisors, and partners are described in governance and stewardship terms only, never framed around access or influence.",
        },
        {
          title: "Controlled status vocabulary",
          body: "Live, Pipeline, and Planned are precise operational statuses drawn from a closed vocabulary, not marketing adjectives.",
        },
        {
          title: "Direction, not present reality",
          body: "Every claim about the sixteen sector architecture is labelled as direction the group is building toward, never as something already true today.",
        },
      ],
    },
    foundation: {
      heading: "As-Sa'adah Foundation",
      subtitle: "The group's mission arm",
      body: "As-Sa'adah Foundation is AmanorX's philanthropic and mission led arm, operating at the group level to direct part of the institution's long term impact independently of any single sector.",
      note: "Shown at group level only. Not affiliated with, or disclosed on, any individual sector or portfolio company page.",
    },
  },
};
