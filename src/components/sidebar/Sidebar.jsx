import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterByCategoryVal,
  setFilterByPriceVal,
  setSortByRatingVal,
  setSortByPriceVal,
  clearAll,
} from "../../redux/features/filterAndSort/filterAndSort";
import { allProductCatgeories } from "../../util/utilFunc";
import { sideBarWrapperStyle } from "../../util/reusableStyles";

const SideBar = () => {
  const {
    filterByCategoryVal,
    filterByPriceVal,
    sortByRatingVal,
    sortByPriceVal,
  } = useSelector((store) => store.filterAndSort);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const allCategories = allProductCatgeories(products);

  return (
    <Box sx={sideBarWrapperStyle}>
      <Button
        variant="contained"
        sx={{
          my: "1rem",
          fontSize: "0.7rem",
        }}
        onClick={() => {
          dispatch(clearAll());
        }}
      >
        Clear All
      </Button>
      <Typography
        sx={{
          fontSize: "0.9rem",
          py: "0.5rem",
        }}
      >
        Category
      </Typography>
      <FormGroup>
        {allCategories.map((category) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={filterByCategoryVal.includes(category)}
                onChange={() => dispatch(setFilterByCategoryVal(category))}
                name={category}
                value={category}
              />
            }
            label={
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  color: "otherColors.grayShade3",
                }}
              >
                {category}
              </Typography>
            }
          />
        ))}

        <Typography
          sx={{
            fontSize: "0.9rem",
            py: "0.5rem",
          }}
        >
          Price Range
        </Typography>
        <Slider
          size="small"
          min={0}
          max={1000}
          value={filterByPriceVal}
          onChange={(e) => dispatch(setFilterByPriceVal(e.target.value))}
          defaultValue={5000}
          aria-label="Small"
          valueLabelDisplay={filterByPriceVal}
        />

        <Typography
          sx={{
            fontSize: "0.9rem",
            py: "0.5rem",
          }}
        >
          Sort By Price
        </Typography>
        <RadioGroup>
          {["High To Low", "Low To High"].map((sort) => (
            <FormControlLabel
              value={sort}
              control={
                <Radio
                  onChange={() => dispatch(setSortByPriceVal(sort))}
                  name={sort}
                  value={sort}
                  checked={sortByPriceVal === sort}
                />
              }
              label={
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "otherColors.grayShade3",
                  }}
                >
                  {sort}
                </Typography>
              }
            />
          ))}
        </RadioGroup>

        <Typography
          sx={{
            fontSize: "0.9rem",
            py: "0.5rem",
          }}
        >
          Sort By Rating
        </Typography>
        <RadioGroup>
          {["2 star & above", "3 star & above", "4 star & above", "5 star"].map(
            (sort) => (
              <FormControlLabel
                value={sort}
                control={
                  <Radio
                    onChange={() => dispatch(setSortByRatingVal(sort))}
                    name={sort}
                    value={sort}
                    checked={sortByRatingVal === sort}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      color: "otherColors.grayShade3",
                    }}
                  >
                    {sort}
                  </Typography>
                }
              />
            )
          )}
        </RadioGroup>
      </FormGroup>
    </Box>
  );
};

export { SideBar };
