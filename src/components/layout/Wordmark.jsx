// AmanorX logo lockup, recreated as inline SVG + type from the supplied
// brand image (gold geometric X-emblem | AMANORX / HOLDING(PVT) LTD.).
// The emblem is a hand-traced approximation of the mark -- when a real
// vector file lands in /public, swapping it in here updates every call
// site (<Header>, <Footer>) at once.
//
// All dimensions are em-based so call sites size the whole lockup with a
// single text-size class. The gradient id is fixed; the lockup can render
// twice per page (header + footer) but the duplicate defs are identical,
// so browsers resolving to the first occurrence is harmless.

export function Emblem({ className }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="amx-gold" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#c9a227" />
          <stop offset="0.5" stopColor="#c9a227" />
          <stop offset="1" stopColor="#c9a227" />
        </linearGradient>
      </defs>

      <g stroke="url(#amx-gold)" strokeLinejoin="miter">
        {/* Outer 8-point star frame (square + rotated square union),
            doubled with a thinner inner echo like the source mark. */}
        <path
          d="M50 4 L58 12 L88 12 L88 42 L96 50 L88 58 L88 88 L58 88 L50 96 L42 88 L12 88 L12 58 L4 50 L12 42 L12 12 L42 12 Z"
          strokeWidth="4.5"
        />
        <path
          d="M50 4 L58 12 L88 12 L88 42 L96 50 L88 58 L88 88 L58 88 L50 96 L42 88 L12 88 L12 58 L4 50 L12 42 L12 12 L42 12 Z"
          strokeWidth="2"
          transform="translate(50 50) scale(0.78) translate(-50 -50)"
        />

        {/* Central interlaced X with diamond core. */}
        <path
          d="M20 28 L28 20 L50 42 L72 20 L80 28 L58 50 L80 72 L72 80 L50 58 L28 80 L20 72 L42 50 Z"
          strokeWidth="4"
          transform="translate(50 50) scale(0.72) translate(-50 -50)"
        />
        <path d="M50 43 L57 50 L50 57 L43 50 Z" strokeWidth="2" />
      </g>
    </svg>
  );
}

export default function Wordmark({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-[0.7em] ${className}`}>
      <Emblem className="h-[2.7em] w-[2.7em] shrink-0" />
      <span aria-hidden="true" className="h-[2.3em] w-px bg-gold-500/60" />
      <span className="flex flex-col justify-center">
        <span className="text-[1em] leading-none font-semibold tracking-[0.3em] text-white">
          AMANOR<span className="text-gold-400">X</span>
        </span>
        <span className="mt-[0.35em] text-[0.48em] leading-none font-semibold tracking-[0.3em] text-gold-500">
          HOLDING(PVT) LTD.
        </span>
      </span>
    </span>
  );
}
