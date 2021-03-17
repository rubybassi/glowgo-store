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
      <CardMedia
        className={classes.media}
        image={item.imageProductUrl[0]}
        title={item.name}
        onClick={() => getProductById(item.brand._id)} color="primary"
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Link to={`/product/${item._id}`} className={classes.link}>
            <Typography variant="body1" gutterBottom color="textPrimary">
              {item.name}
            </Typography>
          </Link>
          <Typography variant="body1">£{item.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {item.pkSize}
        </Typography>
        <Button onClick={() => getBrandById(item.brand._id)} color="primary">
          <Typography variant="overline" display="block">
            <Link
              to={`/product/brand/${item.brand._id}`}
              className={classes.link}
            >
              {item.brand.name}
            </Link>
          </Typography>
        </Button>
        <Typography variant="body2" color="textSecondary" noWrap>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to cart" onClick={() => addtoCart(item, 1)}>
          <AddShoppingCart addeditem={item} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
