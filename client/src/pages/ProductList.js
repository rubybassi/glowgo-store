import React from "react";
import Products from "../components/ProductList/Products";
import Container from "@material-ui/core/Container";

const ProductList = () => {
  return (
    <div>
      <Container>
        <h1>product list page</h1>
        <Products />
      </Container>
    </div>
  );
};

export default ProductList;
