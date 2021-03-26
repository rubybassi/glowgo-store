import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";

const Footer = () => {
  return (
    <div>
      <Grid container align="center" className="footer" spacing={5}>
        <Grid item xs={4}>
          <Grid item>Help</Grid>
          <Grid item>Privacy</Grid>
          <Grid item>Cookies</Grid>
          <Grid item>Terms & Conditions</Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item>Delivery & Returns</Grid>
          <Grid item>Return Policy</Grid>
          <Grid item>Refunds</Grid>
          <Grid item>FAQs</Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item>About</Grid>
          <Grid item>Careers</Grid>
          <Grid item>Contact Us</Grid>
          <Grid item>Corporate Responsibility</Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
