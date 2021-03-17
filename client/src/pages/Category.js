import React from "react";
import Categories from "../components/Category/Categories";
import FeaturedHeader from "../components/HeaderText/FeaturedHeader";
import Container from "@material-ui/core/Container";

const Category = () => {
  return (
    <div>
      <Container>
        <FeaturedHeader />
        <Categories />
      </Container>
    </div>
  );
};

export default Category;
