import React from "react";
import { FaCloud } from "react-icons/fa";

function Hourly({ hourly }) {
  return (
    <div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-xl font-semibold">Hourly Forecast</h1>
      <div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
        {hourly.map((hour) => (
          <div className="flex flex-col items-center space-y-1" key={hour.time}>
            <span className="uppercase">{hour.time}</span>
            <FaCloud />
            <span>{hour.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hourly;
