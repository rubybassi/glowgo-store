import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../Product/ProductCard";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import FeaturedHeader from "../HeaderText/FeaturedHeader";

const Categories = () => {
  const { productsByCategory, isLoading } = useContext(SiteContext);

  return (
    <div>
      {isLoading ? (
        <p>loading..</p>
      ) : (
        <FeaturedHeader
          name={productsByCategory.name}
          description={productsByCategory.description}
          image={productsByCategory.image}
        />
      )}
      <Grid container spacing={4}>
        {isLoading ? (
          <p>fecthing products...</p>
        ) : (
          productsByCategory.products.map((item) => (
            <Grid item key={item._id} xs={12} sm={6} md={4}>
              <ProductCard item={item} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Categories;
