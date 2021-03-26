import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeCarousel.css";

const HomeCarousel = () => {

    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
  };

  return (
    <div>
    <Slider {...settings}>
      <div>
        <img src="https://res.cloudinary.com/degjxwgbj/image/upload/v1616705869/glowgo/banners/theordinary-slide_xfkwpx.png" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/degjxwgbj/image/upload/v1616707312/glowgo/banners/drunk-elephant-slider_u0mzpl.png" />
      </div>
      <div>
        <img src="https://res.cloudinary.com/degjxwgbj/image/upload/v1616708903/glowgo/banners/moisturisers-slider_hqqko1.png" />
      </div>
    </Slider>
  </div>
  );
};

export default HomeCarousel;
