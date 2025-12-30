"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useTransition,
} from "react";
import { Locale } from "./config";
import { useRouter } from "next/navigation";
import { Dictionary } from "./types";
import { getDictionary } from "./get-disctionary";

type I18nContextType = {
  locale: Locale;
  dictionary: Dictionary;
  setLocale: (locale: Locale) => void;
  isPending: boolean;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  children,
  initialLocale,
  initialDictionary,
}: {
  children: ReactNode;
  initialLocale: Locale;
  initialDictionary: Dictionary;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [dictionary, setDictionary] = useState<Dictionary>(initialDictionary);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const setLocale = (newLocale: Locale) => {
    startTransition(async () => {
      setLocaleState(newLocale);
      let dict = await getDictionary(newLocale);
      setDictionary(dict);
      document.cookie = `NEXT_LOCALE=${newLocale};path=/`;
      router.refresh();
      const root = document.documentElement;
      root.setAttribute("dir", newLocale === "fa" ? "rtl" : "ltr");
      root.setAttribute("lang", newLocale);
    });
  };

  return (
    <I18nContext.Provider value={{ locale, dictionary, setLocale, isPending }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useDictionary() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useDictionary must be used within I18nProvider");
  }
  return context.dictionary;
}

export function useLocale() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useLocale must be used within I18nProvider");
  }
  return {
    locale: context.locale,
    setLocale: context.setLocale,
    isPending: context.isPending,
  };
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
