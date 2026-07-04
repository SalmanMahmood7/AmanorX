"use client";

import { useEffect, useState } from "react";

const NBSP = " ";

/**
 * Character-by-character entrance for the hero headline. `text` is split on
 * literal "\n" into lines, then each line into characters; every character
 * gets a staggered transition delay of
 * (lineIndex * line.length * charDelay) + (charIndex * charDelay), so later
 * lines and later characters within a line animate in progressively later.
 * Spaces render as a non-breaking space so `inline-block` characters don't
 * let the browser collapse the gap.
 */
export default function AnimatedHeading({
  text,
  as: Tag = "h1",
  className = "",
  style,
  initialDelay = 200,
  charDelay = 30,
  duration = 500,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split("\n");

  return (
    <Tag className={className} style={style}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split("").map((char, charIndex) => {
            const delay = lineIndex * line.length * charDelay + charIndex * charDelay;
            return (
              <span
                key={charIndex}
                className="inline-block transition-[opacity,transform] ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(-18px)",
                  transitionDuration: `${duration}ms`,
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === " " ? NBSP : char}
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}
