import Script from "next/script";

// Plausible-style analytics stub -- collects no PII, no cookies. Not wired
// to a real account. TODO(AmanorX): set NEXT_PUBLIC_ANALYTICS_DOMAIN (and
// swap the src if self-hosting Plausible) once an account exists; until
// then this script loads but reports to an unclaimed domain.
export default function AnalyticsScript() {
  const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
  if (!domain) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
