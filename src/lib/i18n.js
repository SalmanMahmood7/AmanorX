// Minimal locale-lookup pattern for Phase 1.
//
// Content in src/content/*.js is authored as `{ en: { ... } }`. Once Urdu
// copy exists, add a sibling `ur: { ... }` key to the same object -- no
// component changes required, no i18n library needed at this scale.
//
// TODO(AmanorX): when a locale switcher ships, DEFAULT_LOCALE should come
// from the route (e.g. /ur/...) or an Accept-Language negotiation instead
// of being hardcoded.

export const DEFAULT_LOCALE = "en";

export const SUPPORTED_LOCALES = ["en"];

/**
 * Reads a locale's slice out of a `{ en: {...}, ur: {...} }`-shaped content
 * object, falling back to the default locale if the requested one is absent.
 */
export function pick(localizedContent, locale = DEFAULT_LOCALE) {
  return localizedContent[locale] ?? localizedContent[DEFAULT_LOCALE];
}
