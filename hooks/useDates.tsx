import { useState, useEffect } from "react";
import { IDate } from "../types";
import formatForecast from "../utils/format_forecast";
import useWeather from "./useWeather";

const useDates = () => {
  // TODO
  // Derived State shouldn't be stored as state
  const [dates, setDates] = useState<IDate[]>([]);
  const [daily, setDaily] = useState<IDate>();
  const weather = useWeather();

  useEffect(() => {
    if (weather) {
      let result = formatForecast(weather);
      setDates(result);
      setDaily(result[0]);
    }
  }, [weather]);

  return [dates, daily, weather];
};

export default useDates;
