"use client";

import { useCallback, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import { insightsContent } from "@/content/insights";
import { pick } from "@/lib/i18n";

const dmSans = DM_Sans({ weight: ["400", "500"], subsets: ["latin"] });

const EASE = [0.22, 1, 0.36, 1];

const PIXEL_COLS = 12;
const PIXEL_ROWS = 8;

// Card art + magnetic-square layouts cycle across however many news items
// exist -- decorative only, not tied to any specific story.
const CARD_IMAGES = [
  "https://images.pexels.com/photos/7691249/pexels-photo-7691249.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const SQUARE_SETS = [
  [
    { x: 5, y: 30, size: 16 },
    { x: 10, y: 42, size: 10 },
    { x: 3, y: 52, size: 7 },
    { x: 80, y: 70, size: 14 },
    { x: 85, y: 82, size: 9 },
    { x: 78, y: 60, size: 6 },
  ],
  [
    { x: 82, y: 55, size: 16 },
    { x: 88, y: 68, size: 10 },
    { x: 78, y: 72, size: 7 },
    { x: 85, y: 42, size: 6 },
    { x: 90, y: 80, size: 8 },
  ],
  [
    { x: 4, y: 24, size: 16 },
    { x: 10, y: 36, size: 10 },
    { x: 2, y: 44, size: 7 },
    { x: 78, y: 78, size: 14 },
    { x: 84, y: 88, size: 8 },
  ],
  [
    { x: 82, y: 26, size: 14 },
    { x: 88, y: 38, size: 10 },
    { x: 78, y: 44, size: 7 },
    { x: 84, y: 54, size: 5 },
    { x: 90, y: 60, size: 8 },
  ],
];

// The same news entries the homepage News & Insights carousel shows
// (src/content/insights.js), flattened across categories.
const insights = pick(insightsContent);
const CASE_STUDIES = insights.categories.flatMap((category) =>
  category.items.map((item) => ({
    id: item.id,
    title: item.title,
    category: category.label,
    year: item.date,
  }))
).map((item, i) => ({
  ...item,
  image: CARD_IMAGES[i % CARD_IMAGES.length],
  squares: SQUARE_SETS[i % SQUARE_SETS.length],
}));

function ArrowUpRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M18.75 6V15.75C18.75 15.949 18.671 16.14 18.53 16.28C18.39 16.421 18.199 16.5 18 16.5C17.801 16.5 17.61 16.421 17.47 16.28C17.329 16.14 17.25 15.949 17.25 15.75V7.81L6.53 18.53C6.39 18.671 6.199 18.75 6 18.75C5.801 18.75 5.61 18.671 5.47 18.53C5.329 18.39 5.25 18.199 5.25 18C5.25 17.801 5.329 17.61 5.47 17.47L16.19 6.75H8.25C8.051 6.75 7.86 6.671 7.72 6.53C7.579 6.39 7.5 6.199 7.5 6C7.5 5.801 7.579 5.61 7.72 5.47C7.86 5.329 8.051 5.25 8.25 5.25H18C18.199 5.25 18.39 5.329 18.53 5.47C18.671 5.61 18.75 5.801 18.75 6Z" />
    </svg>
  );
}

/** Card decoration: drifts toward the cursor while the card is hovered. */
function MagneticSquare({ square, pointerX, pointerY }) {
  const shiftX = useTransform(pointerX, (v) => (v - 0.5) * 40);
  const shiftY = useTransform(pointerY, (v) => (v - 0.5) * 40);
  const x = useSpring(shiftX, { stiffness: 80, damping: 18, mass: 0.6 });
  const y = useSpring(shiftY, { stiffness: 80, damping: 18, mass: 0.6 });

  return (
    <motion.div
      className="absolute bg-black"
      style={{
        left: `${square.x}%`,
        top: `${square.y}%`,
        width: square.size,
        height: square.size,
        x,
        y,
        zIndex: 5,
      }}
    />
  );
}

