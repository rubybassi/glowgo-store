import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Orders from "../components/OrderHistory/Orders";
import { useContext } from "react";
import SiteContext from "../SiteContext";
import { useParams } from "react-router-dom";

const Order = () => {
  const { isLoading, userPayload, getOrders, orderHistory } = useContext(SiteContext);
  const { id } = useParams();
  //const custId = userPayload.user.id
  console.log("cust id in order useEffect is", id);
  // useEffect to get order history by user id
  useEffect(() => {
    getOrders(id)
  },[])

  return (
    <div>
      <Container>
        <Orders name={userPayload.user?.firstname} orderHistory={orderHistory}/>
      </Container>
    </div>
  );
};

export default Order;
