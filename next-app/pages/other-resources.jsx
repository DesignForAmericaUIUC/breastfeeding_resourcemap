import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Button, Typography, useTheme, Paper } from "@material-ui/core";
import { useRouter } from "next/router";

import NavBar from "../components/nav/NavBar";

// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Page = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <CssBaseline />
      <NavBar />
      {/* Do stuff here */}
      {/* <BookmarkBorderIcon /> */}
    </>
  );
};

export default Page;
