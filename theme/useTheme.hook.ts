import { useContext } from "react";
import { ThemeContext } from "./theme-provider";

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme has error");
  return ctx;
};
