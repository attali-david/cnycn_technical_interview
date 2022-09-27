import React, { useEffect, useRef } from "react";
import { IPropsWeather } from "../types";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function Map({ weather }: IPropsWeather) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  function render(status: Status) {
    if (status === Status.FAILURE) return <h1>{status}</h1>;

    return <h1>Loading</h1>;
  }

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: {
            lat: weather.city?.coord.lat,
            lng: weather.city?.coord.lon,
          },
          zoom: 13,
        })
      );
    }
  }, [ref, map]);

  return (
    <div className="md:h-full md:w-full w-30 h-30 order-last col-span-2 md:col-start-3 md:row-start-3">
      <Wrapper apiKey={`${process.env.NEXT_PUBLIC_GOOGLE}`} render={render}>
        <div
          ref={ref}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Wrapper>
    </div>
  );
}

export default Map;
