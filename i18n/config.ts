export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];

export function isRTL(locale: Locale) {
  return locale === "fa";
}
