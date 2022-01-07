import React, { useState, useRef, useEffect } from "react";
import { useTheme, Box } from "@material-ui/core";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

const ResourceMap = (props) => {
  const theme = useTheme();

  // public access token
  mapboxgl.accessToken =
    "pk.eyJ1IjoiYnJlYXN0ZmVlZGluZ3Jlc291cmNlbWFwaXBoaSIsImEiOiJja3U3cWJwNWozbHM0MnBxaDkzeWo0azRjIn0.I0ZZoWRXW5esQ6PDNpOa7A";

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <>
      <div ref={mapContainer} style={{ height: "400px" }} />
    </>
  );
};

export default ResourceMap;
