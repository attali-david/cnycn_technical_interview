import React, { useEffect, useState } from "react";
import { ICity, IHeaderProps } from "../types";
import Nav from "./nav";

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

  // Retrieves payload with cities that match user-input and toggles dropdown menu with list of cities.
  async function getCities() {
    const result = await myFetch(
      `/geo/1.0/direct?q=${search}&limit=5&appid=${process.env.NEXT_PUBLIC_WEATHER}`
    );
    if (result) {
      const filter = result.filter((i: ICity) => i.country == "US");

      setCities(filter);
      setIsDropdownOpen(true);
    }
  }

  // Bubbles up state of selectedCity and toggles dropdown menu after user-click.
  function onCitySelect(city: ICity) {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  }

  //
  function submitHandler(e: Event) {
    e.preventDefault();
    getCities();
  }

  return (
    <Nav
      unit={unit}
      setUnit={setUnit}
      search={search}
      setSearch={setSearch}
      onCitySelect={onCitySelect}
      toggler={toggler}
      cities={cities}
      isDropdownOpen={isDropdownOpen}
      color={color}
      submitHandler={submitHandler}
    />
  );
}

export default Header;
