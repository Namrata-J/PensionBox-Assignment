import React from "react";
import { SearchBox } from "../util";
import { useSideBar } from "../../contexts";
import { headerStyle } from "../../util/reusableStyles";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { AppBar, IconButton, Typography } from "@mui/material";

const Header = () => {

  const { toggleSideBar } = useSideBar();

  return (
    <AppBar sx={headerStyle}>
      <IconButton sx={{ mr: '10px' }} onClick={toggleSideBar}>
        <MenuTwoToneIcon />
      </IconButton>
      <Typography sx={{ flexGrow: 1, fontSize: "1.2rem" }}>Bewakoof</Typography>
      <SearchBox />
    </AppBar>
  );
};

export { Header };
