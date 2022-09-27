import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Header from "../components/header";
import { IWeather, ICity } from "../types";
import Weather from "../components/weather";

const baseURL = "http://api.openweathermap.org";
const myFetch = (url: string) => {
  return fetch(baseURL + url, { mode: "cors" }).then((r) => r.json());
};

const Home: NextPage = () => {
  const [weather, setWeather] = useState<IWeather>({} as IWeather);
  const [selectedCity, setSelectedCity] = useState<ICity | null>(null);
  const [unit, setUnit] = useState<boolean>(true);

  async function getWeather(lat: number, lon: number, unit: boolean) {
    const result = await myFetch(
      `/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
        process.env.NEXT_PUBLIC_WEATHER
      }&units=${!!unit ? "imperial" : "metric"}`
    );
    result.unit = unit;
    console.log(unit);

    setWeather(result);
  }

  useEffect(() => {
    getWeather(40.7128, -74.006, unit);
  }, []);

  useEffect(() => {
    if (!selectedCity) return;
    getWeather(selectedCity.lat, selectedCity.lon, unit);
  }, [selectedCity, unit]);

  return (
    <div className="h-full md:h-screen bg-white text-black dark:bg-gray-800 dark:text-gray-100">
      <Header setSelectedCity={setSelectedCity} setUnit={setUnit} unit={unit} />
      {weather.cod && <Weather weather={weather} />}
    </div>
  );
};

export default Home;
