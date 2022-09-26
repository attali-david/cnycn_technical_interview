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
          zoom: 7,
        })
      );
    }
    console.log(ref);
  }, [ref, map]);

  return (
    <div className="">
      <Wrapper apiKey={`${process.env.NEXT_PUBLIC_GOOGLE}`} render={render}>
        <div ref={ref} style={{ width: "50vh", height: "50vh" }} />
      </Wrapper>
    </div>
  );
}

export default Map;
