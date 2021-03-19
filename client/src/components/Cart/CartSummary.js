import React from "react";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import { Typography, Grid, Button } from "@material-ui/core";
import useStyles from "./styles";

const CartSummary = () => {
  const classes = useStyles();
  const { cartItems } = useContext(SiteContext);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1">Total items</Typography>
        </Grid>
        <Grid item xs={6} className={classes.typography}>
          <Typography variant="body1" color="textPrimary" align="right">
            ({cartItems?.length})
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="textPrimary">
            Order Total
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.typography}>
          <Typography variant="body1" color="textPrimary" align="right">
            £
            {cartItems?.reduce(
              (amount, cartItems) => cartItems.price + amount,
              0
            )}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="textPrimary">
            Free Shipping
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.typography}>
          <Typography variant="body1" color="textPrimary">
            £{0.0}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            className={classes.button}
            variant="outlined"
            size="medium"
            display="block"
          >
            Secure Checkout
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CartSummary;
