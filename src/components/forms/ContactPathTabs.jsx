"use client";

import { useEffect, useId, useState } from "react";
import ContactForm from "./ContactForm";

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
              className={`cursor-pointer rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                selected
                  ? "bg-green-500 text-white"
                  : "border border-navy-900/20 text-navy-900 hover:border-green-500 hover:text-green-600"
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
          <div className="grid gap-8 overflow-hidden rounded-lg border-l-4 border-green-500 bg-navy-900 p-8 text-white sm:grid-cols-2 sm:p-10">
            <div>
              <h2 className="text-h2 font-semibold">{path.heading}</h2>
              <p className="mt-3 max-w-sm text-white/80">{path.body}</p>
            </div>
            <ContactForm presetReason={path.reason} lockReason />
          </div>
        </section>
      ))}
    </div>
  );
}
