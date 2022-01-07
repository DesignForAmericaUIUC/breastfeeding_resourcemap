import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";

import MenuIcon from "@mui/icons-material/Menu";

import NavBar from "../components/nav/NavBar";

// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Page = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <CssBaseline />
      <NavBar />
      {
        /* Do stuf */
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              component="div"
            ></Typography>
          </Toolbar>
        </AppBar>
        /* here */
      }
      {/* <BookmarkBorderIcon /> */}
    </>
  );
};

export default Page;
