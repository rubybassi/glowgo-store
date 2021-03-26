import React from "react";
import Container from "@material-ui/core/Container";
import SignUp from "../components/Forms/SignIn";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import SiteContext from "../SiteContext";

const Login = () => {
  const {isLoggedIn} = useContext(SiteContext);
  return (
    <div>
      <Container style={{marginTop: 20}}>
        {isLoggedIn ? <Redirect to="/" /> :  <SignUp/>}
      </Container>
    </div>
  );
};

export default Login;
