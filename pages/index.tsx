import type { NextPage } from "next";
import Daily from "../components/daily";
import Forecast from "../components/forecast";
import Sunset from "../components/sunset";

const Home: NextPage = ({ weather, selectedCity }) => {
  return (
    <div className="bg-white p-10 text-black dark:bg-gray-800 dark:text-gray-100">
      {/* <Daily weather={weather} /> */}
      {/* {selectedCity && <Forecast weather={weather} />} */}
      <Sunset />
    </div>
  );
};

export default Home;
