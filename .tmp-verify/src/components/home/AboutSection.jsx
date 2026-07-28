// About section: same AmanorX copy as before, restyled to a supplied visual
// spec (chamfered clip-path stat cards, #F0F5F7/#154359 palette, font-firs
// display face). No hooks/interactivity needed -- pure CSS (group-hover)
// plus the shared <Reveal> scroll-reveal wrappers, so this stays a plain
// server component.

import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";

const CARD_CLIP_PATH = [
  "polygon(64px 0, calc(100% - 14px) 0, calc(100% - 4px) 4px, 100% 14px, 100% calc(100% - 14px), calc(100% - 4px) calc(100% - 4px), calc(100% - 14px) 100%, 14px 100%, 4px calc(100% - 4px), 0 calc(100% - 14px), 0 64px)",
  "polygon(0 14px, 4px 4px, 14px 0, calc(100% - 64px) 0, 100% 64px, 100% calc(100% - 14px), calc(100% - 4px) calc(100% - 4px), calc(100% - 14px) 100%, 64px 100%, 0 calc(100% - 64px))",
  "polygon(0 14px, 4px 4px, 14px 0, calc(100% - 64px) 0, 100% 64px, 100% calc(100% - 64px), calc(100% - 64px) 100%, 14px 100%, 4px calc(100% - 4px), 0 calc(100% - 14px))",
];

const CARD_TEXT_POSITION = [
  "absolute left-6 right-6 bottom-6 max-w-[66%]",
  "absolute left-6 bottom-20 max-w-[66%]",
  "absolute left-6 right-28 bottom-6 max-w-[66%]",
];

function StatCard({ index, value, text, image, alt, offset }) {
  const clipPath = CARD_CLIP_PATH[index % CARD_CLIP_PATH.length];

  return (
    <Reveal
      delay={index * 120}
      className={`relative h-[280px] w-full sm:h-[340px] ${offset ? "lg:mt-24" : ""}`}
    >
      <div
        className="h-full w-full"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "1.5px", clipPath }}
      >
        <div className="relative h-full w-full overflow-hidden" style={{ clipPath }}>
          {/* Image on its own layer so the blur doesn't soften the text
              above it; scaled slightly so the blur doesn't expose
              transparent edges. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
              filter: "blur(3px)",
              transform: "scale(1.06)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(240, 245, 247, 0.3)" }}
          />
          <div className={CARD_TEXT_POSITION[index % CARD_TEXT_POSITION.length]}>
            <p className="font-firs text-[36px] leading-none font-semibold uppercase text-navy-900 sm:text-[52px]">
              {value}
            </p>
            <p className="mt-3 text-[14px] leading-[1.4] text-navy-900">{text}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function AboutSection({ eyebrow, heading, paragraphs, cta, stats }) {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col justify-center px-6 py-20 sm:px-10 sm:py-28"
      style={{ backgroundColor: "#F0F5F7" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-20">
          <Reveal style={{ color: "#154359" }}>
            <p className="text-xs font-medium tracking-[0.15em] uppercase" style={{ color: "#154359" }}>
              {eyebrow}
            </p>
            <AnimatedHeading
              startOnView
              as="h2"
              text={heading}
              className="font-firs mt-4 text-[36px] leading-[0.95] font-semibold tracking-tight uppercase sm:text-[48px] lg:text-[54px]"
              style={{ color: "#154359" }}
            />
          </Reveal>

          <Reveal delay={120} className="flex max-w-xl flex-col">
            <div className="text-[17px] leading-[1.5] sm:text-[18px]" style={{ color: "#154359" }}>
              {paragraphs.map((para) => (
                <div key={para.text} className={para.label ? "mt-3" : "mt-4 first:mt-0"}>
                  {para.label ? (
                    <p className="text-sm font-medium" style={{ color: "#154359" }}>
                      {para.label}
                    </p>
                  ) : null}
                  <p className={para.label ? "mt-1 text-sm" : ""}>{para.text}</p>
                </div>
              ))}
            </div>

            <a
              href={cta.href}
              className="group mt-6 inline-flex items-center gap-4 text-[14px] font-medium"
              style={{ color: "#154359" }}
            >
              {cta.label}
              <span
                className="flex h-8 w-8 items-center justify-center border transition-transform group-hover:-translate-y-0.5"
                style={{
                  borderColor: "#154359",
                  clipPath:
                    "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <StatCard key={stat.value} index={i} offset={stat.offset} {...stat} />
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 sm:h-56"
        style={{
          background:
            "linear-gradient(to bottom, rgba(240, 245, 247, 0) 0%, rgba(240, 245, 247, 0.7) 60%, #F0F5F7 100%)",
        }}
      />
    </section>
  );
}
