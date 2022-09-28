import React from "react";
import { IconContext } from "react-icons";
import { FaMoon, FaSun } from "react-icons/fa";
import { IColorModeProps } from "../types";

function ColorMode({ toggler, color }: IColorModeProps) {
  return (
    <button
      className="flex items-center w-0 md:w-6 invisible md:visible"
      onClick={() => toggler()}
    >
      <IconContext.Provider value={{ size: "100" }}>
        {color == "light" ? <FaMoon /> : <FaSun />}
      </IconContext.Provider>
    </button>
  );
}

export default ColorMode;
