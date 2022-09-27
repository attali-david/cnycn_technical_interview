import React, { useEffect, useState } from "react";
import { IDate, IWeather, IPropsWeather } from "../types";
import Daily from "./daily";
import Forecast from "./forecast";
// @ts-ignore
import Hourly from "./hourly";
import Humidity from "./humidity";
import Sunset from "./sunset";
// @ts-ignore
import Wind from "./wind";
import Map from "./map";
import FeelsLike from "./feels_like";

/* 
    Extracts five day forecast and 24 hour forecast from weather object.
 */
function formatForecast(weather: IWeather) {
  const { list: forecast } = weather;
  const dates: IDate[] = [];
  for (const day of forecast) {
    let UTC = new Date(day.dt_txt);
    let date = UTC.toString().slice(0, 3);
    let lastIndex = dates[dates.length - 1];
    let time = UTC.toLocaleTimeString("en-US", { hour: "2-digit" });

    if (dates.length === 0 || lastIndex.date !== date) {
      dates.push({
        date: date,
        temp_min: Math.round(day.main.temp_min),
        temp_max: Math.round(day.main.temp_max),
        description: day.weather[0].main,
        icon: day.weather[0].icon,
        hourly: [],
      });
    } else {
      lastIndex.temp_min = Math.round(
        Math.min(lastIndex.temp_min, day.main.temp_min)
      );
      lastIndex.temp_max = Math.round(
        Math.max(lastIndex.temp_max, day.main.temp_max)
      );
    }

    if (dates[0].hourly.length >= 0 && dates[0].hourly.length < 7) {
      dates[0].hourly.push({
        time: time,
        temp: Math.round(day.main.temp),
        icon: day.weather[0].icon,
      });
    }
  }
  dates[0].feels_like = weather.list[0].main.feels_like;
  dates[0].humidity = weather.list[0].main.humidity;
  dates[0].wind = Math.round(weather.list[0].wind.gust);
  dates[0].unit = weather.unit;
  dates[0].sunset = new Date(weather.city.sunset * 1e3).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return dates;
}

function Weather({ weather }: IPropsWeather) {
  const [dates, setDates] = useState<IDate[]>([]);
  const [daily, setDaily] = useState<IDate>();

  useEffect(() => {
    let result = formatForecast(weather);
    setDates(result);
    setDaily(result[0]);
    console.log(result);
  }, [weather]);

  return (
    daily && (
      <div className="grid grid-cols-2 md:grid-cols-4">
        <Daily daily={daily} />
        <Hourly daily={daily} />
        <Forecast dates={dates} />
        <FeelsLike daily={daily} />
        <Sunset daily={daily} />
        <Humidity daily={daily} />
        <Wind daily={daily} />
        <Map weather={weather} />
      </div>
    )
  );
}

export default Weather;
