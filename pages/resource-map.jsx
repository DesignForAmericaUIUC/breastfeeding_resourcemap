import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  OutlinedInput,
  Menu,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  IconButton,
  Tooltip,
} from "@material-ui/core";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

import NavBar from "../components/nav/NavBar";
import { fetchData, selectAllEntries } from "../redux/slices/airtableSlice";
import { didFetchAirtableData } from "../redux/slices/userSlice";

const intersectionSize = (A, B) =>
  A && B ? A.filter((e) => B.includes(e)).length : 0;

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

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

const Page = () => {
  const theme = useTheme();
  const router = useRouter();

  const dispatch = useDispatch();

  const fetchedAirtableData = useSelector(
    (state) => state.user.fetchedAirtableData
  );
  const airtableData = useSelector((state) => state.airtable.data);

  useEffect(async () => {
    if (!fetchedAirtableData) {
      await dispatch(fetchData()).unwrap();
      dispatch({ type: "user/didFetchAirtableData" });
    }
  }, []);

  const [selectedOptions_language, setSelectedOptions_language] = useState([]);

  const filters = [
    {
      title: "Language",
      name: "Languages",
      options: ["English", "Spanish", "Polish"],
      selectedOptions: selectedOptions_language,
      setSelectedOptions: setSelectedOptions_language,
    },
  ];

  const [doFiltering, setDoFiltering] = useState(true);
  useEffect(
    () => {
      // check if any filters are selected; use this to decide if filters should be active
      let sum = 0;
      filters.forEach((e) => {
        sum += e.selectedOptions.length;
      });
      setDoFiltering(sum !== 0);
    },
    filters.map((e) => e.selectedOptions)
  );
  const clearFilters = () => {
    filters.forEach((e) => e.setSelectedOptions([]));
  };

  return (
    <>
      <NavBar hideBanner />
      <Box
        bgcolor={theme.palette.primary.main}
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        style={{ width: "100%", marginBottom: "32px" }}
      >
        <Typography
          variant='h2'
          align='center'
          style={{ color: "white", paddingTop: "20px" }}
        >
          Find resources near you
        </Typography>
        <Box style={{ width: "40%" }}>
          <OutlinedInput
            autoFocus
            fullWidth
            maxRows={1}
            placeholder='Search for resources...'
            startAdornment={
              <SearchIcon
                style={{
                  color: theme.palette.grey[500],
                  fontSize: "24pt",
                  marginRight: "8px",
                }}
              />
            }
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              offset: "relative",
              height: "64px",
              top: "32px",
              fontSize: "18pt",
              border: "0px",
              boxShadow: "0px 0px 10px grey",
            }}
          />
        </Box>
      </Box>
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
        {filters.map((e) => (
          <FilterMenu
            title={e.title}
            options={e.options}
            selectedOptions={e.selectedOptions}
            setSelectedOptions={e.setSelectedOptions}
          />
        ))}
        {doFiltering && (
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
      <Box
        style={{
          display: "flex",
          justifyContent: "left",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        {(!doFiltering
          ? airtableData
          : airtableData.filter(
              (resource) =>
                intersectionSize(
                  selectedOptions_language,
                  resource["Languages"]?.split(", ")
                ) !== 0
            )
        ).map((resource) => (
          <Typography>{resource["Resource-Name"]}</Typography>
        ))}
      </Box>
    </>
  );
};

export default Page;
