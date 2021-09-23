import { Box, Typography, useTheme } from "@material-ui/core";
import React from "react";

const Tab = (props) => {
  return (
    <Box>
      <Typography variant='h6'>{props.tabName}</Typography>
    </Box>
  );
};

const NavBar = () => {
  const theme = useTheme();
  const tabs = [{ name: "Home" }, { name: "Resources" }];

  return (
    <>
      <Box
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        width='100%'
        bgcolor={theme.palette.common.white}
      >
        <Box>
          <Typography variant='h1'>MilkMap</Typography>
        </Box>
        <Box>Menu Items</Box>
        <Box>Login</Box>
      </Box>
      <Box
        bgcolor={theme.palette.primary.main}
        display='flex'
        justifyContent='center'
        py={2}
      >
        <Typography variant='h6'>
          (888) 522-1282 (IDPH Women's Health Line) is ...
        </Typography>
      </Box>
    </>
  );
};

export default NavBar;
