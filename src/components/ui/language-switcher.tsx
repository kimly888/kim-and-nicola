"use client";

import { usePathname } from "next/navigation";
import { i18n } from "@/i18n-config";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";

// Define flag emojis for each locale
const flagEmojis: Record<string, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  ja: "🇯🇵",
  cy: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
  es: "🇪🇸",
  "pt-BR": "🇧🇷",
};

export default function LanguageSwitcher({
  dictionary,
}: {
  dictionary?: {
    languageSwitcher: {
      label: string;
      en: string;
      fr: string;
      ja: string;
      cy: string;
      es: string;
      "pt-BR": string;
    };
  };
}) {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const segments = pathName.split("/");
    segments[1] = locale;

    return segments.join("/");
  };

  const currentLocale = pathName.split("/")[1] || i18n.defaultLocale;
  const localeNames: Record<string, string> = {
    en: dictionary?.languageSwitcher.en || "English",
    fr: dictionary?.languageSwitcher.fr || "French",
    ja: dictionary?.languageSwitcher.ja || "日本語",
    cy: dictionary?.languageSwitcher.cy || "Cymraeg",
    es: dictionary?.languageSwitcher.es || "Español",
    "pt-BR": dictionary?.languageSwitcher["pt-BR"] || "Português (Brasil)",
  };

  return (
    <Select
      defaultValue={currentLocale}
      onValueChange={(locale) => {
        window.location.href = redirectedPathName(locale);
      }}
    >
      <SelectTrigger className="w-fit bg-background">
        <SelectValue placeholder="Select language">
          <div className="flex items-center gap-2">
            <span>{flagEmojis[currentLocale]}</span>
            <span>{localeNames[currentLocale]}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-background">
        {i18n.locales.map((locale) => (
          <SelectItem
            key={locale}
            value={locale}
            className={locale === currentLocale ? "bg-gray-100" : ""}
          >
            <div className="flex items-center gap-2">
              <span>{flagEmojis[locale]}</span>
              <span>{localeNames[locale]}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
