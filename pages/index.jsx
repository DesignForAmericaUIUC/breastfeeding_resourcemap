import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Paper,
  Grid,
  Container,
  Item,
} from "@material-ui/core";
import { alpha } from "@material-ui/core/styles/colorManipulator";
import { useRouter } from "next/router";

import NavBar from "../components/nav/NavBar";
import FancyButton from "../components/FancyButton";
import ResourceCard from "../components/ResourceCard";

const Page = () => {
  const router = useRouter();
  const theme = useTheme();

  const styles = {
    paperWithBGImg: {
      boxShadow: `inset 0 0 0 1000px ${alpha(theme.palette.primary.main, 0.5)}`,
      minHeight: "30vh",
      padding: "60px 0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
      borderRadius: 0,
      backgroundImage: "url(/static/assets/images/Mom baby in group.jpg)",
    },
  };

  const ResourceCardInfo = [
    {
      title: "1",
      body: "hello there",
    },
    {
      title: "2",
      body: "hello again",
    },
    {
      title: "3",
      body: "hello number 3",
    },
    {
      title: "4",
      body: "hello number 4",
    },
  ];

  return (
    <>
      <NavBar />
      <Paper style={styles.paperWithBGImg}>
        <Box
          width='500px'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Typography
            variant='h2'
            align='center'
            gutterBottom
            style={{ color: "white" }}
          >
            Find breastfeeding resources near you
          </Typography>
          <Typography
            variant='h5'
            align='center'
            gutterBottom
            style={{ color: "white" }}
          >
            explore our map and browse through resources available across
            Illinois
          </Typography>
          <FancyButton
            text='find resources'
            onClick={() => {
              router.push("resource-map");
            }}
          />
        </Box>
      </Paper>
      <Paper
        elevation={0}
        style={{
          marginTop: "40px",
          display: "flex",
          width: "auto",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          display='flex'
          width='auto'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Typography variant='h4' align='center'>
            What kind of breastfeeding resources are available?
          </Typography>
          <Typography variant='subtitle1' align='center' gutterBottom>
            Learn more about what each resource category means on the resource
            map.
          </Typography>
        </Box>
        <Box
          px={4}
          my={4}
          style={{
            width: "80%",
            maxWidth: "1200px",
            minWidth: "400px",
            backgroundColor: "transparent",
          }}
        >
          <Grid container spacing={6}>
            {ResourceCardInfo.map((card) => (
              <>
                <Grid item xs={6}>
                  <Box>
                    <ResourceCard {...card} onClick={() => {}} />
                  </Box>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default Page;
