export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fr", "ja", "cy", "es", "pt-BR"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
