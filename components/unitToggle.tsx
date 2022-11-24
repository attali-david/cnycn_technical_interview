import React from "react";
import { useUnitUpdateContext, useUnitContext } from "../context/Provider";

function UnitToggle() {
  const setUnit = useUnitUpdateContext();
  const unit = useUnitContext();
  return (
    <label
      htmlFor="Toggle1"
      className="inline-flex  items-center space-x-4 cursor-pointer dark:text-gray-100"
    >
      <span>F</span>
      <span className="relative">
        <input
          id="Toggle1"
          type="checkbox"
          // @ts-ignore
          value={unit}
          onChange={() => setUnit(!unit)}
          className="hidden peer"
        />
        <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
      </span>
      <span>C</span>
    </label>
  );
}

export default UnitToggle;
