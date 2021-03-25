import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedCarousel.css";
import { Typography } from "@material-ui/core";

const FeaturedCarousel = ({ items, header }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h3>{header}</h3>
      <Slider {...settings}>
        {items.length > 0 &&
          items.map((item) => (
            <div key={item._id}>
              <img src={item?.imageProductUrl[0]} />
              <Typography variant="body1" color="textPrimary" align="center">
                {item.name}
              </Typography>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default FeaturedCarousel;
