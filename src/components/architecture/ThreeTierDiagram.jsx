"use client";

import { useState } from "react";
import { tiers } from "@/content/tiers";
import { pick } from "@/lib/i18n";

const tierList = pick(tiers);

/**
 * Interactive three-tier diagram: hover, focus, or tap a tier to reveal what
 * sits inside it. Built as an ARIA tabs widget so keyboard and screen-reader
 * users get the same disclosure behaviour as mouse/touch users.
 *
 * `headingLevel` lets the parent page control heading hierarchy -- pass the
 * level that should follow the page's own section heading.
 */
export default function ThreeTierDiagram({ headingLevel = 3 }) {
  const [activeId, setActiveId] = useState(tierList[0].id);
  const HeadingTag = `h${headingLevel}`;

  function onKeyDown(event) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const index = tierList.findIndex((tier) => tier.id === activeId);
    const delta = event.key === "ArrowRight" ? 1 : -1;
    const next = tierList[(index + delta + tierList.length) % tierList.length];
    setActiveId(next.id);
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="The three-tier structure"
        onKeyDown={onKeyDown}
        className="grid gap-3 sm:grid-cols-3"
      >
        {tierList.map((tier) => {
          const selected = tier.id === activeId;
          return (
            <button
              key={tier.id}
              type="button"
              role="tab"
              id={`tier-tab-${tier.id}`}
              aria-selected={selected}
              aria-controls={`tier-panel-${tier.id}`}
              tabIndex={selected ? 0 : -1}
              onMouseEnter={() => setActiveId(tier.id)}
              onFocus={() => setActiveId(tier.id)}
              onClick={() => setActiveId(tier.id)}
              className={`cursor-pointer border-2 p-4 text-left transition-colors duration-200 ${
                selected
                  ? "border-green-500 bg-navy-900 text-white"
                  : "border-navy-900/10 bg-white text-navy-900 hover:border-green-500/50"
              }`}
            >
              <span
                className={`block text-xs tracking-wide uppercase ${
                  selected ? "text-green-400" : "text-silver-ink"
                }`}
              >
                Tier {tier.tier}
              </span>
              <span className="mt-1 block text-lg font-semibold">
                {tier.name}
              </span>
              <span
                className={`mt-1 block text-sm ${
                  selected ? "text-white/70" : "text-silver-ink"
                }`}
              >
                {tier.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {tierList.map((tier) => (
        <div
          key={tier.id}
          id={`tier-panel-${tier.id}`}
          role="tabpanel"
          aria-labelledby={`tier-tab-${tier.id}`}
          hidden={tier.id !== activeId}
          className="mt-6 border border-t-2 border-navy-900/10 border-t-green-500 bg-white p-6 sm:p-7"
        >
          <HeadingTag className="text-lg font-semibold text-navy-900">
            {tier.name} &mdash; {tier.subtitle}
          </HeadingTag>
          <p className="mt-2 text-sm text-navy-700">{tier.description}</p>
          <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-silver-ink">
            {tier.examples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
