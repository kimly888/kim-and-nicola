// Import dictionaries
import { Locale } from "@/i18n-config";
import en from "./en.json";
import fr from "./fr.json";
import ja from "./ja.json";
import cy from "./cy.json";
import es from "./es.json";
import ptBR from "./pt-BR.json";

// Dictionary type
export type Dictionary = typeof en;

// Dictionary mapping
const dictionaries: Record<Locale, Dictionary> = {
  en,
  fr,
  ja,
  cy,
  es,
  "pt-BR": ptBR,
};

// Get dictionary function
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale];
};
