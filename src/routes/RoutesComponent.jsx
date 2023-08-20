import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductDetails, ProductsListing } from "../screens";

const RoutesComp = () => {
    return (
        <Routes>
            <Route path="/" element={<ProductsListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
    );
}

export { RoutesComp };