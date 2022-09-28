import React from "react";
import { INavProps } from "../types";
import ColorMode from "./color_mode";
import Form from "./form";
import Mail from "./mail";

function Nav({
  unit,
  setUnit,
  search,
  setSearch,
  onCitySelect,
  toggler,
  cities,
  isDropdownOpen,
  color,
  submitHandler,
}: INavProps) {
  return (
    <header className="bg-white border-gray-200 md:mx-32 p-4 relative dark:bg-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <Form
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
        <div className="flex md:justify-between ml-4 w-[10%]">
          <Mail />
          <ColorMode toggler={toggler} color={color} />
        </div>
      </div>
    </header>
  );
}

export default Nav;
