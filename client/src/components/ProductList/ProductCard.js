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

const Product = ({ item }) => {
  const { addtoCart, getBrandById, getProductById } = useContext(SiteContext);
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Link to={`/product/${item._id}`} className={classes.link}>
          <CardMedia
            className={classes.media}
            image={item.imageProductUrl[0]}
            title={item.name}
            onClick={() => getProductById(item._id)}
            color="primary"
          />
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
        <IconButton aria-label="Add to cart" onClick={() => addtoCart(item)}>
          <AddShoppingCart addeditem={item} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
