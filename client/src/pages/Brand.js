import React, { useEffect, useContext } from "react";
import Brands from "../components/Brand/Brands";
import Container from "@material-ui/core/Container";
import SiteContext from "../SiteContext";
import { useParams } from "react-router-dom";

const Brand = () => {
  const { id } = useParams();
  const { getBrandById, productsByBrand, isLoading } = useContext(SiteContext);
  useEffect(() => {
    getBrandById(id);
  }, []);
  return (
    <div style={{marginTop: 20, marginBottom: 160}}>
      <Container style={{marginTop: 20} }>
        <Brands productsByBrand={productsByBrand} isLoading={isLoading} />
      </Container>
    </div>
  );
};

export default Brand;
