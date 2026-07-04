// TODO(AmanorX): no vector logo file exists yet. This text-based placeholder
// is isolated here so swapping in the real mark later is a one-line change
// at the call sites (<Header>, <Footer>) -- they only ever import <Wordmark>.
// The monogram box is aria-hidden so screen readers still announce the plain
// "AmanorX" text as this element's accessible name.
export default function Wordmark({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-green-400/40 bg-green-500/10 text-sm font-bold text-green-400"
      >
        X
      </span>
      <span className="font-semibold tracking-tight">
        Amanor<span className="text-green-400">X</span>
      </span>
    </span>
  );
}
