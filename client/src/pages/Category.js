import React from "react";
import Categories from "../components/Category/Categories";
import Container from "@material-ui/core/Container";

const Category = () => {
  return (
    <div>
      <Container>
        <h4>Category</h4>
        <Categories />
      </Container>
    </div>
  );
};

export default Category;
