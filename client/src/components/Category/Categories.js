import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../ProductList/ProductCard";
import FeaturedHeader from "../HeaderText/FeaturedHeader";
import LinearIndeterminate from "../Loading/LoadingBar";

const Categories = ({productsByCategory, isLoading}) => {
  
  return (
    <div>
      {!isLoading && (
        <FeaturedHeader
          name={productsByCategory.name}
          description={productsByCategory.description}
          image={productsByCategory.image}
        />
      )}
      
      <Grid container spacing={4}>
        {isLoading ? (
          <LinearIndeterminate />
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
