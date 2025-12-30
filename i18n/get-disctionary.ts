import { Locale } from "./config";

const dictionaries = {
  en: () => import("./disctionaries/en.json").then((m) => m.default),
  fa: () => import("./disctionaries/fa.json").then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}
