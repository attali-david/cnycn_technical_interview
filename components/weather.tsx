import React from "react";
import Daily from "./daily";
import Forecast from "./forecast";
// @ts-ignore
import Hourly from "./hourly";
import Humidity from "./humidity";
import Sunset from "./sunset";
// @ts-ignore
import Wind from "./wind";
import Map from "./map";
import FeelsLike from "./feels_like";
import useDates from "../hooks/useDates";

const Weather = () => {
  const [dates, daily, weather] = useDates();

  return (
    <>
      {daily && (
        <div className="grid grid-cols-2 md:grid-cols-4 md:mx-32 gap-x-2 gap-y-2 md:gap-2 ">
          <Daily daily={daily} />
          <Hourly daily={daily} />
          <Forecast dates={dates} />
          <FeelsLike daily={daily} />
          <Sunset daily={daily} />
          <Humidity daily={daily} />
          <Wind daily={daily} />
          <Map weather={weather} />
        </div>
      )}
    </>
  );
};

export default Weather;
