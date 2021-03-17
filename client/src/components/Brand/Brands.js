import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../ProductList/ProductCard";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import FeaturedHeader from "../HeaderText/FeaturedHeader";
import LinearIndeterminate from "../Loading/LoadingBar";

const Categories = () => {
  const { productsByBrand, isLoading } = useContext(SiteContext);

  return (
    <div>
      {isLoading ? (
        <LinearIndeterminate />
      ) : (
        <FeaturedHeader
          name={productsByBrand.name}
          description={productsByBrand.description}
          image={productsByBrand.logo}
        />
      )}

      <Grid container spacing={4}>
        {isLoading ? (
          <LinearIndeterminate />
        ) : (
          productsByBrand.products.map((item) => (
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

/*



<Grid container spacing={4}>
        {productsByBrand.length > 0 ? (
          productsByBrand
            .filter((itemid) => itemid.brand._id == id)
            .map((item) => (
              <Grid item key={item._id} xs={12} sm={6} md={4}>
                <ProductCard item={item} />
              </Grid>
            ))
        ) : (
          <p>
            Looks like we're not stocking any products for this brand. Please
            browse our other collections.
          </p>
        )}
      </Grid>

      */
