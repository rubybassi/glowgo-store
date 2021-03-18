import React, { useEffect, useContext } from "react";
import Categories from "../components/Category/Categories";
import Container from "@material-ui/core/Container";
import SiteContext from "../SiteContext";
import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  const { getCategoryById } = useContext(SiteContext);
  useEffect(() => {
    getCategoryById(id);
    console.log("product in cateogry useeffect", id);
  }, []);
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
