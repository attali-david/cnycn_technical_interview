import React from "react";

function Modal({ setInit }: any) {
  return (
    <div className="flex fixed inset-0 z-10 items-center justify-center overflow-y-auto m-auto">
      <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-gray-800 dark:text-black-100">
        <button
          onClick={() => setInit(false)}
          className="absolute text-white top-2 right-2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6"
          >
            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
          </svg>
        </button>
        <h2 className="text-2xl text-white font-semibold text-center leading-tight tracking-wide dark:text-black-100">
          Thanks for considering my application!
        </h2>
        <p className="flex-1 text-white text-black-100">
          Check out the map of New York to see my history with the city.
        </p>
        <button
          type="button"
          onClick={() => setInit(false)}
          className="px-8 py-3 text-white font-semibold rounded-full dark:bg-gray-800 dark:text-black-100"
        >
          Go
        </button>
      </div>
    </div>
  );
}

export default Modal;
