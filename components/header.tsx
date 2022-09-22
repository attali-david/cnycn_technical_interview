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
            className="bg-gray-800 w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
            onChange={changeHandler}
          />
          <select>
            <option>F</option>
            <option>C</option>
          </select>
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
