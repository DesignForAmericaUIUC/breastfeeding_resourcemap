import React, { useState, useRef, useEffect } from "react";
import {
  useTheme,
  Box,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

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

    const nav = new mapboxgl.NavigationControl();
    map.current.addControl(nav, "top-right");

    // allows geolocating
    const locator = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
    });
    map.current.addControl(locator);
  });

  // update coordinates on map pan
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [lng, lat, zoom]);

  const [cursorStyle, setCursorStyle] = useState("grab");

  return (
    <Box style={{ position: "relative" }}>
      <Box
        style={{
          cursor: cursorStyle,
        }}
        onMouseDown={() => setCursorStyle("grabbing")}
        onMouseUp={() => setCursorStyle("grab")}
      >
        <div ref={mapContainer} style={{ height: "80vh" }} />
      </Box>
    </Box>
  );
};

export default ResourceMap;
