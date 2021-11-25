import { useState } from "react";
import {
  useTheme,
  Paper,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@material-ui/core";

const ResourceInfoCard = (props) => {
  const theme = useTheme();

  const [cardElevation, setCardElevation] = useState(3);

  return (
    <>
      <Card
        sx={{ maxWidth: 345 }}
        elevation={cardElevation}
        onMouseEnter={() => setCardElevation(10)}
        onMouseLeave={() => setCardElevation(3)}
        onClick={props.onClick}
        style={{
          borderRadius: "16px",
          cursor: "pointer",
        }}
      >
        {/* <CardMedia
          component="img"
          alt="green iguana"
          height="50"
          image={props.image}
        /> */}
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            style={{ color: theme.palette.primary.main }}
          >
            {props.title}
          </Typography>
          <Typography
            variant='body2'
            style={{ color: theme.palette.text.secondary }}
          >
            {props.body}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">
            <Typography>Learn More</Typography>
          </Button>
        </CardActions> */}
      </Card>
    </>
  );
};

export default ResourceInfoCard;
