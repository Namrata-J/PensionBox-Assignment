import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { searchBoxWrapperStyle, searchInputStyle } from "../../util/reusableStyles";

const SearchBox = () => {
  return (
    <Paper component="form" sx={searchBoxWrapperStyle}>
      <SearchIcon sx={{ color: "otherColors.grayShade2", width: "20px" }} />
      <InputBase
        sx={searchInputStyle}
        placeholder="Search By Title Or Description"
        value=""
        onChange={() => {}}
        name="SEARCH_BOX"
      />
    </Paper>
  );
};

export { SearchBox };
