import React, { useEffect, useState } from "react";
import { FaCloud, FaSun, FaCloudRain, FaSnowflake } from "react-icons/fa";
import { IDate, IHourly } from "../types";
import Daily from "./daily";
import Forecast from "./forecast";
import Hourly from "./hourly";

/* 
    Extracts relevant daily forecast from weather object.
 */
function formatForecast(forecast) {
  const dates: IDate[] = [];
  for (const day of forecast) {
    let UTC = new Date(day.dt_txt);
    let date = UTC.toString().slice(0, 3);
    let hour = UTC.getUTCHours();
    let lastIndex = dates[dates.length - 1];

    hour = hour > 12 ? hour - 12 : hour;

    if (dates.length === 0 || lastIndex.date !== date) {
      dates.push({
        date: date,
        temp_min: Math.round(day.main.temp_min),
        temp_max: Math.round(day.main.temp_max),
        description: day.weather[0].main,
        icon: day.weather[0].icon,
      });
    } else if (dates.length === 0 || dates[0].date === date) {
      if (dates[0].hourly)
        dates[0].hourly.push({ time: hour, temp: Math.round(day.main.temp) });
      else dates[0].hourly = [{ time: hour, temp: Math.round(day.main.temp) }];
    } else {
      lastIndex.temp_min = Math.round(
        Math.min(lastIndex.temp_min, day.main.temp_min)
      );
      lastIndex.temp_max = Math.round(
        Math.max(lastIndex.temp_max, day.main.temp_max)
      );
    }
  }
  return dates;
}

function Weather({ weather }) {
  const { list: forecast } = weather;
  const [dates, setDates] = useState<IDate[]>([]);
  const [hourly, setHourly] = useState<IHourly[]>([]);
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    let result = formatForecast(forecast);
    let today = result[0];

    setDates(result);
    setHourly(today.hourly);
    setDaily(today);
  }, [weather]);

  useEffect(() => {
    console.log(forecast, daily, hourly);
  }, [daily]);

  return (
    <div className="container grid grid-cols-2 grid-gap-3">
      <Forecast dates={dates} />
      <Hourly hourly={hourly} />
      <Daily daily={daily} />
    </div>
  );
}

export default Weather;
