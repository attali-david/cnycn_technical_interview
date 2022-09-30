import React from "react";
import { FiSunset } from "react-icons/fi";
import { IconContext } from "react-icons";
import { IPropsDaily } from "../types";

function Sunset({ daily }: IPropsDaily) {
  return (
    <div className="flex flex-col items-center p-8 rounded-md md:col-start-4 md:row-start-1 mx-4 mb-3 md:m-0 md:w-full sm:px-12 bg-gray-900 text-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Sunset</h2>
        <p className="text-lg pb-4 inline-block dark:text-gray-400">
          {daily.sunset}
        </p>
      </div>
      <IconContext.Provider value={{ style: { color: "white" }, size: "90" }}>
        <div>
          <FiSunset />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Sunset;
