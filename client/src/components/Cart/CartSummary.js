import React from "react";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import { Typography, Grid, Button } from "@material-ui/core";
import HttpsIcon from "@material-ui/icons/Https";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import Helpers from "../../controllers/Helpers";

const CartSummary = () => {
  const classes = useStyles();
  const { cartItems, isLoggedIn } = useContext(SiteContext);
  const sum = Helpers.GetTotalSum(cartItems);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1">Total Items</Typography>
        </Grid>
        <Grid item xs={6} className={classes.typography}>
          <Typography variant="body1" color="textPrimary" align="right">
            ({cartItems?.length})
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
        <Grid item xs={6}>
          <Typography variant="body1" color="textPrimary">
            Order Total
          </Typography>
        </Grid>
        <Grid item xs={6} className={classes.typography}>
          <Typography variant="body1" color="textPrimary" align="right">
            £{sum}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          {isLoggedIn && (
            <Link to={"/user/checkout"}>
              <Button
                className={classes.checkoutButton}
                variant="contained"
                size="medium"
                display="block"
                color="primary"
              >
                <HttpsIcon></HttpsIcon>Secure Checkout
              </Button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to={"/login"}>
              <Button
                className={classes.button}
                variant="outlined"
                size="medium"
                display="block"
              >
                Login
              </Button>
            </Link>
          )}

          <Link to={"/"}>
            <Button
              className={classes.button}
              variant="outlined"
              size="medium"
              display="block"
            >
              Continue Shopping
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default CartSummary;
