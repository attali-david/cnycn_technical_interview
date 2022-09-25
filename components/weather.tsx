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

    hour = hour > 12 ? hour - 12 : hour;

    if (dates.length === 0 || dates[dates.length - 1].date !== date) {
      dates.push({
        date: date,
        min: day.main.temp_min,
        max: day.main.temp_max,
        description: day.weather.main,
      });
    } else if (dates.length === 0 || dates[0].date === date) {
      if (dates[0].hourly)
        dates[0].hourly.push({ time: hour, temp: day.main.temp });
      else dates[0].hourly = [{ time: hour, temp: day.main.temp }];
    } else {
      dates[dates.length - 1].min = Math.min(
        dates[dates.length - 1].min,
        day.main.temp_min
      );
      dates[dates.length - 1].max = Math.max(
        dates[dates.length - 1].max,
        day.main.temp_max
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
    console.log(weather);
  }, [daily]);

  return (
    <div className="container">
      <Forecast dates={dates} />
      <Hourly hourly={hourly} />
      {/* <Daily daily={daily} /> */}
    </div>
  );
}

export default Weather;
