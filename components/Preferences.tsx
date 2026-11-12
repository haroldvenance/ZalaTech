"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, STORAGE_KEYS, type Dict, type Lang, type Theme } from "@/lib/i18n";

type Prefs = {
  theme: Theme;
  lang: Lang;
  t: Dict;
  toggleTheme: () => void;
  setLang: (lang: Lang) => void;
};

const PreferencesContext = createContext<Prefs | null>(null);

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.classList.contains("dark") ? "dark" : "light");
    setLangState(root.lang === "en" ? "en" : "fr");
  }, []);

  const t = dictionaries[lang];

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const next: Theme = theme === "dark" ? "light" : "dark";
    if (next === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEYS.theme, next);
    setTheme(next);
  }, [theme]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEYS.lang, next);
    document.documentElement.lang = next;
  }, []);

  const value = useMemo(() => ({ theme, lang, t, toggleTheme, setLang }), [theme, lang, t, toggleTheme, setLang]);

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePrefs() {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error("usePrefs doit être utilisé dans <PreferencesProvider>");
  return ctx;
}