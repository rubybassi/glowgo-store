import React from "react";
import {
  Grid,
  Typography,
  CardMedia,
  Button,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = ({
  name,
  pkSize,
  description,
  price,
  brand,
  imageProductUrl,
  getBrandById,
  addtoCart,
  _id,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CardMedia
            className={classes.media}
            image={(imageProductUrl && imageProductUrl[0]) || null}
            title={name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid item>
            <Typography
              variant="h3"
              align="left"
              gutterBottom
              color="textPrimary"
            >
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2" color="textSecondary">
              {pkSize}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              onClick={() => getBrandById(brand?._id)}
              color="primary"
              className={classes.btn}
            >
              <Typography variant="overline" display="block">
                <Link
                  to={`/product/brand/${brand?._id}`}
                  className={classes.link}
                >
                  {brand?.name}
                </Link>
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h5"> £{price?.toFixed(2)}</Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="outlined"
              size="medium"
              display="block"
              onClick={() =>
                addtoCart({
                  name: name,
                  id: _id,
                  qty: 1,
                  image: imageProductUrl[0],
                  price: price,
                })
              }
            >
              Add to Cart
            </Button>
          </Grid>
          <Grid item>
            <Divider className={classes.divider} />
            <Typography variant="body1" className={classes.description}>
              {description}
            </Typography>
          </Grid>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
