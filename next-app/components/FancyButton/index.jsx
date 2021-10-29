import { useTheme, Typography, ButtonBase } from "@material-ui/core";

const FancyButton = (props) => {
  const theme = useTheme();

  return (
    <>
      <ButtonBase
        onClick={props.onClick}
        style={{
          marginTop: "8px",
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.common.white,
          borderRadius: "12px",
          padding: "8px 16px",
          boxShadow: "0px 0px 20px 1px rgba(0,0,0,0.2)",
        }}
      >
        <Typography variant="h5">{props.text}</Typography>
      </ButtonBase>
    </>
  );
};

export default FancyButton;
