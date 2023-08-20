import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../components";
import { productDetailDescriptionStyle } from "../util/reusableStyles";

const ProductDetails = () => {
  const { productId } = useParams();
  const { products } = useSelector((store) => store.products);

  const foundProduct = [...products].find(
    (product) => parseInt(product?.id) === parseInt(productId)
  );

  return (
    <Box sx={{ height: "100vh" }}>
      <Header showHamburger={false} />

      <Box
        sx={{
          height: "100vh",
          pt: "8vh",
          overflowY: "scroll",
        }}
      >
        <Box
          sx={{
            p: "1rem",
            mt: { xs: "8vh", sm: "0vh" },
            height: "100%",
            width: "100%",
            display: "flex",
            gap: "1rem",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Card
            variant="outlined"
            sx={{
              minWidth: { xs: "18rem", sm: "15rem", md: "20rem" },
              minHeight: { xs: "26rem", sm: "25rem", md: "30rem" },
              p: 1,
            }}
          >
            <CardMedia sx={{ height: "100%" }} image={foundProduct?.image} />
          </Card>
          <Box>
            <Typography
              sx={{
                color: "otherColors.grayShade4",
              }}
            >
              {foundProduct?.title}
            </Typography>
            <Typography
              sx={{
                ...productDetailDescriptionStyle,
                maxWidth: "30rem",
                py: "2rem",
              }}
            >
              {foundProduct?.description}
            </Typography>
            <Typography sx={productDetailDescriptionStyle}>
              Category: {foundProduct?.category}
            </Typography>
            <Typography sx={productDetailDescriptionStyle}>
              ⭐ {foundProduct?.rating?.rate} by {foundProduct?.rating?.count}
            </Typography>
            <Typography sx={productDetailDescriptionStyle}>
              ₹ {foundProduct?.price}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { ProductDetails };
