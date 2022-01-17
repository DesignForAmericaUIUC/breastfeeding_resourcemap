import React from "react";
import { Box, Typography, useTheme, Paper, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { alpha } from "@mui/material/styles";

import NavBar from "../components/nav/NavBar";
import FancyButton from "../components/FancyButton";
import ResourceInfoCard from "../components/resource/ResourceInfoCard";

import homeImage from "/static/assets/images/Mom baby in group.jpg";

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
      backgroundImage: `url(${homeImage})`,
    },
  };

  const ResourceCardInfo = [
    {
      
      width: "auto",
      title: "International Board of Lactation Consultant Examiners(IBLCE) ",
      body:  <h4 style ={{ color: 'black' }}>IBLCE is valued worldwide for advancing global public health and is the most trusted source for credentialing practitioners in lactation and breastfeeding care</h4>,

    },
    {
      
      title: "Certified Lactation Counselor(CLC) ",
      body: <h4 style ={{ color: 'black' }}>CLCs are dedicated to the promotion, protection, and support of breastfeeding and human lactation in their work to prevent and solve breastfeeding problems. They understand that breastfeeding works best when it is the cultural norm and when the provider of lactation support and services is culturally competent.</h4>,
      
    },
    {
      title: "Peer Counselor Program",
      body:  <h4 style ={{ color: 'black' }}>Experienced parents who have personally gone through the breastfeeding journey themselves. new parents can get advice and support from trained peers, who are sure to give relevant and useful information.</h4>,
    },
    {
      title: "Women, Infants, and Children Office",
      body:  <h4 style ={{ color: 'black' }}>WIC support programs provide nutrtion education, supplemental food, healthcare referrals and breastfeeding support to low-income parents.</h4>,
    },
  ];

  return (
    <>
      <NavBar />
      <Paper style={styles.paperWithBGImg}>
        <Box
          width="1000px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            style={{ color: "white" }}
          >
            Find breastfeeding resources near you
          </Typography>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            style={{ color: "white" }}
          >
            explore our map and browse through resources available across
            Illinois
          </Typography>
          <FancyButton
            text="find resources"
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
          display="flex"
          width="auto"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" align="center">
            What kind of breastfeeding resources are available?
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
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
                    <ResourceInfoCard {...card} onClick={() => {}} />
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
