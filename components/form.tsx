import React from "react";
import { IFormProps } from "../types";

function Form({
  unit,
  setUnit,
  search,
  setSearch,
  onCitySelect,
  cities,
  isDropdownOpen,
  submitHandler,
}: IFormProps) {
  return (
    <div>
      <div className="flex">
        <form
          className="flex relative"
          onSubmit={(e: React.FormEvent<HTMLFormElement>): void =>
            // @ts-ignore
            submitHandler(e)
          }
        >
          <input
            type="text"
            placeholder="Search by city"
            className="w-full mr-6 block p-4 pl-10 text-sm md:text-md text-gray-900 placeholder:italic bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
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
      </div>
      {isDropdownOpen && cities.length && (
        <ul className="block p-2 mb-6 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50">
          {cities.map((result) => (
            <li
              className="dark:hover:bg-gray-400 md:overflow-hidden"
              key={result.lat + result.lon}
              onClick={() => onCitySelect(result)}
            >
              {`${result.name}, ${result.state}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Form;
