import React from "react";
import Bestsellers from "../components/Bestsellers/Bestsellers";
import Container from "@material-ui/core/Container";

const Home = () => {
  return (
    <div>
      <h1>home page</h1>
      <Container>
        <Bestsellers />
      </Container>
    </div>
  );
};

export default Home;
