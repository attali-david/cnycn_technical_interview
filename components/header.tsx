import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Header({ toggler, color }) {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  return (
    <header className="p-4 relative bg-slate-50 dark:bg-gray-800 ">
      <div className="container flex justify-end h-16 mx-auto">
        <button className="flex content-end" onClick={toggler}>
          {color == "light" ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
}

export default Header;
