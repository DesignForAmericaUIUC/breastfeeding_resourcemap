import React, { useEffect } from "react";
import { Box, IconButton, Tooltip, useTheme } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

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
      py={1}
      px={5}
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
      }}
    >
      {props.filters.map((e) => (
        <FilterMenu
          title={e.title}
          options={e.options}
          selectedOptions={e.selectedOptions}
          setSelectedOptions={e.setSelectedOptions}
        />
      ))}
      {props.doFiltering && (
        <Tooltip title='Clear Filters' arrow placement='right'>
          <IconButton
            onClick={clearFilters}
            disableRipple
            style={{ padding: "0px", backgroundColor: "transparent" }}
          >
            <ClearIcon
              style={{
                width: "32px",
                height: "32px",
                color: theme.palette.grey[500],
              }}
            />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};

export default FilterBar;
