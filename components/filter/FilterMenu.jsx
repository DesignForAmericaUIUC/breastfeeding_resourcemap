import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  useTheme,
  Menu,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

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
    <div>
      <Button
        id='basic-button'
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{
          height: "32px",
          borderRadius: "16px",
          border: `1px solid ${
            props.selectedOptions.length
              ? theme.palette.secondary.main
              : theme.palette.grey[300]
          }`,
          margin: "0px 8px",
        }}
      >
        <Typography variant='h6' style={{ padding: "0px 8px" }}>
          {props.title}
        </Typography>
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onMouseLeave={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {props.options.map((e) => (
          <MenuItem onClick={forceUpdate}>
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
                    inputProps={{ "aria-label": "controlled" }}
                    color='secondary'
                  />
                }
                label={e}
              />
            </FormGroup>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FilterMenu;
