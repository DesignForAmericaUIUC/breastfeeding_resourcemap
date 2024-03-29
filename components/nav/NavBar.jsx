import {
  Box,
  Typography,
  useTheme,
  Grid,
  ButtonBase,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";

import { toRouterString } from "./toRouterString";

const NavBar = (props) => {
  const theme = useTheme();
  const router = useRouter();
  const tabs = [
    // { name: "Home" },
    { name: "Resource Map" },
    { name: "Other Resources" },
    { name: "About" },
  ];

  const showBanner = useSelector((state) => state.user.showBanner);
  const dispatch = useDispatch();

  return (
    <>
      <Box bgcolor={theme.palette.grey[100]} py={1} m={0}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={3}>
            <ButtonBase
              disableRipple
              style={{ marginLeft: "40px", borderRadius: "8px" }}
              onClick={() => {
                router.push("/");
              }}
            >
              <Box display="flex" alignItems="center">
                <Typography
                  variant="h3"
                  style={{ color: theme.palette.primary.main }}
                >
                  MilkMap
                </Typography>
              </Box>
            </ButtonBase>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
            >
              {tabs.map((tab) => (
                <Box
                  width="200px"
                  display="flex"
                  justifyContent="center"
                  key={tab.name}
                >
                  <ButtonBase
                    onClick={() =>
                      router.push(
                        tab.name === "Home" ? "/" : toRouterString(tab.name)
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
          <Grid item xs={3} />
        </Grid>
      </Box>

      {!props.hideBanner && showBanner && (
        <Box
          bgcolor={theme.palette.primary.main}
          py={2}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container justifyContent="center">
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Typography
                variant="subtitle2"
                align="center"
                style={{ color: theme.palette.common.white, fontSize: "14pt" }}
              >
                (888) 522-1282 (IDPH Women's Health Line) is a free and
                confidential resource available to all Illinois women with
                health-related questions.
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => dispatch({ type: "user/toggleShowBanner" })}
                style={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                <ClearIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default NavBar;
