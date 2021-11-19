import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box, Button, Typography, useTheme } from "@material-ui/core";
import { useRouter } from "next/router";

import NavBar from "../components/nav/NavBar";

const Blog = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Box
        p={2}
        width='auto'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Button
          variant='contained'
          style={{
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
          }}
        >
          <Typography variant='h5'>Find Resources</Typography>
        </Button>
      </Box>
    </>
  );
};

export default Blog;
