import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("");

  function toggler(): void {
    if (localStorage.theme == "light") {
      localStorage.theme = "dark";
      setColor("dark");
    } else {
      localStorage.theme = "light";
      setColor("light");
    }
    setToggle(!toggle);
  }

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

  return (
    <div className="h-screen bg-white-50 text-black dark:bg-gray-800 dark:text-gray-100">
      <Header toggler={toggler} color={color} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
