import React from "react";
import { IconContext } from "react-icons";
import { FaMoon, FaSun } from "react-icons/fa";
import { useThemeContext, useThemeUpdateContext } from "../context/Provider";

function ColorMode() {
  const theme = useThemeContext();
  const toggleTheme = useThemeUpdateContext();
  return (
    <button
      className="flex items-center w-0 md:w-6 invisible md:visible"
      onClick={() => toggleTheme()}
    >
      <IconContext.Provider value={{ size: "100" }}>
        {theme == "light" ? <FaMoon /> : <FaSun />}
      </IconContext.Provider>
    </button>
  );
}

export default ColorMode;
