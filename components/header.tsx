import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Header({
  toggler,
  color,
  cities,
  search,
  setSearch,
  units,
  setUnits,
  setSelectedCity,
  selectedCity,
  getCities,
}) {
  function changeHandler(e) {
    e.preventDefault();
    let lon = e.target.value.slice(0, 6);
    let lat = e.target.value.slice(7);
    console.log(lon, lat);

    setSelectedCity({});
    (() => console.log(selectedCity))();
  }

  function submitHandler(e) {
    e.preventDefault();
    getCities(search);
  }

  // function handleSelect(result: number) {
  //   const { lon, lat } = cities[result];
  //   getWeather(lon, lat);
  // }

  return (
    <header className="p-4 relative bg-white dark:bg-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <h1 className="flex ">Weather App by David Attali</h1>
        <div>
          <form className="flex" onSubmit={(e) => submitHandler(e)}>
            <input
              type="text"
              placeholder="Search by city"
              className="block p-4 pl-10 w-[70%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setSearch(e.target.key)}
              value={search}
            />
            <label
              htmlFor="Toggle1"
              className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span>F</span>
              <span className="relative">
                <input
                  id="Toggle1"
                  type="checkbox"
                  className="hidden peer"
                  value={units}
                />
                <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
              </span>
              <span>C</span>
            </label>
          </form>
          {!!cities.length && (
            <select
              value={selectedCity}
              onChange={(e) => changeHandler(e)}
              className="w-[70%] block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50"
            >
              {cities.map((result) => (
                <option key={result.lat} value={`51.5085$-0.1257`}>
                  {`${result.name}, ${result.state}`}
                </option>
              ))}
            </select>
          )}
        </div>
        <button className="flex " onClick={toggler}>
          {color == "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
}

export default Header;
