import React from "react";
import {Card,CardMedia,CardActions,CardContent,Typography,IconButton} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.image}
        title={item.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
        <Link to={`/product/${item.id}`} className={classes.link}>
          <Typography variant="h6" gutterBottom color="textPrimary">
            {item.name}
          </Typography>
          </Link>
          <Typography variant="h6">£{item.price}</Typography>
        </div>
        <Typography variant="body2" color="textSecondary" noWrap>
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to cart">
          <AddShoppingCart addeditem={item}/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
