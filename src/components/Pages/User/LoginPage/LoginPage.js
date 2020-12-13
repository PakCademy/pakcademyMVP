import React from "react";
import Navbar from "../../../Header/NavBar/Navbar";
import SigninForm from "../../../User/Auth/SigninForm/SigninForm";

const LoginPage = (props) => {
  return (
    <React.Fragment>
      <Navbar active="login" />
      <SigninForm {...props} />
    </React.Fragment>
  );
};

export default LoginPage;
