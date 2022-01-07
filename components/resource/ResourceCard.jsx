import { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Box,
  Chip,
  useTheme,
  ButtonBase,
} from "@material-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import CheckIcon from "@material-ui/icons/Check";

import { toRouterString } from "../nav/toRouterString";

const getTextPreview = (str, len) => {
  const A = str ? str.split(" ") : [];
  return A.length < len ? str : `${A.slice(0, len).join(" ")}...`;
};

const ResourceCard = (props) => {
  const theme = useTheme();
  const router = useRouter();

  const [canClickThrough, setCanClickThrough] = useState(true);

  return (
    <ButtonBase
      onClick={() => {
        if (canClickThrough) {
          router.push(
            `resource-map/${toRouterString(props.resource["Resource-Name"])}`
          );
        }
      }}
      style={{ margin: "8px" }}
    >
      <Card style={{ width: "500px", borderRadius: "16px" }}>
        <CardMedia
          component="img"
          height="110"
          image="/static/assets/images/smileys.jpg"
          alt={props.resource["Resource-Name"]}
        />
        <CardContent>
          <Box
            style={{
              display: "flex",
              justifyContent: "left",
              flexDirection: "column",
            }}
          >
            <Typography variant="h5" component="div" align="left">
              {props.resource["Resource-Name"]}
            </Typography>
            {props.resource["Address"] && (
              <Box mb={1} style={{ display: "flex", justifyContent: "left" }}>
                <Typography
                  variant="subtitle"
                  style={{
                    color: theme.palette.grey[600],
                  }}
                  align="left"
                >
                  {props.resource["Address"]}
                </Typography>
              </Box>
            )}
            <Typography variant="body2" align="left" color="text.secondary">
              {getTextPreview(props.resource["Resource-Description"], 20)}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box>
              {props.resource["isFree"] === "Yes" && (
                <Chip
                  icon={
                    <CheckIcon
                      style={{ color: theme.palette.secondary.main }}
                      fontSize="small"
                    />
                  }
                  label="Free"
                  variant="outlined"
                  style={{ marginRight: "4px" }}
                />
              )}
              {props.resource["Common-Hours"] === "Always Open" && (
                <Chip
                  icon={
                    <CheckIcon
                      style={{ color: theme.palette.secondary.main }}
                      fontSize="small"
                    />
                  }
                  label="Always Open"
                  variant="outlined"
                  style={{ marginRight: "4px" }}
                />
              )}
            </Box>
            <Box
              onMouseEnter={() => {
                setCanClickThrough(false);
              }}
              onMouseLeave={() => {
                setCanClickThrough(true);
              }}
            >
              {props.resource["Website"] && (
                <a
                  target="_blank"
                  href={props.resource["Website"]}
                  style={{ textDecoration: "none", marginRight: "4px" }}
                >
                  <Button size="small">Website</Button>
                </a>
              )}
              {/* <Button size='small'>Learn More</Button> */}
            </Box>
          </Box>
        </CardActions>
      </Card>
    </ButtonBase>
  );
};

export default ResourceCard;
