import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

const getSystemPref = (): Theme =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const readInitialTheme = (): Theme => {
  const stored = localStorage.getItem("theme") as Theme | null;
  return stored ?? getSystemPref();
};

const applyTheme = (theme: Theme) => {
  const html = document.documentElement;
  html.setAttribute("data-theme", theme); // wichtig: dein CSS liest [data-theme="dark"]
  localStorage.setItem("theme", theme);
};

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => readInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // Wenn sich das System‑Theme ändert, nachziehen
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("theme");
      // Nur anpassen, wenn der User nichts explizit gewählt hat
      if (!stored) setTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <button
      aria-label="Theme umschalten"
      onClick={toggle}
      className="p-2 rounded-lg bg-arvo-light/50 dark:bg-arvo-dark/50 text-arvo-dark dark:text-white hover:text-arvo-accent transition-all duration-300"
    >
      {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}
