import useSearch from "../hooks/useSearch";
import useSelectedCity from "../hooks/useSelectedCity";

const DropdownMenu = ({ isDropdownOpen, cities }) => {
  const { onCitySelect } = useSelectedCity();

  return (
    <>
      {isDropdownOpen && cities.length && (
        <ul className="block p-2 mb-6 text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50">
          {cities.map((city) => (
            <li
              className="dark:hover:bg-gray-400 md:overflow-hidden"
              key={city.lat + city.lon}
              onClick={() => onCitySelect(city)}
            >
              {`${city.name}, ${city.state}`}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default DropdownMenu;
