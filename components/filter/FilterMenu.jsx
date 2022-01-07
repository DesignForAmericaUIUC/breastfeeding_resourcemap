import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  useTheme,
  Menu,
  Box,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import useForceUpdate from "./useForceUpdate";

const FilterMenu = (props) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const forceUpdate = useForceUpdate();

  return (
    <Box>
      <Typography variant="h6" style={{ padding: "0px" }}>
        {props.title}
      </Typography>
      {props.options.map((e) => (
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.selectedOptions.includes(e)}
                onChange={() => {
                  const index = props.selectedOptions.indexOf(e);
                  if (index > -1) {
                    props.selectedOptions.splice(index, 1);
                  } else {
                    props.selectedOptions.push(e);
                  }
                  props.setSelectedOptions([...props.selectedOptions]);
                }}
                style={{
                  color: theme.palette.secondary.main,
                  width: "40px",
                  height: "40px",
                }}
              />
            }
            label={e}
          />
        </FormGroup>
      ))}
    </Box>
  );
};

export default FilterMenu;
