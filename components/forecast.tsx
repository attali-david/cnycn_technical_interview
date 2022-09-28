import Image from "next/image";
import React from "react";
import { IPropsDates } from "../types";

function Forecast({ dates }: IPropsDates) {
  return (
    <div className="col-span-2 md:col-span-2 max-w-md p-8 mx-4 mb-3 md:m-auto md:mb-0 rounded-lg bg-gray-900 text-gray-100 overflow-hidden">
      <h1 className="text-xl font-semibold">Five Day Forecast</h1>
      <div className="flex justify-between mt-8 space-x-2 md:space-x-12 dark:text-gray-400">
        {dates?.map((day) => (
          <div className="flex flex-col items-center space-y-1" key={day.date}>
            <span className="uppercase">{day.date}</span>
            <div className="w-10 h-10 overflow-hidden">
              <Image
                width={100}
                height={100}
                src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.description}
              />
            </div>
            <span>{day.temp_max}°</span>
            <span>{day.temp_min}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
