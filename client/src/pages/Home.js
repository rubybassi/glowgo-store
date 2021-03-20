import React from "react";
import { useContext } from "react";
import SiteContext from "../SiteContext";
import FeaturedCarousel from "../components/Carousels/FeaturedCarousel";
import HomeCarousel from "../components/Carousels/HomeCarousel";
import Container from "@material-ui/core/Container";

const Home = () => {
  const { bestsellers, newarrivals } = useContext(SiteContext);
  return (
    <div>
      <Container>
        <h4>Home</h4>
        <HomeCarousel />
        <FeaturedCarousel items={bestsellers} header={"BestSellers"}/>
        <FeaturedCarousel items={bestsellers} header={"New Arrivals"}/>
      </Container>
    </div>
  );
};

export default Home;
