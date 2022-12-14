import React from "react";
import { FiDroplet } from "react-icons/fi";
import { IconContext } from "react-icons";
import { IPropsDaily } from "../types";

function Humidity({ daily }: IPropsDaily) {
  return (
    <div className="flex flex-col md:col-start-4 md:row-start-2 items-center p-8 rounded-md mx-4 mb-3 md:m-0 md:w-full sm:px-12 bg-gray-900 text-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Humidity</h2>
        <p className="text-lg pb-4 inline-block dark:text-gray-400">
          {daily.humidity}%
        </p>
      </div>
      <IconContext.Provider value={{ style: { color: "white" }, size: "90" }}>
        <div>
          <FiDroplet />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Humidity;
