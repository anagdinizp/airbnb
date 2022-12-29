import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";

export default function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/carlos-teixeira/clc676320003f14myhbl751fc"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      {...viewport}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    />
  );
}
