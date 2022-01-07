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
  const [lng, setLng] = useState(-88);
  const [lat, setLat] = useState(40.15);
  const [zoom, setZoom] = useState(6.2);

  // initialize the map
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  // update coordinates on map pan
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      <div ref={mapContainer} style={{ height: "80vh" }} />
    </>
  );
};

export default ResourceMap;
