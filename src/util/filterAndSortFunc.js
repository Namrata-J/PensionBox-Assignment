const sortByPriceFunc = (state, data) => {
  switch (state.sortByPriceVal) {
    case "Low To High":
      return [...data].sort((a, b) => a.price - b.price);
    case "High To Low":
      return [...data].sort((a, b) => b.price - a.price);
    default:
      return data;
  }
};

const sortByRatingFunc = (state, data) => {
  switch (state.sortByRatingVal) {
    case "2 star & above":
      return data.filter((product) => product.rating.rate >= 2);
    case "3 star & above":
      return data.filter((product) => product.rating.rate >= 3);
    case "4 star & above":
      return data.filter((product) => product.rating.rate >= 4);
    case "5 star":
      return data.filter((product) => product.rating.rate === 5);
    default:
      return data;
  }
};

const filterByPriceFunc = (state, data) => {
  return data.filter((product) => product?.price <= state?.filterByPriceVal);
};

const filterByCategoryFunc = (state, data) => {
  return state.filterByCategoryVal.length === 0
    ? data
    : data.filter((product) =>
        state.filterByCategoryVal.includes(product?.category)
      );
};

export {
  sortByPriceFunc,
  sortByRatingFunc,
  filterByPriceFunc,
  filterByCategoryFunc,
};
