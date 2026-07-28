"use client";

import { useEffect, useId, useState } from "react";
import ContactForm from "./ContactForm";

// Line icons for the three contact paths, drawn in the same stroke style
// as the deck's ProfileIcons and shown in gold-ringed medallions.
const PATH_ICONS = {
  investor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-7 w-7">
      <path d="M3 21h18" />
      <path d="M6 21v-6M10.5 21v-9M15 21v-5M19 21V9" />
      <path d="M5 9l5-4 4 3 5-5" />
      <path d="M17 3h2v2" />
    </svg>
  ),
  partnership: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-7 w-7">
      <circle cx="7" cy="7" r="3.5" />
      <circle cx="17" cy="17" r="3.5" />
      <path d="M10 10l4 4" />
      <path d="M17 3.5a3.5 3.5 0 0 1 0 7" />
      <path d="M7 13.5a3.5 3.5 0 0 0 0 7" />
    </svg>
  ),
  general: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-7 w-7">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
};

/**
 * One button per contact path (Investor / Partnership / General); only the
 * selected path's form is shown. ARIA tabs pattern, arrow-key switchable.
 * Panels are hidden rather than unmounted so half-typed input survives a
 * tab switch. Deep links like /contact#investor (used by the Valuation
 * page's gate CTA) still work: the hash selects the matching tab on load
 * and on hash change.
 */
export default function ContactPathTabs({ paths }) {
  const [activeId, setActiveId] = useState(paths[0].id);
  const baseId = useId();

  useEffect(() => {
    function syncFromHash() {
      const hash = window.location.hash.replace("#", "");
      if (paths.some((path) => path.id === hash)) {
        setActiveId(hash);
      }
    }
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [paths]);

  function onKeyDown(event) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const index = paths.findIndex((path) => path.id === activeId);
    const delta = event.key === "ArrowRight" ? 1 : -1;
    setActiveId(paths[(index + delta + paths.length) % paths.length].id);
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Contact paths"
        onKeyDown={onKeyDown}
        className="flex flex-wrap justify-center gap-3"
      >
        {paths.map((path) => {
          const selected = path.id === activeId;
          return (
            <button
              key={path.id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${path.id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${path.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(path.id)}
              className={`cursor-pointer rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                selected
                  ? "bg-gold-500 text-navy-950"
                  : "border border-gold-500/40 text-navy-900 hover:border-gold-500 hover:text-gold-600"
              }`}
            >
              {path.heading}
            </button>
          );
        })}
      </div>

      {paths.map((path) => (
        <section
          key={path.id}
          id={path.id}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${path.id}`}
          hidden={path.id !== activeId}
          className="mt-10 scroll-mt-28"
        >
          <div className="grid gap-8 overflow-hidden rounded-lg border border-gold-500/40 bg-navy-950 p-8 text-white shadow-card sm:grid-cols-2 sm:p-10">
            <div>
              {/* Deck medallion + serif heading + diamond rule, like the
                  homepage's dark section cards. */}
              <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-900 text-gold-400">
                {PATH_ICONS[path.id] ?? PATH_ICONS.general}
              </span>
              <h2 className="font-display mt-5 text-2xl font-semibold">{path.heading}</h2>
              <span aria-hidden="true" className="mt-4 flex max-w-[8rem] items-center gap-2">
                <span className="h-px w-10 bg-gold-500" />
                <span className="h-1 w-1 rotate-45 bg-gold-500" />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500" />
              </span>
              <p className="mt-4 max-w-sm text-white/80">{path.body}</p>
            </div>
            <ContactForm presetReason={path.reason} lockReason />
          </div>
        </section>
      ))}
    </div>
  );
}
