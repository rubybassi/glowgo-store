import React, { useEffect, useContext } from "react";
import Container from "@material-ui/core/Container";
import Checkout from "../components/CheckoutProcess/Checkout";
import { ToastContainer } from "react-toastify";
import SiteContext from "../SiteContext";
import { useHistory } from "react-router-dom";

const CheckoutPage = (props) => {
  const history = useHistory();
  const { checkedOut } = useContext(SiteContext);

  useEffect(() => {
    checkedOut === true
      ? setTimeout(() => {
          history.push("/");
        }, 3000)
      : null;
  }, [checkedOut]);

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
