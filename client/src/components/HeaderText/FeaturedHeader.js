import React from "react";
import { Typography, Grid, CardMedia } from "@material-ui/core";
import useStyles from "./styles";

const FeaturedHeader = ({ image, name, description }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={6}>
        <CardMedia
            className={classes.media}
            image={image}
            title={name}
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <Grid item sm>
          <Typography variant="h3" color="textPrimary">
              {name}
            </Typography>
          </Grid>
          <Grid item sm>
          <Typography variant="body1" color="textPrimary">
              {description}
            </Typography>
          </Grid>    
        </Grid>
      </Grid>
    </div>
  );
};

export default FeaturedHeader;