import type { NextPage } from "next";
import Daily from "../components/daily";
import Forecast from "../components/forecast";

const Home: NextPage = ({ weather, select }) => {
  return (
    <div className="bg-white p-10 text-black dark:bg-gray-800 dark:text-gray-100">
      {/* <Daily weather={weather} /> */}
      {select && <Forecast weather={weather} />}
    </div>
  );
};

export default Home;
