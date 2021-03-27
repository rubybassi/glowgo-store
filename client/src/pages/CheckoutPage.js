import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Checkout from "../components/CheckoutProcess/Checkout";
import { ToastContainer } from "react-toastify";

const CheckoutPage = () => {


  return (
    <div style={{ marginTop: 20, marginBottom: 160 }}>
      <Container style={{ marginTop: 20 }}>
      <Checkout />
      </Container>
      <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  );
};

export default CheckoutPage;
