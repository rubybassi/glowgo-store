import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";
import Container from "@material-ui/core/Container";

const FeaturedHeader = ({ image, name, description }) => {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container spacing={4} className={classes.grid}>
          <Grid item xs={4}>
            <img src={image} alt="" className={classes.image}/>
          </Grid>
          <Grid item xs={8}>
            <h1>{name}</h1>
            <p>{description}</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default FeaturedHeader;
