import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const CartCard = ({ name, image, price, id, removeItemFromCart }) => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body1">£{price}</Typography>
        </Grid>
        <Grid item xs={6}>
          <img className={classes.image} src={image} alt={name} />
          <IconButton aria-label="delete" onClick={() => removeItemFromCart(id)}>
            <ClearIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default CartCard;
