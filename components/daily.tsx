import React from "react";
import Image from "next/image";

function Daily({ daily }) {
  const timeElapsed = Date.now();
  const date = new Date(timeElapsed);

  return (
    <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Today</h2>
        <p className="text-sm dark:text-gray-400">{date.toDateString()}</p>
      </div>
      <div className="w-full h-full overflow-hidden">
        <Image
          width={500}
          height={500}
          src={`http://openweathermap.org/img/wn/${daily.icon}@2x.png`}
          alt={daily.description}
        />
      </div>
      <div className="mb-2 text-3xl font-semibold">
        {" "}
        {daily.temp_max}°<span className="mx-1 font-normal">/</span>
        {daily.temp_min}°
      </div>
      <p className="dark:text-gray-400 capitalize">{daily.description}</p>
    </div>
  );
}

export default Daily;
