import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Header from "../components/header";
import { IWeather, ICity } from "../types";
import Weather from "../components/weather";
// import Map from "../components/map";

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
    setWeather(result);
  }

  useEffect(() => {
    getWeather(40.7127281, -74.0060152, unit);
  }, []);

  useEffect(() => {
    if (!selectedCity) return;
    getWeather(selectedCity.lat, selectedCity.lon, unit);
  }, [selectedCity, unit]);

  return (
    <div className="h-screen text-black dark:bg-gray-800 dark:text-gray-100">
      <Header setSelectedCity={setSelectedCity} setUnit={setUnit} unit={unit} />
      {weather.cod && <Weather weather={weather} />}
      {/* {weather && <Map lat={selectedCity?.lat} lon={selectedCity?.lon} />} */}
    </div>
  );
};

export default Home;
