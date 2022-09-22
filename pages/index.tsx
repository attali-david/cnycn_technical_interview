import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-800 dark:text-gray-100">
      <div className="column1">
        <span>Temp</span>
        <div className="row1">
          <h2 id="temp"></h2>
        </div>
        <span>Feels Like</span>
        <div className="row2">
          <h2 id="feels_like"></h2>
        </div>
      </div>
      <div className="column2">
        <span>Temp min</span>
        <div className="row1">
          <h2 id="temp_min"></h2>
        </div>
        <span>Temp max</span>
        <div className="row2">
          <h2 id="temp_max"></h2>
        </div>
      </div>
      <div className="column3">
        <span>Pressure</span>
        <div className="row1">
          <h2 id="pressure"></h2>
        </div>
        <span>Humidity</span>
        <div className="row2">
          <h2 id="humidity"></h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
