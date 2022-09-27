import React from "react";
import Image from "next/image";
import { IPropsDaily } from "../types";

function Hourly({ daily }: IPropsDaily) {
  return (
    <div className="col-span-2 md:col-span-1 max-w-md p-8 mx-4 mb-3 md:mx-auto grid-span-2 md:col-start-0 md:row-start-3 rounded-lg dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-xl font-semibold">Hourly Forecast</h1>
      <div className="flex justify-between scrollbar-hide overflow-x-auto mt-8 space-x-4 dark:text-gray-400">
        {daily?.hourly.map((hour) => (
          <div
            className="flex flex-col justify-center items-center space-y-1"
            key={hour.time}
          >
            <span className="uppercase w-12">{hour.time}</span>
            <div className="w-10 h-10 overflow-hidden">
              <Image
                width={100}
                height={100}
                src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`}
                alt={daily.description}
              />
            </div>
            <span>{hour.temp}°</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hourly;
