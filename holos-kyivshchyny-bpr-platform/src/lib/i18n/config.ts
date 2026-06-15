import uk from "@/messages/uk.json";
import ru from "@/messages/ru.json";
import en from "@/messages/en.json";

export const locales = ["uk", "ru", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uk";

const dictionaries = {
  uk,
  ru,
  en,
} as const;

export type Messages = typeof uk;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getLocaleOrDefault(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function getMessages(locale: string): Messages {
  return dictionaries[getLocaleOrDefault(locale)];
}

export function localizePath(locale: Locale, path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized === "/" ? "" : normalized}`;
}

export function detectLocale(acceptLanguage: string | null) {
  if (!acceptLanguage) return defaultLocale;

  const requested = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  for (const value of requested) {
    const baseLocale = value.split("-")[0];
    if (baseLocale && isLocale(baseLocale)) return baseLocale;
  }

  return defaultLocale;
}
