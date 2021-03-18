import React from "react";
import Brands from "../components/Brand/Brands";
import Container from "@material-ui/core/Container";

const Brand = () => {
  return (
    <div>
      <Container>
      <h4>Brand</h4>
        <Brands />
      </Container>
    </div>
  );
};

export default Brand;
