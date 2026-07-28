"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Development-status row for the pipeline sector cards: gold progress bar
 * plus percentage. The first time it scrolls into view (one-shot
 * IntersectionObserver, same pattern as <Reveal>), the number counts up
 * from 0 to `pct` while the bar grows to match, both on the same ~1.4s
 * ease-out curve. Reduced-motion users (and the pre-JS render) get the
 * final value semantics via aria-valuenow; the count-up collapses to an
 * instant jump.
 */
const DURATION_MS = 1400;

export default function ProgressCounter({ pct, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(pct);
      return;
    }

    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * pct));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, pct]);

  return (
    <div ref={ref} className="mt-2 flex items-center gap-3">
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
        className="h-2 flex-1 overflow-hidden rounded-full border border-gold-500/50 bg-navy-900"
      >
        <span
          className="block h-full rounded-full bg-gradient-to-r from-gold-600 to-gold-400 transition-[width] duration-[1400ms] [transition-timing-function:cubic-bezier(0.33,1,0.68,1)]"
          style={{ width: visible ? `${pct}%` : "0%" }}
        />
      </div>
      {/* Fixed-width tabular digits so the bar doesn't reflow as 5% grows
          into 70%. */}
      <span className="font-display min-w-[2.6rem] text-right text-sm font-bold tabular-nums text-white">
        {value}%
      </span>
    </div>
  );
}
