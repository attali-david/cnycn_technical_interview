import React from "react";
import UnitToggle from "./unitToggle";

function Form({ search, setSearch, getCities }) {
  function submitHandler(e: Event) {
    e.preventDefault();
    getCities();
  }

  return (
    <div className="flex">
      <form
        className="flex relative"
        onSubmit={(e: React.FormEvent<HTMLFormElement>): void =>
          // @ts-ignore
          submitHandler(e)
        }
      >
        <input
          type="text"
          placeholder="Search by city"
          className="w-full mr-6 block p-4 pl-10 text-sm md:text-md text-gray-900 placeholder:italic bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <UnitToggle />
    </div>
  );
}

export default Form;
