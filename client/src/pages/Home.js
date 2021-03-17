import React from "react";
import Bestsellers from "../components/Bestsellers/Bestsellers";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import Container from "@material-ui/core/Container";

const Home = () => {
  return (
    <div>
      <Container>
        <HomeCarousel/>
        <Bestsellers />
      </Container>
    </div>
  );
};

export default Home;
