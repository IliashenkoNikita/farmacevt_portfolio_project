import uk from "@/messages/uk.json";
import ru from "@/messages/ru.json";
import en from "@/messages/en.json";
export const locales = ["uk", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
export function getMessages(locale: string) {
  if (locale === "ru") return ru;
  if (locale === "en") return en;
  return uk;
}
