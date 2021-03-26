import React, { useEffect, useContext } from "react";
import Categories from "../components/Category/Categories";
import Container from "@material-ui/core/Container";
import SiteContext from "../SiteContext";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const { getCategoryById, productsByCategory, isLoading } = useContext(
    SiteContext
  );
  useEffect(() => {
    getCategoryById(id);
    console.log("product in cateogry useeffect", id);
  }, []);
  return (
    <div style={{marginTop: 20, marginBottom: 160}}>
      <Container style={{marginTop: 20}}>
        <Categories
          productsByCategory={productsByCategory}
          isLoading={isLoading}
        />
      </Container>
    </div>
  );
};

export default Category;
