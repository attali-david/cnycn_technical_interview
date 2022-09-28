import React, { useEffect, useRef, useState } from "react";
import { IPropsWeather } from "../types";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { markers } from "../data/gooogle_markers";

function addMarker(map: google.maps.Map) {
  markers.map((marker) => {
    let mark = new google.maps.Marker({
      position: new google.maps.LatLng(marker.lat, marker.lon),
      map: map,
      // label: marker.title,
      // clickable: marker.clickable,
    });
    let infoWindow = new google.maps.InfoWindow({
      content: marker.title,
      maxWidth: 200,
    });
    mark.addListener("click", () => {
      infoWindow.open({
        anchor: mark,
        map,
        shouldFocus: false,
      });
    });
  });
}

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
          streetViewControl: false,
          rotateControl: false,
          gestureHandling: "cooperative",
        })
      );
    }
    if (map) {
      addMarker(map);
    }
  }, [ref, map, weather]);

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
