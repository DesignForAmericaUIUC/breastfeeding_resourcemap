import {
  Box,
  Container,
  Typography,
  useTheme,
  Grid,
  ButtonBase,
} from "@material-ui/core";
import { useRouter } from "next/router";

import { toRouterString } from "./toRouterString";

const NavBar = () => {
  const theme = useTheme();
  const router = useRouter();
  const tabs = [
    { name: "Home" },
    { name: "Resource Map" },
    { name: "Other Resources" },
  ];

  return (
    <>
      <Box bgcolor={theme.palette.grey[100]} py={1}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={3}>
            <Box display="flex" alignItems="center" pl={5}>
              <Typography
                variant="h3"
                style={{ color: theme.palette.primary.main }}
              >
                MilkMap
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
            >
              {tabs.map((tab) => (
                <Box m={1} key={tab.name}>
                  <ButtonBase
                    onClick={() =>
                      router.push(
                        tab.name === "Home" ? "" : toRouterString(tab.name)
                      )
                    }
                  >
                    <Typography
                      variant="h6"
                      style={{ color: theme.palette.primary.main }}
                    >
                      {tab.name}
                    </Typography>
                  </ButtonBase>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </Box>

      <Box
        bgcolor={theme.palette.primary.main}
        display="flex"
        justifyContent="center"
        alignItems="center"
        py={2}
        px={5}
        m={0}
      >
        <Typography
          align="center"
          style={{ color: theme.palette.common.white }}
        >
          (888) 522-1282 (IDPH Women's Health Line) is a free and confidential
          resource available to all Illinois women with health-related
          questions.
        </Typography>
      </Box>
    </>
  );
};

export default NavBar;
