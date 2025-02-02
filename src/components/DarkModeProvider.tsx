import { ReactNode } from "react";
// @ts-expect-error
import { preload } from "./canvas/magic_logic.js";
import { useState, createContext, useEffect } from "react";

const DarkModeContext = createContext({
  theme: "dark",
  isDark: true,
  toggleDarkMode: () => {},
});

const DarkModeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("dark");

  const toggleDarkMode = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setTimeout(() => {
      const magicElement = document.getElementById("magic");
      if (magicElement) {
        magicElement.innerHTML = "";
      }
      preload();
    }, 0);
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (theme === "dark") {
      if (htmlElement) {
        htmlElement.style.colorScheme = "dark";
        htmlElement?.classList?.add?.("dark");
      }
      localStorage.setItem("theme", "dark");
    } else {
      if (htmlElement) {
        htmlElement.style.colorScheme = "light";
        htmlElement?.classList?.remove?.("dark");
      }
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <DarkModeContext.Provider
      value={{ theme, isDark: theme === "dark", toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
