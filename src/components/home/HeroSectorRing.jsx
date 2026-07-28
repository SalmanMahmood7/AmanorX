"use client";

import { useState } from "react";
import ProfileIcon from "./ProfileIcons";
import { Emblem } from "@/components/layout/Wordmark";
import { sectorIcons } from "@/content/profile";

// Hero sector ring -- the 16 EMMIC sector icons revolve continuously around
// the brand X emblem like a slowly turning tyre (2026-07-28 request), tilted
// slightly back for a bit of 3D depth (2026-07-28 follow-up).
//
// Every sector's icon AND its code/name label live together in the
// "spinning layer", which rotates a full turn every SPIN_DURATION_S seconds
// -- the label travels around with its own icon, staying paired with it the
// whole way round (2026-07-28 request: "the names should go with the wheel
// icons... but not rotate").
//
// Each icon/label is positioned via a translate on an ancestor element (so
// it inherits the ring's rotation and actually travels around the circle),
// then a nested child counter-rotates at the same rate to cancel the
// accumulated orientation back out -- position keeps moving, but the
// icon/text stays upright the whole way round, never tipping or spinning in
// place. (Nesting it the other way, with the counter-rotation as the
// translate's *ancestor* instead of its child, makes the two rotations
// cancel before the translate ever applies, which freezes everything in
// place -- don't invert this order.)
//
// The whole ring (hairline guide + center emblem + both layers) sits inside
// a `perspective` parent and is tilted back a fixed, non-animated amount via
// `rotateX` for a subtle dial-like 3D read -- nothing about that tilt is
// animated, so it doesn't interact with the spin/counter-spin math above.
//
// Each icon is a real link to that sector's own live platform site (`url`
// on the sector registry entry), opened in a new tab. Hovering/focusing a
// sector pauses the spin (so it can be aimed and clicked) and lights up its
// icon and label gold; the plain-language sector name fades in beneath its
// EMMIC code while active.

const SPIN_DURATION_S = 48; // seconds per full rotation -- slow, deliberate roll
const LABEL_OFFSET = "3rem"; // label distance beyond the icon ring
const TILT_DEG = 14; // static dial tilt, never animated

export default function HeroSectorRing({ sectors }) {
  const [hovered, setHovered] = useState(null);
  const [paused, setPaused] = useState(false);

  const count = sectors.length;
  const spinAnimation = {
    animation: `hero-wheel-spin ${SPIN_DURATION_S}s linear infinite`,
    animationPlayState: paused ? "paused" : "running",
  };
  const counterSpinAnimation = {
    animation: `hero-wheel-spin-reverse ${SPIN_DURATION_S}s linear infinite`,
    animationPlayState: paused ? "paused" : "running",
  };

  return (
    <div className="relative h-[32rem] w-[32rem] [--ring-radius:10.5rem] [perspective:1400px] xl:h-[36rem] xl:w-[36rem] xl:[--ring-radius:11.9rem]">
      <div
        className="relative h-full w-full"
        style={{ transform: `rotateX(${TILT_DEG}deg)` }}
      >
        {/* Hairline ring under the icon chips (r matches --ring-radius:
            10.5/16 and 11.9/18 of the half-width are both ~33/50). */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="33" stroke="white" strokeOpacity="0.12" strokeWidth="0.3" />
        </svg>

        {/* Center: brand X emblem over a soft gold glow, EMMIC beneath. Sits
            outside the spinning layer below, so it never rotates. */}
        <div aria-hidden="true" className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="absolute h-[15rem] w-[15rem] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.14),transparent_70%)]" />
          <Emblem className="h-24 w-24 xl:h-28 xl:w-28" />
          <p className="font-display mt-4 text-xl font-semibold tracking-[0.45em] text-gold-400 xl:text-2xl">
            EMMIC
          </p>
        </div>

        {/* Spinning layer: carries every sector icon AND its label around the
            circle together, at a constant rate, like a rolling tyre. Each
            one is positioned via a translate on an ancestor element (so it
            inherits this layer's rotation and actually travels), then a
            nested child counter-rotates at the same rate to cancel the
            accumulated orientation back out -- so the icon/text travels with
            the wheel but never itself tips over or spins. */}
        <div
          className="absolute inset-0"
          style={spinAnimation}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {sectors.map((sector, i) => {
            const theta = (i / count) * 2 * Math.PI;
            const x = Math.sin(theta).toFixed(4);
            const y = (-Math.cos(theta)).toFixed(4);
            const isActive = i === hovered;
            return (
              <div key={sector.code}>
                <a
                  href={sector.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${sector.name} (${sector.code}) -- opens in a new tab`}
                  className="absolute left-1/2 top-1/2 block h-11 w-11"
                  style={{
                    transform: `translate(-50%, -50%) translate(calc(var(--ring-radius) * ${x}), calc(var(--ring-radius) * ${y}))`,
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                  onFocus={() => {
                    setPaused(true);
                    setHovered(i);
                  }}
                  onBlur={() => {
                    setPaused(false);
                    setHovered((h) => (h === i ? null : h));
                  }}
                >
                  <div
                    style={counterSpinAnimation}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color,box-shadow] duration-300 ${
                      isActive
                        ? "scale-110 border-gold-400 bg-gold-500 text-navy-950 shadow-[0_0_22px_rgba(201,162,39,0.5)]"
                        : "border-white/15 bg-white/5 text-white/60"
                    }`}
                  >
                    <ProfileIcon name={sectorIcons[sector.code.toLowerCase()]} className="h-5 w-5" />
                  </div>
                </a>
                <span
                  className="pointer-events-none absolute left-1/2 top-1/2 block w-28"
                  style={{
                    transform: `translate(-50%, -50%) translate(calc((var(--ring-radius) + ${LABEL_OFFSET}) * ${x}), calc((var(--ring-radius) + ${LABEL_OFFSET}) * ${y}))`,
                  }}
                >
                  <span
                    style={counterSpinAnimation}
                    className="flex flex-col items-center text-center leading-tight"
                  >
                    <span
                      className={`text-[10px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                        isActive ? "text-gold-400" : "text-white/55"
                      }`}
                    >
                      {sector.code}
                    </span>
                    <span
                      className={`text-[9px] font-medium uppercase tracking-[0.12em] text-gold-100/90 transition-[opacity,transform] duration-300 ${
                        isActive ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
                      }`}
                    >
                      {sector.name}
                    </span>
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
