import React from "react";
import { INavProps } from "../types";
import ColorMode from "./color_mode";
import Search from "./search";
import Mail from "./mail";

function Nav() {
  return (
    <header className="bg-white border-gray-200 md:mx-32 p-4 relative dark:bg-gray-800">
      <div className="container flex justify-between h-16 mx-auto">
        <Search />
        <div className="flex md:justify-between ml-4 w-[10%]">
          <Mail />
          <ColorMode />
        </div>
      </div>
    </header>
  );
}

export default Nav;
