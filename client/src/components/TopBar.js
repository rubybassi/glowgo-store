import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {AppBar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
   link: {
    color: 'inherit', 
    textDecoration: 'inherit',
    textAlign: 'left',
   },
   bar: {
    backgroundColor: theme.palette.primary.dark,
   }  
  },
}));

const TopBar = () => {
  const classes = useStyles();

  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.bar}>
      <Link to={"/user/login"} className={classes.link}>
        <Typography color="textPrimary">Login</Typography>
      </Link>
      <Link to={"/user/register"} className={classes.link}>
        <Typography color="textPrimary">Register</Typography>
      </Link>
    </div>
  );
};

export default TopBar;
