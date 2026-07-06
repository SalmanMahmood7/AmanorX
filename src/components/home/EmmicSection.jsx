"use client";

import { useState } from "react";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";

// EMMIC model restyled to match AboutSection's visual language (per
// explicit instruction to match hero/About/Why-AmanorX): same #F0F5F7
// ground, font-firs uppercase split header, chamfered clip-path cards with
// the same 1.5px light-border wrapper, and the About stat cards' gradient
// display type -- here applied to each stage's letter. Copy is unchanged:
// letter/name/summary from src/content/emmic.js (its `description` fields
// are still placeholder, so the homepage keeps to summaries). No CTA, per
// earlier instruction.

// Chamfer variants lifted from AboutSection's CARD_CLIP_PATH so the corner
// language is identical; cycled across the five cards.
const CARD_CLIP_PATH = [
  "polygon(48px 0, calc(100% - 12px) 0, calc(100% - 4px) 4px, 100% 12px, 100% calc(100% - 12px), calc(100% - 4px) calc(100% - 4px), calc(100% - 12px) 100%, 12px 100%, 4px calc(100% - 4px), 0 calc(100% - 12px), 0 48px)",
  "polygon(0 12px, 4px 4px, 12px 0, calc(100% - 48px) 0, 100% 48px, 100% calc(100% - 12px), calc(100% - 4px) calc(100% - 4px), calc(100% - 12px) 100%, 48px 100%, 0 calc(100% - 48px))",
  "polygon(0 12px, 4px 4px, 12px 0, calc(100% - 48px) 0, 100% 48px, 100% calc(100% - 48px), calc(100% - 48px) 100%, 12px 100%, 4px calc(100% - 4px), 0 calc(100% - 12px))",
];

const LETTER_GRADIENT = "linear-gradient(294deg, #185B7B 20%, #4BBDF0)";

// Topic-matched card backgrounds (Pexels, stored locally), in step order:
// Evaluation, Management, Marketplace, Investment, Company. Rendered
// blurred under a white overlay so the letter/name/summary stay readable
// -- same treatment as AboutSection's stat cards.
const STEP_IMAGES = [
  "/images/emmic-evaluation.jpg",
  "/images/emmic-management.jpg",
  "/images/emmic-marketplace.jpg",
  "/images/emmic-investment.jpg",
  "/images/emmic-company.jpg",
];

// Resting state shows only the stage letter; hovering or keyboard-focusing
// the card slides the name/summary in (CSS only -- the details stay in the
// DOM at all times, so screen readers always get the full content).
// Clicking (or Enter/Space) pins the details open until clicked again, so
// the description doesn't vanish when the cursor leaves. Below `sm` there
// is no cursor to hover with, so the details render statically.
function StepCard({ step, index }) {
  const clipPath = CARD_CLIP_PATH[index % CARD_CLIP_PATH.length];
  const [pinned, setPinned] = useState(false);

  const toggle = () => setPinned((p) => !p);

  return (
    <div
      className="group h-full cursor-pointer outline-none"
      tabIndex={0}
      role="button"
      aria-pressed={pinned}
      aria-label={`${step.name}: ${step.summary}`}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
      }}
    >
      <div
        className={`h-full transition-colors duration-300 group-hover:bg-[#4BBDF0]/70 group-focus-visible:bg-[#185B7B] ${
          pinned ? "bg-[#4BBDF0]/70" : "bg-[rgba(21,67,89,0.15)]"
        }`}
        style={{ padding: "1.5px", clipPath }}
      >
        <div
          className="relative flex h-full min-h-[220px] flex-col overflow-hidden bg-white p-6 sm:min-h-[260px] sm:items-center sm:justify-center"
          style={{ clipPath }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${STEP_IMAGES[index % STEP_IMAGES.length]})`,
              filter: "blur(1px)",
              transform: "scale(1.05)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
          />
          <Reveal effect="scale" delay={150 + index * 70} className="relative z-10">
            <p
              className={`font-firs text-[44px] leading-none font-semibold uppercase transition-transform duration-300 ease-out motion-reduce:transition-none sm:text-[76px] sm:group-hover:-translate-y-9 sm:group-hover:scale-90 sm:group-focus-visible:-translate-y-9 sm:group-focus-visible:scale-90 ${
                pinned ? "sm:-translate-y-9 sm:scale-90" : ""
              }`}
              style={{
                background: LETTER_GRADIENT,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {step.letter}
            </p>
          </Reveal>
          <div
            className={`relative z-10 mt-auto pt-8 sm:absolute sm:inset-x-5 sm:bottom-6 sm:mt-0 sm:pt-0 sm:text-center sm:transition-all sm:duration-300 sm:motion-reduce:transition-none sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-visible:translate-y-0 sm:group-focus-visible:opacity-100 ${
              pinned ? "sm:translate-y-0 sm:opacity-100" : "sm:translate-y-2 sm:opacity-0"
            }`}
          >
            <h3 className="text-[15px] font-semibold" style={{ color: "#154359" }}>
              {step.name}
            </h3>
            <p className="mt-1.5 text-sm leading-[1.5]" style={{ color: "rgba(21, 67, 89, 0.75)" }}>
              {step.summary}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EmmicSection({ heading, intro, steps }) {
  return (
    <section
      className="px-6 py-20 sm:px-10 sm:py-28"
      style={{ backgroundColor: "#F0F5F7" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-20">
            <div>
              <p
                aria-hidden="true"
                className="text-xs font-medium tracking-[0.15em] uppercase"
                style={{ color: "#154359" }}
              >
                E &middot; M &middot; M &middot; I &middot; C
              </p>
              <AnimatedHeading
                startOnView
                as="h2"
                text={heading}
                className="font-firs mt-4 max-w-xl text-[36px] leading-[0.95] font-semibold tracking-tight uppercase sm:text-[48px] lg:text-[54px]"
                style={{ color: "#154359" }}
              />
            </div>
            <p
              className="max-w-xl text-[17px] leading-[1.5] sm:text-[18px] lg:pt-9"
              style={{ color: "#154359" }}
            >
              {intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <Reveal key={step.id} delay={i * 70}>
              <StepCard step={step} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
