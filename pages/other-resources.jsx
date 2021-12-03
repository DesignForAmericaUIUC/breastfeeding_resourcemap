import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Button, Typography, useTheme, Paper, Toolbar, IconButton } from "@material-ui/core";
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
      {/* Do stuf */
      <AppBar position = "static"> 
        <Toolbar variant = "dense">
          <IconButton edge = "start" color = "inherit" aria-label = "menu" sx = {{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant = "h6" color = "inherit" component = "div">
            </Typography>        
        </Toolbar>
      </AppBar>
      /* here */}
      {/* <BookmarkBorderIcon /> */}
    </>
  );
};

export default Page;
