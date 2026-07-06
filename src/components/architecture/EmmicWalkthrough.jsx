"use client";

import { useState } from "react";
import { emmicSteps } from "@/content/emmic";
import { pick } from "@/lib/i18n";

const steps = pick(emmicSteps);

/**
 * Five-part click-through EMMIC sequence (Evaluation -> Management ->
 * Marketplace -> Investment -> Company). ARIA tabs pattern -- the letter
 * tabs (click or arrow keys) are the only navigation; the old Prev/Next
 * footer row was removed per explicit instruction.
 *
 * `headingLevel` lets the parent page control heading hierarchy.
 */
export default function EmmicWalkthrough({ headingLevel = 3 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const HeadingTag = `h${headingLevel}`;

  function goTo(index) {
    setActiveIndex((index + steps.length) % steps.length);
  }

  function onKeyDown(event) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    goTo(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="The EMMIC sequence"
        onKeyDown={onKeyDown}
        className="flex flex-wrap justify-center gap-2"
      >
        {steps.map((step, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={step.id}
              type="button"
              role="tab"
              id={`emmic-tab-${step.id}`}
              aria-selected={selected}
              aria-controls={`emmic-panel-${step.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => goTo(index)}
              className={`flex min-w-16 cursor-pointer flex-col items-center border-2 px-3 py-2 transition-colors duration-200 ${
                selected
                  ? "border-green-500 bg-navy-900 text-white"
                  : "border-navy-900/10 bg-white text-navy-900 hover:border-green-500/50"
              }`}
            >
              <span className="text-xl font-bold">{step.letter}</span>
              <span
                className={`text-xs ${
                  selected ? "text-white/70" : "text-silver-ink"
                }`}
              >
                {step.name}
              </span>
            </button>
          );
        })}
      </div>

      {steps.map((step, index) => (
        <div
          key={step.id}
          id={`emmic-panel-${step.id}`}
          role="tabpanel"
          aria-labelledby={`emmic-tab-${step.id}`}
          hidden={index !== activeIndex}
          className="mx-auto mt-6 max-w-2xl rounded-lg border border-t-2 border-navy-900/10 border-t-green-500 bg-white p-6 text-center sm:p-7"
        >
          <HeadingTag className="text-lg font-semibold text-navy-900">
            {step.letter} &mdash; {step.name}
          </HeadingTag>
          <p className="mt-1 text-sm font-medium text-green-600">
            {step.summary}
          </p>
          <p className="mt-3 text-sm text-navy-700">{step.description}</p>
        </div>
      ))}

    </div>
  );
}
