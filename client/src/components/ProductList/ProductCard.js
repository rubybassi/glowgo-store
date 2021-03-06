import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, MotionConfig } from "framer-motion";

const Product = ({ item }) => {
  const { addtoCart, getBrandById, getProductById } = useContext(SiteContext);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Link to={`/product/${item._id}`} className={classes.link}>
          <motion.div whileHover={{ scale: 1.1 }} className={classes.imgContainer}>
            <CardMedia
              className={classes.media}
              image={item.imageProductUrl[0]}
              title={item.name}
              onClick={() => getProductById(item._id)}
              color="primary"
            />
          </motion.div>
        </Link>
        <div className={classes.cardContent}>
          <Typography variant="h6" gutterBottom color="textPrimary">
            {item.name}
          </Typography>
          <Typography variant="h6" color="textPrimary">
            £{item.price.toFixed(2)}
          </Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {item.pkSize}
        </Typography>
        {item.brand._id && (
          <Button
            onClick={() => getBrandById(item.brand._id)}
            color="primary"
            className={classes.btn}
          >
            <Typography variant="overline" display="block">
              <Link
                to={`/product/brand/${item.brand._id}`}
                className={classes.link}
              >
                {item.brand.name}
              </Link>
            </Typography>
          </Button>
        )}
        <Typography variant="body2" color="textSecondary" noWrap>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton
          aria-label="Add to cart"
          onClick={() =>
            addtoCart({
              name: item.name,
              id: item._id,
              qty: 1,
              image: item.imageProductUrl[0],
              price: item.price,
            })
          }
        >
          <AddShoppingCart addeditem={item} />
        </IconButton>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </CardActions>
    </Card>
  );
};

export default Product;
