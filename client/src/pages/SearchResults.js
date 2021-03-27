import React, { useEffect, useContext } from "react";
import Products from "../components/ProductList/Products";
import Container from "@material-ui/core/Container";
import SiteContext from "../SiteContext";
import { Typography } from "@material-ui/core";

const SearchResults = () => {
  const { isLoading, productsBySearch, searched, getbySearch } = useContext(
    SiteContext
  );

  useEffect(() => {
    getbySearch(searched);
  }, []);

  return (
    <div style={{ marginTop: 20, marginBottom: 160 }}>
      <Container style={{ marginTop: 20 }}>
        {!isLoading && (
          <Products products={productsBySearch} isLoading={isLoading} />
        )}

        {!productsBySearch.length && (
          <Typography variant="h6" gutterBottom color="textPrimary" style={{paddingTop: 30}}>Sorry, no items found. Please try another search.</Typography>
        )}
      </Container>
    </div>
  );
};

export default SearchResults;
