import React from "react";
import { FiWind } from "react-icons/fi";
import { IconContext } from "react-icons";
import { IPropsDaily } from "../types";

function Wind({ daily }: IPropsDaily) {
  return (
    <div className="flex flex-col  items-center md:col-start-3 md:row-start-2 p-8 rounded-md mx-4 mb-3 md:m-0 md:w-full md:item-center sm:px-12 bg-gray-900 text-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Wind</h2>
        <p className="text-sm dark:text-gray-400">{`${daily.wind} ${
          daily.unit == true ? "MPH" : "KMH"
        }`}</p>
      </div>
      <IconContext.Provider value={{ style: { color: "white" }, size: "90" }}>
        <div>
          <FiWind />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Wind;
