import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const TopBar = () => {
  const classes = useStyles();

  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <Typography className={classes.root}>
        <Link href="/product" onClick={preventDefault}>
          Product
        </Link>
        <Link href="#" onClick={preventDefault}>
          Link
        </Link>
      </Typography>
    </div>
  );
};

export default TopBar;
