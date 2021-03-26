import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeaturedCarousel.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { motion, MotionConfig } from "framer-motion";

const FeaturedCarousel = ({ items, header }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <Typography
        variant="h4"
        color="textPrimary"
        align="center"
        className="header"
      >
        {header}
      </Typography>
      <Slider {...settings}>
        {items.length > 0 &&
          items.map((item) => (
            <div key={item._id}>
              <Link to={`/product/${item._id}`}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img src={item?.imageProductUrl[0]} />
                  <Typography
                    variant="subtitle1"
                    color="textPrimary"
                    align="center"
                  >
                    {item.name}
                  </Typography>
                </motion.div>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default FeaturedCarousel;
