import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useContext } from "react";
import SiteContext from "../../SiteContext";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const { cartItems } = useContext(SiteContext);
  
  const GetTotalsum = () => {
    const sum = cartItems?.reduce(
      (amount, cartItems) => cartItems.price + amount,
      0
    );
    const roundedSum = Math.round(sum * 100) / 100;
    return roundedSum.toFixed(2);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">£{product.price.toFixed(2)}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Shipping" />
          <Typography variant="subtitle1" className={classes.total}>
            Free
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
          £<GetTotalsum />
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
