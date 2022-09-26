import React from "react";
import { FiWind } from "react-icons/fi";
import { IconContext } from "react-icons";

function Wind({ daily }) {
  return (
    <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Wind</h2>
        <p className="text-sm dark:text-gray-400">{daily.wind}MPH</p>
      </div>
      <IconContext.Provider value={{ style: { color: "white" }, size: 90 }}>
        <div>
          <FiWind />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Wind;
