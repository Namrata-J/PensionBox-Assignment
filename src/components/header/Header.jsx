import React from "react";
import { SearchBox } from "../util";
import { useSideBar } from "../../contexts";
import { headerStyle } from "../../util/reusableStyles";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { AppBar, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = ({ showHamburger }) => {
  const { toggleSideBar } = useSideBar();
  const navigate = useNavigate();

  return (
    <AppBar sx={headerStyle}>
      {showHamburger && (
        <IconButton sx={{ mr: "10px" }} onClick={toggleSideBar}>
          <MenuTwoToneIcon />
        </IconButton>
      )}
      <Typography
        sx={{ flexGrow: 1, fontSize: "1.2rem", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Bewakoof
      </Typography>
      <SearchBox />
    </AppBar>
  );
};

export { Header };
