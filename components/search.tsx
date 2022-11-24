import React from "react";
import useSearch from "../hooks/useSearch";
import DropdownMenu from "./dropdown_menu";
import Form from "./form";

function Search() {
  const { getCities, setSearch, search, isDropdownOpen, cities } = useSearch();

  return (
    <div>
      <Form search={search} setSearch={setSearch} getCities={getCities} />
      <DropdownMenu isDropdownOpen={isDropdownOpen} cities={cities} />
    </div>
  );
}

export default Search;
