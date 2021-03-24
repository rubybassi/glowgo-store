import React, {useContext} from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SiteContext from "../../SiteContext";
import useStyles from "./styles";
import Helpers from "../../controllers/Helpers";

export default function Review() {
  const { cartItems } = useContext(SiteContext);
  const sum = Helpers.GetTotalSum(cartItems);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cartItems.map((product, index) => (
          <ListItem className={classes.listItem} key={index}>
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
          £{sum}
          </Typography>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
