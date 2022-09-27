import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ICity, IHeaderProps } from "../types";

const baseURL = "http://api.openweathermap.org";

const myFetch = (url: string) => {
  const test = fetch(baseURL + url, { mode: "cors" }).then((r) => r.json());
  return test;
};

function Header({ setSelectedCity, setUnit, unit }: IHeaderProps) {
  const [search, setSearch] = useState("");
  const [cities, setCities] = useState<ICity[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [toggle, setToggle] = useState<boolean>(true);
  const [color, setColor] = useState<string>("");

  // Color mode toggler that updates localStorage with manual preference
  function toggler() {
    if (localStorage.theme == "light") {
      localStorage.theme = "dark";
      setColor("dark");
    } else {
      localStorage.theme = "light";
      setColor("light");
    }
    setToggle(!toggle);
  }

  // Checks local storage for color mode preference and adds "dark" class at html head per Tailwind documentation.
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);

  async function getCities() {
    const result = await myFetch(
      `/geo/1.0/direct?q=${search}&limit=5&appid=${process.env.NEXT_PUBLIC_WEATHER}`
    );
    if (result) {
      const filter = result.filter((i) => i.country == "US");

      setCities(filter);
      setIsDropdownOpen(true);
    }
  }

  function onCitySelect(city: ICity) {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  }

  function submitHandler(e) {
    e.preventDefault();
    getCities();
  }

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <label
              htmlFor="Toggle1"
              className="inline-flex  items-center space-x-4 cursor-pointer dark:text-gray-100"
            >
              <span>F</span>
              <span className="relative">
                <input
                  id="Toggle1"
                  type="checkbox"
                  value={unit}
                  onChange={() => setUnit(!unit)}
                  className="hidden peer"
                />
                <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
              </span>
              <span>C</span>
            </label>
          </form>
          {isDropdownOpen && cities.length && (
            <ul className="w-[70%] block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50">
              {cities.map((result) => (
                <li
                  className="dark:hover:bg-gray-400 overflow-hidden"
                  key={result.lat + result.lon}
                  onClick={() => onCitySelect(result)}
                >
                  {`${result.name}, ${result.state}`}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className="flex " onClick={() => toggler()}>
          {color == "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
}

export default Header;
