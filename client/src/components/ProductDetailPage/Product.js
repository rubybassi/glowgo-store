import React from "react";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import ProductPage from "./ProductPage";
import LinearIndeterminate from "../Loading/LoadingBar";

const Product = () => {
  const { productById, isLoading, getBrandById } = useContext(SiteContext);

  return (
    <>
      {isLoading ? (
        <LinearIndeterminate />
      ) : (
        <ProductPage {...productById} getBrandById={getBrandById} />
      )}
    </>
  );
};

export default Product;
