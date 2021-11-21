import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Button, Typography, useTheme, Paper } from "@material-ui/core";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../components/nav/NavBar";

const Page = () => {
  const theme = useTheme();
  const router = useRouter();

  const dispatch = useDispatch();
  const userValue = useSelector((state) => state.user.value);

  return (
    <>
      <CssBaseline />
      <NavBar />
      hello, the value is: {userValue}
      <Button onClick={() => dispatch({ type: "user/increment" })}>
        increment
      </Button>
    </>
  );
};

export default Page;
