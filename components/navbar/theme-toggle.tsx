"use client";

import { useTheme } from "@/theme/useTheme.hook";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

const ICON_SIZE = 22;

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const onToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={() => onToggle()}
      className="w-8 h-8 rounded-full flex items-center justify-center text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--border-color) transition"
    >
      {theme === "dark" ? (
        <SunIcon size={ICON_SIZE} />
      ) : (
        <MoonIcon size={ICON_SIZE} />
      )}
    </button>
  );
};

export default ThemeToggle;
