import React, { useEffect } from "react";
import {
  Box,
  IconButton,
  Tooltip,
  useTheme,
  Divider,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import FilterMenu from "./FilterMenu";

const FilterBar = (props) => {
  const theme = useTheme();

  useEffect(
    () => {
      // check if any filters are selected; use this to decide if filters should be active
      let sum = 0;
      props.filters.forEach((e) => {
        sum += e.selectedOptions.length;
      });
      props.setDoFiltering(sum !== 0);
    },
    props.filters.map((e) => e.selectedOptions)
  );

  const clearFilters = () => {
    props.filters.forEach((e) => e.setSelectedOptions([]));
  };

  return (
    <Box
      py={0}
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "left",
        alignItems: "start",
        flexDirection: "column",
      }}
    >
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        py={2}
      >
        <Typography variant="h5">Filters</Typography>
        {props.doFiltering && (
          <Tooltip title="Clear Filters" arrow placement="top">
            <IconButton
              onClick={clearFilters}
              disableRipple
              style={{ padding: "0px", backgroundColor: "transparent" }}
            >
              <ClearIcon
                style={{
                  width: "28px",
                  height: "28px",
                  color: theme.palette.grey[500],
                }}
              />
            </IconButton>
          </Tooltip>
        )}
      </Box>

      <Divider style={{ width: "100%" }} />

      {props.filters.map((e) => (
        <>
          <Box my={2}>
            <FilterMenu
              title={e.title}
              options={e.options}
              selectedOptions={e.selectedOptions}
              setSelectedOptions={e.setSelectedOptions}
            />
          </Box>
          <Divider style={{ width: "100%" }} />
        </>
      ))}
    </Box>
  );
};

export default FilterBar;
