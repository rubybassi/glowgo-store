import React from "react";
import Container from "@material-ui/core/Container";
import Checkout from "../components/CheckoutProcess/Checkout";

const CheckoutPage = () => {
  return (
    <div>
      <Container style={{marginTop: 20}}>
        <Checkout />
      </Container>
    </div>
  );
};

export default CheckoutPage;
