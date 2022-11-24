import { useState, useEffect } from "react";
import { IWeather, ICity } from "../types";

const useSelectedCity = () => {
  const [selectedCity, setSelectedCity] = useState<ICity>({
    country: "US",
    name: "New York",
    state: "NY",
    lat: 40.70589455795907,
    lon: -74.01076921164105,
  });

  // Bubbles up state of selectedCity and toggles dropdown menu after user-click.
  function onCitySelect(city: ICity) {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  }

  return { onCitySelect, selectedCity };
};

export default useSelectedCity;
