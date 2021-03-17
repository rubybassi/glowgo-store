import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../Product/ProductCard";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import { useParams } from "react-router-dom";
import FeaturedHeader from "../HeaderText/FeaturedHeader";

const Categories = () => {
  const { products, brands } = useContext(SiteContext);
  let { id } = useParams();
  console.log("brand params id",id);

  return (
    <div>
      {brands.length > 0 &&
        brands
          .filter((itemid) => itemid._id == id)
          .map((item) => (
            <FeaturedHeader
              key={item._id}
              name={item.name}
              description={item.description}
              image={item.logo}
            />
          ))}
      <Grid container spacing={4}>
        {products.length > 0 ? (
          products
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
    </div>
  );
};

export default Categories;
