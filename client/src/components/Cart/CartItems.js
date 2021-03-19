import React from "react";
import { useContext } from "react";
import SiteContext from "../../SiteContext";
import CartCard from "./CartCard";

const CartItems = () => {
  const { cartItems } = useContext(SiteContext);

  return (
    <div>
      {cartItems.length ? (
        cartItems.map((item, index) => (
          <CartCard
            key={index}
            name={item.name}
            price={item.price}
            image={item.imageProductUrl[0]}
          />
        ))
      ) : (
        <h1>There are no items in your cart</h1>
      )}
    </div>
  );
};

export default CartItems;
