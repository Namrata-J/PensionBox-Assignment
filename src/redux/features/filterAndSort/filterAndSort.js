import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortByPriceVal: "",
  sortByRatingVal: "",
  filterByPriceVal: 100000,
  filterByCategoryVal: [],
  filterBySearchVal: "",
};

const filterAndSortSlice = createSlice({
  name: "filterAndSort",
  initialState,
  reducers: {
    clearAll: (state) => {
      state.sortByPriceVal = "";
      state.sortByRatingVal = "";
      state.filterByPriceVal = 1000;
      state.filterByCategoryVal = [];
    },
    setSortByPriceVal: (state, action) => {
      state.sortByPriceVal = action.payload;
    },
    setSortByRatingVal: (state, action) => {
      state.sortByRatingVal = action.payload;
    },
    setFilterByPriceVal: (state, action) => {
      state.filterByPriceVal = action.payload;
    },
    setFilterByCategoryVal: (state, action) => {
      if (!state.filterByCategoryVal.includes(action.payload)) {
        state.filterByCategoryVal.push(action.payload);
      } else {
        const index = state.filterByCategoryVal.indexOf(action.payload);
        state.filterByCategoryVal.splice(index, 1);
      }
    },
    setFilterBySearchVal: (state, action) => {
      state.filterBySearchVal = action.payload;
    },
  },
});

const { reducer, actions } = filterAndSortSlice;
export const {
  clearAll,
  setSortByPriceVal,
  setSortByRatingVal,
  setFilterByPriceVal,
  setFilterBySearchVal,
  setFilterByCategoryVal,
} = actions;
export { reducer };
