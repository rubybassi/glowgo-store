import React from "react";
import Container from "@material-ui/core/Container";
import CartGrid from "../components/Cart/CartGrid";

const Cart = () => {
  return (
    <div style={{marginTop: 20, marginBottom: 160}}>
      <Container style={{marginTop: 20}}>
        <CartGrid/>
      </Container>
    </div>
  );
};

export default Cart;
