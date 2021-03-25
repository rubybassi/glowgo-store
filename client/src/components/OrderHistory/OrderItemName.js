import React from "react";
import { Typography } from "@material-ui/core";

const OrderItemName = ({ item }) => {
  return (
    <>
      {item.cartItems.map((i) => (
        <Typography key={i._id}>{i.name}</Typography>
      ))}
    </>
  );
};

export default OrderItemName;
