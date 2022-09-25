import React from "react";
import { FaCloud } from "react-icons/fa";

function Forecast({ dates }) {
  return (
    <div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-xl font-semibold">Five Day Forecast</h1>
      <div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
        {dates?.map((day) => (
          <div className="flex flex-col items-center space-y-1" key={day.date}>
            <span className="uppercase">{day.date}</span>
            <FaCloud />
            <span>{day.max}°</span>
            <span>{day.min}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
