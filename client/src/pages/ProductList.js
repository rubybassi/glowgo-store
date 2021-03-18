import React from "react";
import Products from "../components/ProductList/Products";
import Container from "@material-ui/core/Container";

const ProductList = () => {
  return (
    <div>
      <Container>
        <h4>All Products</h4>
        <Products />
      </Container>
    </div>
  );
};

export default ProductList;
