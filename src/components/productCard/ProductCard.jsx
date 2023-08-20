import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ width: "16rem", cursor: "pointer" }}
      onClick={() => navigate(`/product/${product?.id}`)}
    >
      <CardMedia
        sx={{ height: "22rem" }}
        image={product?.image}
        title={product?.title}
      />
      <CardContent>
        <Typography
          sx={{ fontSize: "0.9rem", color: "otherColors.grayShade4" }}
        >
          {product?.title
            ? product?.title
                .split("")
                .slice(0, 20)
                .map((el) => el)
            : ""}
          {product?.title ? "..." : ""}
        </Typography>
        <Typography
          sx={{ fontSize: "0.7rem", color: "otherColors.grayShade3" }}
        >
          {product?.description
            ? product?.description
                .split("")
                .slice(0, 20)
                .map((el) => el)
            : ""}
          {product?.description ? "..." : ""}
        </Typography>
        <Typography
          sx={{ fontSize: "0.7rem", color: "otherColors.grayShade3" }}
        >
          ⭐ {product?.rating?.rate} by {product?.rating?.count}
        </Typography>
        <Typography
          sx={{ fontSize: "0.7rem", color: "otherColors.grayShade3" }}
        >
          ₹ {product?.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export { ProductCard };
