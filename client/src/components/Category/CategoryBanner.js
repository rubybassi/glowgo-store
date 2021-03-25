import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Image from './Image';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function CategoryBanner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Image url={"https://res.cloudinary.com/degjxwgbj/image/upload/v1616710073/glowgo/banners/serums-small_duce29.png"} text={"Serums"} />
        <Image url={"https://res.cloudinary.com/degjxwgbj/image/upload/v1616710073/glowgo/banners/cleansers-small_lja4ak.png"} text={"Cleansers"} />
        <Image url={"https://res.cloudinary.com/degjxwgbj/image/upload/v1616710074/glowgo/banners/moisturisers-small_nsqo3v.png"} text={"Moisturisers"} />
      </Grid>
    </div>
  );
}
