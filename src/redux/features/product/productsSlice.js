import { ERROR_OCCURRED } from "../../../constants/sliceConstants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

const getAllProducts = createAsyncThunk("/products/getProducts", async () => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products`);
    return response?.data;
  } catch (error) {
    return error;
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.loading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getAllProducts.rejected]: (state) => {
      state.loading = false;
      state.products = [];
      state.error = ERROR_OCCURRED;
    },
  },
});

export { getAllProducts };
const { reducer } = productsSlice;
export { reducer };
