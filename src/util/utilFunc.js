const allProductCatgeories = (products) => {
  const productCategoryReducer = (acc, curr) =>
    acc.includes(curr?.category) ? acc : [...acc, curr?.category];

  const allCategories = products.reduce(productCategoryReducer, []);

  return allCategories;
};

export { allProductCatgeories };
