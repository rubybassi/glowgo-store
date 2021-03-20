import React from "react";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import ProductPage from "./ProductPage";
import LinearIndeterminate from "../Loading/LoadingBar";

const Product = ({product, isLoading}) => {
  const { getBrandById } = useContext(SiteContext);

  return (
    <>
      {isLoading ? (
        <LinearIndeterminate />
      ) : (
        <ProductPage {...product} getBrandById={getBrandById} />
      )}
    </>
  );
};

export default Product;
