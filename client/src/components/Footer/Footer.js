import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { Link } from "react-router-dom";

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
        <Grid item xs={3} className="column">
          <Link to="#">
            <InstagramIcon className="icon" />
          </Link>
          <Link to="#">
            <FacebookIcon className="icon" />
          </Link>
          <Link to="#">
            <TwitterIcon className="icon" />
          </Link>
          <Link to="#">
            <PinterestIcon className="icon" />
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
