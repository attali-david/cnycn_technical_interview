import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Header({
  toggler,
  color,
  setSearch,
  submit,
  setSubmit,
  cities,
  getCities,
  search,
  getWeather,
}) {
  function changeHandler(e) {
    e.preventDefault();
    setSearch({ city: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    getCities(search.city);
    setSubmit(!submit);
  }

  function handleSelect(result: number) {
    const { lon, lat } = cities[result];
    getWeather(lon, lat);
  }

  return (
    <header className="p-4 relative bg-white dark:bg-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <h1 className="flex ">Weather App by David Attali</h1>
        <form className="flex" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search by city"
            className="bg-gray-800 w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-300  dark:text-gray-100 focus:dark:bg-white focus:dark:border-violet-400"
            onChange={changeHandler}
          />
          <label
            for="Toggle1"
            className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
          >
            <span>F</span>
            <span className="relative">
              <input id="Toggle1" type="checkbox" className="hidden peer" />
              <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
              <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
            </span>
            <span>C</span>
          </label>
        </form>
        <div>
          {submit && (
            <select onChange={(e) => handleSelect(e.target.selectedIndex)}>
              {cities.map((result) => (
                <option key={result.lat} value={result}>
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
