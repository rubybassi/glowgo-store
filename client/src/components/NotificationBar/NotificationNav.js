import React from "react";
import Grid from "@material-ui/core/Grid";
import './styles.css';

const NotificationNav = () => {
  return (
    <div>
      <Grid container align="center" className="containerBar">
        <Grid item xs={6}>Free Delivery on all orders</Grid>
        <Grid item xs={6}>10% Student Discount</Grid>
      </Grid>
    </div>
  );
};

export default NotificationNav;
