"use client";

import { useEffect, useRef, useState } from "react";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import { GlobeIcon, PulseIcon, SparkIcon } from "@/components/shared/icons";
import { insightsContent } from "@/content/insights";
import { pick } from "@/lib/i18n";

// Icon components can't cross the server/client boundary as props (React
// Server Components can't serialize function references), so the
// category -> icon mapping lives here rather than in src/content/insights.js.
const CATEGORY_ICONS = {
  press: GlobeIcon,
  milestones: PulseIcon,
  "sector-launches": SparkIcon,
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "12 May 2026" -> a sortable timestamp. Avoids Date.parse, whose handling
// of "day month year" strings isn't guaranteed consistent across engines.
function parseDisplayDate(value) {
  const [day, month, year] = value.split(" ");
  return Date.UTC(Number(year), MONTHS.indexOf(month), Number(day));
}

const insights = pick(insightsContent);

// Flattened, newest-first feed across all three categories -- items are
// dummy placeholder entries (see src/content/insights.js) standing in for
// the group's real press/milestone/launch record.
const NEWS_ITEMS = insights.categories
  .flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      categoryLabel: category.label,
      icon: CATEGORY_ICONS[category.id] ?? GlobeIcon,
    }))
  )
  .sort((a, b) => parseDisplayDate(b.date) - parseDisplayDate(a.date));

// Recreated from a supplied stories-carousel spec (thumbnail card row +
// arrow controls + "View All" CTA in the header). Cards pull the same
// placeholder items as the Insights page (src/content/insights.js) so the
// two stay in sync -- no separately invented homepage-only headlines.
function ArrowButton({ direction, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "left" ? "Scroll to previous" : "Scroll to next"}
      className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-navy-900/15 text-navy-900 transition-colors duration-200 hover:border-green-500 hover:text-green-600 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-navy-900/15 disabled:hover:text-navy-900"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function NewsCard({ icon: Icon, categoryLabel, title, date, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="flex w-[260px] shrink-0 snap-start flex-col overflow-hidden rounded-lg border border-navy-900/10 bg-white sm:w-[280px]"
    >
      <div className="flex h-32 items-center justify-center bg-navy-50">
        <Reveal effect="scale" delay={delay + 150}>
          <Icon className="text-green-600" width={32} height={32} />
        </Reveal>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <span className="font-mono text-xs font-medium tracking-wide text-green-600 uppercase">
          {categoryLabel}
        </span>
        <h3 className="mt-2 text-base leading-snug font-semibold text-navy-900">{title}</h3>
      </div>
      <div className="border-t border-navy-900/10 px-5 py-3">
        <p className="text-xs text-silver-ink">
          {categoryLabel} &middot; {date}
        </p>
      </div>
    </Reveal>
  );
}

export default function NewsCarousel({ heading, description, cta }) {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateScrollState() {
    const node = trackRef.current;
    if (!node) return;
    setCanScrollLeft(node.scrollLeft > 4);
    setCanScrollRight(node.scrollLeft + node.clientWidth < node.scrollWidth - 4);
  }

  useEffect(() => {
    updateScrollState();
    const node = trackRef.current;
    if (!node || typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  function scrollByCard(direction) {
    const node = trackRef.current;
    if (!node) return;
    const card = node.querySelector(":scope > *");
    const step = (card?.clientWidth ?? 280) + 24;
    node.scrollBy({ left: direction === "left" ? -step : step, behavior: "smooth" });
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container size="xl">
        <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <AnimatedHeading
              startOnView
              as="h2"
              text={heading}
              className="text-h2 font-semibold text-navy-900"
            />
            <p className="mt-3 max-w-2xl text-navy-700">{description}</p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <ArrowButton direction="left" disabled={!canScrollLeft} onClick={() => scrollByCard("left")} />
            <ArrowButton direction="right" disabled={!canScrollRight} onClick={() => scrollByCard("right")} />
            <Button href={cta.href} variant="outlineOnLight" className="ml-2">
              {cta.label}
            </Button>
          </div>
        </Reveal>

        {/* Cards reveal themselves (staggered) so the track wrapper stays a
            plain div -- it also needs a real ref for scrollLeft/scrollWidth,
            which <Reveal> (plain function component) doesn't forward. */}
        <div className="mt-10">
          <div
            ref={trackRef}
            onScroll={updateScrollState}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {NEWS_ITEMS.map((item, i) => (
              <NewsCard
                key={item.id}
                icon={item.icon}
                categoryLabel={item.categoryLabel}
                title={item.title}
                date={item.date}
                delay={(i % 4) * 90}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
