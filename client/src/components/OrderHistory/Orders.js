import React from "react";
import OrdersCard from "./OrdersCard";
import { Typography, Grid, Divider } from "@material-ui/core";
import useStyles from "./styles";

const Orders = ({ name, orderHistory }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={12}>
          <Typography variant="h4" gutterBottom color="textPrimary">
            Your Orders
          </Typography>
          <Typography
            className={classes.name}
            variant="h4"
            gutterBottom
            color="textPrimary"
          >
            Hello, {name}!
          </Typography>
          <Typography variant="body2" gutterBottom color="textPrimary">
            Here's a snapshot of your recent account activity.
          </Typography>
          <Divider className={classes.divider} />
        </Grid>
        <Grid item sm={12}>
          {orderHistory &&
            orderHistory.map((order) => (
              <OrdersCard key={order._id} order={order} />
            ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Orders;
