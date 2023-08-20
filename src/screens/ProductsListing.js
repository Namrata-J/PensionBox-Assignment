import {
  Header,
  SafeFallback,
  SideBar,
  ProductListingContainer,
} from "../components";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSideBar } from "../contexts";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ERROR_OCCURRED } from "../constants/sliceConstants";
import { getAllProducts } from "../redux/features/product/productsSlice";
import { fullWidthAndHeightFlexCenterStyle } from "../util/reusableStyles";

const ProductsListing = () => {
  const { loading, error } = useSelector((store) => store.products);
  const { showSideBar } = useSideBar();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Box sx={{ height: "100vh" }}>
      {error === ERROR_OCCURRED ? (
        <SafeFallback />
      ) : loading ? (
        <Box sx={fullWidthAndHeightFlexCenterStyle}>
          <Typography sx={{ color: "primary.main", fontSize: "2.5rem" }}>
            Loading...
          </Typography>
        </Box>
      ) : (
        <Box sx={{ height: "100vh" }}>
          <Header showHamburger={true} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              height: "100vh",
              pt: "8vh",
            }}
          >
            {showSideBar && <SideBar />}
            <ProductListingContainer />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export { ProductsListing };
