const headerStyle = {
  alignItems: "center",
  backgroundColor: "otherColors.white",
  borderBottom: "1px solid var(--grayShade1)",
  boxShadow: "none",
  display: "flex",
  flexDirection: "row",
  height: "8vh",
  position: "fixed",
  p: "0.8rem",
};

const searchBoxWrapperStyle = {
  alignItems: "center",
  backgroundColor: "otherColors.grayShade",
  border: "1px solid var(--grayShade1)",
  boxShadow: "none",
  display: "flex",
  p: "2px 8px",
  width: "20rem",
};

const searchInputStyle = {
  alignItems: "center",
  flex: 1,
  fontSize: "0.9rem",
  ml: 1,
};

const sideBarWrapperStyle = {
  backgroundColor: "otherColors.white",
  borderRight: "1px solid var(--grayShade1)",
  height: "100%",
  width: "15rem",
  p: "1rem",
  overflowY: "scroll",
};

const fullWidthAndHeightFlexCenterStyle = {
  alignItems: "center",
  display: "flex",
  height: "100vh",
  justifyContent: "center",
  width: "100%",
};

const productListingContainerStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: "2rem",
  height: "100%",
  width: "100%",
  p: "1rem",
  overflowY: "scroll",
};

export {
  headerStyle,
  searchBoxWrapperStyle,
  searchInputStyle,
  fullWidthAndHeightFlexCenterStyle,
  sideBarWrapperStyle,
  productListingContainerStyle,
};
