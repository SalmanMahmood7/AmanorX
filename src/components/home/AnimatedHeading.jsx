"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Character-by-character entrance for the hero headline. `text` is split on
 * literal "\n" into lines, then each line into words, then characters;
 * every character gets a staggered transition delay of
 * (lineIndex * line.length * charDelay) + (charIndex * charDelay), so later
 * lines and later characters within a line animate in progressively later.
 *
 * Each word's characters live inside a `whitespace-nowrap inline-block`
 * wrapper so the browser can only wrap between words -- bare inline-block
 * character spans would otherwise break mid-word on narrow screens
 * ("BUILT" -> "B" / "UILT").
 *
 * By default the entrance starts on a timer (above-the-fold heroes). With
 * `startOnView`, it instead starts when the heading scrolls into view
 * (once, via IntersectionObserver) -- the section-heading variant used
 * across the site's scroll-reveal treatment.
 */
export default function AnimatedHeading({
  text,
  as: Tag = "h1",
  className = "",
  style,
  initialDelay = 200,
  charDelay = 30,
  duration = 500,
  startOnView = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!startOnView) {
      const timer = setTimeout(() => setVisible(true), initialDelay);
      return () => clearTimeout(timer);
    }

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
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [initialDelay, startOnView]);

  const lines = text.split("\n");

  return (
    <Tag ref={ref} className={className} style={style}>
      {lines.map((line, lineIndex) => {
        // Running character position within the line (spaces included) so
        // the stagger timing reads left-to-right across word boundaries.
        let charOffset = 0;

        return (
          <span key={lineIndex} className="block">
            {line.split(" ").map((word, wordIndex) => {
              const wordStart = charOffset;
              charOffset += word.length + 1;

              return (
                <span key={wordIndex}>
                  {wordIndex > 0 ? " " : null}
                  <span className="inline-block whitespace-nowrap">
                    {word.split("").map((char, charIndex) => {
                      const delay =
                        lineIndex * line.length * charDelay +
                        (wordStart + charIndex) * charDelay;
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
                          {char}
                        </span>
                      );
                    })}
                  </span>
                </span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}