function CaseStudyCard({ study, index }) {
  const [hovered, setHovered] = useState(false);
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const handlePointerMove = useCallback(
    (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      pointerX.set((event.clientX - rect.left) / rect.width);
      pointerY.set((event.clientY - rect.top) / rect.height);
    },
    [pointerX, pointerY]
  );

  const handlePointerLeave = useCallback(() => {
    setHovered(false);
    pointerX.set(0.5);
    pointerY.set(0.5);
  }, [pointerX, pointerY]);

  return (
    <motion.article
      className="group relative overflow-hidden rounded-lg"
      style={{ aspectRatio: "4 / 3" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE, delay: (index % 2) * 0.12 }}
      onPointerEnter={() => setHovered(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={study.image}
        alt={study.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Pixel-dissolve hover overlay */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: PIXEL_ROWS }).map((_, row) =>
          Array.from({ length: PIXEL_COLS }).map((_, col) => (
            <motion.div
              key={`${row}-${col}`}
              className="absolute bg-black/80"
              style={{
                left: `${(col * 100) / PIXEL_COLS}%`,
                top: `${(row * 100) / PIXEL_ROWS}%`,
                width: `${100 / PIXEL_COLS}%`,
                height: `${100 / PIXEL_ROWS}%`,
              }}
              initial={false}
              animate={{ scale: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
              transition={{
                duration: 0.25,
                delay: hovered
                  ? (row + col) * 0.018
                  : (PIXEL_ROWS - row + (PIXEL_COLS - col)) * 0.012,
              }}
            />
          ))
        )}
      </div>

      <div className="pointer-events-none absolute inset-0">
        {study.squares.map((square, i) => (
          <MagneticSquare
            key={i}
            square={square}
            pointerX={pointerX}
            pointerY={pointerY}
          />
        ))}
      </div>

      <span
        className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center border border-white/30 text-xs text-white"
        style={{ zIndex: 10 }}
      >
        +
      </span>

      <div
        className="absolute bottom-0 left-0 bg-white px-4 pb-3 pt-2.5"
        style={{ zIndex: 20, maxWidth: "82%" }}
      >
        <h3 className="text-[clamp(0.95rem,1.3vw,1.15rem)] font-medium leading-snug text-black">
          {study.title}
        </h3>
        <div className="mt-1.5 flex gap-4">
          <span className="text-[12px] text-black/60">{study.category}</span>
          <span className="whitespace-nowrap text-[12px] font-medium text-black">
            {study.year}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsCaseStudies() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section className={`relative bg-white text-black ${dmSans.className}`}>
      {/* Header (sits below the page hero, so no extra header clearance) */}
      <div className="relative px-6 pb-10 pt-16 sm:px-10 lg:px-16 lg:pt-24">
        <motion.div
          ref={headerRef}
          className="relative mx-auto max-w-7xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="text-[clamp(1.8rem,3.2vw,2.8rem)] font-light leading-[1.25] tracking-tight">
            <span className="text-black">Insights from </span>
            <span className="text-black/40">Our</span>
            <br />
            <span className="text-black/40">Case Studies</span>
          </h2>
        </motion.div>
      </div>

      {/* Case study cards */}
      <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-10 lg:px-16">
        <div className="grid gap-4 md:grid-cols-2">
          {CASE_STUDIES.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>

      {/* Footer: CTA */}
      <div className="mx-auto max-w-7xl px-6 pb-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <Link href="/contact" className="group flex items-end">
              <span className="inline-flex items-center gap-[10px] border border-black/20 bg-black px-3 py-2 text-base font-medium text-white transition-colors hover:bg-black/85">
                Let&apos;s work together
              </span>
              <span className="mb-6 flex h-6 w-6 items-center justify-center bg-black transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:mb-9">
                <ArrowUpRightIcon />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-12" />
    </section>
  );
}
