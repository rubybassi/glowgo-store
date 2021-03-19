import React from "react";
import CartItems from "./CartItems";
import { Typography, Grid, CardMedia, Divider, Paper } from "@material-ui/core";
import useStyles from "./styles";
import CartSummary from "./CartSummary";

const CartGrid = () => {
  const classes = useStyles();
  // checkout button decide if cart should be posted after payment or before
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h4" gutterBottom color="textPrimary">
            Your Shopping Cart
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item sm={6}>
          <CartItems />
        </Grid>
        <Grid item sm={6} >
          <Paper className={classes.cartSummary} elevation={0} >
          <CartSummary />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartGrid;
