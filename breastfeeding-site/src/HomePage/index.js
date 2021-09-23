import * as React from "react";
import { Box } from "@material-ui/core";
import Head from "next/head";

import NavBar from "../components/nav/NavBar";

const HomePage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Milk Map</title>
          {/* <link rel='icon' href='/favicon.ico' /> */}
        </Head>
        <Box width="100%">
          <NavBar />
          Hello
        </Box>
      </div>
    </>
  );
};

export default HomePage;
