// Closing "in practice" section of the Who We Are page: an intro block
// (eyebrow + Purpose) above two large rounded photo cards, one for Mission
// and one for Vision, each with overlay title/body and a frosted round-icon
// CTA. Evolved from a supplied "Use Cases" spec (originally one video
// card); per explicit instruction the video became a still image and
// Vision got a matching second card. Copy is the site's own real
// Purpose/Vision/Mission from src/content/whoWeAre.js -- this section is
// the only place those three statements appear on this page.
//
// Notes on choices that aren't "content":
//   - No `lucide-react` -- the arrow icon is a small inline SVG, matching
//     every other icon on this site.
//   - Images are the site's own stock hero photos (public/images), not
//     hotlinked spec assets.
//   - A bottom gradient scrim sits between each photo and its overlay text
//     -- unlike the spec's dark video, photos can't guarantee contrast
//     behind white text without one.
//   - min-h scales down on small screens so the cards aren't enormous on
//     a phone.

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import AnimatedHeading from "@/components/home/AnimatedHeading";
import Container from "@/components/shared/Container";

function ArrowRightIcon(props) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HighlightCard({ card, delay }) {
  return (
    <Reveal
      delay={delay}
      className="relative min-h-[420px] overflow-hidden rounded-3xl sm:min-h-[520px]"
    >
      <Image
        src={card.image}
        alt={card.imageAlt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"
      />
      <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
        <h3
          className="mb-4 text-4xl leading-tight font-medium text-white md:text-5xl"
          style={{ letterSpacing: "-0.03em" }}
        >
          {card.heading}
        </h3>
        <p className="mb-8 max-w-md leading-relaxed text-white/85">{card.body}</p>
        <Link
          href={card.cta.href}
          className="group inline-flex items-center gap-3 text-base font-medium text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur transition-colors group-hover:bg-white/30">
            <ArrowRightIcon className="text-white" />
          </span>
          {card.cta.label}
        </Link>
      </div>
    </Reveal>
  );
}

export default function MissionHighlight({ eyebrow, heading, intro, cards }) {
  return (
    <section className="bg-navy-50 px-6 py-16 sm:py-24">
      <Container size="xl" className="px-0">
        <Reveal className="max-w-2xl">
          <p className="mb-2 text-sm text-silver-ink">{eyebrow}</p>
          <AnimatedHeading
            startOnView
            as="h2"
            text={heading}
            className="mb-6 text-5xl leading-none font-medium text-navy-900 md:text-6xl"
            style={{ letterSpacing: "-0.04em" }}
          />
          <p className="max-w-xl leading-relaxed text-navy-700">{intro}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <HighlightCard key={card.heading} card={card} delay={i * 80} />
          ))}
        </div>
      </Container>
    </section>
  );
}
