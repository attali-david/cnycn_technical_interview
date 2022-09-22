import React, { useEffect } from "react";
import { FaCloud } from "react-icons/fa";

function Forecast({ weather }) {
  const { forecast } = weather;
  const dates = [];

  useEffect(() => {
    for (const day of forecast.list) {
      let UTC = new Date(day.dt_txt).toString();
      let date = UTC.slice(0, 3);
      if (dates.length === 0 || dates[dates.length - 1][date] !== date) {
        dates.push({ date: date, min: Infinity, max: -Infinity });
      } else {
        console.log("here");
        console.log(dates[dates.length - 1].min, day.main.temp_min);
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
    console.log(dates);
  }, [weather]);

  return (
    <div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
      <h1>Five Day Forecast</h1>
      <div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
        {dates.map((day) => (
          <div className="flex flex-col items-center space-y-1" key={day.date}>
            <span className="uppercase">{day.date}</span>
            <FaCloud />
            <span>
              {day.max}° / {day.min}°
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
