import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Header from "../components/header";
import { IWeather, ICity } from "../types";
import Weather from "../components/weather";

const baseURL = "http://api.openweathermap.org";
const myFetch = (url) => {
  return fetch(baseURL + url, { mode: "cors" }).then((r) => r.json());
};

const Home: NextPage = () => {
  const [weather, setWeather] = useState<IWeather | null>(null);
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null);

  async function getWeather() {
    if (!selectedCity) return;
    const result = await myFetch(
      `/data/2.5/forecast?lat=${selectedCity.lat}&lon=${selectedCity.lon}&appid=8bef1d80c11bf6b28961f49525e7eb3b&units=imperial`
    );
    setWeather(result);
  }

  useEffect(() => {
    if (!selectedCity) return;
    getWeather();
  }, [selectedCity]);

  return (
    <div className="h-screen bg-white text-black dark:bg-gray-800 dark:text-gray-100">
      <Header setSelectedCity={setSelectedCity} />
      {weather && <Weather weather={weather} />}
    </div>
  );
};

export default Home;
