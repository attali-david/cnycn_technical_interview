import { useState, useCallback, useEffect } from "react";
import { ICity, IHeaderProps } from "../types";
import useFetch from "./useFetch";
import useToggle from "./useToggle";

const useSearch = () => {
  const [search, setSearch] = useState("");
  // const [cities, setCities] = useState<ICity[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { results, error, loading, getResults } = useFetch();
  let cities;

  // Retrieves payload with cities that match user-input and toggles dropdown menu with list of cities.
  const getCities = useCallback(() => {
    getResults(
      `/geo/1.0/direct?q=${search}&limit=5&appid=${process.env.NEXT_PUBLIC_WEATHER}`
    );
  }, [search, getResults]);

  if (results) {
    cities = results.filter((i: ICity) => i.country == "US");
    setIsDropdownOpen((prev) => !prev);
  }

  return { getCities, setSearch, search, isDropdownOpen, cities };
};

export default useSearch;
