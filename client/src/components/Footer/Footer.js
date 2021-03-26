import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <Grid container align="center" className="footer" spacing={5}>
        <Grid item xs={3} className="column">
          <Grid item>Help </Grid>
          <Grid item>Privacy</Grid>
          <Grid item>Terms & Conditions</Grid>
        </Grid>
        <Grid item xs={3} className="column">
          <Grid item>Delivery & Returns</Grid>
          <Grid item>Return Policy</Grid>
          <Grid item>FAQs</Grid>
        </Grid>
        <Grid item xs={3} className="column">
          <Grid item>About</Grid>
          <Grid item>Careers</Grid>
          <Grid item>Contact Us</Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
