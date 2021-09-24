import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0d74ba", // main blue
    },
    secondary: {
      main: "#009f87", // main green
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#000",
      secondary: "#fff",
      contrastText: "#0076b3", // main blue
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
