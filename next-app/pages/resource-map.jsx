import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Button, Typography, useTheme, Paper } from "@material-ui/core";
import { useRouter } from "next/router";

import NavBar from "../components/nav/NavBar";

const Page = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <CssBaseline />
      <NavBar />
    </>
  );
};

export default Page;
