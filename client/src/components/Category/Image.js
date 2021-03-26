import React from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import { Link } from "react-router-dom";

const Image = ({ url, text, link }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Link to={link}>
        <div className="container">
          <img src={url} className="image" />
          <div className="overlay">
            <div className="text">{text}</div>
          </div>
        </div>
      </Link>
    </Grid>
  );
};

export default Image;
