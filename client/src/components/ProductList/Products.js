import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard";
import { useContext } from "react";
import SiteContext from "../../SiteContext";

const Products = () => {
  const { products } = useContext(SiteContext);

  return (
    <div>
      <Grid container spacing={4}>
        {products.map((item) => (
          <Grid item key={item._id} xs={12} sm={6} md={4}>
            <ProductCard item={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;