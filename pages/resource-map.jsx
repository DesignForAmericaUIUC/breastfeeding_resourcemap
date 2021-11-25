import React, { useEffect, useState } from "react";
import { Box, Typography, useTheme, OutlinedInput } from "@material-ui/core";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";

import NavBar from "../components/nav/NavBar";
import FilterBar from "../components/filter/FilterBar";
import { fetchData } from "../redux/slices/airtableSlice";

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
      options: ["English", "Spanish", "Polish"],
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
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        style={{ width: "100%", marginBottom: "32px" }}
      >
        <Typography
          variant='h2'
          align='center'
          style={{ color: "white", paddingTop: "20px" }}
        >
          Find resources near you
        </Typography>
        <Box style={{ width: "40%" }}>
          <OutlinedInput
            autoFocus
            fullWidth
            maxRows={1}
            placeholder='Search for resources...'
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
      <FilterBar
        filters={filters}
        doFiltering={doFiltering}
        setDoFiltering={setDoFiltering}
      />
      <Box
        style={{
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
        ).map((resource) => (
          <Typography>{resource["Resource-Name"]}</Typography>
        ))}
      </Box>
    </>
  );
};

export default Page;
