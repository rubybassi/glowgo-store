import React, { useEffect, useContext } from "react";
import Container from "@material-ui/core/Container";
import Product from "../components/ProductDetailPage/Product";
import SiteContext from "../SiteContext";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const { getProductById, productById, isLoading } = useContext(SiteContext);
  useEffect(() => {
    getProductById(id);
    console.log("product in product useeffect", id);
  }, []);

  return (
    <div>
      <Container>
        <h4>Product</h4>
        <Product product={productById} isLoading={isLoading}/>
      </Container>
    </div>
  );
};

export default ProductDetail;
