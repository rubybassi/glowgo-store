import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import "./styles.css";
import { Typography } from "@material-ui/core";

const Bestsellers = () => {
  const { products } = useContext(SiteContext);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
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
      <h3>Bestsellers</h3>
      <Slider {...settings}>
        {products.length > 0 &&
          products
            .filter((item) => item.bestSeller == true)
            .map((item) => (
              <div key={item._id} className="slider">
                <img src={item.imageProductUrl[0]} />
                <Typography variant="body1" gutterBottom color="textPrimary">
                  {item.name}
                </Typography>
              </div>
            ))}
      </Slider>
    </div>
  );
};

export default Bestsellers;
