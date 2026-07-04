// "Why AmanorX" recreated as a 3-card benefits layout (2 text cards + a
// center video card) from a supplied design spec. The original 6-topic
// pillar content doesn't fit this tighter 3-card shape, so -- per explicit
// instruction to shorten content to fit the design -- it's condensed here:
// each side card folds two of the original six ideas into one short
// heading + one short paragraph (see src/content/home.js); the center
// card keeps two more as a heading only, matching the video card's
// no-paragraph shape in the spec.
//
// Deviations from the supplied spec:
//   - The blob accent uses AmanorX's brand green, not the spec's arbitrary
//     blue -- same reasoning as swapping the pillar-line gradient for
//     brand colors in the previous redesign.
//   - No "Futura Md BT Medium" font-face -- served from an unlicensed
//     third-party font host, same call as "Mazzard H" in the last two
//     redesigns.
//   - The background video is used as given (same CloudFront source as
//     the homepage hero video) since it's a generic decorative loop, not
//     branded copy or a specific product claim.

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260421_072701_f6a01abb-eb30-4559-9d6e-774362defbc3.mp4";

function CardHeading({ line1, line2 }) {
  return (
    <h3 className="text-center text-xl leading-tight font-light text-white sm:text-2xl">
      {line1}
      <br />
      {line2}
    </h3>
  );
}

export default function WhyAmanorXBenefits({ heading, cards }) {
  const [left, center, right] = cards;

  return (
    <section className="relative w-full bg-black px-4 py-12 sm:px-6 sm:py-20 md:px-10">
      <h2
        className="mb-12 text-center text-3xl font-light text-white sm:mb-24 sm:text-4xl md:text-5xl"
        style={{ letterSpacing: "-0.04em" }}
      >
        {heading}
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3">
        {/* Left text card -- description sits mid-card. */}
        <div className="relative h-[380px] overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:h-[460px] sm:p-8">
          <div
            aria-hidden="true"
            className="absolute top-1/2 -left-[420px] h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-green-500 opacity-40 blur-3xl"
          />
          <div className="relative z-10 flex h-full flex-col items-center text-center">
            <CardHeading line1={left.line1} line2={left.line2} />
            <p className="mt-12 max-w-[280px] text-[13px] leading-relaxed font-light text-white/70 sm:mt-20 sm:text-[14px]">
              {left.description}
            </p>
          </div>
        </div>

        {/* Center video card -- heading only, no paragraph. */}
        <div className="relative flex h-[380px] flex-col overflow-hidden rounded-2xl bg-neutral-950 sm:h-[460px]">
          <div className="relative w-full overflow-hidden" style={{ height: "75%" }}>
            <video
              className="block h-full w-full object-cover"
              src={VIDEO_SRC}
              autoPlay
              loop
              muted
              playsInline
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-b from-transparent to-neutral-950"
            />
          </div>
          <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
            <CardHeading line1={center.line1} line2={center.line2} />
          </div>
        </div>

        {/* Right text card -- description pinned to the bottom. */}
        <div className="relative h-[380px] overflow-hidden rounded-2xl bg-neutral-950 p-6 sm:h-[460px] sm:p-8">
          <div
            aria-hidden="true"
            className="absolute -top-28 -right-28 h-56 w-56 rounded-full bg-green-500 opacity-40 blur-3xl"
          />
          <div className="relative z-10 flex h-full flex-col items-center text-center">
            <CardHeading line1={right.line1} line2={right.line2} />
            <p className="mt-auto max-w-[320px] text-[13px] leading-relaxed font-light text-white/70 sm:text-[14px]">
              {right.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
