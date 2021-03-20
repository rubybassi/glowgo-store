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

const ProductPage = ({
  name,
  pkSize,
  description,
  price,
  brand,
  imageProductUrl,
  getBrandById,
  item,
  addtoCart
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CardMedia
            className={classes.media}
            image={imageProductUrl[0]}
            title={name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid item>
            <Typography variant="h3" align="left" gutterBottom color="textPrimary">
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
              onClick={() => getBrandById(brand._id)}
              color="primary"
              className={classes.btn}
            >
              <Typography variant="overline" display="block">
                <Link
                  to={`/product/brand/${brand._id}`}
                  className={classes.link}
                >
                  {brand.name}
                </Link>
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h5"> £{price}</Typography>
          </Grid>
          <Grid item>
            <Button
              className={classes.button}
              variant="outlined"
              size="medium"
              display="block"
              onClick={() => addtoCart(item)}
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
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
