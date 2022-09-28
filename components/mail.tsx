import React from "react";
import { IconContext } from "react-icons";
import { FiMail } from "react-icons/fi";

function Mail() {
  return (
    <a
      href="mailto:dattali93@gmail.com?subject=Regarding your application"
      className="flex items-center"
    >
      <IconContext.Provider value={{ size: "25" }}>
        <FiMail />
      </IconContext.Provider>
    </a>
  );
}

export default Mail;
