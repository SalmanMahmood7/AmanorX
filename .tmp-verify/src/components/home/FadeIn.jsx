"use client";

import { useEffect, useState } from "react";

/**
 * Time-triggered fade-in (setTimeout, not scroll-linked) -- distinct from
 * <Reveal>, which reveals on scroll-into-view. Used for the hero's
 * above-the-fold entrance choreography, where content is visible on load
 * and the effect is about staggering entrance timing, not scroll position.
 */
export default function FadeIn({
  as: Tag = "div",
  delay = 0,
  duration = 1000,
  className = "",
  children,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Tag
      className={`transition-opacity ${visible ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </Tag>
  );
}
