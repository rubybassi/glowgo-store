import React from "react";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import ProductPage from "./ProductPage";
import LinearIndeterminate from "../Loading/LoadingBar";

const Product = ({product, isLoading}) => {
  const { getBrandById, addtoCart } = useContext(SiteContext);

  return (
    <>
      {isLoading ? (
        <LinearIndeterminate />
      ) : (
        <ProductPage {...product} getBrandById={getBrandById} item={product} addtoCart={addtoCart}/>
      )}
    </>
  );
};

export default Product;
