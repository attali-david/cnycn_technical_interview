import type { NextPage } from "next";
import Weather from "../components/weather";
import Nav from "../components/nav";
import useWeather from "../hooks/useWeather";

const Home: NextPage = () => {
  return (
    <div className="min-h-full md:min-h-screen bg-white pb-16 text-black dark:bg-gray-800 dark:text-gray-100">
      <Nav />
      <Weather />
    </div>
  );
};

export default Home;
