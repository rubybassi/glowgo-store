import React, { useEffect, useContext } from "react";
import Products from "../components/ProductList/Products";
import Container from "@material-ui/core/Container";
import SiteContext from "../SiteContext";

const ProductList = () => {
  const { getAllProducts, isLoading, products } = useContext(SiteContext);
  useEffect(() => {
    getAllProducts();
    console.log("product all in product list useeffect");
  }, []);
  return (
    <div style={{marginTop: 20, marginBottom: 160}}>
      <Container style={{marginTop: 20}}>
        <h4>All Products</h4>
        <Products products={products} isLoading={isLoading} />
      </Container>
    </div>
  );
};

export default ProductList;
