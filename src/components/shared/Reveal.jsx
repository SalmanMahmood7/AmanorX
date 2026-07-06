"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-triggered reveal: a one-shot IntersectionObserver flips
 * data-reveal from "pending" to "visible" the first time the element
 * scrolls into view, and CSS (globals.css) transitions it in -- a rise by
 * default, or a scale-pop with `effect="scale"` (icons/badges). `delay`
 * (ms) staggers siblings.
 *
 * This used to prefer CSS scroll-driven animations
 * (`animation-timeline: view()`) on Chromium, but that path rendered with
 * no visible motion in real use (reported twice), so the observer path is
 * now the only path -- same mechanism <AnimatedHeading> uses, which does
 * animate reliably. Scripting-disabled browsers and prefers-reduced-motion
 * users get full opacity immediately via CSS media guards (see
 * globals.css), so this never hides content from a no-JS visitor.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  threshold = 0.15,
  delay = 0,
  effect,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

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
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      data-reveal={visible ? "visible" : "pending"}
      data-reveal-effect={effect}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
