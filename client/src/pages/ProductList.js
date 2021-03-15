import React from "react";
import Products from "../components/Product/Products";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const ProductList = () => {
  return (
      <Container fixed>
        <Products />
      </Container>
  );
};

export default ProductList;
