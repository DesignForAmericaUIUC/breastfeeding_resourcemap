import "../styles/globals.css";

import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";

import theme from "../theme";
import configureStore from "../redux/configureStore";

const store = configureStore();

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />

  return (
    <React.Fragment>
      <Head>
        <title>Milk Map</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default MyApp;
