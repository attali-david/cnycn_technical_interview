import React, { useEffect, useRef, useState } from "react";
import { IPropsWeather } from "../types";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function Map({ weather }: IPropsWeather) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map | null>();
  const [googleMarkers, setGoogleMarkers] = useState<google.maps.Marker[]>([]);

  function render(status: Status) {
    if (status === Status.FAILURE) return <h1>{status}</h1>;

    return <h1>Loading</h1>;
  }

  useEffect(() => {
    setMap(null);
  }, [weather]);

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
  }, [ref, map, weather]);

  useEffect(() => {
    if (!map) return;
    new google.maps.Marker({
      position: new google.maps.LatLng(40.7128, -74.006),
      map: map,
      clickable: true,
      title: "home",
    });
  }, [map]);

  return (
    <div className="md:h-full md:w-full w-[300px] h-[300px] m-auto col-span-2 md:m-0 md:col-start-3 md:row-start-3">
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
function getIconAttributes(
  arg0: string
): string | google.maps.Icon | google.maps.Symbol | null | undefined {
  throw new Error("Function not implemented.");
}
