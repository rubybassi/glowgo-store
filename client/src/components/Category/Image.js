import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";

const Image = ({ url, text }) => {
  return (
    <Grid item xs={12} sm={4}>
      <div className="container">
        <img src={url} className="image" />
        <div className="overlay">
          <div className="text">{text}</div>
        </div>
      </div>
    </Grid>
  );
};

export default Image;
