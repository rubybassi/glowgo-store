import React from "react";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import CartCard from "./CartCard";
import { Typography } from "@material-ui/core";

const CartItems = () => {
  const { cartItems, removeItemFromCart } = useContext(SiteContext);

  return (
    <div>
      {cartItems.length ? (
        cartItems.map((item, index) => (
          <CartCard
            key={index}
            name={item.name}
            price={item.price.toFixed(2)}
            image={item.imageProductUrl[0]}
            id={item._id}
            removeItemFromCart={removeItemFromCart}
          />
        ))
      ) : (
        <Typography>There are no items in your cart</Typography>
      )}
    </div>
  );
};

export default CartItems;
