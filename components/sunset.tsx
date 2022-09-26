import React from "react";
import { FiSunset } from "react-icons/fi";
import { IconContext } from "react-icons";

function Sunset({ daily }) {
  return (
    <div className="flex flex-col items-center p-8 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-semibold">Sunset</h2>
        <p className="text-sm dark:text-gray-400">{daily.sunset}</p>
      </div>
      <IconContext.Provider value={{ style: { color: "yellow" }, size: 90 }}>
        <div>
          <FiSunset />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Sunset;
