import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";

const Footer = () => {
  return (
    <div>
      <Grid container align="center" className="footer">
        <Grid item xs={4}>
          Shop
        </Grid>
        <Grid item xs={4}>
          Glowgo
        </Grid>
        <Grid item xs={4}>
          Newsletter
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
