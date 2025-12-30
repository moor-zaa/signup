"use client";

import { useLocale } from "@/i18n/dictionary-provider";

const LangSwitcher = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-2 scale-90">
      <span className="text-xs text-(--text-secondary) font-bold">FA</span>
      <div className="relative inline-block w-10 align-middle select-none">
        <input
          type="checkbox"
          id="lang-toggle"
          checked={locale === "en"}
          onClick={() => setLocale(locale === "en" ? "fa" : "en")}
          onChange={() => {}}
          className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-(--bg-primary) border-2 border-(--border-color) appearance-none cursor-pointer transition-all duration-300"
        />
        <label
          htmlFor="lang-toggle"
          className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
        ></label>
      </div>
      <span className="text-xs text-(--text-secondary) font-bold">EN</span>
    </div>
  );
};
export default LangSwitcher;
