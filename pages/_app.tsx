import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("");
  const [search, setSearch] = useState({ city: "", unit: "F" });
  const [submit, setSubmit] = useState(false);
  const [cities, setCities] = useState([]);

  // Color mode toggler that updates localStorage with manual preference
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

  async function getCities(city) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=8bef1d80c11bf6b28961f49525e7eb3b`,
        { mode: "cors" }
      );
      const cities = await response.json();
      const results = await cities;
      setCities(results);
    } catch (err) {
      console.error(err);
    }
  }
  console.log(cities);

  async function getWeather(lon: number, lat: number) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8bef1d80c11bf6b28961f49525e7eb3b`,
        { mode: "cors" }
      );
      const weather = await response.json();
      const results = await weather;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="h-screen bg-white text-black dark:bg-gray-800 dark:text-gray-100">
      <Header
        toggler={toggler}
        color={color}
        setSearch={setSearch}
        submit={submit}
        setSubmit={setSubmit}
        cities={cities}
        getCities={getCities}
        search={search}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
