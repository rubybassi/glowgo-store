import React, { useEffect, useContext } from "react";
import Brands from "../components/Brand/Brands";
import Container from "@material-ui/core/Container";
import SiteContext from "../SiteContext";
import { useParams } from "react-router-dom";

const Brand = () => {
  const { id } = useParams();
  const { getBrandById, productsByBrand , isLoading} = useContext(SiteContext);
  useEffect(() => {
    getBrandById(id);
    console.log("product in brand useeffect", id);
  }, []);
  return (
    <div>
      {isLoading ? <h1>fetching...</h1> : 
      <Container>
        <h4>Brand</h4>
        <Brands productsByBrand={productsByBrand} isLoading={isLoading} />
      </Container>
      }
    </div>
  );
};

export default Brand;