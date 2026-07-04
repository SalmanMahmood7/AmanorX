"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-tied reveal. On browsers that support CSS scroll-driven animations
 * (`animation-timeline: view()` -- Chromium/Edge today), motion is handed
 * entirely to the compositor: opacity/transform track the element's own
 * scroll-entry progress, Apple-product-page style, with no JS in the loop
 * once mode is set. Everywhere else, falls back to a one-shot
 * IntersectionObserver fade/slide-in. Scripting-disabled browsers and
 * prefers-reduced-motion users get full opacity immediately via CSS media
 * guards (see globals.css), so this never hides content from a no-JS
 * visitor.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  threshold = 0.15,
  delay = 0,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [mode, setMode] = useState("pending");

  useEffect(() => {
    const scrollLinked =
      typeof CSS !== "undefined" && CSS.supports?.("animation-timeline: view()");

    if (scrollLinked) {
      // Deferred a tick rather than set directly in the effect body -- this
      // is a one-time feature-detection result, not synchronizing with a
      // subscription, so it's queued like an external-system callback.
      queueMicrotask(() => setMode("scroll"));
      return;
    }

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setMode("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMode("visible");
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      data-reveal={mode}
      style={delay && mode !== "scroll" ? { ...style, transitionDelay: `${delay}ms` } : style}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
