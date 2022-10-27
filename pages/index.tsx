import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Header from "../components/header";
import { IWeather, ICity } from "../types";
import Weather from "../components/weather";

const baseURL = "//api.openweathermap.org";
const myFetch = (url: string) => {
  return fetch(baseURL + url, { mode: "cors" }).then((r) => r.json());
};

const Home: NextPage = () => {
  const [weather, setWeather] = useState<IWeather>({} as IWeather);
  const [selectedCity, setSelectedCity] = useState<ICity>({
    country: "US",
    name: "New York",
    state: "NY",
    lat: 40.70589455795907,
    lon: -74.01076921164105,
  });
  const [unit, setUnit] = useState<boolean>(true);

  // Retrieves weather resource given lat, lon, and units.
  async function getWeather(lat: number, lon: number, unit: boolean) {
    const result = await myFetch(
      `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
        process.env.NEXT_PUBLIC_WEATHER
      }&units=${!!unit ? "imperial" : "metric"}`
    );
    result.unit = unit;

    setWeather(result);
  }

  // Retrieves weather resource for CNYCN on initial render of application.
  useEffect(() => {
    getWeather(selectedCity.lat, selectedCity.lon, true);
  }, []);

  // Retrieves weather resource for selectedCity based on input every time city or unit changes.
  useEffect(() => {
    if (!selectedCity) return;
    getWeather(selectedCity.lat, selectedCity.lon, unit);
  }, [selectedCity, unit]);

  return (
    <div className="min-h-full md:min-h-screen bg-white pb-16 text-black dark:bg-gray-800 dark:text-gray-100">
      <Header setSelectedCity={setSelectedCity} setUnit={setUnit} unit={unit} />
      {weather.cod && <Weather weather={weather} />}
    </div>
  );
};

export default Home;
