import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../Product/ProductCard";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { products } = useContext(SiteContext);
  let { id } = useParams();
  console.log(id);

  return (
    <div>
      <Grid container spacing={4}>
        {products
          .filter((itemid) => itemid.category._id == id)
          .map((item) => (
            <Grid item key={item._id} xs={12} sm={6} md={4}>
              <ProductCard item={item} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default Categories;
