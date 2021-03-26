import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeCarousel.css";
import { Link } from "react-router-dom";

const HomeCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Link to="/product/brand/604fefec6228d14ced35c8c6">
            <img src="https://res.cloudinary.com/degjxwgbj/image/upload/v1616705869/glowgo/banners/theordinary-slide_xfkwpx.png" />
          </Link>
        </div>
        <div>
          <Link to="/product/brand/604fefec6228d14ced35c8c8">
            <img src="https://res.cloudinary.com/degjxwgbj/image/upload/v1616707312/glowgo/banners/drunk-elephant-slider_u0mzpl.png" />
          </Link>
        </div>

        <div>
          <Link to="/product/category/604ff3bd5139584d248996af">
            <img src="https://res.cloudinary.com/degjxwgbj/image/upload/v1616708903/glowgo/banners/moisturisers-slider_hqqko1.png" />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousel;
