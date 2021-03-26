import React from "react";
import Container from "@material-ui/core/Container";
import SignUp from "../components/Forms/SignUp";

const Register = () => {
  return (
    <div style={{marginTop: 20, marginBottom: 160}}>
      <Container style={{marginTop: 20}}>
        <SignUp/>
      </Container>
    </div>
  );
};

export default Register;
