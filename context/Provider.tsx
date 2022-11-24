import { useContext, createContext, useState, useEffect } from "react";

const UnitContext = createContext(true);
const UnitUpdateContext = createContext();
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export const useUnitContext = () => {
  return useContext(UnitContext);
};

export const useUnitUpdateContext = () => {
  return useContext(UnitUpdateContext);
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdateContext = () => {
  return useContext(ThemeUpdateContext);
};

const Provider = ({ children }) => {
  const [unit, setUnit] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>("light");

  // // Checks local storage for color mode preference and adds "dark" class at html head per Tailwind documentation.
  // useEffect(() => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  // Color mode toggler that updates localStorage with manual preference
  function toggleTheme() {
    if (localStorage.theme == "light") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        <UnitContext.Provider value={unit}>
          <UnitUpdateContext.Provider value={setUnit}>
            {children}
          </UnitUpdateContext.Provider>
        </UnitContext.Provider>
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
