import React from "react";
import Container from "@material-ui/core/Container";
import CartGrid from "../components/Cart/CartGrid";

const Cart = () => {
  return (
    <div>
      <Container>
        <h4>Cart</h4>
        <CartGrid/>
      </Container>
    </div>
  );
};

export default Cart;
