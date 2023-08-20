import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { fullWidthAndHeightFlexCenterStyle } from "../../util/reusableStyles";

const SafeFallback = () => {
  return (
    <Box
      sx={fullWidthAndHeightFlexCenterStyle}
    >
      <Typography
        sx={{
          color: "secondary.main",
          fontSize: "1.2rem",
        }}
      >
        Looks like an unknown error occurred!!!
      </Typography>
    </Box>
  );
};

export { SafeFallback };
