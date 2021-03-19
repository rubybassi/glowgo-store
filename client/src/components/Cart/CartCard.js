import React from "react";
import { Typography, Grid, Button } from "@material-ui/core";
import useStyles from "./styles";
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

const CartCard = ({ name, image, price }) => {
  const classes = useStyles();
  return (
    // remove item button and function
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1">{name}</Typography>
          <Typography variant="body1">£{price}</Typography>
        </Grid>
        <Grid item xs={6}>
          <img className={classes.image} src={image} alt={name} />
          <IconButton aria-label="delete">
            <ClearIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default CartCard;
