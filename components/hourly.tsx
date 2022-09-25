import React from "react";
import Image from "next/image";

function Hourly({ hourly }) {
  return (
    <div className="max-w-md p-8 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-xl font-semibold">Hourly Forecast</h1>
      <div className="flex justify-between overflow-x-auto mt-8 space-x-4 dark:text-gray-400">
        {hourly.map((hour) => (
          <div
            className="flex flex-col justify-center items-center space-y-1"
            key={hour.time}
          >
            <span className="uppercase">{hour.time}</span>
            <div className="w-10 h-10 overflow-hidden">
              <Image
                width={100}
                height={100}
                src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`}
                alt={hour.description}
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
