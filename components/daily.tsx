import React from "react";
import Image from "next/image";
import { IPropsDaily } from "../types";
import getTime from "../utils/get_time";

function Daily({ daily }: IPropsDaily) {
  const date = getTime();

  return (
    <div className="flex flex-col m-auto col-span-2 items-center p-8 rounded-md overflow-hidden max-w-md px-12 md:min-w-full md:col-start-1 md:row-start-1 md:order-first md:rounded-lg md:my-0 md:flex-row md:justify-between md:bg-gray-900 md:text-gray-100">
      <div className="text-center">
        <h2 className="text-3xl inline-block md:text-xl font-semibold">
          {daily.city}
        </h2>
        <p className="text-lg dark:text-gray-400">{date.toDateString()}</p>
      </div>
      <div className="overflow-hidden">
        <Image
          width={200}
          height={200}
          src={`http://openweathermap.org/img/wn/${daily.icon}@2x.png`}
          alt={daily.description}
        />
      </div>
      <div className="flex flex-col mb-2 text-3xl font-semibold items-center">
        <div>
          {" "}
          {daily.temp_max}°<span className="mx-1 font-normal">/</span>
          {daily.temp_min}°
        </div>
        <p className="dark:text-gray-400 capitalize">{daily.description}</p>
      </div>
    </div>
  );
}

export default Daily;
