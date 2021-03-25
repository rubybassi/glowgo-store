import React from "react";
import { useContext } from "react";
import SiteContext from "../SiteContext";
import FeaturedCarousel from "../components/Carousels/FeaturedCarousel";
import HomeCarousel from "../components/Carousels/HomeCarousel";
import Container from "@material-ui/core/Container";
import CatergoryBanners from "../components/Category/CategoryBanner";

const Home = () => {
  const { bestsellers } = useContext(SiteContext);
  return (
    <div>
      <Container>
        <h4>Home</h4>
        <HomeCarousel />
        <CatergoryBanners/>
        <FeaturedCarousel items={bestsellers} header={"BestSellers"} />
      </Container>
    </div>
  );
};

export default Home;
