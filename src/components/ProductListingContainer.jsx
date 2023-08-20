import React from "react";
import { Box } from "@mui/system";
import {
  sortByPriceFunc,
  sortByRatingFunc,
  filterByPriceFunc,
  filterByCategoryFunc,
} from "../util/filterAndSortFunc";
import { useSelector } from "react-redux";
import { ProductCard } from "./productCard/ProductCard";
import { productListingContainerStyle } from "../util/reusableStyles";

const ProductListingContainer = () => {
  const { products } = useSelector((store) => store.products);
  const state = useSelector((store) => store.filterAndSort);

  const filteredProductList = filterByCategoryFunc(
    state,
    filterByPriceFunc(
      state,
      sortByRatingFunc(state, sortByPriceFunc(state, products))
    )
  );

  return (
    <Box sx={productListingContainerStyle}>
      {filteredProductList?.map((product) => (
        <ProductCard product={product} key={product?.id} />
      ))}
    </Box>
  );
};

export default React.memo(ProductListingContainer);
