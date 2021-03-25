import React from 'react';
import { Typography } from "@material-ui/core";

const OrderItemPrice = ({item}) => {
  return (
    <>
      {item.cartItems.map((i) => (
        <Typography key={i._id} align="left">£{i.price.toFixed(2)}</Typography>
      ))}
    </>
  )
}

export default OrderItemPrice
