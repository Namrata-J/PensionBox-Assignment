import { configureStore } from "@reduxjs/toolkit";
import { reducer as productsReducer } from "../features/product/productsSlice";
import { reducer as filterAndSortReducer } from "../features/filterAndSort/filterAndSort";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filterAndSort: filterAndSortReducer,
  },
});
