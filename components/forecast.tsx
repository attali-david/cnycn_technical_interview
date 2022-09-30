import Image from "next/image";
import React from "react";
import { IPropsDates } from "../types";

function Forecast({ dates }: IPropsDates) {
  return (
    <div className="col-span-2 rounded-lg p-8 mx-4 mb-3 max-w-md md:min-w-full md:col-span-2  md:m-auto md:m-0 overflow-hidden bg-gray-900 text-gray-100 ">
      <h1 className="text-xl font-semibold">Five Day Forecast</h1>
      <div
        className="flex mt-8 space-x-2 md:space-x-0
      md:justify-between md:px-[5%] dark:text-gray-400"
      >
        {dates?.map((day) => (
          <div
            className="flex flex-col items-center space-y-1 md:justify-between"
            key={day.date}
          >
            <span className="uppercase">{day.date}</span>
            <div className="w-10 h-10 overflow-hidden">
              <Image
                width={100}
                height={100}
                src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.description}
              />
            </div>
            <div className="flex flex-col">
              <span>{day.temp_max}°</span>
              <span>{day.temp_min}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
