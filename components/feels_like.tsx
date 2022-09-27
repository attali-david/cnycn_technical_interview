import React from "react";
import { FiDroplet, FiThermometer } from "react-icons/fi";
import { IconContext } from "react-icons";
import { IPropsDaily } from "../types";

function FeelsLike({ daily }: IPropsDaily) {
  return (
    <div className="flex flex-col items-center p-8 rounded-md mx-4 mb-3 md:m-0 md:justify-items-center md:w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Feels</h2>
        <p className="text-sm dark:text-gray-400">{daily.feels_like}°</p>
      </div>
      <IconContext.Provider value={{ style: { color: "white" }, size: "90" }}>
        <div>
          <FiThermometer />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default FeelsLike;