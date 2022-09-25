import React, { useEffect, useState } from "react";
import { FaCloud, FaSun, FaCloudRain, FaSnowflake } from "react-icons/fa";
import { IDate, IHourly } from "../types";
import Daily from "./daily";
import Forecast from "./forecast";
import Hourly from "./hourly";

/* 
    Extracts five day forecast and 24 hour forecast from weather object.
 */
function convertUTCDateToLocalDate(date) {
  var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

  var offset = date.getTimezoneOffset() / 60;
  var hours = date.getHours();

  newDate.setHours(hours - offset);

  return newDate;
}

function formatForecast(forecast) {
  const dates: IDate[] = [];
  for (const day of forecast) {
    let UTC = new Date(day.dt_txt);
    let date = UTC.toString().slice(0, 3);
    let lastIndex = dates[dates.length - 1];

    if (dates.length === 0 || lastIndex.date !== date) {
      dates.push({
        date: date,
        temp_min: Math.round(day.main.temp_min),
        temp_max: Math.round(day.main.temp_max),
        description: day.weather[0].main,
        icon: day.weather[0].icon,
      });
    } else {
      lastIndex.temp_min = Math.round(
        Math.min(lastIndex.temp_min, day.main.temp_min)
      );
      lastIndex.temp_max = Math.round(
        Math.max(lastIndex.temp_max, day.main.temp_max)
      );
    }
  }

  dates[0].hourly = [];
  for (let i = 0; i < 7; i++) {
    let hour = new Date(forecast[i].dt_txt);
    let time = hour.toLocaleTimeString("en-US", { hour: "2-digit" });

    dates[0].hourly.push({
      time: time,
      temp: Math.round(forecast[i].main.temp),
      icon: forecast[i].weather[0].icon,
    });
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

  return (
    <div className="grid md:grid-cols-2 md:grid-gap-3 items-center">
      <Forecast dates={dates} />
      <Hourly hourly={hourly} />
      <Daily daily={daily} />
    </div>
  );
}

export default Weather;
