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
} from "@material-ui/core";

import CheckIcon from "@material-ui/icons/Check";

const getTextPreview = (str, len) => {
  const A = str ? str.split(" ") : [];
  return A.length < len ? str : `${A.slice(0, len).join(" ")}...`;
};

const ResourceCard = (props) => {
  const theme = useTheme();
  return (
    <Card style={{ width: "500px", borderRadius: "16px" }}>
      <CardMedia
        component='img'
        height='110'
        image='/static/assets/images/smileys.jpg'
        alt={props.resource["Resource-Name"]}
      />
      <CardContent>
        <Typography variant='h5' component='div'>
          {props.resource["Resource-Name"]}
        </Typography>
        {props.resource["Address"] && (
          <Box mb={1}>
            <Typography
              variant='subtitle'
              style={{
                color: theme.palette.grey[600],
              }}
            >
              {props.resource["Address"]}
            </Typography>
          </Box>
        )}
        <Typography variant='body2' color='text.secondary'>
          {getTextPreview(props.resource["Resource-Description"], 20)}
        </Typography>
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
                    fontSize='small'
                  />
                }
                label='Free'
                variant='outlined'
                style={{ marginRight: "4px" }}
              />
            )}
            {props.resource["Common-Hours"] === "Always Open" && (
              <Chip
                icon={
                  <CheckIcon
                    style={{ color: theme.palette.secondary.main }}
                    fontSize='small'
                  />
                }
                label='Always Open'
                variant='outlined'
                style={{ marginRight: "4px" }}
              />
            )}
          </Box>
          <Box>
            <Button size='small'>Share</Button>
            <Button size='small'>Learn More</Button>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ResourceCard;
