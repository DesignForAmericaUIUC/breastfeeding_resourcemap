import { Box, Typography, useTheme } from "@material-ui/core";
import React from "react";

const Tab = (props) => {
  return (
    <Box>
      <Typography variant="h6">{props.tabName}</Typography>
    </Box>
  );
};

const NavBar = () => {
  const theme = useTheme();
  const tabs = [{ name: "Home" }, { name: "Resources" }];

  return (
    <>
      <Box display="flex">
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-around"
          bgcolor={theme.palette.grey[400]}
        >
          <Typography variant="h2">MilkMap</Typography>

          <Box>Menu Items</Box>
          <Box>Login</Box>
        </Box>
        {/* <Box display="flex" justifyContent="center">
          <Typography variant="h6">
            (888) 522-1282 (IDPH Women's Health Line) is ...
          </Typography>
        </Box> */}
      </Box>
    </>
  );
};

export default NavBar;
