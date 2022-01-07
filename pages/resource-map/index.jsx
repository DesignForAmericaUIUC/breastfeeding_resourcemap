import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  useTheme,
  OutlinedInput,
} from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";

import NavBar from "../../components/nav/NavBar";
import FilterBar from "../../components/filter/FilterBar";
import ResourceCard from "../../components/resource/ResourceCard";
import { fetchData } from "../../redux/slices/airtableSlice";
import ResourceMap from "../../components/ResourceMap/ResourceMap";

const intersectionSize = (A, B) =>
  A && B ? A.filter((e) => B.includes(e)).length : 0;

const Page = () => {
  const theme = useTheme();
  const router = useRouter();

  const dispatch = useDispatch();

  const fetchedAirtableData = useSelector(
    (state) => state.user.fetchedAirtableData
  );
  const airtableData = useSelector((state) => state.airtable.data);

  useEffect(async () => {
    if (!fetchedAirtableData) {
      await dispatch(fetchData()).unwrap();
      dispatch({ type: "user/didFetchAirtableData" });
    }
  }, []);

  const [selectedOptions_language, setSelectedOptions_language] = useState([]);

  const filters = [
    {
      title: "Language",
      name: "Languages",
      options: ["English", "Spanish", "Polish", "Mandarin", "Tagalog"],
      selectedOptions: selectedOptions_language,
      setSelectedOptions: setSelectedOptions_language,
    },
  ];

  const [doFiltering, setDoFiltering] = useState(false);

  return (
    <>
      <NavBar hideBanner />
      <Box
        bgcolor={theme.palette.primary.main}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={{ width: "100%", marginBottom: "32px" }}
      >
        <Typography
          variant="h2"
          align="center"
          style={{ color: "white", paddingTop: "20px" }}
        >
          Find resources near you
        </Typography>
        <Box style={{ width: "40%" }}>
          <OutlinedInput
            autoFocus
            fullWidth
            maxRows={1}
            placeholder="Search for resources..."
            startAdornment={
              <SearchIcon
                style={{
                  color: theme.palette.grey[500],
                  fontSize: "24pt",
                  marginRight: "8px",
                }}
              />
            }
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              offset: "relative",
              height: "64px",
              top: "32px",
              fontSize: "18pt",
              border: "0px",
              boxShadow: "0px 0px 10px grey",
            }}
          />
        </Box>
      </Box>

      <Box
        mt={8}
        pt={0}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "left",
          flexDirection: "row",
          backgroundColor: "white",
          borderTop: "1px solid lightgrey",
        }}
      >
        <Paper
          elevation={0}
          style={{
            width: "15%",
            minWidth: "250px",
            height: "68vh",
            overflow: "auto",
            display: "flex",
            justifyContent: "left",
            flexDirection: "column",
            backgroundColor: "white",
            padding: "0px 40px",
          }}
        >
          <FilterBar
            filters={filters}
            doFiltering={doFiltering}
            setDoFiltering={setDoFiltering}
          />
        </Paper>
        <Paper
          elevation={0}
          style={{
            width: "35%",
            minWidth: "400px",
            height: "68vh",
            overflow: "auto",
            display: "flex",
            justifyContent: "left",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          {(!doFiltering
            ? airtableData
            : airtableData.filter(
                (resource) =>
                  intersectionSize(
                    selectedOptions_language,
                    resource["Languages"]?.split(", ")
                  ) !== 0
              )
          ).map(
            (resource) =>
              resource["Resource-Name"] && <ResourceCard resource={resource} />
          )}
        </Paper>

        <Box
          style={{
            width: "50%",
            minWidth: "400px",
            height: "68vh",
            marginTop: 0,
            paddingTop: 0,
          }}
        >
          <ResourceMap />
        </Box>
      </Box>
    </>
  );
};

export default Page;
