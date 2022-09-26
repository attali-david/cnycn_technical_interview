import React, { useEffect, useRef } from "react";
import { MapProps } from "../types";

function Map({ center, zoom }: MapProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, { center: center, zoom: zoom })
      );
    }
    console.log(ref);
  }, [ref, map]);

  return <div ref={ref} style={{ width: "100vh", height: "100vh" }} />;
}

export default Map;
