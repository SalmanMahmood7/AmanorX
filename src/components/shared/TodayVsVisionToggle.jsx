"use client";

import { useEffect, useId, useState } from "react";

/**
 * Shared structural separator for any page that mixes "today" (live/real)
 * content with 2030s-vision content. This is the only sanctioned way to mix
 * the two on a page -- never interleave them without this toggle.
 *
 * `autoAdvance` (off by default, so existing call sites are unaffected) turns
 * this into a slideshow: it alternates tabs on a timer until the visitor
 * interacts with the tablist (click or arrow key), at which point it stops
 * for good -- never fights a visitor who's deliberately looking at one side.
 * Skipped entirely under prefers-reduced-motion.
 */
export default function TodayVsVisionToggle({
  todayLabel = "Today",
  visionLabel = "Toward the 2030s",
  todayContent,
  visionContent,
  className = "",
  autoAdvance = false,
  autoAdvanceInterval = 6000,
}) {
  const [active, setActive] = useState("today");
  const [autoAdvancing, setAutoAdvancing] = useState(autoAdvance);
  const baseId = useId();
  const todayTabId = `${baseId}-today-tab`;
  const visionTabId = `${baseId}-vision-tab`;
  const todayPanelId = `${baseId}-today-panel`;
  const visionPanelId = `${baseId}-vision-panel`;

  useEffect(() => {
    if (!autoAdvancing) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = setInterval(() => {
      setActive((current) => (current === "today" ? "vision" : "today"));
    }, autoAdvanceInterval);
    return () => clearInterval(id);
  }, [autoAdvancing, autoAdvanceInterval]);

  function selectTab(next) {
    setAutoAdvancing(false);
    setActive(next);
  }

  function onKeyDown(event) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    setAutoAdvancing(false);
    setActive((current) => (current === "today" ? "vision" : "today"));
  }

  return (
    <div className={className}>
      <div
        role="tablist"
        aria-label="Today versus vision"
        className="inline-flex rounded-full bg-navy-100 p-1 shadow-[inset_0_1px_2px_rgba(13,26,46,0.06)]"
        onKeyDown={onKeyDown}
      >
        <button
          type="button"
          role="tab"
          id={todayTabId}
          aria-selected={active === "today"}
          aria-controls={todayPanelId}
          tabIndex={active === "today" ? 0 : -1}
          onClick={() => selectTab("today")}
          className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
            active === "today"
              ? "bg-navy-900 text-white shadow-card"
              : "text-navy-700 hover:text-navy-900"
          }`}
        >
          {todayLabel}
        </button>
        <button
          type="button"
          role="tab"
          id={visionTabId}
          aria-selected={active === "vision"}
          aria-controls={visionPanelId}
          tabIndex={active === "vision" ? 0 : -1}
          onClick={() => selectTab("vision")}
          className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
            active === "vision"
              ? "bg-green-600 text-white shadow-card"
              : "text-navy-700 hover:text-navy-900"
          }`}
        >
          {visionLabel}
        </button>
      </div>

      <div
        role="tabpanel"
        id={todayPanelId}
        aria-labelledby={todayTabId}
        hidden={active !== "today"}
        className="mt-6"
      >
        {todayContent}
      </div>
      <div
        role="tabpanel"
        id={visionPanelId}
        aria-labelledby={visionTabId}
        hidden={active !== "vision"}
        className="mt-6"
      >
        {visionContent}
      </div>
    </div>
  );
}
