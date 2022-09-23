import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Header from "../components/header";

const baseURL = "http://api.openweathermap.org";
const myFetch = (url) => {
  return fetch(baseURL + url, { mode: "cors" }).then((r) => r.json());
};

function MyApp({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(true);
  const [color, setColor] = useState("");
  const [submit, setSubmit] = useState(false);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState({});
  const [select, setSelect] = useState(false);
  const [search, setSearch] = useState("");
  const [units, setUnits] = useState("F");
  const [selectedCity, setSelectedCity] = useState(null);

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

  // useEffect(() => {
  //   console.log(selectedCity);
  //   getWeather(selectedCity?.lon, selectedCity?.lat, units);
  // }, [selectedCity, units]);

  async function getCities(city) {
    try {
      const results = await myFetch(
        `/geo/1.0/direct?q=${city}&limit=5&appid=376da627904ba55ed8b5abd675b36137`
      );
      setCities(results.filter((i) => i.country == "US"));
    } catch (err) {
      console.error(err);
    }
  }

  async function getWeather(lon: number, lat: number, units: string) {
    try {
      const forecast = await myFetch(
        `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER}&units=imperial`
      );
      setWeather({ forecast });
      setSelect(true);
    } catch (err) {
      console.error(err);
    }
    console.log(weather);
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
        units={units}
        setUnits={setUnits}
        setSelectedCity={setSelectedCity}
        selectedCity={selectedCity}
      />
      <Component {...pageProps} weather={weather} selectedCity={selectedCity} />
    </div>
  );
}

export default MyApp;
