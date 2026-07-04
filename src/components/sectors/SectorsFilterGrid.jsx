"use client";

import { useState } from "react";
import SectorCard from "@/components/shared/SectorCard";
import Reveal from "@/components/shared/Reveal";
import { getAllSectors, countSectorsByStatus } from "@/lib/data/sectors";
import { SECTOR_STATUS_LIST, SECTOR_STATUS_LABEL } from "@/content/constants";

const allSectors = getAllSectors();
const statusCounts = countSectorsByStatus();
const FILTERS = ["ALL", ...SECTOR_STATUS_LIST];

export default function SectorsFilterGrid() {
  const [filter, setFilter] = useState("ALL");
  const filtered =
    filter === "ALL"
      ? allSectors
      : allSectors.filter((sector) => sector.status === filter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter sectors by status"
        className="flex flex-wrap gap-2"
      >
        {FILTERS.map((value) => {
          const count = value === "ALL" ? allSectors.length : statusCounts[value];
          const label = value === "ALL" ? "All" : SECTOR_STATUS_LABEL[value];
          const selected = filter === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(value)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                selected
                  ? "bg-navy-900 text-white shadow-card"
                  : "bg-navy-100 text-navy-700 hover:bg-navy-900/10"
              }`}
            >
              {label} ({count})
            </button>
          );
        })}
      </div>

      <div
        className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        aria-live="polite"
      >
        {filtered.map((sector, i) => (
          <Reveal key={sector.slug} delay={(i % 6) * 70}>
            <SectorCard sector={sector} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
