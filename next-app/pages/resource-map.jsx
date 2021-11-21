import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Button, Typography, useTheme, Paper } from "@material-ui/core";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../components/nav/NavBar";
import { fetchData } from "../redux/slices/airtableSlice";

const Page = () => {
  const theme = useTheme();
  const router = useRouter();

  const dispatch = useDispatch();
  const userValue = useSelector((state) => state.user.value);

  const airtableData = useSelector((state) => state.airtable.data);

  const onFetchDataRequest = async () => {
    try {
      await dispatch(fetchData()).unwrap();
    } catch (err) {
      console.error("failed to fetch data :(");
    } finally {
      console.log("finished");
    }
  };

  return (
    <>
      <CssBaseline />
      <NavBar />
      hello, the value is: {userValue}
      <Button onClick={() => dispatch({ type: "user/increment" })}>
        increment
      </Button>
      <Button onClick={onFetchDataRequest}>Fetch Data</Button>
      Data: {airtableData}
    </>
  );
};

export default Page;
