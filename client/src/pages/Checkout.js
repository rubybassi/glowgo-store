import React from "react";
import Container from "@material-ui/core/Container";
import Checkout from "../components/checkout/checkout";

const CheckoutPage = () => {
  return (
    <div>
      <Container>
        <h4>Checkout page</h4>
        <Checkout />
      </Container>
    </div>
  );
};

export default CheckoutPage;
