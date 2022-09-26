import React, { useEffect, useState } from "react";
import { IDate, IHourly } from "../types";
import Daily from "./daily";
import Forecast from "./forecast";
import Hourly from "./hourly";
import Humidity from "./humidity";
import Sunset from "./sunset";
import Wind from "./wind";

/* 
    Extracts five day forecast and 24 hour forecast from weather object.
 */
function formatForecast(weather) {
  const { list: forecast } = weather;

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
        humidity: weather.list[0].main.humidity,
        wind: Math.round(weather.list[0].wind.gust),
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
  dates[0].sunset = new Date(weather.city.sunset * 1e3).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

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
  const [dates, setDates] = useState<IDate[]>([]);
  const [hourly, setHourly] = useState<IHourly[]>([]);
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    let result = formatForecast(weather);
    let today = result[0];

    setDates(result);
    setHourly(today.hourly);
    setDaily(today);
  }, [weather]);

  useEffect(() => {
    console.log(weather);
  }, [daily]);

  return (
    <div className="grid grid-cols-2">
      <Forecast dates={dates} />
      <Hourly hourly={hourly} />
      <Daily daily={daily} />
      <Sunset daily={daily} />
      <Humidity daily={daily} />
      <Wind daily={daily} />
    </div>
  );
}

export default Weather;
