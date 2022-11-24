import { useState, useEffect } from "react";
import { IWeather, ICity } from "../types";
import useFetch from "./useFetch";
import useSelectedCity from "./useSelectedCity";
import { useUnitContext } from "../context/Provider";

// Retrieves weather resource given lat, lon, and units.
const useWeather = () => {
  const [weather, setWeather] = useState<IWeather>({} as IWeather);
  const { selectedCity } = useSelectedCity();
  const unit = useUnitContext();
  const { results, error, loading, getResults } = useFetch();

  useEffect(() => {
    getResults(
      `/data/2.5/forecast?lat=${selectedCity.lat}&lon=${
        selectedCity.lon
      }&appid=${process.env.NEXT_PUBLIC_WEATHER}&units=${
        !!unit ? "imperial" : "metric"
      }`
    );
    // setWeather(results);
  }, [selectedCity, getResults, unit]);
  console.log(results, loading, error);

  return results;
};

export default useWeather;
