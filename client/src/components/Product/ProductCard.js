import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import SiteContext from "../../SiteContext";

const Product = ({ item }) => {
  const { handleCartCounter } = useContext(SiteContext);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.imageProductUrl[0]}
        title={item.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Link to={`/product/${item.id}`} className={classes.link}>
            <Typography variant="body1" gutterBottom color="textPrimary">
              {item.name}
            </Typography>
          </Link>
          <Typography variant="body1">£{item.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary">
          {item.pkSize}
        </Typography>
        <Typography variant="overline" display="block">
          <Link
            to={`/product/brand/${item.brand._id}`}
            className={classes.link}
          >
            {item.brand.name}
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" noWrap>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to cart" onClick={handleCartCounter}>
          <AddShoppingCart addeditem={item} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
