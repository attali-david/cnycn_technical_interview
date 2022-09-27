import React from "react";
import Image from "next/image";
import { IPropsDaily } from "../types";

function Daily({ daily }: IPropsDaily) {
  const timeElapsed = Date.now();
  const date = new Date(timeElapsed);

  return (
    <div className="flex flex-col md:flex-row col-span-2 md:col-start-1 md:row-start-1 md:order-first m-auto items-center p-8 rounded-md md:rounded-lg max-w-md px-12 md:bg-gray-900 md:text-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-semibold">{daily.city}</h2>
        <p className="text-sm dark:text-gray-400">{date.toDateString()}</p>
      </div>
      <div className=" overflow-hidden">
        <Image
          width={400}
          height={400}
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
