import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Orders from "../components/OrderHistory/Orders";
import { useContext } from "react";
import SiteContext from "../SiteContext";
import { useParams } from "react-router-dom";
import API from "../controllers/API";

const Order = () => {
  const { isLoading, userPayload, setIsLoading, setErrorMessage } = useContext(
    SiteContext
  );
  const { id } = useParams();
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const getOrders = async (id) => {
      setIsLoading(true);
      // do some form input error checking
      const token = userPayload.token;
      const response = await API.fetchGetToken(`/user/order/${id}`, token);
      if (response) {
        setOrderHistory(response);
      } else {
        setErrorMessage("There has been an error fetching your orders.");
      }
      setIsLoading(false);
    };
    getOrders(id);
  }, []);

  return (
    <div style={{marginTop: 20, marginBottom: 160}}>
      <Container style={{marginTop: 20}}>
        {!isLoading && (
          <Orders
            name={userPayload?.user?.firstname}
            orderHistory={orderHistory}
          />
        )}
      </Container>
    </div>
  );
};

export default Order;
