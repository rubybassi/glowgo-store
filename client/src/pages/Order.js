import React from "react";
import Container from "@material-ui/core/Container";
import Orders from "../components/OrderHistory/Orders";
import { useContext } from "react";
import SiteContext from "../SiteContext";

const Order = () => {
  const { isLoading, userPayload } = useContext(SiteContext);

  // useEffect to get order history by user id

  return (
    <div>
      <Container>
        <Orders name={userPayload.user?.firstname}/>
      </Container>
    </div>
  );
};

export default Order;
