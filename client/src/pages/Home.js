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
    <div style={{marginTop: 20, marginBottom: 160}}>
      <Container style={{marginTop: 20}}>
        <HomeCarousel />
        <CatergoryBanners/>
        <FeaturedCarousel items={bestsellers} header={"BestSellers"} />
      </Container>
    </div>
  );
};

export default Home;
