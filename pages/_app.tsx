import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState<boolean>(true);
  const [color, setColor] = useState<string>("");

  // Color mode toggler that updates localStorage with manual preference
  function toggler() {
    if (localStorage.theme == "light") {
      localStorage.theme = "dark";
      setColor("dark");
    } else {
      localStorage.theme = "light";
      setColor("light");
    }
    setToggle(!toggle);
  }

  // Checks local storage for color mode preference and adds "dark" class at html head per Tailwind documentation.
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);

  return <Component {...pageProps} />;
}

export default MyApp;
