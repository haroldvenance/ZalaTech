"use client";

import { Moon, Sun } from "lucide-react";
import { usePrefs } from "@/components/Preferences";

export default function Controls() {
  const { theme, lang, setLang, toggleTheme } = usePrefs();

  return (
    <div className="flex items-center gap-3">
      {/* Language Toggle */}
      <div className="flex rounded-full border border-zala-blue/10 dark:border-white/10 bg-zala-cream dark:bg-white/5 p-1">
        {(["fr", "en"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`rounded-full px-3 py-1 font-mono text-[10px] font-bold uppercase transition-colors ${
              lang === l
                ? "bg-zala-orange text-white shadow-sm"
                : "text-zala-blue/50 dark:text-white/50 hover:text-zala-blue dark:hover:text-white"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-zala-blue/10 dark:border-white/10 bg-zala-cream dark:bg-white/5 text-zala-blue dark:text-white hover:border-zala-orange dark:hover:border-zala-orange transition-colors"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </div>
  );
}