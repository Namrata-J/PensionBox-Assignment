import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import React, { useCallback } from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {setFilterBySearchVal} from "../../redux/features/filterAndSort/filterAndSort";
import { searchBoxWrapperStyle, searchInputStyle } from "../../util/reusableStyles";

const SearchBox = () => {

  const dispatch = useDispatch();

  const debouncerFunc = (func, delay) => {
    let timer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    }
  }

  // eslint-disable-next-line
  const dispatchForFilterBySearchVal = useCallback(debouncerFunc((e) => dispatch(setFilterBySearchVal(e.target.value)), 1000), [])

  return (
    <Paper component="form" sx={searchBoxWrapperStyle}>
      <SearchIcon sx={{ color: "otherColors.grayShade2", width: "20px" }} />
      <InputBase
        sx={searchInputStyle}
        placeholder="Search By Title Or Description"
        onChange={(e) => dispatchForFilterBySearchVal(e)}
        name="SEARCH_BOX"
      />
    </Paper>
  );
};

export { SearchBox };
