import React from "react";
import Products from "../components/Product/Products";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const ProductList = () => {
  return (
    <div>
      <h1>product list page</h1>
      <Products />
    </div>
  );
};

export default ProductList;
